import style from './skillsCard.module.css'

function SkillsCard ({skill, image, lastSkill}) {
    return(
        <div className={style.skill_card} ref={lastSkill}>
            <div className={style.skill_img}>
                <img src={image} alt={skill} />
            </div>
            <p>{skill}</p>
        </div>
    )
}

export default SkillsCard;