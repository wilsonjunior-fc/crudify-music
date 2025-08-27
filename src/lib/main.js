import { v7 as genRandomUuid } from "uuid"

//import musicsExamples from "./musicExamples.json"
//localStorage.setItem("musics", JSON.stringify(musicsExamples))
/*{
    id: genRandoUuid(),
    title: `Music ${i}`,
    artist: `Artist${i}`,
    url: '',
    cover: '',
    starRating: 0,
    comments: []
}*/

//const getMusicById = (id) => getMusics().filter(music => music.id === id)[0]
const findMusicIndexById = (id, i = 0) => getMusics()[i].id === id ? i : findMusicIndexById(id, i + 1)

export const getMusics = () => {
    const musics = JSON.parse(localStorage.getItem('musics')) || [];
    return musics.map(music => ({
        ...music,
        starRating: music.starRating || 0,
        comments: music.comments || [],
    }));
}
export const updateMusic = (id, title, artist, url, cover, starRating, comments) => {
    const idx = findMusicIndexById(id)
    const musics = getMusics()
    musics[idx] = { ...musics[idx], title, artist, url, cover, starRating, comments }
    localStorage.setItem('musics', JSON.stringify(musics))
}
export const createMusic = (title, artist, url, cover = '') => {
    localStorage.setItem("musics", JSON.stringify([...getMusics(),
    {
        id: genRandomUuid(),
        title,
        artist,
        url,
        cover,
        starRating: 3,
        comments: []
    }
    ]))
}
export const deleteMusic = (id) => {
    localStorage.setItem('musics', JSON.stringify(getMusics().filter(music => music.id !== id)))
}
export const addCommentMusic = (id, comment) => {
    const musics = getMusics();
    const musicIndex = findMusicIndexById(id);
    if (musicIndex !== -1) {
        musics[musicIndex].comments = [...musics[musicIndex].comments, comment]
        localStorage.setItem('musics', JSON.stringify(musics));
    }
}
export const rateMusic = (id, rate) => {
    const musics = getMusics();
    const musicIndex = findMusicIndexById(id);
    if (musicIndex !== -1) {
        musics[musicIndex].starRating = rate;
        localStorage.setItem('musics', JSON.stringify(musics));
    }
}