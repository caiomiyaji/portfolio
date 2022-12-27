import About from './About';
import Skills from './Skills';
import Projects from './Projects';

//css
import style from './home.module.css'

function Home () {
    return(
        <main className={style.home_page}>
            <About />   
            <Skills />   
            <Projects />   
        </main>
    )
}

export default Home;