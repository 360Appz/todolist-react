// Ensure this is a client component
'use client'

//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//Internal Impports
import { useState } from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'


const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  .required()

export default function LoginCard() {

  // const hrefValue = "/register/"; // Set the href value here

  // Log the href value
  // console.log("The Link component is pointing to:", hrefValue);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log(data)
  }

  // console.log(watch('example')) // watch input value by passing the name of it

  return (
    <>
      <Card style={{width:"36em", height:'30em', borderRadius:"20px"}}>
        <div className='mt-5'>
        <Card.Body>
          <Card.Title className='d-flex justify-content-center'>Login</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Username*/}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Enter Username' />
              {errors.username && <p className='text-danger'>{errors.username.message}</p>}
            </Form.Group>

            {/* Password*/}
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}
            </Form.Group>

            <LoginButton type="submit"/>
          </Form>
        </Card.Body>
        </div>
        <div className='d-flex justify-content-center'>
          <span>Need an account , register 
          <Link href='/register'>
            <span> <strong style={{cursor:"pointer"}}> here </strong></span>
            </Link>
            </span>
        </div>
      </Card>
    </>
  )
}
