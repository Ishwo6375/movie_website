import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=f5bd45c7021902abcb72fb37a1d08de1&language=en-US&page=1`
      )
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Footer />
    </div>
  );
}

export default Home;
