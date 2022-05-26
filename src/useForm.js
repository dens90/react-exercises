import {  useState } from "react";

const useForm = () => {
  const [users, setUser] = useState({
    username: "",
    password: "",
  });

  const getInputUser = (e) => {
    e.preventDefault();
    setUser({
      username: e.target.username.value,
      password: e.target.password.value,
    });
  };
  

  return {
    username: users.username,
    password: users.password,
    inputUser: getInputUser,
  };
};

export default useForm;
