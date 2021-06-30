import React from "react";
import { useEffect, useState } from "react";
import Pager from "./Pager";
import Footer from "./Footer";

import MovieBox from "./MovieBox";

const SEARCH_API = 
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Home() {
  const [list, setList] = useState("");
  const [page, setPage] = useState(1);
   const [search, setSearch] = useState("")

   const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(SEARCH_API + search)
    .then((res => res.json()))
    .then((data) => {
      setList(data.results)
    });

    setSearch("");
  };

const handleOnChange= (e) => {
  setSearch(e.target.value);
}

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=531c8779023f70f5ec45da60cc337e58&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setList(data.results))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
          <input
            className="input-1"
            type="text"
            placeholder="Search Movies.."
            value={search}
            onChange={handleOnChange}
          />
          <button className="btn-1">Search</button>
        </form>
        <Pager page={page} setPage={setPage} />
      <div className="container">
        <h1 className="heading">Top Rated Movies List 2020</h1>
       
        <div className="grid">
          {list &&
            list.map((movie,idx) => (
              <MovieBox
                key={idx}
                list={movie}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            ))}
        </div>
        <Pager page={page} setPage={setPage} />
      </div>
      <MovieBox />
      <Footer />
    </div>
  );
}

export default Home;
