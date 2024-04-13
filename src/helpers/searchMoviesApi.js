import axios from 'axios';

const API_KEY = "fd646b286994ef3bdd547adceaf077d2";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY0NmIyODY5OTRlZjNiZGQ1NDdhZGNlYWYwNzdkMiIsInN1YiI6IjY2MGM2ZmQyMzU4MThmMDE2MjM5ZDMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YonGs0X73UlO6BELyy6K4Ho1NQxQYpgOjem7vqTSR0A",
  },
};

export const searchTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`,
    options
  );
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};


export const searchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key${API_KEY}`);
  return response.data;
};

export const searchMovieCredits = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
};