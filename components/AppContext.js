import React, { useState, useEffect, createContext } from "react";

const AppContext = createContext();

const AppProvider = (props) => {
  const [data, setData] = useState([]);
  const url = "https://s3.amazonaws.com/technical-challenge/v3/contacts.json";
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        alert(err);
      })
      .then(setLoading(false));
  }, []);

  data.sort((a, b) => (a.name > b.name ? 1 : -1));

  function toggleFavorite(id) {
    let updatedArr = data.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          isFavorite: !contact.isFavorite,
        };
      }
      return contact;
    });
    setData(updatedArr);
  }

  return (
    <AppContext.Provider value={{ data, isLoading, toggleFavorite }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
