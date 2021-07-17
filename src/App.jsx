import React, { useState } from "react";
import Todo from "./Todo";

const App =() =>{
    const [input,setinput] = useState("");
    const [items,setitems] =useState ([]);
       const change =(event) =>{
        setinput(event.target.value);
    }

    const click=()=>{
setitems((old)=>{
    return [...old,input];

});
setinput("");

    }
    const deleted =(id) =>{
        setitems((olditems)=>{
            return olditems.filter((arr,index) =>{
            return index !==id;
        });
        });

        
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
            <br/>
                <h1>ToDo list</h1>
                <br/>
                <input type="text" placeholder="add items" onChange={change} value={input} />
                <button onClick={click}>+</button>
               <ol>
                   {/*<li>{input}</li>*/}
                   {items.map((preval,index)=>{
                     return <Todo 
                     key={index}
                     id={index}
                          text ={preval}
                          onSelect={deleted}
                      />
                   })}
               </ol>
            </div>
        </div>
        </>
    );
}
export default App;