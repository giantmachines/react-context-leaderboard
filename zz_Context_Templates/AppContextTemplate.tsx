import React, { createContext, useState } from 'react';
import Component from './NestedComponentTemplate';

// Step 0 or 4 - Incorporate Typescript
export interface StateType {
    number: number;
    setNumber: (number:number) => void;     // void = a function that doesn't have a return
    names: string[];
    setNames: (names:string[]) => void;
}

// Step 1 - Initialize the context variable (set up your router)
// Note: we're exporting this variable (like sending a signal)
export const StateContext = createContext<StateType>({
    number: 0,
    setNumber: (number:number) => undefined,
    names: [],
    setNames: (names:string[]) => undefined,
});

const App = () => {

    // Step 2 - create your state variables as you normally would (make Netflix)
    const [number, setNumber] = useState<number>(0);
    const [names, setNames] = useState<string[]>([]);

    return (
        // Step 3 - wrap app in Provider to send context to children (send Netflix to everyone connected to wifi)
        // Note: multiple data usually sent as object; can send one thing.
        <StateContext.Provider value={{
            number: number,
            setNumber: (n) => {setNumber(n)},
            names: names,
            setNames: (ns) => {setNames(ns)},
        }}>
            <div>
                <Component />
            </div>
        </StateContext.Provider>
    )
}

export default App;