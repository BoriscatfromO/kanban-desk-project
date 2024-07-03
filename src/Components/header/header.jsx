import { useState } from 'react'
import avatar from '../assets/user-avatar.svg'
import vector from '../assets/Vector.svg'
import arrow from '../assets/arrow.svg'
import css from './header.module.css'
import Dropdownmenu from '../dropdownmenu/dropdownmenu'

function Header() {
	const [isOpen, setOpen] = useState(false)
	const handleAddNewClick = () => {
		setOpen(!isOpen)
	}

	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
            <div className={css.menu}>
              <img className={css.avatar} src={avatar} alt='avatar' />
              <button className={css.button} onClick={handleAddNewClick}>
				{isOpen ? (<img className={css.arrow} src={arrow} alt='arrow' />) : <img className={css.vector} src={vector} alt='vector' /> }
			  </button>
			  {isOpen && (<Dropdownmenu />)}
            </div>
		</header>
	)
}

export default Header