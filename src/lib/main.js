import { v7 as genRandoUuid } from "uuid"

/* only for debug, remove this before
let musics = []
for (let i = 1; i <= 20; i++) {
    musics.push({
        id: genRandoUuid(),
        title: `Music ${i}`,
        artist: `Artist${i}`,
        url: '',
        cover: '',
        starRating: 0,
        comments: []
    })
}
localStorage.setItem('musics', JSON.stringify(musics))
------------------------*/

//const getMusicById = (id) => getMusics().filter(music => music.id === id)[0]
const findMusicIndexById = (id, i = 0) => getMusics()[i].id === id ? i : findMusicIndexById(id, i + 1)

export function getMusics(){
    return (JSON.parse(localStorage.getItem('musics')) || [])
}
export function updateMusic(id, title, artist, url, cover) {
    const idx = findMusicIndexById(id)
    const musics = getMusics()
    musics[idx] = { ...musics[idx], title, artist, url, cover}
    localStorage.setItem('musics', JSON.stringify(musics))
}
export function createMusic(title, artist, url, cover = '') {
    localStorage.setItem("musics", JSON.stringify([...getMusics(),
    {
        id: genRandoUuid(),
        title,
        artist,
        url,
        cover,
        starRating: 0,
        comments: []
    }
    ]))
}
export function deleteMusic(id) {
    localStorage.setItem('musics', JSON.stringify(getMusics().filter(music => music.id !== id)))
}
export function commentMusic() { }
export function rateMusic() { }