'use client'

//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'
import { TextField, InputAdornment } from '@mui/material'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import moment from 'moment';

//Internal Impports
import TaskDetailsModal from './TaskDetailsModal'
import TaskDeleteModal from './TaskDeleteModal'
import { useState , useEffect} from 'react'



export default function TaskCard({task}) {
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)


  //Edit modal
  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }


  //Delete Modal
  const handleDeleteModalOpen = () => {
    setShowDeleteModal(true)
  }

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false)
  }

   // Convert dueDate to readable format
   const formatDate = (dateString) => {
    return moment(dateString).format('Do MMM YYYY [at] h:mm A');
  };

  return (
    <>
      <Card className='d-flex justify-content-center ' style={{width:"100%"}} >
        <Card.Body>
          <Card.Title>{task?.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{task?.status}</Card.Subtitle>
          <Card.Text>{task?.description}</Card.Text>
          <Card.Text>{formatDate(task?.dueDate)}</Card.Text>
          <div className='d-flex gap-2'>
            <Button variant='primary' onClick={handleModalOpen}>
              Edit
            </Button>
            <Button variant='danger' onClick={handleDeleteModalOpen}>Delete</Button>
          </div>
     
        </Card.Body>
      </Card>
      <TaskDetailsModal show={showModal} handleClose={handleModalClose} />
      <TaskDeleteModal show={showDeleteModal} handleClose={handleDeleteModalClose} />
    </>
  )
}
