import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import App from './App';
import Album from "./components/Album";
import Photo from "./components/Photo";
import Uploader from "./components/Uploader";
import AuthenticationUX from "./components/AuthenticationUX";

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')

/*
* Defines the routes available in our application.
* App is the main route
*/
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* index (home) route*/}
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select a link</p>
            </main>
          }
        />
        {/* No match route */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        {/* Components routes */}
        <Route path="album" element={<Album />} />
        <Route path="photo/:photoId" element={<Photo />} />
        <Route path="uploader" element={<Uploader />} />
        <Route path="authenticationux" element={<AuthenticationUX />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
