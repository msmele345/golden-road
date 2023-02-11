import React from "react";
import { Route, Routes } from "react-router-dom";
import  App from '../../App';


const LandingPage = (): JSX.Element => {
    return (
        <div>
          <Routes>
            <Route path={'/'} element={<App/>}></Route>
          </Routes>
        </div>
      )
};

export default LandingPage;




