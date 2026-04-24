import Card from "./Card";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card name="Rohit" age="13" />
      <Card name="Mayank" age="27" />
      <Card name="Ganesh" age="30" />
     
    </div>
  )
}

export default App;