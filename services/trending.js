async function getTrendingSongs(){
    const response = await fetch('/api/songs.json')
    if(response.ok){
        return await response.json()
    }
    throw await response.json()
}