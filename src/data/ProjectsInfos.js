import html from '../assets/html-icon.svg'
import css from '../assets/css-icon.svg'
import js from '../assets/javascript-icon.svg'
import reactJs from '../assets/react-icon.svg'
import bubble from '../assets/bubble-icon.svg'

const ProjectsInfos = [
    {
        name: "MiMovie",
        description: "In this project, the user can see infos about any movie presented in TMDB API, such as trailer, poster, casting. It was built using ReactJS, CSS and HTML. The movie database is provided by TMDB through an API connection, using FETCH API.",
        type: "code",
        demo_url: "https://mimoviee.netlify.app/",
        code_url: "https://github.com/caiomiyaji/mimovie",
        techs: [
            {
                name: "ReactJS",
                image: reactJs,
                percentage: 100
            },
            {
                name: "HTML",
                image: html,
                percentage: 1.6
            },
            {
                name: "CSS",
                image: css,
                percentage: 36.4
            },
            {
                name: "Javascript",
                image: js,
                percentage: 61.5
            }
        ],
        image: "../../../../public/mimovie/mimovie-home-normal.jpg"
    },
    {
        name: "BoatClub",
        description: "This a landing page for a renting boat platform built with HTML CSS and Javascript.",
        type: "code",
        demo_url: "https://caiomiyaji.github.io/boatclub/",
        code_url: "https://github.com/caiomiyaji/boatclub",
        techs: [
            {
                name: "HTML",
                image: html,
                percentage: 30.4
            },
            {
                name: "CSS",
                image: css,
                percentage: 37.0
            },
            {
                name: "Javascript",
                image: js,
                percentage: 32.6
            }
        ],
        image: "../../../../public/boatclub/boatclub-home-normal.jpg"
    },
    {
        name: "Todo List",
        description: "For my first React project, I decided to build a todo-list app to practice. In this app, you may be able to add new tasks, edit them and delete them! It was built with HTML CSS and REACT !",
        type: "code",
        demo_url: "https://caio-todo-list.netlify.app/",
        code_url: "https://github.com/caiomiyaji/todo-list",
        techs: [
            {
                name: "ReactJS",
                image: reactJs,
                percentage: 100
            },
            {
                name: "HTML",
                image: html,
                percentage: 8.2
            },
            {
                name: "CSS",
                image: css,
                percentage: 33.4
            },
            {
                name: "Javascript",
                image: js,
                percentage: 58.4
            }
        ],
        image: "../../../../public/todo-list/todo-list.jpg"
    },
    {
        name: "Ping Pong Game",
        description: "This is my first attempt on creating a web game! This Ping-pong game was built with HTML CSS and JS.",
        type: "code",
        demo_url: "https://caiomiyaji.github.io/ping-pong-game/",
        code_url: "https://github.com/caiomiyaji/ping-pong-game",
        techs: [
            {
                name: "HTML",
                image: html,
                percentage: 13.8
            },
            {
                name: "Javascript",
                image: js,
                percentage: 86.2
            }
        ],
        image: "../../../../public/ping-pong/ping-pong.jpg"
    },
    {
        name: "Sign Up Form",
        description: "This project is a signup form, which I implemented the use of HTML, CSS and JavaScript. This Sign up form has it's own validations",
        type: "code",
        demo_url: "https://caiomiyaji.github.io/signup-form/",
        code_url: "https://github.com/caiomiyaji/signup-form",
        techs: [
            {
                name: "HTML",
                image: html,
                percentage: 22.4
            },
            {
                name: "CSS",
                image: css,
                percentage: 29.9
            },
            {
                name: "Javascript",
                image: js,
                percentage: 47.7
            }
        ],
        image: "../../../../public/signup-form/signup-form.jpg"
    },
    {
        name: "Calculator",
        description: "This is a project of a calculator built based on a simpler version of the windows calculator. With this calculator you can do addition, subtraction, multiplication and division. To build it, I used HTML, CSS and JavaScript",
        type: "code",
        demo_url: "https://caiomiyaji.github.io/calculator/",
        code_url: "https://github.com/caiomiyaji/calculator",
        techs: [
            {
                name: "HTML",
                image: html,
                percentage: 26.0
            },
            {
                name: "CSS",
                image: css,
                percentage: 16.5
            },
            {
                name: "Javascript",
                image: js,
                percentage: 57.5
            }
        ],
        image: "../../../../public/calculator/calculator.jpg"
    },
    {
        name: "Tattu",
        description: "This is a test No-code website built using the Bubble.io platform. This project contains a landing page, login page and a dashboard page. This application was created for Tattoo inkers, that need an easy way of managing their businesses effeciently.",
        type: "nocode",
        demo_url: "https://tattu.bubbleapps.io/version-test",
        code_url: null,
        techs: [
            {
                name: "Bubble",
                image: bubble,
                percentage: 100
            }
        ],
        image: "../../../../public/tattu/tattu-home-normal.jpg"
    },
    {
        name: "Navi",
        description: "This test application was built using the No-code platform Bubble.io. The idea of this project is a marketplace where people can find their dream car to buy it. This project contains a landing page, car's page, search page, login page and profile page",
        type: "nocode",
        demo_url: "https://navi-43296.bubbleapps.io/version-test",
        code_url: null,
        techs: [
            {
                name: "Bubble",
                image: bubble,
                percentage: 100
            }
        ],
        image: "../../../../public/navi/navi-home-normal.jpg"
    },
]

export default ProjectsInfos;