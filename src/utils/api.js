import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTg0NjU0MWI5YmIwN2Y3ZjgyYjJiNjFhNjMyZmQ3OSIsInN1YiI6IjYzZmE1OWIwNmFhOGUwMDA5NjhmMmFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yN3FJgjxl1N6KsNf7LdT1K7kn3EjFQ8VDuLfbXTPu8c";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};