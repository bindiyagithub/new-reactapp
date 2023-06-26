import { Container, Row, Col, Card  , Button} from "react-bootstrap";


export default function BasicExample()
{
     return (
          <Container>

               <Row className="mt-2">
                    <Col md={4}>
                         <Card className="text-center" border="danger">
                              <Card.Img variant="top" src="img/a.jpg" width="200" height="200" />
                              <Card.Body>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Subtitle>Card Sub Title</Card.Subtitle>
                                   <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                   </Card.Text>

                                   <Card.Link href="https://www.bing.com/images/search?q=images+of+bholenath&FORM=HDRSC3">
                                        Click here
                                   </Card.Link>


                                   <div className="d-grid">
                                   <Button variant="success">Go somewhere</Button>
                                   </div>
                                   
                              </Card.Body>
                         </Card>
                    </Col>

                    <Col md={4}>
                         <Card className="text-center">
                              <Card.Header>
                                   <h3 className="text-primary"> This is Card Header</h3>  
                              </Card.Header>
                              <Card.Img variant="top" src="img/Mahakal.jpg" width="200" height="200" />
                              <Card.Body>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Subtitle>Card Sub Title</Card.Subtitle>
                                   <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                   </Card.Text>

                                   <Card.Footer className="d-grid">
                                   <Button variant="dark">Go somewhere</Button>
                                   </Card.Footer>
                                   
                              </Card.Body>
                         </Card>
                    </Col>

                    <Col md={4}>
                         <Card className="text-center" bg="danger">
                              <Card.Img variant="top" src="img/qw.jpg" width="200" height="200" />
                              <Card.Body>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Subtitle>Card Sub Title</Card.Subtitle>
                                   <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                   </Card.Text>

                                   <div className="d-grid">
                                   <Button variant="info">Go somewhere</Button>
                                   </div>
                                   
                              </Card.Body>
                         </Card>
                    </Col>
               </Row>

               <Row className="mt-3">
                    <Col md={4}>
                         <Card className="text-center" border="success" bg="info">
                              
                              <Card.ImgOverlay>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Subtitle>Card Sub Title</Card.Subtitle>
                                   <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                   </Card.Text>

                                   <Card.Link href="#">
                                        Click here
                                   </Card.Link>


                                   <Card.Footer className="d-grid">
                                   <Button variant="warning">Go somewhere</Button>
                                   </Card.Footer>
                                   
                              </Card.ImgOverlay>
                         </Card>
                    </Col>

                    
               </Row>
               
          </Container>

          
     );
}

