import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import StarWarsCard from "../component/starWarsCard";

export const Home = () => {
  const { store } = useContext(Context);
  return (
    <div className="container">
      <h1 className="text-center mb-4 text-light">Characters</h1>
      <div className="row star-wars-row justify-content-center ">
        {store.people.map((value) => {
          return (
            <StarWarsCard
              key={value.uid}
              title={value.name}
              url={value.url}
              uid={value.uid}
              type="characters"
            />
          );
        })}
      </div>
      <h1 className="text-center my-4 text-light">Planets</h1>
      <div className="row star-wars-row justify-content-center">
        {store.planets.map((value) => {
          return (
            <StarWarsCard
              key={value.uid}
              title={value.name}
              url={value.url}
              uid={value.uid}
              type="planets"
            />
          );
        })}
      </div>
      <h1 className="text-center my-4 text-light">Vehicles</h1>
      <div className="row star-wars-row justify-content-center">
        {store.vehicles.map((value) => {
          return (
            <StarWarsCard
              key={value.uid}
              title={value.name}
              url={value.url}
              uid={value.uid}
              type="vehicles"
            />
          );
        })}
      </div>
    </div>
  );
};
