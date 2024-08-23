'use client'


//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'
import { Row } from 'react-bootstrap'

//Internal Impports
import '@/app/styles/AddTask/AddTaskButton.scss'
import { useState } from 'react';
import TaskAddModal from './TaskAddModal';


export default function TaskAdd() {

    const [isAdded, setIsAdded] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    const [showModal, setShowModal] = useState(false); //Add Task Modal
  
    const handleClick = () => {
        if (isAdded ) {
          // setIsLoading(false);
        // } else if (isLoading) {
        //   setIsAdded(true);
        // } 
        }
        else if (isAdded) {
          setIsAdded(false);
        } else {
          setIsAdded(true);
          // setIsLoading(true);
        }
        setShowModal(true); // Open the modal when the button is clicked
      };

      //Close Modal
      const handleModalClose = () => {
        setShowModal(false); // Close the modal when needed
    };

  return (
    <>
    <div>
      <button type='button' 
        className={`sf-btn add ${isAdded ? 'added' : ''} `}
        onClick={handleClick}>
        <div className='icn-sf'>
          <span className='line line-1'></span>
          <span className='line line-2'></span>
        </div>
        <div className='loader'></div>
      </button>
    </div>
    <TaskAddModal show={showModal} handleClose={handleModalClose} />
    </>
  )
}
