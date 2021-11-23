import {useLocation} from 'react-router-dom'
const Rooms = () => {
    const { state } = useLocation();
    const { netID, p } = state;
    console.log(p);
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">UTD Gamify App</h1>
        <p class="lead">Play Indoor Games at UTD</p>
      </div>
      <div class="container mx-3">
        <div class="col my-3">
         <button type="button" class="btn btn-primary mx-2">Room No. 1</button>
         <button type="button" class="btn btn-primary mx-2">Room No. 2</button>
         <button type="button" class="btn btn-primary mx-2">Room No. 3</button>
        </div>
      </div>
    </>
  );
};

export default Rooms;
