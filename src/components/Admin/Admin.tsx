import  { useState } from 'react';
import "../Admin/Admin.css";
import UpdateCar from "./Crud/UpdateData";
import Panel from "./AccordionPanel";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { contentConfig } from './InputInformation';
import axios from 'axios';
import RenderSelectedContent from './RenderSelectedContent';



type Props = {}

function Admin({ }: Props) {

	const location = useLocation();
	const [selectedContent, setSelectedContent] = useState<string | null>(null);

	useEffect(() => {
		localStorage.removeItem('car');
		localStorage.removeItem('models');
		localStorage.removeItem('colors');
	}, [location.pathname]);

	useEffect(() => {
        axios.get('http://localhost:8080/api/models/getAll')
            .then(response => {
                console.log(response.data.data);
                localStorage.setItem('models', JSON.stringify(response.data.data));
            })
            .catch(error => {
                console.log(error);
            });
        axios.get('http://localhost:8080/api/colors/getAll')
            .then(response => {
                console.log(response.data.data);
                localStorage.setItem('colors', JSON.stringify(response.data.data));
            })
            .catch(error => {
                console.log(error);
            });
		axios.get('http://localhost:8080/api/brands/getAll')
			.then(response => {
				console.log(response.data.data);
				localStorage.setItem('brands', JSON.stringify(response.data.data));
			})
			.catch(error => {
				console.log(error);
			});
    }, []);

	const header =
			<div className="col-3">
				<div className="crud-header">
					<h3>{selectedContent}</h3>
				</div>
			</div>

	const handlePanelClick = (content: string) => {
		setSelectedContent(content);
	}

	const renderSelectedContent = () => {
		const config = contentConfig[selectedContent];
		if (!config) {
			return null;
		}
		const Component = config.component;
		return <Component {...config} />;
	};

	return (
		<div className="admin-page row">
			<div className="col-1"></div>
			<div className="col-3">
				<div>
					<Panel title="Car" contents={["Add Car", "Update Car", "Delete Car"]} onClick={handlePanelClick} />
					<Panel title="Model" contents={["Add Model", "Update Model", "Delete Model"]} onClick={handlePanelClick} />
					<Panel title="Brand" contents={["Add Brand", "Update Brand", "Delete Brand"]} onClick={handlePanelClick} />
				</div>
			</div>
			<div className="col-7">
				<div className="row">
					{header}
				</div>
				<div className="row">
						{RenderSelectedContent(selectedContent)}
				</div>
			</div>
		</div>
  );
}

export default Admin;




// // Admin.tsx

// import React, { useState } from 'react';
// import "../Admin/Admin.css";
// import Icon from '@mdi/react';
// import AddCar from "./Car/AddCar";
// import UpdateCar from "./Car/UpdateCar";
// import Panel from "./AccordionPanel";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import DeleteCar from "./Car/DeleteCar";

// type Props = {}

// function Admin({ }: Props) {

// 	const location = useLocation();
// 	const [selectedContent, setSelectedContent] = useState<string | null>(null);

// 	useEffect(() => {
// 		localStorage.removeItem('car');
// 		localStorage.removeItem('models');
// 		localStorage.removeItem('colors');
// 	}, [location.pathname]);

// 	const header =
// 			<div className="col-3">
// 				<div className="crud-header">
// 					<h3>{selectedContent}</h3>
// 				</div>
// 			</div>

// 	const handlePanelClick = (content: string) => {
// 		setSelectedContent(content);
// 	}

// 	const renderSelectedContent = () => {
// 		switch (selectedContent) {
// 			case 'Add Car':
// 				return <AddCar  />;
// 			case 'Update Car':
// 				return <UpdateCar />;
// 			case 'Delete Car':
// 				return <DeleteCar />;
			
// 			default:
// 				return null;
// 		}
// 	}

// 	return (
// 		<div className="admin-page row">
// 			<div className="col-1"></div>
// 			<div className="col-3">
// 				<div>
// 					<Panel title="Car" contents={["Add Car", "Update Car", "Delete Car"]} onClick={handlePanelClick} />
// 					<Panel title="Model" contents={["Add Model", "Update Model", "Delete Model"]} onClick={handlePanelClick} />
// 					<Panel title="Brand" contents={["Add Brand", "Update Brand", "Delete Brand"]} onClick={handlePanelClick} />
// 				</div>
// 			</div>
// 			<div className="col-7">
// 				<div className="row">
// 					{header}
// 				</div>
// 				<div className="row">
// 						{renderSelectedContent()}
// 				</div>
// 			</div>
// 		</div>
//   );
// }

// export default Admin;
