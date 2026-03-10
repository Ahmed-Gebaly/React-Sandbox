
// Example of using the children prop in a React component
// Children prop allows you to pass components or elements as children to a parent component
function Wrapper({ children }) {
	return (
		<div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
			<h1>Wrapper Component (Children Prop)</h1>
			<div>{children}</div>
            <p>This content is always visible inside the Wrapper component.</p>
		</div>
	);
}

export default Wrapper;
