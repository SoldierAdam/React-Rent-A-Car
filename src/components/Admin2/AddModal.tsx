import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import RenderSelectedContent from './RenderSelectedContent';



const AddModal = (apiUrl: string) => {

	return (
		<>
			<Modal.Header closeButton>
				<Modal.Title>
					Add 
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				{apiUrl === "cars" && RenderSelectedContent("Add Car")}
				{/* {apiUrl === "brands" && RenderSelectedContent("Add Brand")} */}
			</Modal.Body>

			{/* <Modal.Footer>
				<Button variant="secondary" onClick={handleCloseModal}>Close</Button>
			</Modal.Footer> */}
		</>
	)
}

export default AddModal