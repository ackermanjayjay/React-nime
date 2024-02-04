import { NavLink } from 'react-router-dom'
function NavigationBar() {
  return (
    <div className="navbar bg-base-100">
      <NavLink to="/" className="btn btn-ghost text-xl">
        Anime
      </NavLink>
      <NavLink to="/manga" className="btn btn-ghost text-xl">
        Manga
      </NavLink>
    </div>
  )
}
export default NavigationBar
