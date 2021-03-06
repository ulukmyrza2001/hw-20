import React from 'react'
import styled from 'styled-components'
const Checbox = (props) => {
	return (
		<Checkbox>
			<input
				id={props.id}
				type={props.type}
				onChange={props.onChange}
				checked={props.checked}
			/>
			<span></span>
		</Checkbox>
	)
}

const Checkbox = styled.label`
	font-size: 17px;
	position: relative;
	display: inline-block;
	width: 3em;
	height: 1.3em;
input {
	-webkit-appearance: none;
	appearance: none;
}
span {
	position: absolute;
	cursor: pointer;
	top: 2.2px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 30px;
}

span:before {
	position: absolute;
	content: '';
	height: 0.9em;
	width: 1.4em;
	border-radius: 20px;
	left: 0.18em;
	bottom: 0.14em;
	background-color: white;
	transition: 0.4s;
}

input:checked + span {
	background-color: #315c80a1;
}

input:focus + span {
	box-shadow: 0 0 1px #2196f3;
}

input:checked + span:before {
	transform: translateX(1.2em);
}
`

export default Checbox
