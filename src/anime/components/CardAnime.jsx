import { Link } from 'react-router-dom'

export function CardAnime({ Anime }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 justify-center gap-5 mx-5 mt-5 mb-5">
      {Anime.map((items) => (
        <div key={items.mal_id}>
          <Link to={`/details/${items.mal_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={items.images.jpg.image_url}
                  alt="Shoes"
                  className="object-fill"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{items.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
