import React from 'react';
import { UserContext1,Channelcontext1 } from '../App';


class ComponentFO extends React.Component {
    render() {
        return (
            <div>
                Component FO
                {/* Nesting the consumer component --- 1st approach */}
                {/* <UserContext1.Consumer>
                    {
                        (userName) =>{
                           return (
                            <Channelcontext1.Consumer>
                            {
                                (channel) =>{
                                    return <div> Hello {userName} channel type : {channel}</div>
                                }
                            }
                        </Channelcontext1.Consumer>
                           )
                        }
                    }
                </UserContext1.Consumer> */}
                
            </div>
        );
    }
}



export default ComponentFO;
