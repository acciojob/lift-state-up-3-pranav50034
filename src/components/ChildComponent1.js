import React, {useState} from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
   return (
      <div className="child-1">
         <h1>Child Component 1</h1>
         <button onClick={() => {
            setSelectedOption("Option 1")
         }}>Option 1</button>
      </div>
   );
};

export default ChildComponent1