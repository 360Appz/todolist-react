
//Third Party Imports
import { Icon } from "@iconify/react/dist/iconify.js";
import { TextField, InputAdornment } from "@mui/material";
import { Row } from "react-bootstrap";




//Internal Impports
import { useDispatch } from "react-redux";
import { searchTask } from "@/app/store/search/searchSlice";
import { useState } from "react";

export default function SearchBar () 
{
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");


    const handleSearch = () =>
    {
        if (keyword.trim() !== "") {
            dispatch(searchTask({keyword:keyword, page: 0, size: 10 }));
          }
    }
    return (
        <>
            <Row className="d-flex justify-content-center mt-3">
            <TextField id="outlined-basic" placeholder="Search Task..." style={{width:"100%"}}  variant="outlined" onChange={(e) => setKeyword(e.target.value)}
             InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Icon icon="material-symbols-light:search" width="2rem" height="2rem" onClick={handleSearch} style={{ cursor: "pointer" }} />
                            </InputAdornment>
                        ),
                    }}  />
            </Row>
        </>
    );
}
