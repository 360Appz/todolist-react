'use client'

//Third Party Imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//Internal Impports
import { deleteTask, fetchTasks } from '@/app/store/tasks/taskSlice';
import { useDispatch } from 'react-redux';


export default function TaskDeleteModal({ show, handleClose , taskDetailsFull }) {

  const dispatch = useDispatch();

  const handleDeleteFunction = async () => {
    try 
    {
      await dispatch(deleteTask({id:taskDetailsFull.taskId})).unwrap();
      handleClose(); // Close the modal upon successful submission
      dispatch(fetchTasks({ page: 0, size: 10 })); // Refresh the task list
    } 
    catch (error) {
      console.log("Delete Task Error", error)
      // setLoginError(error);
      // setShowToast(true);
    }
  }

  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task</Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteFunction}>
            Delete
          </Button>
       
        </Modal.Footer>
      </Modal>
    </>
  )
}
