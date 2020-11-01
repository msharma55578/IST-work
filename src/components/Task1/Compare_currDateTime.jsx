import React from 'react'
import { useState} from "react";
export default function Compare_currDateTime() {
    
    
    var array = [{id:"1", date: "Mar 9 2012 10:00:00 AM"},
                {id: "2", date: "Mar 11 2012 10:00:00 AM"}, 
                {id: "3", date: "Mar 8 2012 08:00:00 AM"},
                {id: "4", date: "Mar 10 2012 08:00:00 AM"}];
    const [compare,setcompare]=useState(array);
    const [show,setshow]=useState(false);
    // console.log("com "+compare)

    function sorted() { 
        let res=array.sort(function(a, b){ 
            return new Date(a.date) - new Date(b.date); 
        }); 
        // str  = JSON.stringify(array); 
        console.log(JSON.stringify(array))
        setcompare(res);
        setshow(true)
    } 

    return (
        <div>
            {/* {init} */}
            <h3>Unsorted Array</h3>
            {array.map((i)=>
                <h4>
                    ID: {i.id}
                    Date: {i.date}
                </h4>
            )}
            <button onClick={sorted}>Click Me To Sort</button>
            {show && compare.map((i)=>
                <h4>
                    ID: {i.id}
                    Date: {i.date}
                </h4>
            )}
        </div>
    )
}
