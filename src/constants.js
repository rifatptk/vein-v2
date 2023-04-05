import DonorsList from "./components/section/DonorsList";

const brand = {
  name: "Vein",
  description:
    "Welcome to our website, where you can find a list of blood donors who are willing to provide their help to those in need. Our service is dedicated to connecting individuals and families with life-saving blood donations, completely free of charge.We understand the importance of having access to reliable blood donors, and that's why we have created a platform where you can search for donors in your area based on your specific needs. Whether you are looking for a certain blood type, or need help urgently, we are here to help.Our website is user-friendly and easy to navigate, allowing you to quickly find and contact donors who are available to assist you. We ensure that all of our donors meet strict eligibility criteria and have undergone rigorous screening procedures to ensure that their blood is safe for transfusion.Our goal is to make the process of finding a blood donor as easy and stress-free as possible, so that you can focus on your health and recovery. We value your privacy and confidentiality, and all of your personal information will be kept secure and confidential.Thank you for choosing our service, and we hope that we can help connect you with a life-saving blood donor when you need it most.",
  contact: {
    facebook: "https://facebook.com/vein",
    twitter: "https://twitter.com/vein",
    facebook: "https://facebook.com/vein",
  },
};

const navbarLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Donors", href: "/donors" },
  { id: 3, title: "Be a donor", href: "/donors/sign-up" },
  { id: 4, title: "About", href: "/about" },
];

const donationProcess = [
  {
    id: 1,
    title: "Signup as donor",
    description:
      "Signup as a donor on vein.com. Your account will be listed on donors list after registration.",
  },
  {
    id: 2,
    title: "Update profile and contact info",
    description:
      "Update your profile and contact info with up to date data. So that needy can contact you.",
  },
  {
    id: 3,
    title: "Get call or message",
    description:
      "Victim or needy will contact with you over given contact info.",
  },
  {
    id: 4,
    title: "Go to the place and donate",
    description:
      "Victim or needy will describe you the location and the problem. You can go there and donate.",
  },
];

export { brand, navbarLinks, donationProcess };
