
//Third Party Imports
import { Container, Row , Col} from "react-bootstrap";


//Internal Impports
import SearchBar from "@/app/components/SearchBar/SearchBar";
import Profile from "@/app/components/Profile/Profile";
import TaskDisplayAll from "@/app/components/Task/TaskCard";
import TaskAdd from "@/app/components/Task/TaskAdd";
import SortButton from "@/app/components/Sorting/SortButton";



export default function TaskLayout () 
{
    return (
        <>
             <Container > 
                <Row>
                    <h2 className="d-flex justify-content-center mt-5">To Do List</h2>
                </Row>
                <Row> 
                    <Col >
                    <SearchBar />
                    </Col>
                    <Col>
                    
                    <SortButton/>
                  
                    </Col>
                    <Col>
                      <Profile/>
                    </Col>
                </Row> 
                <Row >
                    <div style={{marginTop:"60px"}}>
                    <TaskDisplayAll/>
                    </div>
                </Row>
                <Row>
                    <div className="d-flex justify-content-end" style={{marginTop:"60px"}}>
                    <TaskAdd/>
                    </div>
                </Row> 
            </Container>      
        </>
    );
}
