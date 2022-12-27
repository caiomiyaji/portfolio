//css
import style from './header.module.css'

function Header () {
    return(
        <header>
            <div className={style.header_container}>
                <span className={style.logo}>宮路</span>
                <div className={style.links_container}>
                    <a className={style.links} href="#about">About</a>
                    <a className={style.links} href="#techs">Techs</a>
                    <a className={style.links} href="#projects">Projects</a>
                </div>
            </div>
        </header>
    )
}

export default Header;