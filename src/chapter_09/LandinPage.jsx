import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const onClickLogin = () => {
        setIsLoggedin(true);
    };

    const onClickLogout = () => {
        setIsLoggedin(false);
    };

    return (
        <div>
            <Toolbar
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}
            />
        </div>
    );
}

export default LandingPage;