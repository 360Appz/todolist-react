// Ensure this is a client component
"use client";

//Third Party Imports
import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "react-bootstrap";



//Internal Impports
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";


export default function Profile () 
{
    const [profileDropdown, showProfileDropdown] = useState(false);

    const handleDropdown = () => {
        showProfileDropdown(!profileDropdown);
    };


    return (
        <>
        <div style={{ position: "relative" }}>
            <Row className="d-flex  mt-3">
            <Icon icon="iconamoon:profile-circle-bold" width="3.5em" height="3.5em" onClick={handleDropdown} />
            {profileDropdown && <ProfileDropdown />}
            </Row>
        </div>
        </>
    );
}
