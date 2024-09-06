import { Navbar } from "./components/Navbar";
import Heading from "./components/Heading";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";
import { useState } from "react";
import UserDetails from "./components/UserDetails";
import { IFormData } from "./interfaces/index";

function App() {
  const company = "AMRCOMPANY";
  const aboutUs = "About Us";
  const [isLogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });
  console.log(isLogged, formData);

  return (
    <>
      <Navbar
        companyName={company}
        aboutUs={aboutUs}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      />

      <Heading title="iffffffffffffff" />

      {isLogged ? (
        <UserDetails user={formData} />
      ) : (
        <LoginForm
          formData={formData}
          setFormData={setFormData}
          setIsLogged={setIsLogged}
        />
      )}
    </>
  );
}

export default App;
