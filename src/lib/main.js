import { v7 as genRandoUuid } from "uuid"

export let firstAlbumLoad = (JSON.parse(localStorage.getItem('albums')) || [])
export function editAlbum() {}
export function deleteAlbum() {}
export function addAlbum() {}
export function commentAlbum() {}
export function rateAlbum() {}