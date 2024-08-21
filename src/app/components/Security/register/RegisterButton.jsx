// Ensure this is a client component
"use client";

//Third Party Imports



//Internal Impports



//CSS
import '../../../styles/Security/Login-Register-Button.scss'


export default function RegisterButton () 
{
    // const [profileDropdown, showProfileDropdown] = useState(false);

    // const handleDropdown = () => {
    //     showProfileDropdown(!profileDropdown);
    // };


    return (
        <>
        <div className="d-flex justify-content-center">
        <button className="light">
             Register
        </button>   
        </div>            
        </>
    );
}
