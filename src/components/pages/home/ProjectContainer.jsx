//css
import style from './projectContainer.module.css'

function ProjectContainer ({project}) {
    console.log(typeof project.images)
    return(
        <div className={style.project_container}>
            <h3>{project.name}</h3>
            <img src={project.images} alt={project.name} />
        </div>
    )
}

export default ProjectContainer;