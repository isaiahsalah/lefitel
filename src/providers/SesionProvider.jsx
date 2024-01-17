import React, { createContext } from "react";

export const SesionContext = createContext();

// eslint-disable-next-line react/prop-types
export const SesionProvider = ({ children }) => {
  const [sesion, setSesion] = React.useState();

  return (
    <SesionContext.Provider value={{ sesion, setSesion }}>
      {children}
    </SesionContext.Provider>
  );
};
