# React Context

## Memory Matching Game: Leader Board

## Objectives (SWBATS)

- Incorporate React Context to substitute for drilling state hooks to child components.
- Combine the use of React, Typescript, State Hooks, and React Context in one lab.
- Navigate, refactor and add to a completed application.

## Why?

Drilling state hook variables is bad practice and tedious. If a great grandparent component, for example, creates state that is used in a great grandchild component but not in any intermediate components, there is no need for the intermediate components to see such a variable. 

React Context allows for any nested component to access state variables by and only by importing them.  

## Setup

This is a standard react project - first run `npm install` and then run `npm run start` or our standard `npm run play` to start the lab.

## Framing

We're building an app that allows a user to play a matching game. The leader board for other players is displayed on the sidebar at all times. The game itself is just a prototype to ensure that the leader board is updated appropriately. Later in the lab, after adding React Context, you will replace the prototype with one more prototype before creating the actual game yourself

When spinning up the website, you'll notice that the most of the functionality is working as intended. The button, when clicked, updates your best time by 5 seconds. This 1st prototype is in the component `TempGame`. Follow the instructions below to change this lab from drilling state hooks to using React Context.

## Exercises

### 1. Change the lab to use React Context*

- Call `createContext` outside of your App component to create a context. [Check out the docs if needed](https://beta.reactjs.org/reference/react/createContext)
- The `useState` variable for `userData` is already created, so wrap your components into a _context provider_ to specify the value of this context for all components inside. [See an example here](https://beta.reactjs.org/reference/react/createContext) _NOTE: the value you pass should be an object that holds both the state variable and the setState function. _
- In the child components that need the `userData` state variable or `setUserData`, call `useContext` at the top level of your component and unpack which ever of the 2 you need. [More information on useContext here](https://beta.reactjs.org/reference/react/useContext)

### 2. Take a second to sort the rankings

- Find the component that it is mapping over `userData` to print the rows for the leader board. 
- Adjust the code to sort the rankings by `msTime` before iterating.
- HINT: [This resource will do the trick](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/)

### 3. Replace TempGame with TempGame2*

- In `Display`, change `TempGame` to `TempGame2`. Make sure you now see 3 buttons: start, stop, and reset.
- You may immediately have errors. Change `UsersContext` to be what ever you named your context in `App`. After correcting the 2 lines...
- Test the new "game". When you press start (wait 5-10 seconds) and press stop. Your personal best time should update! 
- In TempGame2, the time is being saved in the `currentTime` state variable. Use **React Context** to create that variable in `App` and get the stop clock to show next to personal best in `PersonalStats`. 

### 4. Extra Challenges

**Mild**
- Add a 3rd personal stat that highlights your rank number. _HINT: You'll have to edit the typescript for `userData`, and give everyone a default rank in `user_data.js`._

**Medium\***
- Create a component called `Game`. It should play the classic [matching game found here](https://www.memozor.com/memory-games/big-or-giant/everyday-objects). Make a 4 by 4 grid of buttons. The buttons should flip and un-flip like the matching game does. Here's some React Context functionality to be mindful of:
    - When the first button is clicked, the timer should start.
    - When the game is won, the timer should stop and the total time should be saved and compared to the current best

    Use the resource linked to see all other functionality that should be applied.

**Spicy**
- Add a modal pop up to the page that immediately asks the user to input their name before playing the game. Once they do, "You" should be updated to the inputted name, and the modal should disappear.