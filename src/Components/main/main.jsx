import {Routes, Route} from 'react-router-dom'
import Board from '../board/Board'
import TaskDetail from '../task-details/TaskDetail'
import css from './main.module.css'

const Main = (props) => {
	return (
		<main className={css.main}>
			<Routes>
			<Route exact path={'/'} element={ <Board {...props} />} />
        	<Route path={'/tasks/:taskId'} element={<TaskDetail {...props} />} />
			</Routes>
		</main>
	)
}

export default Main