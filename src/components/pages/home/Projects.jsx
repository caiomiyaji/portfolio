import { useEffect, useState } from 'react';
import ProjectContainer from './ProjectContainer';
import ProjectsInfos from '../../../data/ProjectsInfos';

//css
import style from './projects.module.css';

function Projects ({projectComponent, projectTitle}) {

    let effect = true;

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        if(effect){
            effect = false;
            setProjectList(ProjectsInfos);
        }
    }, [])

    return(
        <section id="projects" ref={projectComponent} className={style.projects}>
            <span className={style.background}>勇気</span>
            <span className={`${style.background} ${style.biyou}`}>美容</span>
            <div className={style.content}>
                <h2 ref={projectTitle}>My projects.</h2>
                <div className={style.projects_list}>
                    {projectList?.map((project, index) => (
                       <ProjectContainer key={index} index={index} project={project}/> 
                    ))}
                    <div className={style.project_list_padding}></div>
                </div>
            </div>
        </section>
    )
}

export default Projects