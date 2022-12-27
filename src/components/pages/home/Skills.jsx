import SkillsCard from './SkillsCard';
import { useEffect, useState } from 'react';

import SkillsInfos from '../../../skills/SkillsInfos'

//css
import style from './skills.module.css'

function Skills () {

    let effect = true;

    const [skillsContent, setSkillsContent] = useState([]);

    useEffect(() => {
        if(effect){
            effect = false;
            setSkillsContent(SkillsInfos);
        }
    }, [])

    return(
        <section id="skills"  className={style.skills}>
            <div className={style.content}>
                <h2>My skills.</h2>
                <div className={style.skills_list}>
                    {Array.from(skillsContent)?.map((skill, index) => (
                        <SkillsCard key={index} skill={skill.name} image={skill.image}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;