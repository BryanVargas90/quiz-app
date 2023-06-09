import {Container, Row, Col, Button} from "react-bootstrap";

export default function QuizResult ( {score, quizLength, handleReset}) {
 
    return (

    <section>
    <Container className="quiz-result">
        <Row>
        <Col>
    <h2>Quiz result</h2>
    <p>Your scored {score} out of {quizLength}.</p>
    <Button onClick={handleReset}>Reset</Button>
        </Col>
        </Row>
        </Container>

    </section>
 )
}     
