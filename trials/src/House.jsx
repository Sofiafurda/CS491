
import './App.css';
import Room from './Room';

const House = (props) => (
    <>
        <div>This is a house called {props.name}</div>
        <Room roomname= "bedroom" name={props.name} />
    </>
  )


export default House