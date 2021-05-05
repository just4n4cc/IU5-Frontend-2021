import "./UserInfo.css"
import {ReactComponent as Door} from "./img/door.svg"
import Cat from "./img/cat-vibing.gif"
import {useHistory} from "react-router-dom"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useCallback, useEffect } from "react";
import { useActions } from "../../hooks/useActions";



const UserInfo: React.FC = () => {
    const {user, username, loading, error} = useTypedSelector(state => state.user)
    const {fetchUser} = useActions()

    const history = useHistory();
    function handleClick() {
        history.push("/");
    }

    const memo = useCallback(() => fetchUser(username), [username])

    useEffect(() => {
        memo()
    }, [])

    if (loading) {
        return <div className="info">
            <div className="lhs">
                <h1>Loading...</h1>
            </div>
        </div>
    }
    if (error) {
        return <div className="info">
            <div className="lhs">
                <h1>{error}</h1>
            </div>
            <div className="rhs">
                <img src={Cat} alt=""/>
                <Door onClick={(e)=>handleClick()} id="door"/>
            </div>
        </div>
    }
    if (!user) {
        return <h1>Error while loading user</h1>
    }

    return (
        <div className="info">
            <div className="lhs">
                <p>Username: <a target="_blank" href={user.html_url}>{user.login}</a></p>
                <p>Name: {user.name === null ? "————" : user.name}</p>
                <p>Email: {user.email === null ? "————" : user.email}</p>
                <p>Company: {user.company === null ? "————" : user.company}</p>
                <p>Location: {user.location === null ? "————" : user.location}</p>
                <p>On platform since: {user.created_at.slice(0,10)}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </div>
            <div className="rhs">
                <img src={user.avatar_url} alt=""/>
                <Door onClick={(e)=>handleClick()} id="door"/>
            </div>
        </div>
    );
}

export default UserInfo;