import { Route, Routes } from 'react-router-dom'
import { HomePages } from './views/HomePages'
import { DetailsAnimeViews } from './anime/views/DetailsAnimeViews'
import { MangaViews } from './manga/views/MangaViews'
import NavigationBar from './components/NavigationBar'
function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<HomePages />}>
          <Route index element={<HomePages />} />
        </Route>
        <Route path="/manga" element={<MangaViews />} />
        <Route path="/details/:mal_id" Component={DetailsAnimeViews} />
      </Routes>
    </>
  )
}

export default App
