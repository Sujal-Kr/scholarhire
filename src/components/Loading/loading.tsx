import React from 'react'

const Loading = () => {
	return (
		<div className='flex justify-center items-center h-[calc(100vh-50px)] w-full'>
			<div className='rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute'></div>
		</div>
	)
}

export default Loading
