'use client'

//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'
import { TextField, InputAdornment } from '@mui/material'
import { Button, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

//Internal Impports
import TaskDetailsModal from './TaskDetailsModal'
import TaskDeleteModal from './TaskDeleteModal'
import { useState } from 'react'

export default function TaskCard() {
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

  return (
    <>
      <Card className='d-flex justify-content-center ' style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Task Status</Card.Subtitle>
          <Card.Text>Some task description</Card.Text>
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
