import React from "react"
import { Redirect, Route, Switch } from "react-router-dom";
import { CHARACTERS_ROUT, CHARACTERS_ROUT_PAGE } from "../utils/consts";
import { pablicRoutes } from "./routes";

const AppRouter = () => {
   return (
      <Switch>
         {pablicRoutes.map(({ path, Component, exact }) =>
            <Route key={path}
               path={path}
               component={Component}
               exact={exact}
            />
         )}
         <Redirect to={CHARACTERS_ROUT_PAGE} />
      </Switch>
   );

};

export default AppRouter;