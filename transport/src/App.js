import './App.css';
import axios from 'axios';

function App() {

  const getLoginApi = () => {
      axios.post("http://localhost:8762/auth", {username:'admin', password:'12345'})
      .then((res)=> {
        console.log(res)
      })
      .catch( err => console.log(err) )
  }
  return (
    <div className="App">
      {/* <form action="/" onSubmit={getLoginApi} method="post">
          <input name="username" />
          <input name="password" /> */}
          <button onClick={getLoginApi}
            type="submit"
          >
            Submit
          </button>
      {/* </form> */}
    </div>
  );
}

export default App;
