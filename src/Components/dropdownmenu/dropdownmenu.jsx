import css from './dropdownmenu.module.css'

function Dropdownmenu() {
    return (
<nav className={css.dropdownmenu} >
			   <ul className={css.menu__list}>
                 <li className={css.menu__item}>
                  <span>Profile</span>
                </li>
                <li className={css.menu__item}>
                  <span>Log Out</span>
                </li>
              </ul>
			 </nav>
    )
}

export default Dropdownmenu