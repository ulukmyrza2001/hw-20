import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
	return (
		<Inputs {...props}/>
	)
}
const Inputs = styled.input`
	border: none;
	background-color:${props=>props.isValid ? 'var( --input-background)' : 'rgba(255, 99, 71, 0.793)'};
	transition:background-color 200ms linear;
	width: 480px;
	outline: none;
	padding: 0.7rem 1rem;
	color: rgb(173, 190, 202);
	border-radius: 5px;
	transition: 0.1s;
	box-shadow: ${props=>props.isValid ? 'none' : '0 0 40px salmon' };
&:hover {
	opacity: 1;
}
&:focus {
	opacity: 1;
	box-shadow: var( --inp-focus-form-box-shadow);
}
`
export default Input

