import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

//css
import style from './socials.module.css'

function Socials () {
    return(
        <div className={style.socials_container}>
            <BsLinkedin className={style.linkedin}/>
            <FaGithubSquare className={style.github}/>
        </div>
    )
}

export default Socials;