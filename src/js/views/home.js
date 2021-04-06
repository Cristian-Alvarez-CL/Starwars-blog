import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import PlanetCard from "../component/planet_card";
import PropTypes from "prop-types";


function Home() {

  const { store, actions } = useContext(Context);

  useEffect(() => {
		actions.getCharacters();
    actions.getPlanets();
		actions.addFavorites();
		actions.deleteFavorites();
	}, []);

  return (
    <div className="container">
      <div className="row scroller">
        <h3 className="m-3 text-danger">Characters</h3>
        <div className="card-columns d-flex justify-content-between">
          {store.characters.map((elem, index) => {
            return (
              <Card
                key={index}
                name={elem.name}
                gender={elem.gender}
                eye_color={elem.eye_color}
                hair_color={elem.hair_color}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <div className="row scroller">
        <h3 className="m-3 text-danger">Planets</h3>
        <div className="card-columns d-flex justify-content-between">
          {store.planets.map((elem, index) => {
            return (
              <PlanetCard
                className="textCustom"
                key={index}
                name={elem.name}
                population={elem.population}
                terrain={elem.terrain}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;


Card.propTypes = {
  name: PropTypes.string,
  species: PropTypes.array,
  gender: PropTypes.string,
  eye_color: PropTypes.string,
  hair_color: PropTypes.string,
};

PlanetCard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
};
