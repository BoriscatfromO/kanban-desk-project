import css from './footer.module.css'
import {LIST_TYPES, LIST_COPY} from '../../config'


function Footer(props) {
	const {count, count1} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				<p className={css.count}>Active tasks: {count}</p>
				<p className={css.count}>Finished tasks: {count1}</p>
			</div>
			<div className={css.copy}>
				Kanban board by Ann Nazarenkova, 2024 
			</div>
		</footer>
	)
}

export default Footer