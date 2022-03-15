import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Info = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({});
  const [imagen, setImagen] = useState({});
  useEffect(() => {
    fetch(store.infoUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res.result.properties);
        if (res.result.properties.eye_color) {
          setImagen({ type: "characters", uid: res.result.uid });
        } else if (res.result.properties.diameter) {
          setImagen({ type: "planets", uid: res.result.uid });
        } else if (res.result.properties.model) {
          setImagen({ type: "vehicles", uid: res.result.uid });
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className=" col col-sm-8 col-lg-4 card">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/" +
              imagen.type +
              "/" +
              imagen.uid +
              ".jpg"
            }
            className="card-img-top mt-2 w-70"
            alt="..."
          />

          {/**CHARACTERS */}

          <div className="text-center ">
            {data.name ? (
              <p className="card-text">
                Name:
                <span className="text.info"> {data.name}</span>
              </p>
            ) : (
              ""
            )}
            {data.height ? (
              <p className="card-text">
                height:
                <span className="text.info"> {data.height}</span>
              </p>
            ) : (
              ""
            )}
            {data.hair_color ? (
              <p className="card-text">
                Hair:
                <span className="text.info"> {data.hair_color}</span>
              </p>
            ) : (
              ""
            )}
            {data.skin_color ? (
              <p className="card-text">
                skin color:
                <span className="text.info"> {data.skin_color}</span>
              </p>
            ) : (
              ""
            )}
            {data.eye_color ? (
              <p className="card-text">
                Eye color:
                <span className="text.info"> {data.eye_color}</span>
              </p>
            ) : (
              ""
            )}
            {data.birth_year ? (
              <p className="card-text">
                birth year:
                <span className="text.info"> {data.birth_year}</span>
              </p>
            ) : (
              ""
            )}
            {data.gender ? (
              <p className="card-text">
                Gender:
                <span className="text.info"> {data.gender}</span>
              </p>
            ) : (
              ""
            )}

            {/**PLANETS */}

            {data.diameter ? (
              <p className="card-text">
                diameter:
                <span className="text.info"> {data.diameter}</span>
              </p>
            ) : (
              ""
            )}
            {data.rotation_period ? (
              <p className="card-text">
                rotation_period:
                <span className="text.info"> {data.rotation_period}</span>
              </p>
            ) : (
              ""
            )}
            {data.population ? (
              <p className="card-text">
                population:
                <span className="text.info"> {data.population}</span>
              </p>
            ) : (
              ""
            )}

            {/**VEHICLES */}

            {data.model ? (
              <p className="card-text">
                model:
                <span className="text.info"> {data.model}</span>
              </p>
            ) : (
              ""
            )}
            {data.vehicle_class ? (
              <p className="card-text">
                vehicle_class:
                <span className="text.info"> {data.vehicle_class}</span>
              </p>
            ) : (
              ""
            )}
            {data.manufacturer ? (
              <p className="card-text">
                manufacturer:
                <span className="text.info"> {data.manufacturer}</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="col text-center mt-2">
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    </div>
  );
};
