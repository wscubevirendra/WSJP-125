import React, { useState, useEffect } from 'react'
import Search from './Search'
import MovieCard from './MovieCard'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchMovies = async () => {
    try {
      setLoading(true)
      let API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

      if (query !== "") {
        API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`
      }

      const response = await fetch(API)
      const data = await response.json()
      setMovies(data.results)

    } catch (error) {
      console.log(error)
      setMovies([]);
    }finally{
      setLoading(false)
    }
  }


  useEffect(
    () => {
      fetchMovies()
    },
    [query]
  )

  return (
    <div className="container py-5">
      <Search query={query} setQuery={setQuery} />
      {
        loading ?
          <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>

            <div className="text-center">
              <div className="spinner-border text-dark" role="status"></div>
              <p className="mt-3 text-muted">Loading...</p>
            </div>

          </div>
          :
          <div className="row">
            <MovieCard movies={movies} />
          </div>
      }

    </div>
  )
}

