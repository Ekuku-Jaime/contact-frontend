import styled from "@emotion/styled";
import { Delete, Edit } from "@mui/icons-material";
import { Card, IconButton, Tooltip } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { ContactContext } from "../state/context";

export default function Contact({ contacto }) {
  const { setName, setNumber, setId, setEdit } = useContext(ContactContext);

  const changeName = (name) => {
    setName(name);
  };
  const changeNumber = (number) => {
    setNumber(number);
  };
  const changeEdit = () => {
    setEdit(true);
  };
  const setTheContactId = (id) => {
    setId(id);
  };
  const deleteContact = async (id) => {
    try {
      //change this with your url
      await axios.delete(`http://127.0.0.1:8000/api/v1/contacts/${id}/`);
    } catch (err) {
      console.log(err);
    }
  };
  const theContact = (num) => {
    return data.filter((dt) => dt.number === num);
  };

  return (
    <StyledCard>
      <ul>
        <li>
          {" "}
          <span>{contacto.name}</span>
          <span style={{ float: "right" }}>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => {
                  deleteContact(contacto.id);
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton
                onClick={() => {
                  // theContact(contacto.number)
                  changeName(contacto.name);
                  changeNumber(contacto.number);
                  setTheContactId(contacto.id);
                  changeEdit();
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
          </span>
        </li>
        <li>{contacto.number}</li>
      </ul>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "30px",
}));
