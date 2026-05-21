

export default function Card({ title, image }) {
    return (
        <div className="col-4">
            <div className="card" >
                <img height={200} src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <button className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </div>


    )
}
