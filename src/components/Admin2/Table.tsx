import React, { useState } from 'react';
import "./Table.css";
import { useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import RenderSelectedContent from './RenderSelectedContent';
import { toast } from "react-toastify";
import AddModal  from '../Admin2/AddModal';

const BaseTable = ({ data, table, entities, service, title }: { data: any; table: any; entities: any; service: any; title: string }) => {
	
	console.log("data", data);
	console.log("entities", entities);
	const [values, setValues] = useState(entities);
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	useEffect(() => {
		setValues(entities);
	}, [entities]);


	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	// Calculate the index of the first and last items on the current page
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	// Slice the entities array to get only the items for the current page
	const currentItems = entities.slice(indexOfFirstItem, indexOfLastItem);



	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, headerIndex: number) => {
		const newValues = [...values];
		newValues[rowIndex][table[headerIndex].key] = event.target.value;
		setValues(currentItems);
	};

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(entities.length / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handlePage = (event: React.MouseEvent<HTMLButtonElement>, number: number) => {
		event.preventDefault();
		setCurrentPage(number);
	}


	const clickUpdate = async (row: any) => {
		row.modelId = row.model.id;
		row.colorId = row.color.id;
		const response = await service.update(row);
		response && toast.success("Updated successfully");
	};

	const clickDelete = async (row: any) => {
		const response = await service.delete(row.id);
		console.log("response ", response);
		toast.success("Deleted successfully");
	};

	const isImage = (header: any, row: any, rowIndex: number) => {
		return (
			header.key === 'logoPath' || header.key === 'imagePath' ?
				(
					<div className='row'>
						<div className='col-8'>
							<img src={row[header.key]} alt="" style={{ maxWidth: "300px", maxHeight: "100px" }} />
						</div>
						<div className='col-4'>
							<tr>
								<td className='table-info'>
								{ header.key === 'imagePath' && data[rowIndex]?.model?.brand?.name} {data[rowIndex]?.model?.name}									{/* { header.key === 'logoPath' && data[rowIndex].name } */}
								</td>
							</tr>
						</div>
					</div>
				)
				: null)
	}

	const pagination =
		<div className='pagination-numbers'>
			{pageNumbers.map(number => (
				<button key={number} onClick={(event) => handlePage(event, number)}>
					{number}
				</button>
			))}
		</div>

	const columnName =
		<thead>
			<tr>
				{table.map((header, index) => (
					<th key={index} style={{ color: '#f27a1a', fontSize: '18px', textAlign: 'center' }}>
						{header.name}
					</th>
				))}
				<th>Update</th> <th>Delete</th>
			</tr>
		</thead>

	const columnValue =
		<tbody>
			{currentItems.map((row, rowIndex) => (
				<tr key={row.id}>
					{table.map((header, headerIndex) => (
						<td key={headerIndex}>
							{isImage(header, row, rowIndex)}
							<input
								type='text'
								value={header.key.split('.').reduce((a: any, b: any) => a[b], row)}
								onChange={event => handleChange(event, rowIndex, headerIndex)}
								style={{ width: '100%' }}
							/>
						</td>
					))}
					<td> <Button variant='warning' onClick={() => clickUpdate(row)}>Update</Button> </td>
					<td> <Button variant='danger' onClick={() => clickDelete(row)}>Delete</Button> </td>
				</tr>
			))}
		</tbody>


	return (
		<div className='admin'>

			<h1 className='table-title'>{title}</h1><br />
			<div className='add-button'>
				<Button variant="success" onClick={handleShowModal}>Add</Button>{' '}
			</div>
			<Modal show={showModal} onHide={handleCloseModal}>
			{AddModal(service.apiUrl)}
			</Modal>


			<Table striped bordered hover>
				{columnName}
				{columnValue}
			</Table>
			{pagination}
		</div>
	);
};

export default BaseTable;