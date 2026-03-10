// Chiled Component of App.jsx
// destructuring props
function UsersList({ users }) {
    return (
        <>
            <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                <h1>Example-Prop4 (Child Component Props)</h1>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                           {index} - {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UsersList;