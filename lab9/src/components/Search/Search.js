import "./Search.css"
import binoculars from "./img/binoculars.svg"
import { useRef, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

export function Search(props) {
    const searchInput = useRef(null);
    const searchButton = useRef(null);
    const [username, SetUsername] = useState();
    const history = useHistory();

    function handleError() {
        alert("Try again, no user with this username(");
    }

    useEffect(() => {
        if (username === undefined) return;
        if (username === "") {
            handleError();
            return;
        }
        fetch("https://api.github.com/users/" + username, {
        Authorization: process.env.REACT_APP_API_KEY
        }).then((data)=>data.json()).then((res)=> {
            if (res.message === "Not Found") {
                handleError();
            } else {
                props.handle(res);
                history.push("/info");
            }
        });
    }, [username]);

    function handleSearch(e) {
        if (e.target === searchButton.current || e.code === "Enter") {
            SetUsername(searchInput.current.value);
        }
    }

    return (
        <div className="content">
            <p>
                Do whatever you want. We are not interested in your intenstions.
            </p>
            <div className="search-box">
                <input ref={searchInput} onKeyDown={(e)=>handleSearch(e)} placeholder="Put username here..." autoFocus/>
                <img ref={searchButton} onClick={(e) => handleSearch(e)} src={binoculars} alt=""/>
            </div>
        </div>
    );
}