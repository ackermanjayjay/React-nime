import { useState } from 'react'
import { useEffect } from 'react'
import { GetPopularAnime } from '../../services/GetApiAnime'
import { CardAnime } from '../components/CardAnime'
import { DropDownAnime } from '../hooks/DropDownAnime'
export function AnimeViews({ message }) {
  const [Anime, setAnime] = useState([])
  useEffect(() => {
    GetPopularAnime()
      .then((result) => {
        setAnime(result)
      })
      .catch((err) => {
        return err
      })
  }, [])
  return (
    <>
      <div className="bg-base-700">
        <p className="text-2xl text-center mt-5">{message}</p>
      </div>

      <DropDownAnime></DropDownAnime>
      {/* Passing props useEffect to Card */}
      <CardAnime Anime={Anime} />
    </>
  )
}
