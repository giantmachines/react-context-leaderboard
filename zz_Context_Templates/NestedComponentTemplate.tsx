import React, { useContext } from 'react';
import { StateType, StateContext } from './AppContextTemplate';


const Component = () => {

    // Step 1 - import the telegraphed state (connect to wifi)
    const state: StateType = useContext(StateContext);
    const {number, word} = state;
    // Alternatively...
    // const {number, word}: State = useContext(StateContext);

    return (
        <div>
            Component has {number} and {word}
        </div>
    )
}

export default Component;


// Note: importing is never mentioned as a step, but be sure everything is imported at the tops of your components.