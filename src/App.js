// import './App.css';
import CountryCard from "./components/CountryCard";

function App() {
  return (
    <div className="App">
      <CountryCard
        name={'India'}
        capital={'New Delhi'}
        population={1415000000}
        flagUrl ={'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'}
      />

      <CountryCard
        name={'Russia'}
        capital={'Moskow'}
        population={147000000}
        flagUrl ={'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png'}
      />
    </div>
  );
}

export default App;
