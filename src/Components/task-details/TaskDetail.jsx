import { useParams, Link } from 'react-router-dom'
import css from './TaskDetail.module.css'

const TaskDetail = (props) => {
    const { taskId } = useParams();
	const {tasks} = props
	const task = tasks.find(task => task.id === taskId)

	return (
			<div className={css.wrapper}>
            <Link to='/' className={css.homeLink}>&#x2715;</Link>
                {task ? (
                <>
                <div className={css.header}>
                    <h2 className={css.title}>{task.title}</h2>
				</div>
                <p>{task.description || 'This task has no description'}</p>
                </>
                ):(
                    <h2>Task with id {taskId} not found</h2>
                )}
			</div>
	)
}

export default TaskDetail