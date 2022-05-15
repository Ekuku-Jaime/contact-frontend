import styled from "@emotion/styled";
import { Delete, Edit } from "@mui/icons-material";
import { Card, IconButton, Tooltip } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
// import { data } from "../data";
import { ContactContext } from "../state/context";

// const changeContact = () => {

// };

export default function Contact({ contacto }) {
  // const { name, number } = useContext(ContactContext);
  const { name, setName } = useContext(ContactContext);
  const { number, setNumber } = useContext(ContactContext);
  const changeName = (name) => {
    setName(name);
  };
  const changeNumber = (number) => {
    setNumber(number);
  };
  const context = useContext(ContactContext);
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
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton
                onClick={() => {
                  // theContact(contacto.number)
                  changeName(contacto.name);
                  changeNumber(contacto.number);
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
