function Data({ children })
{
    const data = {
        name: "Abdelmawgod",
        age: 30,
        city: "Cairo"
    };
    return children(data)
}

export default Data;