import React, { useState } from "react";
import './searchform.css'

function SearchForm(props) {
    const [searchMovies, setSearchMovies] = useState("");
	const handleChangeInput = (e) => {
		setSearchMovies(e.target.value);
	};
    //Hàm resetForm
	const handleReset = (e) => {
		e.preventDefault();
		setSearchMovies('')
	};

	const handleSearch = (e) => {
		e.preventDefault();
		props.getInputData(searchMovies)
        // console.log(searchMovies);
        //Xét điều kiện khi người dùng không nhập gì
        if(searchMovies.trim() === '') {
            alert('Please enter the movie you are looking for!');
            props.getInputData('')
        }
	};
    //Khi dùng phím Enter vẫn có hiệu lực với nút search
    const handleKey = (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            props.getInputData(searchMovies)
        }
    };

    return ( 
        <div className="searchForm">
				<div className="wrapper">
                    <form>
                        <div className="inputForm">
                            <input
                                type="text"
                                placeholder="Please input keyword"
                                onChange={handleChangeInput}
                                onKeyDown={handleKey}
                                value={searchMovies}
                            ></input>
                            <span onClick={handleSearch}>
                                <svg
                                    className='svg-inline--fa fa-search fa-w-16'
                                    fill='#ccc'
                                    aria-hidden='true'
                                    data-prefix='fas'
                                    data-icon='search'
                                    role='img'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'>
                                    <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1
                                        322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 
                                        17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128
                                        0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
                                </svg>
                            </span>

                        </div>
                    
                        <div className="buttonFrom">
                            <button className="btnReset" onClick={handleReset}>RESET</button>
                            <button className="btnSearch" onClick={handleSearch}>SEARCH</button>
                        </div>
                    </form>
                </div>
			</div>
    );
};

export default SearchForm;