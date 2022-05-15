import { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const contextValue = {
    name,
    setName,
    setNumber,
    number,
    edit,
    setEdit,
    id,
    setId,
  };
  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};
