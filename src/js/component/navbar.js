import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 ms-3">
            <img
              src="https://www.citypng.com/public/uploads/preview/-51608495204iyvpoqgita.png"
              className="bg-dark"
              alt="Bootstrap"
              width="100"
              height="50"
            />
          </span>
        </Link>
        <div className="dropdown ml-auto ">
          <button
            className="btn btn-yelow dropdown-toggle me-3"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
          >
            Favorites
          </button>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((fav) => {
              return (
                <div>
                  {fav}{" "}
                  <button
                    onClick={() => {
                      actions.deleteFavorite(fav);
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
