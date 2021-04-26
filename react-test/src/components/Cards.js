import Card from './Card'
//using map to loop the array
const Cards = ({ users }) => {
    return (
        <>
            {users.map((user) => (
                <Card 
                    key={user.cell}
                    user={user}
                />
            ))}   
        </>
    )
}

export default Cards
