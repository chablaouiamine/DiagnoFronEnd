import React, { createContext, useState, useContext } from "react";

const MyContext = createContext();

const Diagnostic = ({ children }) => {
  const [data, setData] = useState("Initial data");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, useMyContext };
