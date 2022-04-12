import React from "react";
import { observer } from "mobx-react";

const Counter = observer (props  =>(
    <section>
      {props.intialState.count}
      <div>
      <button onClick={props.intialState.addCount}>ADD</button>
      <button onClick={props.intialState.minusCount}>MINUS</button>
      </div>
      <div>
          MULTIPLY{props.intialState.multiply}<br></br>
          DIVIDE{props.intialState.divide}
      </div>
    </section>
  ))
  export default Counter