'use client'

//Third Party Imports
import { Icon } from '@iconify/react/dist/iconify.js'
import { TextField, InputAdornment } from '@mui/material'
import { Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

//Internal Impports
import TaskCard from './TaskCard'

export default function TaskDisplayAll() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <>
      <Row className='d-flex justify-content-center '>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          //  ssr={true} // means to render carousel on server-side.
          infinite={true}
        >
          <TaskCard />
        </Carousel>
      </Row>
    </>
  )
}
