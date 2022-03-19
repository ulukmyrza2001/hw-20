import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteTodo, todoActions, toggleStatus } from '../store/todo-slice'
import Button from './UI/Button'
import Checbox from './UI/Checkbox'
import Flex from './UI/Flex'
import Res from './Res'

const ToDoList = () => {
	const {todos,showEditModal,statusDelete} = useSelector(state=>state.todo)
	const dispatch = useDispatch()

	const deleteHandler = (id) => dispatch(deleteTodo(id))

	const checkedHandler = (id) => dispatch(toggleStatus(id))

	let content = <Message>No tasks found 📝</Message>

	if (todos.length > 0) {
		content = (
			<List>
				{showEditModal && <Res/>}
				{todos.map((el) => (
					<li key={el.id}>
						<Checbox
							onChange={() => checkedHandler(el.id)}
							type='checkbox'
							checked={el.completed}
						/>
						<label className={!el.completed ? 'task' : 'done'}>
							{el.title}
						</label>
						<Button className = 'btnEdit' onClick = {()=>dispatch(todoActions.showEdit({id : el.id,task : el.title}))}>✍</Button>
						<Button onClick={() => deleteHandler(el.id)}>DELETE</Button>
					</li>
				))}
			</List>
		)
	}
	return <Flex justify={'center'}>{content}</Flex>
}

const List = styled.ul`
	width: 82.5%;
	li {
		width: 100%;
		display: grid;
		grid-template-columns: 0.5fr 3fr 0.5fr 1fr;
		grid-column-gap: 5px;
		align-items: center;
		margin-top: 20px;
		background-color:var( --background-vidjet);
		transition:background-color 200ms linear;
		color: var(--color);
		font-size: 18px;
		padding: 8px;
		border-radius: 5px;
		animation: YES ease-in-out 0.5s;
		button {
			opacity: 1;
			cursor: pointer;
		}
		button:hover {
			box-shadow: var( --btn-list-del-hover-b-shodow);
		}
		.btnEdit{
			width: 48px;
			padding: 0.5rem 0.5rem;
			background-color:var( --btn-list-edit-hover-backround);
		}
		.done {
			text-decoration: line-through;
		}
		.task,
		.done {
			overflow: hidden;
		}
	}
	@keyframes YES {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
const Message = styled.div`
	color: rgb(95, 121, 160);
	margin-top: 20px auto;
	font-size: 30px;
	font-weight: bold;
	width: 680px;
	height: 100px;
	padding: 1.4rem;
	background-color: var( --background-vidjet);
	transition:background-color 200ms linear;
	text-align: center;
	border-radius: 5px;
	box-shadow: 0 0 15px rgba(0,0,0,0.5);
	animation: noTask ease-in-out 0.4s;

	@keyframes noTask {
	  0%{
		  opacity: 0;
	  }	100%{
		  opacity: 1;
	  }
	}
`
export default ToDoList
