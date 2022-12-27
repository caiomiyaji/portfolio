import About from './About';
import Techs from './Techs';
import Projects from './Projects';

//css
import style from './home.module.css'

function Home () {
    return(
        <main className={style.home_page}>
            <About />   
            <Techs />   
            <Projects />   
        </main>
    )
}

export default Home;