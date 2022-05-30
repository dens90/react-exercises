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
          <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
            <Route path=":username" element={<ShowGithubUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
