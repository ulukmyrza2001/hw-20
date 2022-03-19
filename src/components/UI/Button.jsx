import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
	return (
		<Btn
		    className={props.className}
			type={props.type || 'button'}
			onClick={props.onClick}
			id={props.id}
		>
			{props.children}
		</Btn>
	)
}

const Btn = styled.button`
	border: none;
	background-color: var( --button-background-color);
	transition:background-color 200ms linear;
	color: var(--color);
	letter-spacing: 1px;
	width: 160px;
	padding: 0.62rem 1rem;
	outline: none;
	border-radius: 5px;
	opacity: 0.7;
	transition: 0.1s;
&:hover {
	opacity: 1;
    color: aliceblue;
}
&:active {
	opacity: 1;
	box-shadow: 0 0 10px rgb(132, 174, 209);
}
`

export default Button