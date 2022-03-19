import ReactDOM from 'react-dom'
import ButtonUi from './UI/Button'
import Input from './UI/Input'
import Backdrop from './UI/Backdrop'
import { useState } from 'react'
import { Alert, Button } from '@mui/material'
import styled from 'styled-components'
import Flex from './UI/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions ,editTasks} from '../store/todo-slice'
import { BsFillBrightnessHighFill,BsFillMoonStarsFill } from 'react-icons/bs'
import { useTheme } from '../hooks/use-theme'
import Loading from './UI/loading'

const Res = () => {
	const {theme,setTheme} = useTheme()
	const {task,status} = useSelector(state=>state.todo)
	console.log(status);

	const dispatch = useDispatch()
	const [isValid, setIsValid] = useState(true)
	const [editTask, setEditTask] = useState(task.task)

	const editInputHandler = (e) => {
		if (editTask.trim() !== '') {
			setIsValid(true)
		}
		setEditTask(e.target.value)
	}

	const editHandler = () => {
		if (editTask.trim() === '') {
			setIsValid(false)
			return
		}
		dispatch(editTasks({task : editTask ,id : task.id}))
	}

	return ReactDOM.createPortal(
		<EditBlock>
			<Flex direction = {'column'} align = {'center'} justify = {'space-around'}>
				<div>
					{!isValid && (
						<Alert severity='error' className='alertEdit'>
							you filled in the fields!
						</Alert>
					)}
					<Backdrop />
					<h1 className='editzogo'>Редактировать задач</h1>
					{status === 'loading' && <Loading className = 'editLoader'/>}
					<Input
						isValid={isValid}
						className='input'
						type='text'
						value={editTask}
						onChange={editInputHandler}
					/>
				</div>
				<Flex direction={'row'} justify={'center'} align = {'center'}>
					<ButtonUi onClick={editHandler}>save
					</ButtonUi>
					<ButtonUi onClick = {()=>dispatch(todoActions.hideEdit())}>cancel</ButtonUi>
				</Flex>
			</Flex>
			<Button id = 'theme' onClick = {()=>theme === 'light' ? setTheme('dark') : setTheme('light')} >{theme === 'dark' ? <BsFillBrightnessHighFill/> : <BsFillMoonStarsFill/>}</Button>
		</EditBlock>,
		document.getElementById('edit-root'),
	)
}
const EditBlock = styled.div`
	background-color: var( --background-vidjet);
	transition:background-color 200ms linear;
	position: absolute;
	top: 20%;
	left: 25%;
	display: flex;
	flex-direction: column;
	animation: edit ease-in-out 0.5s;
	z-index: 120;
	padding:2rem 5rem;
	border-radius: 5px;
	animation: showEdit ease-in-out 0.5s;

	.editLoader{
		top:4.5rem;
		left: 17.7em;
	}


	input {
		width: 400px;
		margin-bottom: 60px;
		box-shadow: var(--inp-edit-box-shadow);
	}
	input:focus{
		box-shadow: var(--inp-focus-edit-box-shadow);
	}
	h1 {
		color: var(--color-h1);
		margin-bottom: 70px;
		text-align: center;
	}
	button {
		margin-right: 10px;
	}
	button:hover{
		box-shadow:var( --btn-edit-hover-b-shadow);
	}

	.alertEdit {
		position: absolute;
		top: 86px;
		left: 80px;
		width: 400px;
		text-align: center;
		animation: ALERT ease-in-out 0.5s;
	}
	@keyframes ALERT {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes showEdit {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	#theme{
		position: absolute;
		transform: translate(410px, -25px);
	}
	#theme:hover{
		background-color: none;
		box-shadow: none;
	}
`

export default Res
