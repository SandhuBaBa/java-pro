import React from 'react';

function Case(props) {
  return (
    <div className="row my-2">
      <div className="col-sm-9">
        <li className="shadow p-2">{props.value}</li>
      </div>
      <div className="col-sm-1">
        <button className="btn btn-danger my-1 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>x</button>
      </div>
    </div>
  );
}

export default Case;
