import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Home from './home';
const UserContext = createContext()

function App() {
  const arr = [
    {'name' : 'ravi' , 'email' : 'r@gmail.com' },
    {'name' : 'rahul' , 'email' : 'rahul@gmail.com'}
  ]
  const [user , setdata] = useState('ravi')
  return (
    <div className="App">
<UserContext.Provider value={user}>
 
  <Home i={user}></Home>
</UserContext.Provider>
    </div>
  );
}

export default App;
export {UserContext , }
