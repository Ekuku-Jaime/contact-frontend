import { Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../state/context";
import axios from "axios";

export default function ContactForm() {
  const { name, number, edit, id } = useContext(ContactContext);
  // const [context, setContext] = useState({ name: "", number: 7 });
  const addContact = async (values) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/contacts/",
        values
      );
    } catch (err) {
      console.log(err);
    }
  };
  const editContact = async (id, values) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/v1/contacts/${id}/`,
        values
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {}, []);

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("write your name"),
    number: Yup.number()
      .min(9, "Mustn't be more than 9 characters")
      .required("Write the number"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { name, number },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        if (edit === false) {
          addContact(values);
        } else {
          editContact(id,values);
          // console.log(id, values);
        }
      }, 500);
      console.log(initValues);
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3} mb={2}>
          <TextField
            fullWidth
            type="text"
            label="Name"
            {...getFieldProps("name")}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            fullWidth
            type="number"
            label="Phone number"
            {...getFieldProps("number")}
            error={Boolean(touched.number && errors.number)}
            helperText={touched.number && errors.number}
          />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          {edit ? "Edit" : "Add"}
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
