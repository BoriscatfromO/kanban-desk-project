import { useParams, useState, Link } from 'react-router-dom'
import css from './TaskDetail.module.css'

const TaskDetail = (props) => {
    const { taskId } = useParams();
	const {tasks, Alltasks, setTasks} = props
	const task = tasks.find(task => task.id === taskId)

	const handleChange = (e) => {
        const NewDescription = e.target.value 
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {...task, description:NewDescription}
			}
			return task
		})
		setTasks(updatedTasks)
	}
	return (
			<div className={css.wrapper}>
            <Link to='/' className={css.homeLink}>&#x2715;</Link>
                {task ? (
                <>
                <div className={css.header}>
                    <h2 className={css.title}>{task.title}</h2>
				</div>
                <textarea className={css.textarea} onChange={handleChange}>{task.description || 'This task has no description'}</textarea>
                </>
                ):(
                    <h2>Task with id {taskId} not found</h2>
                )}
			</div>
	)
}

export default TaskDetail