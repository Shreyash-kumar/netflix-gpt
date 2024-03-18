import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (props) => {
  const { movieId } = props;
  
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div className="w-[100%] ">
      <iframe
        className="w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&vq=1080p"}
        title="Toji Humbles The Strongest Jujutsu Sorcerer By Assassinating Him | 4K 60FPS | Jujutsu Kaisen"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
