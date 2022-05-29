import React, { useState } from "react";
import Root from "./Root";
import Sum from "./Sum";
import Counter from "./Counter";
import Welcome from "./Welcome";
import Form from "./Form";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import FilteredList from "./FilteredList";
import CarDetails from "./CarDetails";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DIsplayLanguage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome name="Welcome" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
