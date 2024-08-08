import React from "react";
import * as Yup from "yup";
import { useFormStore } from "../global/globalState";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationForm = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only numbers")
    .required("Phone Number is required"),
  age: Yup.number().required("Age is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
});

function FormComponent() {
  const setFormData = useFormStore((state) => state.setFormData);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setFormData(values);
    navigate("/form-data");
  };

  return (
    <>
      <div className="w-4/5 mx-auto my-10">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            age: "",
            address: "",
            city: "",
          }}
          validationSchema={validationForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="fade-in">
                  <label className="block font-semibold">Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded border-gray-300"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="fade-in">
                  <label className="block font-semibold">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded border-gray-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="fade-in">
                  <label className="block font-semibold">Phone</label>
                  <Field
                    type="text"
                    name="phone"
                    className="w-full p-2 border rounded border-gray-300"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="fade-in">
                  <label className="block font-semibold">Age</label>
                  <Field
                    type="number"
                    name="age"
                    className="w-full p-2 border rounded border-gray-300"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="fade-in">
                  <label className="block font-semibold">Address</label>
                  <Field
                    type="text"
                    name="address"
                    className="w-full p-2 border rounded border-gray-300"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="fade-in">
                  <label className="block font-semibold">City</label>
                  <Field
                    type="text"
                    name="city"
                    className="w-full p-2 border rounded border-gray-300"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="fade-in w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormComponent;
