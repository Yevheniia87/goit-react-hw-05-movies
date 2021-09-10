import axios from "axios";

const apiKey = "68d3c74a18d32691083dc9e313e197f5";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.params = { api_key: apiKey };

export const fetchMoviesTrending = (page = 1) => {
  const { data } = axios.get(`/trending/all/day?page=${page}`);
  return data;
};
export const fetchMoviesSearch = (query, page = 1) => {
  const { data } = axios.get(
    `/search/movie?language=en-US&page=${page}&include_adult=false&query&query=${query}`
  );
  return data;
};
export const fetchMoviesDetails = (movieId) => {
  try {
    const resp = axios.get(`/movie/${movieId}`);
    if (resp.status === "idle") {
      return resp.data;
    }
  } catch (error) {
    throw error;
  }
};

export const fetchMoviesCast = (movieId) => {
  const { data } = axios.get(`/movie/${movieId}/cast`);
  return data;
};
export const fetchMoviesReviews = (movieId) => {
  const { data } = axios.get(`/movie/${movieId}/reviews`);
  return data;
};
