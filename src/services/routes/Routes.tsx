import { HomePage } from "pages";
import { Routes as Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<HomePage />} />
    </Switch>
  );
}
