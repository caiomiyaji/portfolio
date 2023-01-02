import SkillsCard from './SkillsCard';
import { useEffect, useState } from 'react';

import SkillsInfos from '../../../data/SkillsInfos'

//css
import style from './skills.module.css'

function Skills ({skillComponent, skillTitle, lastSkill}) {

    let effect = true;

    const [skillsContent, setSkillsContent] = useState([]);

    useEffect(() => {
        if(effect){
            effect = false;
            setSkillsContent(SkillsInfos);
        }
    }, [])

    return(
        <section id="skills" ref={skillComponent}  className={style.skills}>
            <span className={style.background}>能力</span>
            <span className={`${style.background} ${style.mokuhyou}`}>目標</span>
            <div className={style.content}>
                <h2 ref={skillTitle}>My skills.</h2>
                <div className={style.skills_list}>
                    {Array.from(skillsContent)?.map((skill, index, array) => (
                        <SkillsCard key={index} skill={skill.name} image={skill.image} lastSkill={lastSkill} />
                    ))}
                    <div className={style.skills_list_padding}></div>
                </div>
            </div>
        </section>
    )
}

export default Skills;