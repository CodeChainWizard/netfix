import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //fatch the data from the API(APIKEY)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]); //write a fetchUrl becus update a code than aitomaitcally update the fetchUrl useEffrct update

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="">
        {movies.map((movie) => (
          <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  );
}

export default Row;
