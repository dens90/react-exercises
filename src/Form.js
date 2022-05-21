import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    username: "",
    surname: "",
    remember: false,
  });

  const changeValuesForm = (e) => {
    const { name, type, value, checked } = e.target;
    console.log(name);
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  console.log(data);
  return (
    <form>
      <input
        onChange={changeValuesForm}
        type="text"
        value={data.username}
        name="username"
      />
      <input
        onChange={changeValuesForm}
        type="text"
        value={data.surname}
        name="surname"
      />
      <input
        type="checkbox"
        onChange={changeValuesForm}
        checked={data.remember}
        name="remember"
      />
    </form>
  );
};

export default Form;
