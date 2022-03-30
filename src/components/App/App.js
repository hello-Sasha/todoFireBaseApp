import React from 'react';
import {RoutesTodo} from '../../routes/routes';
import {HashRouter} from "react-router-dom";

export const App= () => {
  return (
    <div style={{
      height: "100vh",
      display: "flex"
    }}>
      <HashRouter>
        <RoutesTodo/>
      </HashRouter>
    </div>
  )

};
