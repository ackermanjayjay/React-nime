export function DropDownAnime() {
  return (
    <div className="grid justify-end mx-5">
      <details className="dropdown">
        <summary className="m-1 btn">Type</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>TV</a>
          </li>
          <li>
            <a>Movie</a>
          </li>
        </ul>
      </details>
    </div>
  )
}
