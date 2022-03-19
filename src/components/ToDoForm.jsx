import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../store/todo-slice'
import Button from './UI/Button'
import Flex from './UI/Flex'
import Input from './UI/Input'
import styled from 'styled-components'
import { Alert } from '@mui/material'

const ToDoForm = () => {
	const [inputValue, setInputValue] = useState('')
	const [isValid, setIsValid] = useState(true)
	const dispatch = useDispatch()

	const inputChangeHndler = (e) => {
		if (inputValue.trim() !== '') setIsValid(true)
		setInputValue(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if (inputValue.trim() === '') {
			setIsValid(false)
			return
		}
		dispatch(addNewTodo(inputValue))
		setInputValue('')
	}
	return (
		<>
			<Form onSubmit={submitHandler}>
			{!isValid && <Alert className='alert' severity='error'>This is an error alert — check it out!</Alert>}
			<Flex justify={'space-evenly'}>
				<Input
					isValid={isValid}
					placeholder='Gonna do...'
					value={inputValue}
					onChange={inputChangeHndler}
					type='text'
				/>
				<Button type='submit'>ADD</Button>
			</Flex>
		</Form>
		</>
	
	)
}







const Form = styled.form`
	width: 80%;
	margin: 3rem 0 2rem 0;
	position: relative;
	.alert {
		width: 90%;
		position: absolute;
		bottom: 45px;
		left: 37px;
		animation: alert ease-in-out 0.2s;
	}
	@keyframes alert {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

export default ToDoForm
