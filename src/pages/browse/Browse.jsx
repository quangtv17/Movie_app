import React from 'react';
import Banner from '../../component/Banner/Banner';
import MovieList from '../../component/movieList/MovieList';
import Navbar from '../../component/navbar/Navbar';
import styles from './browse.module.css';


const API_KEY = "3f968d6809372c3f029dfe132f744da0";
const API_URL = `https://api.themoviedb.org/3`;
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

function Browse() {

	return (
		<div className={styles.browse}>
			<Navbar />
			<Banner props={API_URL + requests.fetchNetflixOriginals} />
			
			<div className={styles.movieContainer}>
				<div>
					<MovieList
						props={API_URL + requests.fetchNetflixOriginals}
						ListName="Original"
					/>
					<MovieList
						props={API_URL + requests.fetchTrending}
						ListName="Xu hướng"
					/>
					<MovieList
						props={API_URL + requests.fetchTopRated}
						ListName="Xếp hạng cao"
					/>
					<MovieList
						props={API_URL + requests.fetchActionMovies}
						ListName="Phim hành động"
					/>
					<MovieList
						props={API_URL + requests.fetchComedyMovies}
						ListName="Phim hài"
					/>
					<MovieList
						props={API_URL + requests.fetchHorrorMovies}
						ListName="Phim kinh dị"
					/>
					<MovieList
						props={API_URL + requests.fetchRomanceMovies}
						ListName="Phim lãng mạn"
					/>
					<MovieList
						props={API_URL + requests.fetchDocumentaries}
						ListName="Phim tài liệu"
					/>
				</div>
			</div>
		</div>
	);
}

export default Browse;

