import NavigationLinks from "../nav/NavigationLinks"
import { Container } from "react-bootstrap"

export default function About() {
    return (
        <>
            <NavigationLinks />
            <Container>
                <p>
                    Hello there! I'm <strong>Lindon</strong>, a passionate programmer with a keen interest in crafting digital solutions and bringing ideas to life through code.
                </p>

                <p>
                    My journey into the world of programming began with a fascination for how technology can empower people and businesses. Over the years, I've had the opportunity to work on a diverse range of projects, from developing sleek websites to building robust backend systems. Each project has been a learning experience, pushing me to expand my knowledge and refine my craft. <strong>But learning never ends for me</strong>
                </p>

                <h1>Get in Touch</h1>

                <p>
                    I'm always eager to connect with fellow programmers, tech enthusiasts, and potential collaborators. If you have a project idea, want to discuss a technical challenge, or just want to say hello, feel free to reach out! You can contact me via email at <strong>lindonabarra@gmail.com</strong>
                </p>

                <p>
                    Thank you for taking the time to learn a bit about me. I look forward to the opportunity to work together and make great things happen!
                </p>
            </Container>
        </>
    )
}

