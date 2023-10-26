
export function Profile({ dp, name }) {
  
  return (
    <div>
      <h1> welcome product members </h1>
      <h2> {name} </h2>
      <img className="profilepic" src={dp} alt="no dp" />
    </div>
  );
}
