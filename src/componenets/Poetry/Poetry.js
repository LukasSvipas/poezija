import {Card} from "react-bootstrap";
const Poetry=(props)=>{
    return(
        <Card className="my-2 bg-light text-dark">
            <Card.Body>
                <div>
                    <p className="text-success">Author: {props.author}</p>
                    <p className="text-warning">Title: {props.title}</p>
                    <p className="text-info">Lines: {props.lines}</p>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Poetry