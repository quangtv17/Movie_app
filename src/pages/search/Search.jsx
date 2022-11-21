import React from 'react';
import { useState } from 'react';
import Navbar from '../../component/navbar/Navbar';
import SearchForm from '../../component/SearchForm/SearchForm';
import ResultList from '../../component/ResultList/ResultList';
import './search.css'

const Search = () => {
	const [inputData, setInputData] = useState(null);

	const getInputData = (data) => {
		setInputData(data);
	};

	return (
		<div className='search'>
			<Navbar />
			<SearchForm getInputData={getInputData}/>
			<ResultList input={inputData === !inputData ? "" : inputData} />
		</div>
	);
};

export default Search;
