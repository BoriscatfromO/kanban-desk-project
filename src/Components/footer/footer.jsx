import css from './footer.module.css'

function Footer(props) {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
			</div>
			<div className={css.copy}>
				Created by <a href='https://github.com/ytokarevskaya' target='_blank' rel='noreferrer'>@ytokarevskaya</a>
			</div>
		</footer>
	)
}

export default Footer