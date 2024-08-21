
//Third Party Imports
import { Icon } from "@iconify/react/dist/iconify.js";
import { TextField, InputAdornment } from "@mui/material";
import { Row } from "react-bootstrap";



//Internal Impports


export default function SearchBar () 
{
    return (
        <>
            <Row className="d-flex justify-content-center mt-3">
            <TextField id="outlined-basic" placeholder="Search Task..." style={{width:"100%"}}  variant="outlined"  InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Icon icon="material-symbols-light:search" width="2rem" height="2rem" />
                            </InputAdornment>
                        ),
                    }}  />
            </Row>
        </>
    );
}
