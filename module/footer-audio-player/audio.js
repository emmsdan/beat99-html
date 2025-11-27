
let currentIndex = 0
let currentSong = songs[currentIndex]
function updateSongInfo(){
    currentSong = songs[currentIndex]

    audioPlayerSongCover.src = currentSong.imageUrl
    audioPlayerSongTitle.innerText = currentSong.name
    audioPlayerSongArtistName.innerText = currentSong.artist
    audioElement.src = currentSong.url
}

function playMusic(index){
    currentIndex = index
    updateSongInfo()
}

function playNextMusic(){
    // play next
    if(currentIndex < (songs.length - 1)){
        currentIndex += 1
    } else {
        currentIndex = 0
    }
    updateSongInfo()
}

function playPrevMusic(){
    // play prev
    if(currentIndex > 0){
        currentIndex -= 1
    } else {
        currentIndex = songs.length - 1
    }
    updateSongInfo()
}

function getDuration(){
    audioTimerEnd.innerText = formatSeconds(audioElement.duration)
    audioTimerStart.innerText = formatSeconds(audioElement.currentTime)
}
    // updateSongInfo()
