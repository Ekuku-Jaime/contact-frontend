import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import React from "react";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import { data } from "../data";
import { ContactContextProvider } from "../state/context";

export default function Home() {
  return (
    <ContactContextProvider>
      <Container>
        <ContentStyle>
          <ContactForm />
          <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
            Your Contacts
          </Typography>
          {data.map((contact) => (
            <Contact contacto={contact} key={contact.number} />
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
