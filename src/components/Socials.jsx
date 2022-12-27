import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

//css
import style from './socials.module.css'

function Socials () {
    return(
        <div className={style.socials_container}>
            <a href="https://www.linkedin.com/in/caio-hideki-miyaji-86a76515b/" target="_blank" className={style.linkedin}><BsLinkedin /></a>
            <a href="https://github.com/caiomiyaji" target="_blank" className={style.github}><FaGithubSquare /></a>
        </div>
    )
}

export default Socials;