import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity

import warnings
warnings.filterwarnings('ignore')

df = pd.read_csv("dataset\dataset.csv")
df.drop(columns='Unnamed: 0',inplace=True)

dfYear = pd.read_csv("data\data.csv")
dfYear = dfYear[['id','year']]
dfYear['track_id'] = dfYear['id']
dfYear.drop(columns='id',inplace=True)

df = pd.merge(df,dfYear,on='track_id')

df[df.duplicated('track_id')==True]

df[df['track_id']=='6Vc5wAMmXdKIAM7WUoEb7N']


xtab_song = pd.crosstab(
    df['track_id'], 
    df['track_genre']
)

xtab_song = xtab_song*2


dfDistinct = df.drop_duplicates('track_id')
dfDistinct = dfDistinct.sort_values('track_id')
dfDistinct = dfDistinct.reset_index(drop=True)

xtab_song.reset_index(inplace=True)
data_encoded = pd.concat([dfDistinct, xtab_song], axis=1)


numerical_features = ['explicit', 'danceability', 'energy', 'loudness', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence','year']
scaler = MinMaxScaler()
data_encoded[numerical_features] = scaler.fit_transform(data_encoded[numerical_features])

calculatied_features = numerical_features + list(xtab_song.drop(columns='track_id').columns)

cosine_sim = cosine_similarity(data_encoded[calculatied_features], data_encoded[calculatied_features])


def get_recommendations(title, N=5):
    indices = pd.Series(data_encoded.index, index=data_encoded['track_name']).drop_duplicates()

    try:
        idx = indices[title]
        try:
            len(idx)
            temp = 2
        except:
            temp = 1
    except KeyError:
        return "Song not found in the dataset."
    
    if temp == 2:
        idx = indices[title][0]
    else:
        idx = indices[title]
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

recommended_songs = get_recommendations("Time", N=10)
if isinstance(recommended_songs, str):
    print(recommended_songs)
else:
    print("Recommended Songs:")
    for song in recommended_songs:
        print(f"Title: {song['track_name']}")
        print(f"Artist: {song['artists']}")
        print(f"Album: {song['album_name']}")
        print(f"Similarity Score: {song['similarity_score']:.2f}")
        print()

