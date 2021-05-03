import "./Search.css"
import {ReactComponent as Binoculars} from "./img/binoculars.svg"
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const Search: React.FC = () => {
    const searchInput = useRef<HTMLInputElement>(null);
    const searchButton = useRef<SVGSVGElement>(null);
    const {setUser} = useActions()
    const history = useHistory()

    function handleSearch() {
        if (searchInput.current!.value === "") {
            alert("Go write something!")
        } else {
            setUser(searchInput!.current!.value)
            history.push("/info")
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="content">
            <p>
                Do whatever you want. We are not interested in your intenstions.
            </p>
            <div className="search-box">
                <input ref={searchInput} onKeyDown={(e)=>handleKeyDown(e)} placeholder="Put username here..." autoFocus/>
                <Binoculars  onClick={() => handleSearch()} id="binoculars" ref={searchButton}/>
            </div>
        </div>
    );
}
export default Search