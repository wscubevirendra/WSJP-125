import { useState } from "react";

export default function MovieCard({ movies }) {
    console.log(movies)
    return (
        <>

            {
                movies.length > 0 ? (
                    movies.map((movie) => (
                        <div className="col-md-3 mb-4" key={movie.id}>
                            <div className="card shadow-sm h-100 border-0">

                                <img
                                    src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
                                    className="card-img-top"
                                    alt={movie.title}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className={`card-text  text-muted `}>
                                        Year: {movie.vote_average}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <h5 className="text-center text-muted">No movies found</h5>
                )
            }
        </>

    );
}