import {useState, useEffect} from "react";
import Search from "../Search/Search";
import Poetry from "../Poetry/Poetry";
import {Row} from "react-bootstrap";

const Home =()=>{
    const [poetry, setPoetry] = useState();

    const [searchTerm, setSearchTerm] = useState();  //searcho state
    const handleSearch = (term)=>{  // console.log('is home komponento ' + term)
        setSearchTerm(term)
    }
    useEffect(()=>{
        if(searchTerm) {
           try {
                fetch(`https://poetrydb.org/${searchTerm.criteria}/${searchTerm.term}`)
                    .then(response => response.json())
                    .then(data => setPoetry(data))
           } catch (msg) {
                console.log(msg)
            }
        }
    },[searchTerm])  //<--prasuka efekta su nauja reiksme, tipo tikrina

    console.log("is tevinio: ", searchTerm);
    searchTerm && console.log('poezija is tevinio',poetry)
    return(
        <div>
            <Search onSearch ={handleSearch}/>

            <div className="container">
                <h2>Results</h2>
                { searchTerm && <Row>
                   {poetry? (poetry.map(poems=><Poetry title = {poems.title} author={poems.author} lines={poems.lines}/>)
                   )
                       :
                       (<p>Loading...</p>)

                   }
                </Row>}
            </div>
        </div>
    )
}

export default Home