'use client'

// Third Party Imports
import { Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Internal Imports
import TaskCard from './TaskCard';
import Image from 'next/image';
import Image1 from '../../../../public/images/pages/no-task-found.webp';
import SearchErrorToast from '../SearchBar/SearchErrorToast';
import { useEffect, useState } from 'react';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from "../../store/tasks/taskSlice";


export default function TaskDisplayAll() {

  const [showToast, setShowToast] = useState(false);
  const { taskList } = useSelector((state) => state.tasks);
  const { taskError } = useSelector((state) => state.search);
  const { searchResults } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  console.log("Task error display all", taskError)

    // Determine which list to display: searchResults if available, otherwise taskList
    const tasksToDisplay = searchResults.length > 0 ? searchResults : taskList;

  useEffect(() => {
    if (searchResults.length === 0) {
      dispatch(fetchTasks({ page: 0, size: 10 }));
    }
    if (taskError) 
      {
     
      setShowToast(true);
    }

    }, [dispatch, searchResults, taskError]);

  // useEffect(() => {
  //     if (taskError) 
  //       {
       
  //       setShowToast(true);
  //     }
  // }, [taskError]);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
     <SearchErrorToast show={showToast} message={taskError} onClose={() => setShowToast(false)} />

      <Row className='d-flex justify-content-center'>
        {tasksToDisplay && tasksToDisplay.length > 0 ? (
          <Carousel
            swipeable={true}
            // draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
          >
            {tasksToDisplay?.map((task) => (  
              <TaskCard key={task.id} task={task} />
            ))}
          </Carousel>
        ) : (
          <Image src={Image1}  style={{ maxWidth: '35%', maxHeight: '35%', width: 'auto', height: 'auto' }}  alt="No Tasks Found" />
        )}
      </Row>
    </>
  );
}
