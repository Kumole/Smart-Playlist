var songs;
function updateSongPlaytime(song) {
    if (song.startTime) {
        var currentTime = Date.now();
        var playedTime = (currentTime - song.startTime) / 1000; 
        song.totalTime += playedTime;
        song.startTime = null; 
    }
}

async function fetchRecommendations(songTitle) {
    try {
        const response = await fetch('http://127.0.0.1:5000/get_recommendations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ song_title: songTitle })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if(data.error) {
            console.log(data.error);
        } else {
            displayRecommendedSongs(data , songTitle);
        }
    } catch (error) {
        console.error('Error fetching recommendations:', error);
    }
}

function displayRecommendedSongs(recommendedSongs, songTitle) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';
    const recommendation_header = document.createElement('div');
    recommendation_header.innerHTML = `<h2>Recommended Songs based on ${songTitle}</h2>`;
    recommendationsDiv.appendChild(recommendation_header);

    recommendedSongs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'recommended-song';

        songDiv.innerHTML = `
            <h3>${song.track_name}</h3>
            <p>Artist: ${song.artists}</p>
            <p>Album: ${song.album_name}</p>
            <p>Similarity Score: ${song.similarity_score.toFixed(2)}</p>
        `;

        recommendationsDiv.appendChild(songDiv);
    });
}



function getMostPlayedSong(songs) {
    let maxPlayCount = 0;
    let mostPlayedSong = null;

    Object.keys(songs).forEach(function(songKey) {
        const song = songs[songKey];
        const score = song.playCount * song.totalTime;
        if (score > maxPlayCount) {
            maxPlayCount = score;
            mostPlayedSong = songKey;
        }
    });

    return mostPlayedSong;
}


function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-pause"></i>'; 
    } else {
        audioPlayer.pause();
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-play"></i>'; 
    }
}

document.getElementById('play').addEventListener('click', togglePlayPause);

document.getElementById('forward').addEventListener('click', function() {
    if (audioPlayer.duration) {
        audioPlayer.currentTime = Math.min(audioPlayer.currentTime + 10, audioPlayer.duration);
    }
});

document.getElementById('backward').addEventListener('click', function() {
    audioPlayer.currentTime = Math.max(audioPlayer.currentTime - 10, 0);
});






const progressBar = document.getElementById('progress');

audioPlayer.addEventListener('timeupdate', function() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;
});

progressBar.addEventListener('input', function() {
    const duration = audioPlayer.duration;
    const newTime = progressBar.value * duration / 100;
    audioPlayer.currentTime = newTime;
});



window.onload = function() {
    var baseURL = "https://drive.google.com/uc?export=download&id="

    var songs = {
        '1000 Footsteps': {'src': baseURL + '1tvcY8LPnR5ubXtFC1Umc65NH6IQcczBB', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 
        '7 rings': {'src': baseURL + '1GHqaQHvjJ2nfnfEnb332Lr0aH4aC1lKr', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 
        'All of Me': {'src': baseURL + '1A5Hgm3APnsGxUt2vtTAygVMUWafdmhQ6', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 
        'Another Love': {'src': baseURL + '1bFwpGMcUg-yfm4D2HYRzFsI2qRdfjwCr', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}, 
        'As It Was': {'src': baseURL + '14-Iugn7C9TkiP6z9Get4Er7i2HRgrkbr', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Ashes and Fire': {'src': baseURL + '1GVw7I8aZ6DkSAruNH4gLJlEfpzdVjV8l', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'bad guy': {'src': baseURL + '1OEnVWaY7s1NbuXX4i-LJ_2eSuiJSdIOO', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Believer': {'src': baseURL + '12CbGOg5jjrxLq5IzKTFYC8dqDB1qw-jG', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Better Now': {'src': baseURL + '1e6E05uLJCEF9dEhFGm7ihQPsU6jcUTG9', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Blinding Lights': {'src': baseURL + '16mbBoeDah34jVTHzW8I-60wp0gdULWbW', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Bohemian Rhapsody - Remastered 2011': {'src': baseURL + '1YbbfeFm-bG7W_6M9kA5tLedKovKU_Vlo', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Boomerang': {'src': baseURL + '1f72HyqX0BiNRfj6yPCvIFVwgXXGiYN2l', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "Can't Hold Us (feat. Ray Dalton)": {'src': baseURL + "1_IdVgruclK14Y7jSLqpygfIiRRU-I3Pp", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "Can't Save a Fool": {'src': baseURL + "1Egi2yGhV2YBhkEo-idU-3razBaqUSqGr", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Circles': {'src': baseURL + '1jx2zeJIlX4g-lAJIt5TE4HrscCr06yzq', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Closer': {'src': baseURL + '1ZV93wWahns1gj80JYUb9XPS0ivTQkOKT', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Congratulations': {'src': baseURL + '1-x3XWm8LT_ZoeyA31fKU50_3OFulUeRN', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Counting Stars': {'src': baseURL + '1dcXP_UVaU-G0VsSS1G653_zRdIE9EPGX', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'DAKITI': {'src': baseURL + '1bvZQKOeZHew5d7Be88N4LKEmakmVeiQf', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Dance Monkey': {'src': baseURL + '1AZu8zIaeHTiPlBWiNxUTweAuxsbCaYNa', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Demons': {'src': baseURL + '1pd3uQZA0qhifUwGrvzV72bufMe6GwPsm', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Die For You': {'src': baseURL + '16YaVd7IKLAxpzLOjr-LP98a1a_ReHdHq', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Do I Wanna Know_': {'src': baseURL + '17Natrhx2S4aTXgEEaRN02ZruH8CzPng5', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "Don't Start Now": {'src': baseURL + "1NX9TkAQ1uwxgX4Yz2ewTGFEXliARe-p3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'drivers license': {'src': baseURL + '1X6_fEIZjeGkylra6IU6mtGLqApKQuuxz', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Faded': {'src': baseURL + '1ApgxS7EeDgRNqs5w7iIyROhANFZCoN50', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Falling Through': {'src': baseURL + '1yxbJ9YCM1433M9q9E_wnYJAmanj_y_op', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "God's Plan": {'src': baseURL + "1Aw3lGs6T5Mo8xXmQ8YBJoaRtGP1NFi4v", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'good 4 u': {'src': baseURL + '10E1mF1i1kFjcTNhLTXd_LUHL4zoSJ0oz', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'goosebumps': {'src': baseURL + '1-YKhO_1FMLgxsjbPhquFuBPhWZosANie', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Happier': {'src': baseURL + '1P5G8W-joWlLoRTIUynmWtvREhdNsj7nA', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Havana (feat. Young Thug)': {'src': baseURL + '1Lbl4K06w6YhRDiu3-3FZjUQjDU_WORzb', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Heat Waves': {'src': baseURL + '13bVA-YeeLbwE0IJWxTs_F1gsY9MlSfL_', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'HUMBLE.': {'src': baseURL + '1ev0GeXz9conPpKIpT-lZK8HB0DYF5hcP', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'I Took A Pill In Ibiza - Seeb Remix': {'src': baseURL + '1gdjZl1gVfiJi2jvhZ2lw19ZaSXvpibCn', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "if u think i'm pretty": {'src': baseURL + "1rYMtq7suajLRCHMKZCTRCX-Ey3R8pxIs", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'INDUSTRY BABY (feat. Jack Harlow)': {'src': baseURL + '1rmCtEArZLX74NfvpuHVwbW58CKC5OvTP', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Jocelyn Flores': {'src': baseURL + '1OA8ya5_FhMIAyA-an2oSlu82g1Xoxj-t', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Just Text Me': {'src': baseURL + '1gjateWoEREZWfVZJn8Uf1xtNyp1PHavP', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Lean On (feat. Mo & DJ Snake)': {'src': baseURL + '1w9FXMl0ownKaw81ps68lJOj0owvwq4kQ', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Leave In The Morning': {'src': baseURL + '1zTpf-LzLdAp_qK4INims66ryI76ZBjFY', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Let Her Go': {'src': baseURL + '1qywCrj6q95FWZwsX5IbGoosGKXbdM9pX', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Let Me Love You': {'src': baseURL + '1cL2uTzUPmSCzPMpsJLwVpfnoPvCJWIc-', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Levitating (feat. DaBaby)': {'src': baseURL + '1QrDv21yNM4xHTCu5kP_8b4AZkQ-u4nSd', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Lose Yourself': {'src': baseURL + '1n8HENBiZVxqGGgvOwFST3U_5no6OxWHh', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Love Yourself': {'src': baseURL + '1Dh0ga5S11O_DR0VnS8mfqoM0PDg6-9jr', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'lovely (with Khalid)': {'src': baseURL + '1PsVFNQNzo1tT641ICc7t2dbMnzGeszKU', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Lucid Dreams': {'src': baseURL + '1YL3WD238OYopCBO-45xu-sgJZmOcb7RV', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Memories': {'src': baseURL + '1lqiIlzKzKFDUPNEyzEBOFs14MK1phBZC', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'MONTERO (Call Me By Your Name)': {'src': baseURL + '1IsgtIvKjRfyiPxtFCNXx_A8ZTWG4XZZ6', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Mr. Brightside': {'src': baseURL + '1bBkP9CpywJWFce61EspokbqIsxxGU53c', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'New Rules': {'src': baseURL + '15VLUDTcuiX97IMjeTuvikg5HAL9zSInE', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'No Role Modelz': {'src': baseURL + '1fL9tUcww5A7Lg-XJie-JgiF9rpaIpEBN', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'One Dance': {'src': baseURL + '1YmSyKvym_z0ubPmmgBwQYhqdlOMpqQt5', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'One Kiss (with Dua Lipa)': {'src': baseURL + '1ZAakS-i-nC5QJ7kmBU-NMW_Tevf767O4', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'One More Kiss': {'src': baseURL + '1CyAf7TRTXGzpp10sc-t2HGTKx4YSzIdy', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Options': {'src': baseURL + '1arxbVv2ZpUSAjpCTIGZsf_LvX_QffAO_', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Perfect': {'src': baseURL + '1UE1or0Z3K_s3g6CMF86ohia1ERkOI5CO', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Photograph': {'src': baseURL + '1v47_Td4f39eAFfc9fU4IbS3iPettOe-Q', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Riptide': {'src': baseURL + '1vj9aXWjKEb8HROLFY_LyoXWkMhb_dsH9', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'rockstar (feat. 21 Savage)': {'src': baseURL + '1HAD4mDvSm-66FjCxH5yLQVVw0FEhx-8S', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Roses - Imanbek Remix': {'src': baseURL + '1MzaH0N7yVhUq0UUGpTUND6aIb3v4Lycb', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'SAD!': {'src': baseURL + '1doLNHmQ9DdDgSzVRrtDJIwdXNTf4LBV1', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "Say You Won't Let Go": {'src': baseURL + "1HjS7RiWwguTs-hB5DH9BTDN03mUkimLh", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Senorita': {'src': baseURL + '1oS3Wmz5Cc3pSKaESkVow44vJ5l680Okx', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Shallow': {'src': baseURL + '1UtONo0oQgc_pVJXUJzwIKRE_ZVY9Bm2h', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Shape of You': {'src': baseURL + '1_U6sinss2avTSW4apdupVg_Mgfcmn5cO', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'SICKO MODE': {'src': baseURL + '124JiEye4JHmByo4XZPuo5rbHrvqt8vfX', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Smells Like Teen Spirit': {'src': baseURL + '1L4oi9MriH2qQlCSsL2EDyP7oaziCkljz', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Someone You Loved': {'src': baseURL + '1Cijt0rHgZ3v5H0Sqv4GtBjzImAJEZJ5w', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Something Just Like This': {'src': baseURL + '12PZv2_kqMklQaxpjS7tOo3JRy39UEDU8', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Sorry': {'src': baseURL + '18R6TIdAg7cm7ZAzzA0qgefepNjuklRVI', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Starboy': {'src': baseURL + '18EvbFnxhKQsQAleRbwEnWKo_hayQtAoX', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'STAY (with Justin Bieber)': {'src': baseURL + '1hEM4qWBHa_T7Gi3O2czwSolxf0gtdx8q', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Stay With Me': {'src': baseURL + '1BpqwXW0x3hWx0xjivorj_KJAQqE5ma4a', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Stressed Out': {'src': baseURL + '1pSFGHOb2CqCNQZ6ihNUQCPSt55SfsWtB', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'sunburn': {'src': baseURL + '1-vM-zBSAS0AuROLFkEmzkPOP4r1Zp2tL', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Sunflower - Spider-Man_ Into the Spider-Verse': {'src': baseURL + '1gXdpHbchYSsu0ErZ4De5cLvou8aq9FuS', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Sweater Weather': {'src': baseURL + '1UETefL104qzPzUaT6EMLqckJZ-z_CXMi', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Take Me To Church': {'src': baseURL + '1-8vLUqSSUs60daJ1t9_mdzd54XzxRCZE', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "That's What I Like": {'src': baseURL + "1VXGNPKKMn5i0OIIjGbeOx1aAI-AsYNX3", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'The Hills': {'src': baseURL + '1bgEggNCNMkehXAFM2G1NdrNf6ZkHmsMf', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        "There's Nothing Holdin' Me Back": {'src': baseURL + "1weKecEHMHCLiGmjUiRfr5IBZADmAm9jk", 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Thinking out Loud': {'src': baseURL + '18_MxbWVwYNu44-h_gLW7hhkNhs4PgSX0', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Thunder': {'src': baseURL + '1PEIzLIyp5Os3f133YQLm-z4LFln7xj_n', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Too Good At Goodbyes': {'src': baseURL + '1FGtNZB7Z4TbS8d_pAoHxoa_EJu12UT2V', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Treat You Better': {'src': baseURL + '13cw2K3eAT4VlYHuai5PWb80z6vMZcq92', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Unforgettable': {'src': baseURL + '1aDXbvtuMcMH9QJgPpcxU_6pscV14k6p-', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Up All Night': {'src': baseURL + '1U8xSLFGXaQCa9E07CBpJ6wKll2uJGXgN', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Uptown Funk (feat. Bruno Mars)': {'src': baseURL + '11lF4ZspKTRjeJJwT9rhnBdutIq_6zyI6', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Wake Me Up': {'src': baseURL + '1N-GVthuO7_k-oMpolTCP1uWlSbS-lttP', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Watermelon Sugar': {'src': baseURL + '1mi_cDeRgeubebaA7o1kaHKjpHLhPsFoG', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'When I Was Your Man': {'src': baseURL + '1tQnPvF5oqU-jwgaNo8MbkXpOw7jz7TrC', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Without Me (with Juice WRLD)': {'src': baseURL + '1tg2c9zqoCfn-BRhg_wiSAS3bL4RQCqSd', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Without Me': {'src': baseURL + '15qUJ2l8b3CNM2Bn-Q0E-w5Y67XdB0PCz', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Wonderwall - Remastered': {'src': baseURL + '1DWsobfPVgKKJSsj2QuP0jNqI8ihj1CxY', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'XO Tour Llif3': {'src': baseURL + '1SSi5xE6eGetGuBkfxR7E-CIPc5tEexSa', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'},
        'Yellow': {'src': baseURL + '1dNOq1Zo3RJAbFxka6yOjOWPnsqSRQm4u', 'playCount': 0, 'totalTime': 0, 'startTime': 'null'}
    }
    var songList = document.getElementById('songList');
    var audioPlayer = document.getElementById('audioPlayer');
    var urlToSongKey = {};
    var sortButton = document.getElementById('sortButton');

    function removeSong(songs, songKey) {
        //To prevent bug when removing while listening
        if (urlToSongKey[audioPlayer.src] === songKey) {
            audioPlayer.pause(); // Stop the current song
        }
        delete songs[songKey];
        renderPlaylist(songs);
    }

    function handleSongClick(songPath, song, songKey) {
        if (audioPlayer.src !== songPath) {
            if (audioPlayer.src) {
                var prevSongKey = urlToSongKey[audioPlayer.src];
                if (songs[prevSongKey]) {
                    updateSongPlaytime(songs[prevSongKey]);
                }
            }
            var albumCoverImg = document.querySelector('#wrapper img');
            albumCoverImg.src = 'Covers/' + songKey + '.jfif';
            albumCoverImg.alt = songKey + " Album Cover";

            song.startTime = Date.now();
            audioPlayer.src = songPath;
            audioPlayer.play();
            song.playCount += 1;

            document.getElementById('play').innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
    }

function renderPlaylist(songs) {
    songList.innerHTML = '';

    // Render again after removing a song
    Object.keys(songs).forEach(function(songKey) {
        var song = songs[songKey];
        var songElement = document.createElement('div');
        songElement.className = 'songElement';
        songElement.innerHTML = songKey;
        var songPath = song.src;
        var removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove from playlist';
        removeButton.onclick = function(event) {
            event.stopPropagation(); 
            removeSong(songs, songKey);
        };
        songElement.appendChild(removeButton);
        urlToSongKey[songPath] = songKey;
        songElement.onclick = function() {
            handleSongClick(songPath, song, songKey);
        };

        songList.appendChild(songElement);
    });
}

    Object.keys(songs).forEach(function(songKey) {
        var song = songs[songKey];
        var songElement = document.createElement('div');
        songElement.className = 'songElement';
        songElement.innerHTML = songKey;
        var songPath = song.src;
        //remove button
        var removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove from playlist';
        removeButton.onclick = (function(key) {
            return function(event) {
                event.stopPropagation(); 
                removeSong(songs, key);
            };
        })(songKey);
        songElement.appendChild(removeButton);
        urlToSongKey[songPath] = songKey;
        songElement.onclick = function() {
            handleSongClick(songPath, song, songKey);
        };

        songList.appendChild(songElement);
    });

    audioPlayer.onended = function() {
        var currentSongKey = urlToSongKey[audioPlayer.src];
        updateSongPlaytime(songs[currentSongKey]);
    };

    audioPlayer.onplay = function() {
        var currentSongKey = urlToSongKey[audioPlayer.src];
        songs[currentSongKey].startTime = Date.now();
    };

    audioPlayer.onpause = function() {
        var currentSongKey = urlToSongKey[audioPlayer.src];
        updateSongPlaytime(songs[currentSongKey]);
        console.log("total play time: " + songs[currentSongKey].totalTime);
        console.log("play count: " + songs[currentSongKey].playCount);
    };

    sortButton.addEventListener('click', function() {
        var sortedSongs = Object.keys(songs).sort(function(a, b) {
            return songs[b].playCount * songs[b].totalTime - songs[a].playCount * songs[a].totalTime;
        });

        songList.innerHTML = '';

        sortedSongs.forEach(function(songKey) {
            var song = songs[songKey];
            var songElement = document.createElement('div');
            songElement.className = 'songElement';
            songElement.innerHTML = songKey;

            songElement.onclick = function() {
                handleSongClick(song.src, song, songKey);
            };

            songList.appendChild(songElement);
        });
    });

    document.getElementById('sendMostPlayedSong').addEventListener('click', function() {
        const mostPlayedSong = getMostPlayedSong(songs);
        if (mostPlayedSong) {
            fetchRecommendations(mostPlayedSong);
            document.getElementById('outer-wrapper').classList.toggle('show-left-panel');
        } else {
            console.log("No songs have been played.");
        }
    });
    
};




// Fetch data from Spotify API
async function getAccessToken() {
    const clientId = '0ee0e8bdc1154047a87c92eac2d931cc'; 
    const clientSecret = '49a0d901f2d94edb9e39531a1007e442'; 
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
        
        const albumImageUrl = track.album.images[0].url;

        trackDiv.innerHTML = `<img src="${albumImageUrl}" alt="${track.name} Album Cover" style="width:100px; height:auto;"><br><strong>${track.name}</strong> by ${track.artists.map(artist => artist.name).join(', ')}<br><a href="${track.external_urls.spotify}" target="_blank">Listen on Spotify</a>`;
        
        resultsDiv.appendChild(trackDiv);
    });
}



//const playlistId = '5ABHKGoOzxkaa28ttQV9sE';
//getPlaylistDetails(playlistId);
