import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Landing} />
        </Routes>
      </Router>
    </>
  );
}
