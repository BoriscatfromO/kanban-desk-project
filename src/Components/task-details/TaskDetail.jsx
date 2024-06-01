import { useMatch} from 'react-router-dom'
import css from './TaskDetail.module.css'

const TaskDetail = (props) => {
    const match = useMatch()
	const {taskId} = match.params
	const {tasks} = props
	const task = tasks.find(task => task.id === taskId)

	return (
			<div className={css.wrapper}>
                <div className={css.header}>
                    <h2 className={css.title}>{task.title}</h2>
				</div>
			</div>
	)
}

export default TaskDetail