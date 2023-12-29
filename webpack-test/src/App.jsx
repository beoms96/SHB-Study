import logo from './logo.svg';
import './App.css';

function App() {
  let a = 'a';

  console.log(a);
  a += 'b';
  console.log(a);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <button onClick={() => b()}>temp</button>
    </div>
  );
}

const b = () => {
  console.log('c');
  alert('a');
};

export default App;
