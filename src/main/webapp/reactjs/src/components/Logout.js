import React from "react";

const Logout = (props) => {

    props.handleLogout("LOGOUT");
    props.history.push("/");

    return(<div></div>);

};

export default Logout;