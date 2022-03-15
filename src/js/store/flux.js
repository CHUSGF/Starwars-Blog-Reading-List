const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      infoUrl: "",
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getInfo: (url) => {
        setStore({ infoUrl: url });
      },
      loadPeople: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((res) => res.json())
          .then((res) => setStore({ people: res.results }))
          .catch((error) => console.error(error));
      },
      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((res) => res.json())
          .then((res) => setStore({ planets: res.results }))
          .catch((error) => console.error(error));
      },
      loadVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles")
          .then((res) => res.json())
          .then((res) => setStore({ vehicles: res.results }))
          .catch((error) => console.error(error));
      },
      addFavorites: (name) => {
        if (!getStore().favorites.includes(name)) {
          setStore({ favorites: [...getStore().favorites, name] });
        }
      },
      deleteFavorite: (name) => {
        setStore({
          favorites: [...getStore().favorites.filter((fav) => fav != name)],
        });
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
