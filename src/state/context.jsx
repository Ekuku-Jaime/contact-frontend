import { createContext, useContext, useMemo, useState } from "react";

// export const contactContex = createContext({
//   name: "",
//   number: "",
//   setContact: () => {},
// });

// export const ContactContext = createContext({
//   name: "",
//   number: "",
//   setContact: () => {},
// });

// export const Context = createContext();

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [data, setData] = useState({ name: "eei", number: 777 });
  // const setCurrentContact = useCallback(({contact}) => {
  //   setData(contact.name, contact.number)
  // }, []);
  // const momoizedValue = useMemo(()=>({
  //   data,
  //   setData
  // }),[data,setData])
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
