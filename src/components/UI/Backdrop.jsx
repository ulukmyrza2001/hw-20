import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Backdrop = () => {
	const BackdropPort = () => {
		return <BackdropModal />
	}
	const elem = document.getElementById('modal')
	return (
		<Fragment>
			{ReactDOM.createPortal(<BackdropPort />, elem)}
		</Fragment>
	)
}

const BackdropModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
`

export default Backdrop
