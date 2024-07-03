import {LIST_TYPES, LIST_COPY} from '../../config'
import uniqid from 'uniqid'
import List from '../list/list'
import css from './Board.module.css'

const Board = (props) => {
    const {tasks, setTasks} = props

    const addNewTask = (title, description)=> {
		const newTask = {
			id: uniqid(),
			title: title,
			description: description,
			created: new Date().toISOString(),
			status: LIST_TYPES.BACKLOG,
		}
		setTasks([...tasks, newTask]);
	}
 


    return (
        <div className={css.board}>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                const handleChange = (e) => {

                    const taskId = e.target.value
                    const task = tasks.find(task => task.id === taskId)
                    const updatedTasks = tasks.map(task => {
                        if (task.id === taskId) {
                            return {...task, status: type}
                        }
                        return task
                    })
                    setTasks(updatedTasks)
                    console.log(updatedTasks)
                }
                return (
                    <List key={type} type={type} title={LIST_COPY[type]} Alltasks={tasks} listTasks={listTasks || []} addNewTask={addNewTask} handleChange={handleChange}/>
                )
            }
            )
            
            }
        </div>
    )
}

export default Board