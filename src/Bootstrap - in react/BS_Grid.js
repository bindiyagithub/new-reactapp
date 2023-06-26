import React from 'react'
import { Container  , Row , Col , Button} from 'react-bootstrap' 

/* Grid means table row & col with 12 columns*/
export default function BS_Grid() {
  return (
    /* <div>
        <Button variant='outline-danger'>Submit</Button>
        <Button variant='outline-secondary'>Submit</Button>
        <Button variant='outline-warning'>Submit</Button>
    </div>  */


     // the Container have left & right both side some padding
   /* <Container>

               <Row className='mt-2'> 
                 <Col>  
                   <div className='bg-primary p-4'> mydiv</div>
                 </Col>
               </Row>

              <Row className='mt-2'> 
                 <Col>  
                   <div className='bg-warning p-4'> mydiv</div>
                 </Col>

                 <Col>  
                   <div className='bg-success p-4'> mydiv</div>
                 </Col>
                 
              </Row>

              <Row className='mt-2'> 
                 <Col>  
                   <div className='bg-primary p-4'> mydiv</div>
                 </Col>

                 <Col>  
                   <div className='bg-dark p-4'> mydiv</div>
                 </Col>

                 <Col>  
                   <div className='bg-info p-4'> mydiv</div>
                 </Col>
                 
              </Row>
    </Container>   */

        // it provide a full-width of the container
    /* <Container fluid='md'>
          <Row>
               <Col>
                  <div className='bg-secondary p-3 mt-2'> My div 2</div>
               </Col>
               <Col>
                  <div className='bg-info p-3 mt-2'> My div 2</div>
               </Col>
               <Col>
                  <div className='bg-danger p-3 mt-2'> My div 2</div>
               </Col>
               <Col>
                  <div className='bg-warning p-3 mt-2'> My div 2</div>
               </Col>
          </Row>
     </Container>  */

    /* <Container fluid>
           <Row>
               <Col sm={6}>
                  <div className='bg-secondary p-3 mt-2'> My div 2</div>
               </Col>
               
               <Col sm={4}>
                  <div className='bg-info p-3 mt-2'> My div 2</div>
               </Col >
               <Col>
                  <div className='bg-danger p-3 mt-2'> My div 2</div>
               </Col>
               
          </Row> 

          <Row>
               <Col md={8} sm={6}  xs={4}>
                  <div className='bg-secondary p-3 mt-2'> My div 2</div>
               </Col>
               
               <Col>
                  <div className='bg-info p-3 mt-2'> My div 2</div>
               </Col >
               <Col>
                  <div className='bg-danger p-3 mt-2'> My div 2</div>
               </Col>
               
          </Row>

        </Container>  */

        /* offset :-  1 column hai uska div  wo age se(left side se) 
        2 columns jitni age se move ho jayegi  & span means 6 colomn 
        jitna spread ho jayega */
         <Container>
          <Row>
               <Col md={{ offset:2 , span:6 }}>
                  <div className='bg-secondary p-3 mt-2'> My div 2</div>
               </Col>
               
               <Col>
                  <div className='bg-info p-3 mt-2'> My div 2</div>
               </Col >
               <Col>
                  <div className='bg-danger p-3 mt-2'> My div 2</div>
               </Col>
               
          </Row>


     </Container>
  )
}
