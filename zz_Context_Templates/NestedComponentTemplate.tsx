import React, { useContext } from 'react';
import { State, StateContext } from './AppContextTemplate';


const Component = () => {

    // Step 1 - import the telegraphed state (connect to wifi)
    const state: State = useContext(StateContext);
    // const {number, word} = state;
    // const {number, word}: State = useContext(StateContext);

    return (
        <div>
            {/* Step 2 - Access Netflix and other apps */}
            Component has {state.number} and {state.word}
        </div>
    )
}

export default Component;


// Note: importing is never mentioned as a step, but be sure everything is imported at the tops of your components.