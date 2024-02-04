import { AnimeViews } from '../anime/views/AnimeViews'
export function HomePages() {
  const AnimeMsg = 'Anime Pages'

  return (
    <>
      <AnimeViews message={AnimeMsg} />
    </>
  )
}
