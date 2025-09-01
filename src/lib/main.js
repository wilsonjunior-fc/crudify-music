import { v7 as genRandomUuid } from "uuid"
import { generate as genRandomShortId } from "shortid";

const musicsKey = 'musics'

//import musicsExamples from "./musicExamples.json"
//localStorage.setItem(musicsKey, JSON.stringify(musicsExamples))
/*{
    id: genRandomUuid(),
    title: `Music ${i}`,
    artist: `Artist${i}`,
    url: '',
    cover: '',
    starRating: 0,
    comments: [ {id: genRandomShortId(), text: '', date: ...}]
}*/

const findIndexById = (arr, id, index = 0) => {
    if (!arr[index]) {
        return -1;
    }

    if (arr[index].id === id) {
        return index;
    }

    return findIndexById(arr, id, index + 1);
};

export const getMusics = () => {
    return JSON.parse(localStorage.getItem(musicsKey)) || [];
}

export const getComments = (musicID) => {
    const musics = getMusics()
    const musicIndex = findIndexById(musics, musicID)
    if (musicIndex === -1) return []
    return musics[musicIndex].comments
}
export const updateMusic = (id, title, artist, url, cover, starRating, comments) => {
    const musics = getMusics()
    const idx = findIndexById(musics, id)
    if (idx === -1) return
    musics[idx] = { ...musics[idx], title, artist, url, cover, starRating, comments }
    localStorage.setItem(musicsKey, JSON.stringify(musics))
}
export const createMusic = (title, artist, url, cover = '') => {
    localStorage.setItem(musicsKey, JSON.stringify([...getMusics(),
    {
        id: genRandomUuid(),
        title,
        artist,
        url,
        cover,
        starRating: 0,
        comments: []
    }
    ]))
}
export const deleteMusic = (id) => {
    localStorage.setItem(musicsKey, JSON.stringify(getMusics().filter(music => music.id !== id)))
}
export const addCommentMusic = (musicId, comment) => {
    const musics = getMusics();
    const musicIndex = findIndexById(musics, musicId);
    const date = new Date()
    if (musicIndex !== -1) {
        musics[musicIndex].comments = [...musics[musicIndex].comments,
        { id: genRandomShortId(), text: comment, date: date.toLocaleString("en-GB", { timeZone: "UTC" }) }]
        localStorage.setItem(musicsKey, JSON.stringify(musics));
    }
}
export const deleteComment = (musicID, commentID) => {
    const musics = getMusics()
    const musicIndex = findIndexById(musics, musicID)
    if (musicIndex === -1) return
    const newComments = musics[musicIndex].comments.filter(comment => comment.id !== commentID)
    musics[musicIndex].comments = newComments
    localStorage.setItem(musicsKey, JSON.stringify(musics))
}
export const rateMusic = (id, rate) => {
    const musics = getMusics();
    const musicIndex = findIndexById(musics, id);
    if (musicIndex !== -1) {
        musics[musicIndex].starRating = rate;
        localStorage.setItem(musicsKey, JSON.stringify(musics));
    }
}
