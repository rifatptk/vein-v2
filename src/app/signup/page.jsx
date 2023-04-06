"use client";
import { useFormik } from "formik";
import { object, string } from "yup";
import Input from "@/components/inputs/Input";
import RiButton from "@/components/buttons/RiButton";

const validationSchema = object().shape({
  firstName: string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("First name is required"),
  lastName: string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Last name is required"),
  email: string().email("Invalid email").required("Email is required"),
  bloodGroup: string()
    .min(2, "Blood group must be at least 2 characters")
    .oneOf(
      ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      "Invalid blood group"
    )
    .required("Blood group is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  bloodGroup: "",
  password: "",
};

function SignupPage() {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      console.log({ values, actions });
    },
  });

  return (
    <main className="container pt-24">
      <h1>Signup as a Donor</h1>

      <form className="grid md:grid-cols-2 gap-8 mt-8" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="First name"
          name="firstName"
          placeHolder="John"
          touched={touched.firstName}
          error={errors.firstName}
          value={values.firstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Last name"
          name="lastName"
          placeHolder="Doe"
          touched={touched.lastName}
          error={errors.lastName}
          value={values.lastName}
          onChange={handleChange}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          placeHolder="johndoe@mail.co"
          touched={touched.email}
          error={errors.email}
          value={values.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Blood Group"
          name="bloodGroup"
          placeHolder="e.g. AB+"
          touched={touched.bloodGroup}
          error={errors.bloodGroup}
          value={values.bloodGroup}
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeHolder="********"
          touched={touched.password}
          error={errors.password}
          value={values.password}
          onChange={handleChange}
        />

        <RiButton
          text="Submit"
          type="submit"
          className="md:col-span-2 border"
        />
      </form>
    </main>
  );
}

export default SignupPage;
