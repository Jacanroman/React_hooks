import React, {useContext} from 'react';
//import ComponentF from './ComponentF';
import {UserContext, ChannelContext} from '../../../App';

function ComponentE () {

    const user = useContext(UserContext)
    const lastname = useContext(ChannelContext);

    return(
        <div>
            <h1> UseContext-Hooks</h1>
            {user} - {lastname}
        </div>
    )
}

export default ComponentE;