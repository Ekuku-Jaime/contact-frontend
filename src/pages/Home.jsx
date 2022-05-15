import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import { data } from "../data";
import { ContactContextProvider } from "../state/context";

export default function Home() {
  const [contacts, setContacts] = useState();

  const getContacts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v1/contacts/"
      );
      setContacts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getContacts();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContactContextProvider>
      <Container>
        <ContentStyle>
          <ContactForm />
          <Typography variant="h3" sx={{ mt: 2, mb: 2, textAlign: "center" }}>
            Your Contacts
          </Typography>
          {contacts &&
            contacts.map((contact) => (
              <Contact contacto={contact} key={contact.id} />
            ))}
        </ContentStyle>
      </Container>
    </ContactContextProvider>
  );
}

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
}));
