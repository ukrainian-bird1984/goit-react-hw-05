import axios from "axios";

const API_KEY = "";
axios.defaults.baseURL = "";

const options = {
  headers: {
    Authorization:
      "",
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
    `/search/movie?api_key=${API_KEY}query=${query}`
  );
  return response.data;
};

export const searchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key${API_KEY}`);
  return response.data;
};