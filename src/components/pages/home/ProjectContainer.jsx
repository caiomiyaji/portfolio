//icons
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

//css
import style from './projectContainer.module.css'

function ProjectContainer ({index, project}) {
    return(
        <div className={index % 2 === 1 ? `${style.project_container} ${window.innerWidth > 1500 && style.project_container_reverse}` : style.project_container}>
            <div className={style.left}>
                <img src={project.image} alt={project.name} />
            </div>
            <div className={style.right}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <h4>Skills applied:</h4>
                <div className={style.techs}>
                    {project.techs?.map((tech, index) => (
                        <div key={index} className={style.current_tech}>
                            <img src={tech.image} alt={tech.name} />
                        </div>
                    ))}
                </div>
                <div className={style.buttons}>
                    <button className={style.demo_button} onClick={() => window.open(`${project.demo_url}`, '_blank')}><CgWebsite className={style.demo_icon}/>Demo</button>
                    {project.code_url && <button className={style.code_button} onClick={() => window.open(`${project.code_url}`, '_blank')}><FaGithub className={style.code_icon}/>Code</button>}
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;