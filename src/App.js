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
import UseHover from "./pages/UseHover";
import UsePrevious from "./pages/UsePrevious";

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
          <li>
            <Link to="/use-hover">Use Hover</Link>
          </li>
          <li>
            <Link to="/use-previous">Use Previous</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/phone-number-input" element={<PhoneNumberInput />} />
          <Route path="/use-debounce" element={<UseDebounce />} />
          <Route path="/use-hover" element={<UseHover />} />
          <Route path="/use-previous" element={<UsePrevious />} />
        </Routes>
      </div>
    </Router>
  );
}
