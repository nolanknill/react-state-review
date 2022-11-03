function Matches({ dogs }) {
  return (
    <div>
        <h2>Your matches <span>({dogs.length})</span></h2>
        {dogs.length === 0 && <p>You have no matches yet, get to swiping...</p>}
        {dogs.map(dog => (
            <div key={dog.id}>
                <img width="50px" src={dog.image} alt={`${dog.name}`} />
                <h3>{dog.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default Matches;