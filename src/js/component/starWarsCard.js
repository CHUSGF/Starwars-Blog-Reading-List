import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StarWarsCard = (props) => {
  // constante para guardar la infomacion que trae el fluch, la informacion de los personajes
  const { store, actions } = useContext(Context);

  return (
    <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-2 mx-2 my-2">
      {props.uid == 1 && props.type == "planets" ? (
        <div>
          <h3>No hay imagen</h3>
        </div>
      ) : (
        <img
          src={
            "https://starwars-visualguide.com/assets/img/" +
            props.type +
            "/" +
            props.uid +
            ".jpg"
          }
          className="card-img-top mt-2"
          alt="..."
        />
      )}

      <div className="card-body text-center">
        <h5 className="card-title ">{props.title} </h5>
        <div className=" d-flex justify-content-around mt-2">
          <Link
            to={"/info"}
            onClick={() => {
              actions.getInfo(props.url);
            }}
          >
            <button className="btn btn-primary ">Info</button>
          </Link>
          <button
            className="btn btn-primary "
            onClick={() => {
              actions.addFavorites(props.title);
            }}
          >
            <i className="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

StarWarsCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default StarWarsCard;
