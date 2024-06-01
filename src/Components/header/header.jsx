import avatar from '../assets/user-avatar.svg'
import vector from '../assets/Vector.svg'
import css from './header.module.css'

function Header() {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Simple Kanban Board</h1>
            <div className={css.menu}>
              <img className={css.avatar} src={avatar} alt='avatar' />
              <img className={css.vector} src={vector} alt='vector' />
            </div>
		</header>
	)
}

export default Header