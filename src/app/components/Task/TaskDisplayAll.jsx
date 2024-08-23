'use client'

// Third Party Imports
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Internal Imports
import TaskCard from './TaskCard';
import Image from 'next/image';
import Image1 from '../../../../public/images/pages/no-task-found.webp';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from "../../store/tasks/taskSlice";


export default function TaskDisplayAll() {

  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchTasks({ page: 0, size: 10 }));
    }, []);



  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      <Row className='d-flex justify-content-center'>
        {taskList && taskList.length > 0 ? (
          <Carousel
            swipeable={true}
            // draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
          >
            {taskList?.map((task) => (  
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
