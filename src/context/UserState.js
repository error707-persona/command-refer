import React, {useState} from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const [logStatus, setlogStatus] = useState(false);
    const [receive, setreceive] = useState({
        id: "id",
        name: "",
        accountno: "",
        balance: 0
    });
    const [userid, setuserid] = useState({
        id: "id",
        name: "",
        accountno: "",
        balance: 0
    })
    return (
        <UserContext.Provider value={{ userid, setuserid, logStatus, setlogStatus, receive, setreceive}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;