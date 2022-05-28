import React, { useState } from "react";
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

const App = () => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select value={language} onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>

        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
