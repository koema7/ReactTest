const Card = ({ user }) => {
    return (
        <div className="card">
            <img src={user.picture.large} className="img-fluid" alt={user.name.first} />
            <div className="text-container">
                <label>
                    Fullname
                </label>
                <p>
                    {user.name.first} {user.name.last}
                </p>
                <label>
                    Telephone
                </label>
                <p>
                    {user.phone}
                </p>
                <label>
                    Email Address
                </label>
                <p>
                    {user.email}
                </p>
                <label>
                    Country
                </label>
                <p>
                    {user.location.country}
                </p>
            </div>
        </div>
    )
}

export default Card
