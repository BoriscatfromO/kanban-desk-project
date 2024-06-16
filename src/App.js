import { useState, useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/header/header'
import Footer from './Components/footer/footer'
import Main from './Components/main/main'
import List from './Components/list/list'

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)
  const count = tasks.filter(task => task.status === 'backlog').length 
  const count1 = tasks.filter(task => task.status === 'finished').length
	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

  return (
	<BrowserRouter>
		<div className='wrapper'>
				<Header />
				<Main tasks={tasks} setTasks={setTasks} />
				<Footer count ={count} count1={count1}/>
		</div>
	</BrowserRouter>
  )
}

export default App