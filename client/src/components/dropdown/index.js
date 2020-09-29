import React, { useState, useContext, useEffect } from "react";
import GetRandomJokeContext from "../../context/RandomJokeContext";

//styles
import { Select } from "./select.styles";

const SelectBtn = ({ loading, data, error }) => {
  const { dispatch } = useContext(GetRandomJokeContext);

  const [category, setCategory] = useState("animal");

  //handleGetRandom Joke
  const getRandomJoke = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    dispatch({
      type: "SET_CATEGORY",
      payload: category,
    });
  }, [category, dispatch]);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (data === undefined) return <p>ERROR</p>;

  return (
    <div>
      <label htmlFor="Jokes Category">Choose Category</label>
      <br />
      <div>
        <Select onChange={getRandomJoke}>
          {data &&
            data.categories.map((category) => (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectBtn;
