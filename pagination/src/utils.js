const paginate = (followers) => {
	const itemsPerPage = 9
	const pages = Math.ceil(followers.length / itemsPerPage)

	const newFollowers = Array.from({ length: pages }, (_, index) => {
		const start = index * itemsPerPage
		return followers.slice(start, start + itemsPerPage)
	})
	return newFollowers
	//to create an array of arrays, in the first argument we pass the num of arrays we want in the array, the 2nd argument is a callback, which takes each item of this new array(used _ var for this), and its index as parameters, whatever we return will be placed at this index
}

export default paginate
