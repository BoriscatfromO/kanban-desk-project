import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/header/header'
import Footer from './Components/footer/footer'
import Main from './Components/main/main'
import data from './mock.json'

function App() {
	const [tasks, setTasks] = useState(data)
  return (
	<BrowserRouter>
		<div className='wrapper'>
				<Header />
				<Main tasks={tasks} setTasks={setTasks} />
				<Footer tasks={tasks} />
		</div>
	</BrowserRouter>
  )
}

export default App