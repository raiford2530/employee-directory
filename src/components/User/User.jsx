const User = ({user: {name: {first, last}, picture: {medium}, cell, email}}) => {
    return(
        <tr>
            <td><img src={medium} alt={first}></img></td>
            <td>{first}, {last}</td>
            <td>{cell}</td>
            <td>{email}</td>
        </tr>
    )
}

export default User;