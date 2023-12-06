window.onload = function() {
    
    var songs = {'1000 Footsteps': {'src': '1000 Footsteps.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, '7 rings': {'src': '7 rings.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'All of Me': {'src': 'All of Me.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Another Love': {'src': 'Another Love.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'As It Was': {'src': 'As It Was.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Ashes and Fire': {'src': 'Ashes and Fire.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'bad guy': {'src': 'bad guy.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Believer': {'src': 'Believer.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Better Now': {'src': 'Better Now.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Blinding Lights': {'src': 'Blinding Lights.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Bohemian Rhapsody - Remastered 2011': {'src': 'Bohemian Rhapsody - Remastered 2011.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Boomerang': {'src': 'Boomerang.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "Can't Hold Us (feat. Ray Dalton)": {'src': "Can't Hold Us (feat. Ray Dalton).mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "Can't Save a Fool": {'src': "Can't Save a Fool.mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Circles': {'src': 'Circles.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Closer': {'src': 'Closer.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Congratulations': {'src': 'Congratulations.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Counting Stars': {'src': 'Counting Stars.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'DAKITI': {'src': 'DAKITI.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Dance Monkey': {'src': 'Dance Monkey.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Demons': {'src': 'Demons.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Die For You': {'src': 'Die For You.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Do I Wanna Know_': {'src': 'Do I Wanna Know_.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "Don't Start Now": {'src': "Don't Start Now.mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'drivers license': {'src': 'drivers license.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Faded': {'src': 'Faded.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Falling Through': {'src': 'Falling Through.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "God's Plan": {'src': "God's Plan.mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'good 4 u': {'src': 'good 4 u.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'goosebumps': {'src': 'goosebumps.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Happier': {'src': 'Happier.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Havana (feat. Young Thug)': {'src': 'Havana (feat. Young Thug).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Heat Waves': {'src': 'Heat Waves.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'HUMBLE.': {'src': 'HUMBLE..mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'I Took A Pill In Ibiza - Seeb Remix': {'src': 'I Took A Pill In Ibiza - Seeb Remix.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "if u think i'm pretty": {'src': "if u think i'm pretty.mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'INDUSTRY BABY (feat. Jack Harlow)': {'src': 'INDUSTRY BABY (feat. Jack Harlow).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Jocelyn Flores': {'src': 'Jocelyn Flores.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Just Text Me': {'src': 'Just Text Me.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Lean On (feat. Mo & DJ Snake)': {'src': 'Lean On (feat. Mo & DJ Snake).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Leave In The Morning': {'src': 'Leave In The Morning.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Let Her Go': {'src': 'Let Her Go.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Let Me Love You': {'src': 'Let Me Love You.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Levitating (feat. DaBaby)': {'src': 'Levitating (feat. DaBaby).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Lose Yourself': {'src': 'Lose Yourself.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Love Yourself': {'src': 'Love Yourself.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'lovely (with Khalid)': {'src': 'lovely (with Khalid).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Lucid Dreams': {'src': 'Lucid Dreams.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Memories': {'src': 'Memories.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'MONTERO (Call Me By Your Name)': {'src': 'MONTERO (Call Me By Your Name).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Mr. Brightside': {'src': 'Mr. Brightside.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'New Rules': {'src': 'New Rules.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'No Role Modelz': {'src': 'No Role Modelz.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'One Dance': {'src': 'One Dance.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'One Kiss (with Dua Lipa)': {'src': 'One Kiss (with Dua Lipa).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'One More Kiss': {'src': 'One More Kiss.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Options': {'src': 'Options.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Perfect': {'src': 'Perfect.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Photograph': {'src': 'Photograph.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Riptide': {'src': 'Riptide.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'rockstar (feat. 21 Savage)': {'src': 'rockstar (feat. 21 Savage).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Roses - Imanbek Remix': {'src': 'Roses - Imanbek Remix.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'SAD!': {'src': 'SAD!.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "Say You Won't Let Go": {'src': "Say You Won't Let Go.mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Senorita': {'src': 'Senorita.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Shallow': {'src': 'Shallow.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Shape of You': {'src': 'Shape of You.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'SICKO MODE': {'src': 'SICKO MODE.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Smells Like Teen Spirit': {'src': 'Smells Like Teen Spirit.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Someone You Loved': {'src': 'Someone You Loved.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Something Just Like This': {'src': 'Something Just Like This.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Sorry': {'src': 'Sorry.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Starboy': {'src': 'Starboy.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'STAY (with Justin Bieber)': {'src': 'STAY (with Justin Bieber).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Stay With Me': {'src': 'Stay With Me.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Stressed Out': {'src': 'Stressed Out.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'sunburn': {'src': 'sunburn.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Sunflower - Spider-Man_ Into the Spider-Verse': {'src': 'Sunflower - Spider-Man_ Into the Spider-Verse.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Sweater Weather': {'src': 'Sweater Weather.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Take Me To Church': {'src': 'Take Me To Church.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "That's What I Like": {'src': "That's What I Like.mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'The Hills': {'src': 'The Hills.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, "There's Nothing Holdin' Me Back": {'src': "There's Nothing Holdin' Me Back.mp3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Thinking out Loud': {'src': 'Thinking out Loud.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Thunder': {'src': 'Thunder.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Too Good At Goodbyes': {'src': 'Too Good At Goodbyes.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Treat You Better': {'src': 'Treat You Better.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Unforgettable': {'src': 'Unforgettable.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Up All Night': {'src': 'Up All Night.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Uptown Funk (feat. Bruno Mars)': {'src': 'Uptown Funk (feat. Bruno Mars).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Wake Me Up': {'src': 'Wake Me Up.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Watermelon Sugar': {'src': 'Watermelon Sugar.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'When I Was Your Man': {'src': 'When I Was Your Man.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Without Me (with Juice WRLD)': {'src': 'Without Me (with Juice WRLD).mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Without Me': {'src': 'Without Me.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Wonderwall - Remastered': {'src': 'Wonderwall - Remastered.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'XO Tour Llif3': {'src': 'XO Tour Llif3.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 'Yellow': {'src': 'Yellow.mp3', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}}


    var songList = document.getElementById('songList');
    var audioPlayer = document.getElementById('audioPlayer');

   
    function updateSongPlaytime(song) {
        if (song.startTime) {
            var currentTime = Date.now();
            var playedTime = (currentTime - song.startTime) / 1000; 
            song.totalTime += playedTime;
            song.startTime = null; 
        }
    }

    Object.keys(songs).forEach(function(songKey) {
        var song = songs[songKey];
        var songElement = document.createElement('div');
        songElement.className = 'songElement';
        songElement.innerHTML = songKey;
        var songPath = 'Spotify Top 100/' + song.src;

        songElement.onclick = function() {
            if (audioPlayer.src !== songPath) {
               
                if (audioPlayer.src) {
                    var prevSongKey = decodeURIComponent(audioPlayer.src.split('/').pop().split('.mp3')[0]);
                    updateSongPlaytime(songs[prevSongKey]);
                }

               
                song.startTime = Date.now();
                audioPlayer.src = songPath;
                audioPlayer.play();
                song.playCount += 1;
            }
        };

        songList.appendChild(songElement);
    });

    
    audioPlayer.onended = function() {
        var currentSongKey = decodeURIComponent(audioPlayer.src.split('/').pop().split('.mp3')[0]);
        var currentSong = songs[currentSongKey];
        updateSongPlaytime(currentSong);
    };

   
    audioPlayer.onplay = function() {
        var currentSongKey = decodeURIComponent(audioPlayer.src.split('/').pop().split('.mp3')[0]);
        var currentSong = songs[currentSongKey];
        currentSong.startTime = Date.now(); 
    };

    audioPlayer.onpause = function() {
        var currentSongKey = decodeURIComponent(audioPlayer.src.split('/').pop().split('.mp3')[0]);
        var currentSong = songs[currentSongKey];
        updateSongPlaytime(currentSong); 
        //console.log("total time: " + currentSong.totalTime);
        //console.log("play count: " + currentSong.playCount);
    };
};




async function getAccessToken() {
    require('dotenv').config();

    const clientId = process.env.CLIENT_ID; 
    const clientSecret = process.env.CLIENT_SECRET;
    const token = btoa(`${clientId}:${clientSecret}`);

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${token}`
            },
            body: 'grant_type=client_credentials'
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        return null;
    }
}

async function getPlaylistDetails(playlistId) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        console.error('Failed to get access token.');
        return;
    }

    try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        displayPlaylistTracks(data.items);
    } catch (error) {
        console.error('Error fetching playlist details:', error);
    }
}

function displayPlaylistTracks(items) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    items.forEach(item => {
        const track = item.track;
        const trackDiv = document.createElement('div');
        trackDiv.innerHTML = `<strong>${track.name}</strong> by ${track.artists.map(artist => artist.name).join(', ')}<br><a href="${track.external_urls.spotify}" target="_blank">Listen on Spotify</a>`;
        resultsDiv.appendChild(trackDiv);
    });
}


const playlistId = '5ABHKGoOzxkaa28ttQV9sE';
getPlaylistDetails(playlistId);
