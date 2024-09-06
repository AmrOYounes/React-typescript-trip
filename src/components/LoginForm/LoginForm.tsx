import "./index.scss";
import { IFormData } from "../../interfaces/index";
import { formInputList } from "../../data";
import { useState } from "react";

interface IProps {
  setIsLogged: (value: boolean) => void;
  formData: IFormData;
  setFormData: (value: IFormData) => void;
}

const LoginForm = ({ setIsLogged, formData, setFormData }: IProps) => {
  const [inputArr, setInputArr] = useState(formInputList);
  const handleLogin = () => setIsLogged(true);

  const handleDeleteItem = (id: number | string) => {
    const targetedObject = inputArr.find((object) => object.id === id);

    console.log(targetedObject);

    const filteredInputs = inputArr.filter((input) => input !== targetedObject);
    console.log(filteredInputs);
    setInputArr(filteredInputs);
    console.log(inputArr);
  };

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // setFormData((prevFormData)=> ({...prevFormData, [name]: value}));
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderFormInputList = inputArr.map((inputIfo) => (
    <div key={inputIfo.id} style={{ display: "flex", alignItems: "center" }}>
      <div className="input-wrapper">
        <label htmlFor={inputIfo.id}>{inputIfo.label}</label>
        <input
          type={inputIfo.type}
          id={inputIfo.id}
          name={inputIfo.name}
          onChange={handelChange}
          value={formData[inputIfo.name]}
        />
      </div>
      <button type="button" onClick={() => handleDeleteItem(inputIfo.id)}>
        ❌
      </button>
    </div>
  ));

  console.log(formData);

  return (
    <form
      className="login-form"
      onSubmit={(event) => {
        event.preventDefault();
        handleLogin();
        console.log(formData);
      }}
    >
      {renderFormInputList}
      {/* <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handelChange}/>  
        </div>
        
        <br />
        
        <div className="input-wrapper">
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handelChange}  />   
        </div>
        
        <br /> */}

      <button>Login</button>
    </form>
  );
};

export default LoginForm;
