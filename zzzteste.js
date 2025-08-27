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

let id = musics[3].id;

console.log(musics.filter((music) => music.id === id))