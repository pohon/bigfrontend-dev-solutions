import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import PhoneNumberInput from "./pages/PhoneNumberInput";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/phone-number-input">Phone Number Input</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/phone-number-input" element={<PhoneNumberInput />} />
        </Routes>
      </div>
    </Router>
  );
}
