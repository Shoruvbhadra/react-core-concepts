import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let product = [
    {name : 'photoshop', price : '99.99'},
    {name : 'illustrator', price : '99.99'},
    {name : 'In design', price : '99.99'}
  ]

  
let friends = [
  { name : 'fahim', job : 'student'},
  { name : 'aminul' , job : 'footballer'},
  { name: 'swapnil' , job : 'bbc news'},
  { name : 'sazzad' , job : 'bazikhor'}
]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <Counter></Counter>
      <Users></Users>
      <Products name = {product[0].name} price={product[0].price}></Products>
      <Products name = {product[1].name} price={product[1].price}></Products>
      <Products name = {product[1].name} price={product[1].price}></Products>
      
{
  friends.map(fr => <FriendJob friend = {fr}></FriendJob>)
}
      </header>
    </div>
  );
}
function Products(props) {
  const style = {
    border: '2px solid yellow',
    margin : '10px',
    padding : '10px',
    backgroundColor : 'grey',
    borderRadius : '5px',
    hight : '250px',
    width : '250px',
    float : 'left'
  }
  return (
  <div style={style}>
      <h2> Name: {props.name} </h2>
      <h3> description: jasdfff;flkasfl </h3>
      <button>buy now : {props.price}</button>
  </div>
  )
}
// website State: 
function Counter (){
  const [count, setCount] = useState(10);
  const countIncrease = () => {setCount(count+1)}
  const countdecrease = () => {setCount(count-1)}
  return (
  <div>
    <h1>Count : {count}</h1>
    <button onClick={countIncrease}> increase</button>
    <button onClick ={countdecrease}>decrease</button>
  </div>)
}

// calling data with api in react : 

function Users(){
  const[users, setUsers] = useState([]);
  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => setUsers(data));
  }, [])

  return (
    <div>
      <h1>Number of user : {users.length}</h1>
      <ul>
        {
         users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

// passing dynamic data automatically : 
function FriendJob(props){
  const style = {
    border : '5px solid blue',
    padding : '10px',
    margin : '10px'
  }
  const {name, job} = props.friend;
  console.log(name, job)
  return(
    <div style = {style}>
      <h1>Name : {name}</h1>
      <h3> Job : {job} </h3>
    </div>
  )
}


export default App;
