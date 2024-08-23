
//Third Party Imports
import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "react-bootstrap";



//Internal Impports
import '../../styles/Profile/ProfileDropdown.scss'
import { useDispatch } from "react-redux";
// import { logout } from '@/app/store/login/loginSlice';
import authService from '@/app/services/authService';

export default function ProfileDropdown () 
{

    const handleLogout = () => {
        authService.logout(); 
    };

    return (
        <>
  
	<div className="menu active">
		<ul>
            <div>
			<li>
            <Icon icon="ic:outline-settings" width="1.5em" height="1.5em" />&nbsp; <span>Settings </span>
            </li>
            </div>
            <div>
			<li onClick={handleLogout}><Icon icon="ph:sign-out" width="1.5em" height="1.5em" style={{cursor:"pointer"}}  />&nbsp;<span>Sign Out</span></li>
            </div>
		</ul>
	</div>
    
        </>
    );
}
