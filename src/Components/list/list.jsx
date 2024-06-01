import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './list.module.css'

const List = props => {
	const {type, title, tasks, addNewTask} = props
	const [isFormVisible, setFormVisible] = useState(false)
	
	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}
return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
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
			{isFormVisible && (<FormAddNewTask  addNewTask={addNewTask} />)}
		</div>
	)
}

export default List