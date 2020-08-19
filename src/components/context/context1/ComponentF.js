import React from 'react';
import {UserContext, ChannelContext} from '../../../App'

function ComponentF(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                    return <div><h1>User Context</h1>User context value {user}, LastName value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer> 
                       ) 
                    }
                }
            </UserContext.Consumer>
            
        </div>
    )
}


export default ComponentF;