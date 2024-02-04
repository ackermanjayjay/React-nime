import axios from 'axios'
const BASE_URL = import.meta.env.VITE_SOME_KEY

export async function GetPopularAnime() {
  const response = await axios.get(`${BASE_URL}/top/anime?limit=6`)
  return response.data.data
}

export async function GetDetailAnime(mal_id) {
  const response = await axios.get(`${BASE_URL}/anime/${mal_id}/full`)
  return response.data.data
}

export async function GetTypeAnime(type) {
  const response = await axios.get(`${BASE_URL}/top/anime?type=${type}`)
  return response.data.data
}
