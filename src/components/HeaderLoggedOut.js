import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function HeaderLoggedOut() {
  const history = useHistory();
  const location = useLocation();

  const currentText = location.pathname === "/login" ? "Register" : "Login"


  function handleClick(event) {
    let text = event.target.innerText;

    return text === "Login"
      ? history.push("/login")
      : history.push("/register")
  }

  return (
    // @TODO: The <> </> (fragment) is not neccessery here . 
    <> 
      
      <button className="login-btn" type="button" onClick={handleClick}>
        {currentText}
      </button>
    </>
  );
}

export default HeaderLoggedOut;
