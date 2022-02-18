import { Card } from "react-bootstrap"

const PillarCard = ({weekDay, degree, weatherStatus, sideCard = false }) => {
    return(
        <Card className={`pillarCard ${sideCard ? 'sided' : ''}`}>
            <Card.Body>

            </Card.Body>
        </Card>
    )
}