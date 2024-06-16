import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './list.module.css'
import Selectmenu from '../selectmenu/selectmenu'

const List = props => {
	const {type, title, tasks, addNewTask, options} = props
	const [isFormVisible, setFormVisible] = useState(false)
	
	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}
	console.log (tasks)
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

			{(title === 'Backlog') ? (
			<>
			{isFormVisible && (<FormAddNewTask  addNewTask={addNewTask} />)}
			</>
		    ):(
			<>
			{isFormVisible && (       
			<select className={css.select}>
		   {Object.values(LIST_TYPES).map(list => {
						return <option key={list} value={options}>{options}</option>
					})}
		    </select>)}
			</>
			)}
			
		</div>
	)
}

export default List
