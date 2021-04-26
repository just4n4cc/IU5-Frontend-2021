import "./UserInfo.css"
import {ReactComponent as Door} from "./img/door.svg"
import {useHistory} from "react-router-dom"

export function UserInfo(props) {
    const history = useHistory();
    function handleClick(e) {
        history.push("/");
    }
    return (
        <div className="info">
            <div className="lhs">
                <p>Username: <a target="_blank" href={props.data.html_url}>{props.data.login}</a></p>
                <p>Name: {props.data.name === null ? "————" : props.data.name}</p>
                <p>Email: {props.data.email === null ? "————" : props.data.email}</p>
                <p>Company: {props.data.company === null ? "————" : props.data.company}</p>
                <p>Location: {props.data.location === null ? "————" : props.data.location}</p>
                <p>On platform since: {props.data.created_at.slice(0,10)}</p>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
            </div>
            <div className="rhs">
                <img src={props.data.avatar_url} alt=""/>
                <Door onClick={(e)=>handleClick(e)} id="door" alt="Back"/>
            </div>
        </div>
    );
}