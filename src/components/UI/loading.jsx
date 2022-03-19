import React from 'react'
import './Loading.css'

const Loading = (props) => {
	return (
		<div className={`lds-ring ${props.className}`}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Loading
