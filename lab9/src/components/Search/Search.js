import "./Search.css"
import binoculars from "./img/binoculars.svg"
import { useRef } from "react";

export function Search(props) {
    const searchInput = useRef(null);

    function handleError() {
        alert("Try again, no enemy with this username(");
    }

    function download(e) {
        fetch("https://api.github.com/users/${searchInput.current.value}", {
        Authorization: process.env.REACT_APP_API_KEY
        }).then((data)=>data.json()).then((res)=> {
            // console.log(res);
            if (res.cod === "404") {
                handleError();
            } else {
                props.handle(res);
            }
        });   
    }

    function handleSearch(e) {
        download(e);
    }

    return (
        <div className="content">
            <p>
                Do whatever you want. We are not interested in your intenstions.
            </p>
            <div className="search-box">
                <input ref={searchInput} id="searchInput" placeholder="Enemy username here..."/>
                <img onClick={(e) => handleSearch(e)} src={binoculars} alt=""/>
            </div>
        </div>
    );
}