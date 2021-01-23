const User = ({user: {name, cell, email, medium}}) => {

    return(
        <tr>
            <td><img src={medium} alt={name}></img></td>
            <td>{name}</td>
            <td>{cell}</td>
            <td>{email}</td>
        </tr>
    )
}

export default User;