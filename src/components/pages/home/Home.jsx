import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import { useEffect, useRef, useState } from 'react';

//css
import style from './home.module.css'

function Home () {

    let effect = true;

    const [projectVisible, setProjectVisible] = useState();
    const [skillVisible, setSkillVisible] = useState();
    const [lastSkillVisible, setLastSkillVisible] = useState();

    const container = useRef();
    const projectComponent = useRef();
    const skillComponent = useRef();
    const projectTitle = useRef();
    const skillTitle = useRef();
    const lastSkill = useRef();

    useEffect(() => {
        if(effect){
            effect = false;

            const observer = new IntersectionObserver(scroll, {threshold: 0.5});
            const observer2 = new IntersectionObserver(scroll, {threshold: 0.5});
            const observer3 = new IntersectionObserver(scroll, {threshold: 0.5});
            observer.observe(projectComponent.current);
            observer2.observe(skillComponent.current);
            window.addEventListener('load', () => {
                observer3.observe(lastSkill.current);
            })
        }
    }, [])

    const scroll = (entries) => {
        const [entry] = entries
        if (entry.target === projectComponent.current) setProjectVisible(entry.isIntersecting);
        if (entry.target === skillComponent.current) setSkillVisible(entry.isIntersecting);
        if (entry.target === lastSkill.current) setLastSkillVisible(entry.isIntersecting);
    }

    const handleWheel = (e) => {
        const rectProject = projectTitle.current.getBoundingClientRect();
        const rectSkill = skillTitle.current.getBoundingClientRect();

        if(!projectVisible && !skillVisible){
            if(e.deltaY > 0) container.current.scrollLeft += window.innerWidth;
        }else if(skillVisible){
            if(rectSkill.top > 0 && e.deltaY < 0) container.current.scrollLeft -= window.innerWidth;
            if(lastSkillVisible && e.deltaY > 0) container.current.scrollLeft += window.innerWidth;
        }else if(projectVisible){
            if(rectProject.top > 0 && e.deltaY < 0) container.current.scrollLeft -= window.innerWidth;
        }
    }

    return(
        <main className={style.home_page} ref={container} onWheel={(e) => handleWheel(e)}>
            <About />   
            <Skills skillComponent={skillComponent} skillTitle={skillTitle} lastSkill={lastSkill}/>   
            <Projects projectComponent={projectComponent} projectTitle={projectTitle}/>   
        </main>
    )
}

export default Home;