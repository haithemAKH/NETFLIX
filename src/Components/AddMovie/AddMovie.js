
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//initialisation de l'update 
const AddMovie = ({add}) => {
  const [show,setshow] =useState(false);
  const handleClose=() => setshow(false);
  const handleShow=() => setshow(true);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [rate,setRate]=useState("");
  const[posterUrl,setPosterUrl]=useState("");
  //fonction pour l update 
  const handleTitle=(e)=>{
    setTitle(e.target.value);
  } 
  const handleDescription=(e)=>{
    setDescription(e.target.value);
  } 
  const handleRate=(e)=>{
    setRate(e.target.value);
  }
  const handlePosterUrl=(e)=>{
    setPosterUrl(e.target.value);
  }
  
  const handleMovie=(e)=>{
    let newMovie={title,description,rate,posterUrl}
    add(newMovie)
  }
  
  return (
    <div>
    <button variant="primary" onClick={handleShow}>
        ADD MOVIE
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Find your movie here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <Form.Label>movie Title</Form.Label>
          <Form.Control type="text" placeholder="enter Movie Tile" value={title} onChange={(e)=>handleTitle(e)} />
          <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="enter Description" value={description} onChange={(e)=>handleDescription(e)} />
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="enter Rate" value={rate} onChange={(e)=>handleRate(e)} />
        <Form.Label>posterUrl</Form.Label>
        <Form.Control type="Url" placeholder="enter Url" value={posterUrl} onChange={(e)=>handlePosterUrl(e)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            close
          </Button>
          <Button variant="primary" onClick={()=>handleMovie()} >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    
  )
}

export default AddMovie