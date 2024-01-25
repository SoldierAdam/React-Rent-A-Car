import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

type State = {
	categories: string[];
	priceRange: number[];
};

type Action = {
	type: string;
	payload: any;
};

const filterReducer = (state: State, action: Action): State => {
	// Implement your reducer logic here
	// This is just a placeholder
	switch (action.type) {
		default:
			return state;
	}
};

const initialState: State = {
	categories: ['Sedan', 'SUV', 'Hatchback', 'Cabrio'],
	priceRange: [0, 100],
};

const SideBar: React.FC = () => {
	const [state, dispatch] = useReducer(filterReducer, initialState);

	return (
		<div>
			<h2>Categories</h2>
			{state.categories.map((category, index) => (
				<div key={index}>
					<label>
						<input type="checkbox" value={category} />
						{category}
					</label>
				</div>
			))}
		</div>
	);
};

export default SideBar;


// import React, { useReducer } from "react";
// import { Button } from 'react-bootstrap';





// interface Category {
// 	name: string;
// 	subcategories?: Category[];
//   }
  
//   interface PriceRange {
// 	min: number;
// 	max: number;
//   }
  
//   interface FilterState {
// 	categories: Category[];
// 	priceRange: PriceRange;
//   }
  
//   const initialState: FilterState = {
// 	categories: [
// 	  {
// 		name: "iPhone iOS Telefon",
// 		subcategories: [
// 		  {
// 			name: "Apple",
// 			subcategories: [
// 			  { name: "iPhone 11" },
// 			  { name: "iPhone 11 Pro" },
// 			  // ... other iPhone models
// 			],
// 		  },
// 		],
// 	  },
// 	  {
// 		name: "Android Telefon",
// 		subcategories: [],
// 	  },
// 	  // ... other categories
// 	],
// 	priceRange: {
// 	  min: 0,
// 	  max: 1000, // Set your initial maximum price here
// 	},
//   };
  
//   // Define your filter reducer and actions here if needed
  
//   // Example usage
//   const filterReducer = (state: FilterState, action: any): FilterState => {
// 	// Handle state changes based on actions
// 	return state;
//   };
  
//   const SideBar = () => {
// 	const [state, dispatch] = useReducer(filterReducer, initialState);
  
// 	// Render your filter UI using the state
// 	return (
// 	  <div>
// 		{/* Render categories and price range inputs */}
// 		{/* You can use state.categories and state.priceRange to populate your UI */}
// 	  </div>
// 	);
//   };
  
//   // This is a basic example and may need modifications based on your specific requirements.
  
//   export default SideBar;
