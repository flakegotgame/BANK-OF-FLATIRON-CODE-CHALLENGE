
import logo from './logo.svg';
import './App.css';
import  SearchBox from '../src/components/SearchBox';
import AddTransaction from '../src/components/AddTransaction';
import TableTransaction from '../src/components/TableTransaction';
import TransactionRow from './components/TransactionRow';
function App() {
  let TransactionRecords = [
    { date: "2024-04-01", description: "Grocery shopping", category: "Food", amount: 150.00 },
    { date: "2024-04-03", description: "Monthly subscription", category: "Entertainment", amount: 12.99 },
    { date: "2024-04-04", description: "Gym membership", category: "Health", amount: 40.00 },
    { date: "2024-04-05", description: "Coffee with friends", category: "Social", amount: 8.50 },
    { date: "2024-04-06", description: "Internet bill", category: "Utilities", amount: 60.00 },
    { date: "2024-04-10", description: "Textbooks", category: "Education", amount: 120.00 }
];
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <div className='royaltitle'>The Royal Bank of Flatiron</div>
      <SearchBox />
      <AddTransaction/>
      <TableTransaction records={TransactionRecords}/>
      <TransactionRow />
    </div>
  );
}

export default App;
