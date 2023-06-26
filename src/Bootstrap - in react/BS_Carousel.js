import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

export default function BS_Carousel() {
     /* carousel means image slider 
     here we use fade name props in Carousel :- it means image slide effect nahi hoge
      ager fade use nahi kare ke to bydefault Carousel images ki slide effect hogi
     */
  return (
    <div>

     
         <Container fluid>
          
             <Row className='mt-2'>
                <Col>
                   <Carousel fade variant='dark'>
                      <Carousel.Item interval={500}>
                         <img src='img/2.jpg'  className='d-block w-100' height='500'  />
                          <Carousel.Caption>
                              <h3> First Image</h3>
                              <p> Description of 1st image</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                         <img src='img/5.jpg'  className='d-block w-100' height='500' />
                         <Carousel.Caption>
                              <h3> Second Image</h3>
                              <p> Description of 2nd image</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                         <img src='img/6.jpg' className='d-block w-100' height='500'/>
                         <Carousel.Caption>
                              <h3> Third Image</h3>
                              <p> Description of 3rd image</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                         <img src='img/8.jpg'  className='d-block w-100' height='500'/>
                         <Carousel.Caption>
                              <h3> Forth Image</h3>
                              <p> Description of 4rth image</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                   </Carousel>
                </Col>
             </Row>
         </Container>
    </div>
  )
}
