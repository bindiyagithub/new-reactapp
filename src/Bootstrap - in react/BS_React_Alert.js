import React , {useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';





export default function BS_React_Alert() {

     const [show, setShow] = useState(true);


  return (
   /*  <Alert dismissible variant="danger">
     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
     <p>
       Change this and that and try again.
     </p>
   </Alert>   */

   <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} 
          variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>



  )
}
