import React, { useState, useContext } from 'react'
// import { useEffect } from 'react'

import useFetch from './useFetch'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	// const [isloading, setIsLoading] = useState(true)
	// const [error, setError] = useState({ show: false, msg: '' })
	// const [movies, setMovies] = useState([])

	const [query, setQuery] = useState('batman')
	const { isloading, error, data: movies } = useFetch(`&s=${query}`)

	// const fetchMovies = async (url) => {
	// 	setIsLoading(true)
	// 	try {
	// 		const response = await fetch(url)
	// 		const data = await response.json()
	// 		if (data.Response === 'True') {
	// 			setMovies(data.Search)
	// 			setError({ show: false, msg: '' })
	// 		} else {
	// 			setError({ show: true, msg: data.Error })
	// 		}
	// 		setIsLoading(false)
	// 	} catch (error) {
	// 		console.log(error)
	// 		setIsLoading(false)
	// 	}
	// }

	// useEffect(() => {
	// 	fetchMovies(`${API_ENDPOINT}&s=${query}`)
	// }, [query])

	return (
		<AppContext.Provider
			value={{ isloading, error, movies, query, setQuery }}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
