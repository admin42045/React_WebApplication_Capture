import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;

  //usestates
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
            <Awards>
              {movie.awards.map((award) => (
                <Award>
                  key={award.title}
                  title={award.title}
                  description={award.description}
                </Award>
              ))}
            </Awards>
            <ImagesDisplay>
              <img src={movie.secondaryImg} alt="" />
            </ImagesDisplay>
          </HeadLine>
        </Details>
      )}
    </>
  );
};

const Details = styled.div``;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
`;

const Awards = styled.div``;

const Award = styled.div``;

const ImagesDisplay = styled.div``;

export default MovieDetails;
