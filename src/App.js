import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}
