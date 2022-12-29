//css
import style from './header.module.css'

function Header () {
    return(
        <header>
            <div className={style.header_container}>
                <a href="#about"><span className={style.logo}>宮路</span></a>
                <div className={style.links_container}>
                    <a className={style.links} href="#about">About</a>
                    <a className={style.links} href="#skills">Skills</a>
                    <a className={style.links} href="#projects">Projects</a>
                </div>
            </div>
        </header>
    )
}

export default Header;