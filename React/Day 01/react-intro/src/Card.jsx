function Card(props) {

    return (
        <div className="card">
            <h4>Name:{props.name || "Dummy"}</h4>
            <p style={{ color: props.age > 20 ? "green" : "red" }}>
                Age:{props.age || "0"}
            </p>

        </div>
    )
}


export default Card