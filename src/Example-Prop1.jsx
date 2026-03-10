// Chiled Component of App.jsx
// Distructuring props
function Contact({ username, email }) 
{
  return (
   <>
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h1>Example-Prop1.1 (Child Component)</h1>
            <h4> Hello {username} from Example-Prop1.1</h4>
            <h4> Your email is {email}</h4>
        </div>
   </> 
  )
}

function NewContact( props )
{
    return(
        <>
            <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                <h1>Example-Prop1.2 (Child Component Props)</h1>
                <h4> Hello {props.name} from Example-Prop1.2</h4>
            </div>
        </>
    )
}

export { Contact, NewContact };