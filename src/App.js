import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}
