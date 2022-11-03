import "./Candidate.scss";

function Candidate({ dog, rejectDog, matchDog }) {
    const dogDistance = `${dog.distance / 1000} km`;
 
    return (
    <article className="candidate">
        <div>
            
            <span className="candidate__potential-match">Potential Match</span>
            <span>{dogDistance}</span>
            <h2>{dog.name}, {dog.age} years</h2>
            <img src={dog.image} height="100px" alt={dog.name} />
            <p>{dog.slogan}</p>
        </div>

        <button onClick={() => { rejectDog(dog.id) }}>💩</button>
        <button onClick={() => { matchDog(dog.id) }}>🦴</button>
    </article>
  )
}

export default Candidate;