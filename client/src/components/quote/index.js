import React, { useContext } from "react";
import { JokeWrapper, LeftQuote, RightQuote, JokeText } from "./joke.styles";

//context
import RandomJokesContext from "../../context/RandomJokeContext";

const Joke = () => {
  const { loading, data, error } = useContext(RandomJokesContext);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (data === undefined) return <p>ERROR</p>;

  return (
    <JokeWrapper>
      <LeftQuote>“</LeftQuote>
      <JokeText>{data.randomjoke.value}</JokeText>

      <RightQuote>"</RightQuote>
    </JokeWrapper>
  );
};

export default Joke;
