import { useEffect, useState } from 'react';
import ProjectContainer from './ProjectContainer';
import ProjectsInfos from '../../../data/ProjectsInfos';

//css
import style from './projects.module.css';

function Projects () {

    let effect = true;

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        if(effect){
            effect = false;
            setProjectList(ProjectsInfos);
        }
    }, [])

    return(
        <section id="projects" className={style.projects}>
            <div className={style.content}>
                <h2>My projects.</h2>
                <div className={style.projects_list}>
                    {projectList?.map((project, index) => (
                       <ProjectContainer key={index} project={project}/> 
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects