import { ADD_CONTACT } from "./types";

export default function reducer(state, action) {
    switch (action.type) {
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [...state.employees, action.payload],
        };
  
      case "EDIT_EMPLOYEE":
        const updatedContact = action.payload;
  
        const updatedContacts = state.employees.map((contact) => {
          if (contact.id === updatedContact.id) {
            return updatedContact;
          }
          return contact;
        });
  
        return {
          ...state,
          contacts: updatedContacts,
        };
  
      case "REMOVE_EMPLOYEE":
        return {
          ...state,
          contacts: state.employees.filter(
            (employee) => employee.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };