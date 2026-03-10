// Chiled Component of App.jsx
function NewHome( props )
{
    return(
        <>
            <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                <h1>Example-Prop2 (Child Component Props)</h1>
                <h4> Hello {props.name} - {props.email} from Example-Prop2</h4>
            </div>
        </>
    )
}

export default NewHome;