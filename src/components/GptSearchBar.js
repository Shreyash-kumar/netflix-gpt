import React, { useRef } from "react";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGeminiFetchedMovies } from "../utils/moviesSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();


  const getMoviesFromTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=true&page=1", API_OPTIONS);
        const json = await data.json();

        return json?.results[0];
  }

  const handleGeminiSearchClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value +  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result:  John Wick, The Raid: Redemption, Extraction, Sicario, The Night Comes for Us";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const movies = text.split(",").map(movie => movie.trim());


    const promiseArray = movies.map((movie) => getMoviesFromTMDB(movie));
    
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGeminiFetchedMovies(tmdbResults));
    //console.log(searchText.current.value);
  };

  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form
          className="w-1/2 bg-black rounded-md grid grid-cols-12"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 rounded-md col-span-9"
            placeholder="What would you like to watch today?"
          />
          <button
            className="py-2 px-2 m-4 bg-red-700 text-white rounded-md col-span-3"
            onClick={handleGeminiSearchClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
