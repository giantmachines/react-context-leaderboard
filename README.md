# React Context

## Memory Matching Game: Leader Board

## Objectives

- Incorporate React Context to substitute for drilling state hooks to child components.
- Combine the use of React, Typescript, State Hooks, and React Context in one lab.
- Navigate, refactor and add to a completed application.

## Why?

Drilling state hook variables deeply can be tedious and difficult to maintain. If a "great grandparent" component, for example, creates state that is used in a "great grandchild" component but not in any intermediate components, there is no need for the intermediate components to see such a variable. 

React Context allows for any nested component to access state variables by and only by importing them.  

## Setup

This is a standard react project - first run `npm install` and then run `npm run start` or our standard `npm run play` to start the lab.

## Framing

We're building an app that allows a user to play a matching game. The leader board for other players is displayed on the sidebar at all times. The game itself is just a prototype to ensure that the leader board is updated appropriately. Later in the lab, after adding React Context, you will replace the prototype with one more prototype before creating the actual game yourself

When spinning up the website, you'll notice that the most of the functionality is working as intended. The button, when clicked, updates your best time by 5 seconds. This 1st prototype is in the component `TempGame`. Follow the instructions below to change this lab from drilling state hooks to using React Context.

## Exercises

### A. Change the lab to use React Context*

1. Create an **interface** called `UsersContextType` outside of `App` that defines the structure of your Context. In this case, you will send the state variable `userData` and the set function `setUserData`.

    <details>
    <summary>Click here for the coded answer</summary>

    ```js
    // Note: UserInfo[] is already imported
    export interface UsersContextType {
        userData: UserInfo[];
        setUserData: (userData:UserInfo[]) => void;
    }
    ```
    </details>
    <br>

2. Import and call `createContext` outside of `App` to create a context. Set the default values to an empty array and anonymous function for now. [Check out the docs if needed](https://beta.reactjs.org/reference/react/createContext)

    <details>
    <summary>Click here for the coded answer</summary>

    ```js
    export const UsersContext = createContext<UsersContextType>({
        userData:[],
        setUserData:(userData:UserInfo[]) => undefined,
    });
    ```
    </details>
    <br>

3. The `useState()` variable for `userData` is already created! Make this observation, then head down to the return where `AppDiv` is located. 

4. Wrap your return in a _context provider_ and send the value of the context for all components inside to access. [See an example here](https://beta.reactjs.org/reference/react/createContext) _NOTE: the value you pass should be an object that holds both the state variable and the setState function._

    <details>
    <summary>Click here for the coded answer</summary>

    ```javascript
    <UsersContext.Provider value={ {userData: userData, setUserData:(uD) => {setUserData(uD)} }}>
      <AppDiv>
        <Title>🤯 Memory Matching Game</Title>
        <Display userData={userData} setUserData={setUserData} />
      </AppDiv>
    </UsersContext.Provider>
    ```
    </details>
    <br>

5. The `useState()` variable `userData` is currently being drilled as a prop to `Display`. If you haven't already, take a moment to see where the props are being drilled through to. Which components use `userData`, and which do not? Un-drill all the props Starting at `App`. For example, Display doesn't require the use of userData so the following changes will be made:
    ```js
    // in App - Display won't get passed props
    <Display/>

    // in Display - no props will be received or unpacked
    const Display = () => {

        // and so on...
    ```

6. In the child components that actually use the `userData` state variable or `setUserData`, import and call `useContext` at the top level of your component and unpack which ever of the 2 you need. [More information on useContext here.](https://beta.reactjs.org/reference/react/useContext)

    <details >
    <summary> Click here for the coded answer for TempGame: </summary>

    ```javascript
    import { useContext } from "react";
    import { UsersContextType } from "../App/App";

    const TempGame = () => {

        const state: UsersContextType = useContext(UsersContext);
        const {userData, setUserData} = state;
    ```
    _NOTE: These imports can be combined with any other imports that may be coming from the same place._
    </details>
    <br>

7. (Optional) Take a second to refactor your code so that the `UsersContextType` is saved and exported in `types.ts` and not in `App`. 

### B. Sort the rankings

1. Find the component that it is mapping over `userData` to print the rows for the leader board. 
2. Adjust the code to sort the rankings by `msTime` before iterating.

HINT: [This resource will help](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) to iterate and sort based on a value in an array of objects.

### C. Replace TempGame with TempGame2*

1. In `Display`, change `TempGame` to `TempGame2`. Make sure you now see 3 buttons: start, stop, and reset.
2. You may immediately have errors! Delete the `useState()` currently in `TempGame2`. If you named your context something other than `UsersContext` (in App), change it here to be what ever you named it.
3. Test this second prototype to the game. When you press start (wait 5-10 seconds) and press stop. Your personal best time should update to how ever many seconds you waited.  

_NOTE: In `TempGame2`, the time is being saved in the `currentTime` local state variable. This is okay if you want this component (and any potential child component of `TempGame2`) to be the only one that sees `currentTime`, **but** the goal is to have this timer/stop-watch visible in the `LeaderBoard` component, a "cousin" component._

4. Use **React Context** to create that variable in `App` and get the stop clock to show next to personal best in `PersonalStats`.

### D. Extra Challenges

**Mild**
- Add a 3rd personal stat that highlights your rank number. _HINT: You'll have to edit the typescript for `userData`, and give everyone a default rank in `user_data.js`._

**Medium\***
- Create a component called `Game`. It should play the classic [matching game found here](https://www.memozor.com/memory-games/big-or-giant/everyday-objects). Make a 4 by 4 grid of buttons. The buttons should flip and un-flip like the matching game does. Here's some React Context functionality to be mindful of:
    - When the first button is clicked, the timer should start.
    - When the game is won, the timer should stop and the total time should be saved and compared to the current best

    Use the resource linked to see all other functionality that should be applied.

**Spicy**
- Add a modal pop up to the page that immediately asks the user to input their name before playing the game. Once they do, "You" should be updated to the inputted name, and the modal should disappear.