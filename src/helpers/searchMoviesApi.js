import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzM5YzNiNGI0ZGY1MzQxY2ZkYWZhZDdjZjM0YzJlNSIsInN1YiI6IjY2MGM2ZmQyMzU4MThmMDE2MjM5ZDMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbIk8i4m4enYkLh9MTz02xkR8dmgLF8oP6zYcQMKb5A",
};

export const searchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data.results;
};

export const searchMoviesByQuery = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data.results;
};

export const searchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const searchMovieCredits = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
};

export const searchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data.results;
};