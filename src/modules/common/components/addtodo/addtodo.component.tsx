import React from "react";
import { Formik } from "formik";
import { Typography } from "@mui/material";
import * as Yup from "yup";
import { motion } from "framer-motion";

import { useCreateTodo } from "../../hooks/useTodosQuery";
import { IInitialTodo } from "../../types/todo.type";
import { IAddTodoProps } from "../../types/component.type";
import { ButtonComponent } from "../button";
import { COLORS } from "../../../theme";
import {
  AddTodoStyled,
  FloatInput,
  CheckBoxInput,
  Success,
} from "./addtodo.styled";
import success from "../../../../assets/image/success.svg";

export const AddTodoComponent = ({
  client,
  alert,
  closeHandler,
}: IAddTodoProps) => {
  const { mutate: createTodo, isSuccess } = useCreateTodo(client, alert);
  const initialValues: IInitialTodo = {
    title: "",
    discription: "",
    isPrivate: false,
    completed: false,
  };
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Title should contains at least 2 chapters!")
      .required("Title is required"),
    discription: Yup.string()
      .min(10, "Discription should contains at least 10 chapters!")
      .required("Discription is required"),
  });

  return (
    <AddTodoStyled>
      <Typography variant="h4">Add Todo</Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { setValues }) => {
          createTodo(values);
          setValues(initialValues);
          setTimeout(() => {
            closeHandler();
          }, 2000);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <FloatInput value={values.title}>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                name="title"
                id="title"
              />
              <label htmlFor="title">Title</label>
              {errors.title && <div>{errors.title}</div>}
            </FloatInput>
            <FloatInput value={values.discription}>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.discription}
                name="discription"
                id="discription"
              />
              <label htmlFor="discription">Discription</label>
              {errors.discription && <div>{errors.discription}</div>}
            </FloatInput>
            <CheckBoxInput>
              <label htmlFor="completed">Completed</label>
              <input
                type="checkbox"
                name="completed"
                id="completed"
                onChange={handleChange}
              />
              <span />
            </CheckBoxInput>
            <CheckBoxInput>
              <label htmlFor="isPrivate">Private</label>
              <input
                type="checkbox"
                name="isPrivate"
                id="isPrivate"
                onChange={handleChange}
              />
              <span />
            </CheckBoxInput>

            <ButtonComponent
              type="submit"
              text="add todo"
              color={`linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary} 80%)`}
            />
          </form>
        )}
      </Formik>
      {isSuccess && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Success>
            <img src={success} alt="success" />
            <Typography variant="h5">Todo successfully created!</Typography>
          </Success>
        </motion.div>
      )}
    </AddTodoStyled>
  );
};
