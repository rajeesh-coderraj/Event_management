import {useState} from "react";
import React from "react";



export default function Form() {

    const [name, setName] = useState('');


    const getName= (event) => {
    let nameValue = event.target.value;
    setName(nameValue);
    }

    const submitbtn = () => {
        if(name == ""){
            console.log("Invalid values")
        } else{
          console.log("Sucessfully Event Registered")
          console.log("Name" + name);     
        }
        }

    

    return( 
        <div>
            <div>
            <h1>Personal Calender</h1>
            </div>
            
            <div>
             <h1><u>Event Name</u></h1>
            </div>
             <div>
          <label>Event Name</label>
          <input onchange={getName}
            type="text"
            name="name"
            placeholder="Event Name"

          />
        </div>
         
            <div>
            <label>Start Date</label>
             <input 
            type="date"
            name="sdate"
            

          />
        </div>
        <div>
       
       <input 
      type="time"
      name="stime"
      

    />
  </div>



        <div>
        <label>End Date</label>
                    <input 
                    type="date"
                    name="edate"
                    

                />
        </div>
            <div>
       
                <input 
                type="time"
                name="etime"
                

                        />
             </div>
             <div>
          <label>Add Event Location</label>
          <input 
            type="text"
            name="name"
            placeholder="Event Location"

          />
        </div>
        <div>
          <label><l>Event Options</l></label>
         
        </div>
        <div>
          <label>Tickets</label>
          <input 
            type="text"
            name="name"
            placeholder="Ticket Type"

          />
        </div>
        <div>
          <label>Require approval</label>
          <input 
            type="text"
            name="name"
            placeholder="Approved/Not"

          />
        </div>

        <div>
          <label>Capacity</label>
          <input 
            type="text"
            name="name"
            placeholder="Total Capacity"

          />
        </div>
        <div>
          <label>Visibility</label>
          <input 
            type="text"
            name="name"
            placeholder="Visiblity"

          />
        </div>

        <div>
            <button onClick={submitbtn}> Create Event</button>
        </div>
        </div>
      
    
    );

    
}
