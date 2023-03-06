import React, { createContext, useState } from 'react';
import Component from './NestedComponentTemplate';

// Step 4? - At some point incorporate Typescript
export interface State {
    number?: number;
    word?: string;
}

// Step 1 - Initialize the context variable (set up your router)
// Note: we're exporting this variable (like sending a signal)
export const StateContext = createContext<State>({});

const App = () => {

    // Step 2 - create your state variables as you normally would (make Netflix)
    const [number, setNumber] = useState<number>(0);
    const [word, setWord] = useState<string>("");

    return (
        // Step 3 - wrap app in Provider to send context to children (send Netflix to everyone connected to wifi)
        // Note: multiple data usually sent as object; can send one thing.
        <StateContext.Provider value={{number:number, word:word}}>
            <div>
                <Component />
            </div>
        </StateContext.Provider>
    )
}

export default App;