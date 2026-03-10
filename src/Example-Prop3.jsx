// Chiled Component of App.jsx
function Cart({ title, price, stock }) {
    return (
        <>
            {/* moustache syntax {{ }} */}
            <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                <h1>Example-Prop3 (Child Component Props)</h1>
                <h4>Title: {title}</h4>
                <h4>Price <small>(including Shipping)</small>: ${price + 50}</h4>
                {/* Conditional rendering: Ternary Operator */}
                <h4>Stock: {stock ? "In Stock" : "Out of Stock"}</h4>
            </div>
        </>
    )
}

export default Cart;