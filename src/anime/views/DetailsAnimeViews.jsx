import { useState } from 'react'
import { useEffect } from 'react'
import { GetDetailAnime } from '../../services/GetApiAnime'
import { DetailsCardAnime } from '../components/DetailsCardAnime'
import { useParams } from 'react-router-dom'

export function DetailsAnimeViews() {
  const { mal_id } = useParams()
  const [DetailsAnime, setDetailsAnime] = useState([])
  useEffect(() => {
    GetDetailAnime(mal_id)
      .then((result) => {
        setDetailsAnime(result)
      })
      .catch((err) => {
        return err
      })
  }, [mal_id])
  return (
    <>
      <div className="bg-base-700">
        <p className="text-2xl text-center mt-5">Detil Pages</p>
      </div>

      {/* Passing props useEffect to Card */}
      <DetailsCardAnime details={DetailsAnime} />
    </>
  )
}
