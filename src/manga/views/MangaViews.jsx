import { useState } from 'react'
import { useEffect } from 'react'
import { CardManga } from '../components/CardManga'
import { GetPopularManga } from '../../services/GetApiManga'
import { DropDownManga } from '../hooks/DropDownManga'
export function MangaViews() {
  const [Manga, setManga] = useState([])
  useEffect(() => {
    GetPopularManga()
      .then((result) => {
        setManga(result)
      })
      .catch((err) => {
        return err
      })
  }, [])
  return (
    <>
      <div className="bg-base-700">
        <p className="text-2xl text-center mt-5">Manga Views</p>
      </div>
      {/* Passing props useEffect to Card */}
      <DropDownManga></DropDownManga>
      <CardManga Manga={Manga} />
    </>
  )
}
