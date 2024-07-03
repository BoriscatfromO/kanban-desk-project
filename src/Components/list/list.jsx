import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './list.module.css'


const List = props => {
	const {type, title, Alltasks, listTasks, addNewTask, setTasks, handleChange} = props
	const [isFormVisible, setFormVisible] = useState(false)
	
	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{type}</h2>
			{listTasks.map (task=> {
				return (
					<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
					<div key={task.id} className={css.task}>
					{task.title}	
					</div>
					</Link>
				)
			})}
 			<button onClick={handleAddNewClick} className={css.addButton}>+ Add card</button>
			{isFormVisible &&
			<>
			{type === LIST_TYPES.BACKLOG && <FormAddNewTask  addNewTask={addNewTask} />}
			</> }
				<div className={css.selectform}>
			{isFormVisible && 
			<>
			{Object.values(LIST_TYPES).indexOf(type) > 0 && (        
			<select className={css.select} onChange={handleChange}>
			<option>Select task</option>
		   {Alltasks
		   .filter(task=> Object.values(LIST_TYPES).indexOf(task.status) < Object.values(LIST_TYPES).indexOf(type))
		   .map(task => (
					 <option className={css.option} key={task.id} value={task.id}>{task.title}</option>
					))}
		    </select>)}
		    </>
             } 
			 </div>
		</div>
	)
}

export default List
