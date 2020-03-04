import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../Store";
import { Redirect } from "react-router-dom";

const Profile = (props) => {

    const [user, ] = useContext(UserContext);
    const [redirect, setRedirect] = useState("false");

    useEffect(() => {
        if(!localStorage.getItem("session")){
            setRedirect("true");
        }
    }, [user]);


    const text = user === undefined ? "Email is empty!" : `Email: ${user}`;

    return(
        redirect === "true" ? <Redirect to="/"/> : (
            <div className="text-center">
                <label className="bg-dark text-white">{text}</label>
            </div>
        )
    )

};

export default Profile;