import style from './about.module.css'
import profile from '../../../assets/caio.jpg'

function About () {
    return(
        <section id="about" className={style.about}>
            <span className={style.background}>愛</span>
            <span className={`${style.background} ${style.shigoto}`}>仕事</span>
            <span className={`${style.background} ${style.shoujiki}`}>正直</span>
            <div className={style.content}>
                <div className={style.left}>
                    <h2>Hi! 🖖</h2>
                    <h2>I'm Caio Miyaji!</h2>
                    <p>I'm a Frontend Developer based in Brazil. I build projects using traditional programming languages and also no-code platforms!</p>
                    <a href="mailto:c.hidekimiyaji@gmail.com"><button>Contact me!</button></a>
                </div>
                <div className={style.right}>
                    <img src={profile} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;