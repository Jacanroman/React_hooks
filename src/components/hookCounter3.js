import React, {useState} from 'react';


function HookCounterThree(){

    // setState with objects
    const[name, setName] = useState({firstName:'',secondName:''})




    return(
        <div>
            <h1>Hooks with objects</h1>
            <input 
            type="text" 
            value={name.firstName} 
            onChange={e=> setName({...name,firstName: e.target.value})} />
            <input 
            type="text" 
            value={name.secondName} 
            onChange={e=> setName({...name,secondName: e.target.value})} />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.secondName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree