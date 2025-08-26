import { v7 as genRandoUuid } from "uuid"


let musics = []
for (let i = 1; i <= 20; i++) {
    musics.push({
        id: genRandoUuid(),
        title: `Music ${i}`,
        artist: `Artist${i}`,
        cover: '',
        starRating: 3,
        comments: [
            "teste"
        ]
    })
}
localStorage.setItem('musics', JSON.stringify(musics))

export let getMusics = () => (JSON.parse(localStorage.getItem('musics')) || [])
export function editMusic() { }
export function deleteMusic() { }
export function addMusic() { }
export function commentMusic() { }
export function rateMusic() { }