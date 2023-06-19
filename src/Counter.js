import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css";

export default function Counter() {

  const [count, setCount] = useState(0);

  const incrementHandler=()=>{
    setCount(count + 1);
  }

  const decreamentHandler=()=>{
    setCount(count -1);
  }

  const resetHandler=()=>{
    setCount(0);
  }

  return (

   <Card className="card">
        <Card.Body>
          <Card.Text style={{ fontSize: '6rem',marginLeft:'30px' }}>{count}</Card.Text>
          <Button className="btn"  onClick={incrementHandler} variant="primary">+</Button>
          <Button className="btn" onClick={decreamentHandler} variant="warning">-</Button>
          <Button className="btn" onClick={resetHandler} variant="danger">Reset</Button>
        </Card.Body>
      </Card>
  
   
  )
}
