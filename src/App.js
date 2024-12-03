import Welcome from './welcome';

function App() {
  const names = ['Jim', 'Jordan', 'Jared'];
  return (
    <>
      <div></div>
      <div>
        {names.map((name) => (
          <Welcome firstName={name} />
        ))}
      </div>
    </>
  );
}

export default App;
