import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import styled from 'styled-components'
import Flex from './components/UI/Flex'
import { useTheme } from './hooks/use-theme'
import { Button } from '@mui/material'
import { BsFillBrightnessHighFill,BsFillMoonStarsFill } from 'react-icons/bs'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchTodos } from './store/todo-slice'
import Loading from './components/UI/loading'

function App() {
	const {theme,setTheme} = useTheme()
	const {status} = useSelector(state=>state.todo)
	const dispatch = useDispatch()
	useEffect(()=>{
      dispatch(fetchTodos())
	},[dispatch])
	return (
		<Wrapper>
			<h1>To Do...</h1>
			<Flex direction={'column'} align={'center'}>
				<ToDoForm />
                 {status === 'loading' && <Loading/> }
				<ToDoList />
			</Flex>
			<Button id = 'theme' onClick = {()=>theme === 'light' ? setTheme('dark') : setTheme('light')} >{theme === 'dark' ? <BsFillBrightnessHighFill/> : <BsFillMoonStarsFill/>}</Button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 1000px;
	margin: 0 auto;
	padding: 2rem;
	h1 {
		color: rgba(36, 29, 27, 0.8);
		font-weight: bold;
		text-shadow: 0 0 0.5px salmon;
		margin-bottom: 20px;
		animation: zogo ease-in 1s;	
		text-align: center;
	}
	#theme{
	    position: absolute;
		top: 2rem;
		left: 90%;
		background-color: var(--button-background-color);
	}
	
	 
`

export default App
