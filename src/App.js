import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import PhoneNumberInput from "./pages/PhoneNumberInput";
import UseDebounce from "./pages/UseDebounce";

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
          <li>
            <Link to="/use-debounce">Use Debounce</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/phone-number-input" element={<PhoneNumberInput />} />
          <Route path="/use-debounce" element={<UseDebounce />} />
        </Routes>
      </div>
    </Router>
  );
}
