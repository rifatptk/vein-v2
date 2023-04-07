"use client";
import { useFormik } from "formik";
import { object, string } from "yup";
import Input from "@/components/inputs/Input";
import RiButton from "@/components/buttons/RiButton";
import { divisions, upazilas } from "@/data";
import { districts } from "@/data";

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
  division: string().required("Division is required"),
  district: string().required("District is required"),
  upazila: string().required("Upazila is required"),
  address: string().required("Address is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  bloodGroup: "",
  password: "",
  division: "",
  district: "",
  upazila: "",
  address: "",
};

function SignupPage() {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, actions) => {
        console.log({ values, actions });
      },
    });

  function filterDistrictsByDivision() {
    const division = divisions.find(
      (division) => division.name === values.division
    );
    return districts.filter((district) => district.division_id === division.id);
  }

  function filterUpazilasByDistrict() {
    const district = districts.find(
      (district) => district.name === values.district
    );
    return upazilas.filter((upazila) => upazila.district_id === district.id);
  }

  return (
    <main className="container pt-24">
      <h1>Signup as a Donor</h1>

      <form className="grid md:grid-cols-2 gap-8 mt-8" onSubmit={handleSubmit}>
        <Input
          as="input"
          label="First name"
          name="firstName"
          placeHolder="John"
          touched={touched.firstName}
          error={errors.firstName}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          as="input"
          label="Last name"
          name="lastName"
          placeHolder="Doe"
          touched={touched.lastName}
          error={errors.lastName}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          as="input"
          type="email"
          label="Email"
          name="email"
          placeHolder="johndoe@mail.co"
          touched={touched.email}
          error={errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          as="input"
          label="Blood Group"
          name="bloodGroup"
          placeHolder="e.g. AB+"
          touched={touched.bloodGroup}
          error={errors.bloodGroup}
          value={values.bloodGroup}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="md:col-span-2">
          <h2>Address</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 md:col">
            <Input
              as="select"
              label="Division"
              name="division"
              touched={touched.division}
              error={errors.division}
              value={values.division}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option hidden>Select division</option>
              {divisions.map((division) => (
                <option key={division.id} value={division.name}>
                  {division.name}
                </option>
              ))}
            </Input>

            {values.division && (
              <Input
                as="select"
                label="District"
                name="district"
                touched={touched.district}
                error={errors.district}
                value={values.district}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option hidden>Select district</option>
                {filterDistrictsByDivision().map((district) => (
                  <option key={district.id} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </Input>
            )}
            {values.district && (
              <Input
                as="select"
                label="Upazila"
                name="upazila"
                touched={touched.district}
                error={errors.district}
                value={values.district}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option hidden>Select district</option>
                {filterUpazilasByDistrict().map((upazila) => (
                  <option key={upazila.id} value={upazila.name}>
                    {upazila.name}
                  </option>
                ))}
              </Input>
            )}
            {values.upazila && (
              <Input
                as="input"
                label="Address details (Landmark, Holding/road)"
                name="address"
                placeHolder="Address"
                touched={touched.address}
                error={errors.address}
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
          </div>
        </div>

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
