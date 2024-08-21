
//Third Party Imports
import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "react-bootstrap";



//Internal Impports
import '../../styles/Profile/ProfileDropdown.scss'

export default function ProfileDropdown () 
{
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
			<li><Icon icon="ph:sign-out" width="1.5em" height="1.5em" />&nbsp;<span>Sign Out</span></li>
            </div>
		</ul>
	</div>
    
        </>
    );
}
