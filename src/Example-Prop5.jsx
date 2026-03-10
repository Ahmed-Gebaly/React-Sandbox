// Chiled Component of App.jsx
function Customer({ username = "Default Value" }) 
{
  return (
    <>
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h1>Example-Prop5 (Child Component Props)</h1>
            <h4> Hello {username} from Example-Prop5</h4>
        </div>
    </>
  )
}

export default Customer;