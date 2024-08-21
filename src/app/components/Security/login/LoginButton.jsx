// Ensure this is a client component
"use client";

//Third Party Imports
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, Row } from "react-bootstrap";



//Internal Impports
import { useState } from "react";


//CSS
import '../../../styles/Security/Login-Register-Button.scss'


export default function LoginButton () 
{
    // const [profileDropdown, showProfileDropdown] = useState(false);

    // const handleDropdown = () => {
    //     showProfileDropdown(!profileDropdown);
    // };


    return (
        <>
        <div className="d-flex justify-content-center">
        <button className="light">
             Login
        </button>   
        </div>            
        </>
    );
}
