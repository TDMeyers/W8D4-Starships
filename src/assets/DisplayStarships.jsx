export default function DisplayStarships({ starships }) {
  return (
    <>
      {starships.map((starship, index) => (
        <div
          className="card"
          key={index}
        >
          <h3>{starship.name}</h3>
          <p>{starship.manufacturer}</p>
        </div>
      ))}
    </>
  );
}
