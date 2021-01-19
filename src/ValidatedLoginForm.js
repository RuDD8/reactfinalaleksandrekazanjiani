import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
    <Formik
        initialValues={{ email: "", name: "", date: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number."),
            name: Yup.string()
                .required("No name provided")
                .min(2, "Name is too short - should be 2 chars minimum.")
                .matches(/(?=.*[A-Z,a-z])/, "Name must contain only alphabet characters."),

        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.name && touched.name && "error"}
                    />
                    {errors.name && touched.name && (
                        <div className="input-feedback">{errors.name}</div>
                    )}
                    <label htmlFor="date">Date</label>
                    <input
                        name="date"
                        type="date"
                        placeholder="Enter your date"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.date && touched.date && "error"}
                    />
                    {errors.date && touched.date && (
                        <div className="input-feedback">{errors.date}</div>
                    )}
                    <label htmlFor="email">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}
                    <button className="logbutton" type="submit" disabled={isSubmitting}>
                        Login
          </button>
                </form>
            );
        }}
    </Formik>
);

export default ValidatedLoginForm;
