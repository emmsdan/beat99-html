let trendingSongs = [];

const loadApp = async()=>{
    trendingSongs = await getTrendingSongs()
    console.log(trendingSongs)
    const trendingList = document.getElementById('trendingList')
    for(let [index,song] of trendingSongs.entries()){
        trendingList.innerHTML += `<li class="trending__list_item" onclick="playMusic(${index})">
        ${generateTrendingSongDetails(song)}
    </li>`
    }
}
loadApp()

function generateTrendingSongDetails(song){
    const year = new Date(song.date || new Date()).getFullYear()
    const noSongs = Math.floor((Math.random() + 1) * 200)

    return (
        ` <details name="trending">
        <summary>${song.name}</summary>
        <a href="?name=Billie Eilish#_menu_artist">By ${song.artist}</a>
        <p><span>${year} - ${noSongs} songs</span>, <time> 2 hr 30min</time></p>
      </details>
      `
    )
}


