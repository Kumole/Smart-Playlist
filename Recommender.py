from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from flask_cors import CORS
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity
import warnings

app = Flask(__name__)
CORS(app)

warnings.filterwarnings('ignore')

def load_and_preprocess_data():
    df = pd.read_csv("dataset/dataset.csv")
    df.drop(columns='Unnamed: 0', inplace=True)

    dfYear = pd.read_csv("data/data.csv")
    dfYear = dfYear[['name', 'year']]
    dfYear['track_name'] = dfYear['name']
    dfYear.drop(columns='name', inplace=True)

    df = pd.merge(df, dfYear, on='track_name')

    xtab_song = pd.crosstab(df['track_id'], df['track_genre'])
    xtab_song = xtab_song * 2

    dfDistinct = df.drop_duplicates('track_id')
    dfDistinct = dfDistinct.sort_values('track_id')
    dfDistinct = dfDistinct.reset_index(drop=True)

    xtab_song.reset_index(inplace=True)
    data_encoded = pd.concat([dfDistinct, xtab_song], axis=1)

    data_encoded['track_name_normalized'] = data_encoded['track_name'].str.lower().str.strip() 

    numerical_features = ['explicit', 'danceability', 'energy', 'loudness', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence', 'year']
    scaler = MinMaxScaler()
    data_encoded[numerical_features] = scaler.fit_transform(data_encoded[numerical_features])

    calculatied_features = numerical_features + list(xtab_song.drop(columns='track_id').columns)

    cosine_sim = cosine_similarity(data_encoded[calculatied_features], data_encoded[calculatied_features])

    return data_encoded, cosine_sim

data_encoded, cosine_sim = load_and_preprocess_data()

def get_recommendations(title, N=10):
    indices = pd.Series(data_encoded.index, index=data_encoded['track_name_normalized']).drop_duplicates()

    title_normalized = title.lower().strip()
    try:
        idx = indices[title_normalized]
        try:
            len(idx)
            temp = 2
        except:
            temp = 1
    except KeyError:
        return "Song not found in the dataset."

    if temp == 2:
        idx = indices[title_normalized][0]
    else:
        idx = indices[title_normalized]

    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:N+1]
    song_indices = [i[0] for i in sim_scores]
    recommended_songs = data_encoded[['track_name', 'artists', 'album_name']].iloc[song_indices]

    sim_scores_list = [i[1] for i in sim_scores]
    recommended_list = recommended_songs.to_dict(orient='records')
    for i, song in enumerate(recommended_list):
        song['similarity_score'] = sim_scores_list[i]
    
    return recommended_list


@app.route('/get_recommendations', methods=['POST'])
def recommend_songs():
    data = request.json
    song_title = data['song_title']
    recommendations = get_recommendations(song_title, N=10)
    
    if isinstance(recommendations, str):
        return jsonify({"error": recommendations})
    else:
        return jsonify(recommendations)

if __name__ == "__main__":
    app.run(debug=True)
