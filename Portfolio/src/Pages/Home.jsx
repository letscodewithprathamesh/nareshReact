import React from 'react'
import { Carousel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const sampleStyle={
  width:'100vw',
  height:'90vh'
}

export default function Home() {
  return (
    <div className='h-100 w-100'>
         <Carousel className='h-100 w-100'>
      <Carousel.Item 
      
      style={sampleStyle} >
            <img src='https://i.pinimg.com/736x/0c/8b/0a/0c8b0a5d9bee9c7144cdb99a0fa94f4c.jpg' alt='text1' height='100%' width='100%' />
        <Carousel.Caption>
        <h3>ADD DETAILS</h3>
          <div className='d-flex justify-content-center gap-5'>
          <Button variant="primary">See My Resume</Button>
          <Button variant="success">Contact Me</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={sampleStyle}>
      <img src='https://i.pinimg.com/736x/0c/8b/0a/0c8b0a5d9bee9c7144cdb99a0fa94f4c.jpg' alt='text2' height='100%' width='100%'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={sampleStyle}>
      <img src='https://i.pinimg.com/736x/0c/8b/0a/0c8b0a5d9bee9c7144cdb99a0fa94f4c.jpg' alt='text3' height='100%' width='100%'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    </div>
  )
}
