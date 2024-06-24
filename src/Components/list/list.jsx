import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './list.module.css'


const List = props => {
	const {type, title, tasks, addNewTask, setTasks} = props
	const [isFormVisible, setFormVisible] = useState(false)
	
	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

	const handleChange = (e) => {
		const newStatus = e.target.value
		const updatedTasks = tasks.map(task => {
				return {...task, status: newStatus}
		})
		setTasks(updatedTasks)
	}

	console.log(Object.values(LIST_TYPES))

	
return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{LIST_COPY[type]}</h2>
			{tasks.map (task=> {
				return (
					<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
					<div key={task.id} className={css.task}>
					{task.title}	
					</div>
					</Link>
				)
			})}
 			<button onClick={handleAddNewClick} className={css.addButton}>+ Add new task</button>
			
			{(title === 'Backlog') ? (
			<>
			{isFormVisible && (<FormAddNewTask  addNewTask={addNewTask} />)}
			</>
		    ):(
			<>
			{isFormVisible && (       
			<select className={css.select} onChange={handleChange}>
			<option>Select task</option>
		   {tasks
		   .filter(task=> Object.values(LIST_TYPES).indexOf(task.status) < Object.values(LIST_TYPES).indexOf(LIST_COPY[type]))
		   .map(task => {
						return <option key={task.id} value={task.id}>{task.title}</option>
					})}
		    </select>)}
			</>
			)}
			
		</div>
	)
}

export default List
