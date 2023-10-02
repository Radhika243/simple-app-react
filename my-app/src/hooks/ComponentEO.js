import React,{useContext} from 'react';
import ComponentFO from './ComponentFO';
import { UserContext1,Channelcontext1 } from '../App';

function ComponentEO() {
    const user = useContext(UserContext1)
    const channel = useContext(Channelcontext1)

    return (
        <>
            <ComponentFO />
            {user} - {channel}
        </>
    )
}

export default ComponentEO;
