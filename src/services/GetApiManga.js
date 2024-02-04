import axios from 'axios'
const BASE_URL = import.meta.env.VITE_SOME_KEY

export async function GetPopularManga() {
  const response = await axios.get(`${BASE_URL}/top/manga?limit=6`)
  return response.data.data
}
