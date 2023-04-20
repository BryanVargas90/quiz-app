import { Container, Row, Col} from "react-bootstrap"
export  default function Footer(){

    const currrentYear = new Date ().getFullYear()
    const githubLink = "https://github.com/bryanvargas90/quiz-app"
    
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
            <p><small>&copy; {currrentYear}</small>
            <br />
            <a href={githubLink} target="blank" rel="noreferrer">Code in Github</a></p>
            </Col>
            </Row>
            </Container>
        </footer>
    )
}