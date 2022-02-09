import React, { useState } from "react";
import './mycss.css';


const Body = (props) =>{

    const [count, setCount] = useState(5);


    const Background  = 
            count < 4 
            ? "green" 
            : count >=4 && count <=7
            ?"blue"
            :count > 7
            ? "red"
            :"galben"

   
    const Mj = count === 10 ? "Ai atins limita superioara" : count === 0  ?"Ai atins limita inferioara" : " " ;
    const disable1 = count === 10 ? true : false;
    const disable2 = count === 0 ? true : false;
    return (
        <div className = {` d-flex flex-column align-items-center justify-content-center`} style={{backgroundColor: Background}}>
             
                <h2 className="counter" > {count} </h2>
                <div className="butoane d-flex flex-row ">
                    <button disabled={disable1}  type="button" className="plusStile m-3 d-flex align-items-center justify-content-center" onClick={()=> setCount(count+1)}> +  </button>
                    <button disabled={disable2} type="button" className="minusStile m-3 d-flex align-items-center justify-content-center" onClick={()=> setCount(count-1)}>-</button>
                </div>
                <div>
                    <p className="limitaInf p-1 " > {Mj}</p>
               
                </div>
                
            
        </div>
            )
}

export default Body;

