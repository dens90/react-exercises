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
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShowGithubUsers from "./ShowGithubUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
