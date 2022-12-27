import style from './skillsCard.module.css'

function SkillsCard ({skill, image}) {
    return(
        <div className={style.skill_card}>
            <div className={style.skill_img}>
                <img src={image} alt={skill} />
            </div>
            <p>{skill}</p>
        </div>
    )
}

export default SkillsCard;