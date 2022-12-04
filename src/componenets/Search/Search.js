import {Card, Form, Button} from "react-bootstrap";
import {useState} from "react";
const Search=(props)=>{
    const [term, setTerm] = useState({
        criteria:'',
        term:''
    })

    const handleChange = (e)=>{
        setTerm(
            {
                ...term,
                [e.target.name]:e.target.value
            }
        )
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onSearch(term)
    }

    console.log('is seracho komponento', term)
    return(
        <Card>
            <Card.Header>Poetry search</Card.Header>
            <Card.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <select className="form-select" aria-label="Default select example" name="criteria" onChange={handleChange} value={term.criteria}>
                            <option defaultValue>Open this select menu to search</option>
                            <option value="author">Author</option>
                            <option value="title">Title</option>
                            <option value="lines">Line</option>
                        </select>
                    </Form.Group>
                    {(term.criteria !== "" && term.criteria !== "Open this select menu to search") && <div>
                        <Form.Group className="mt-2">
                            <input type="text" placeholder="Search..." name="term" value={term.search} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" variant="primary" className="mt-2">Search</Button>
                        </Form.Group>
                    </div>}
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Search