import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={<Landing />} exact />
        </Routes>
      </Router>
    </>
  );
}
