export function DetailsCardAnime({ details }) {
  return (
    <>
      {details ? (
        <div>
          <h1>{details.title}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
