import { UserInfo } from "./types";

export const convertTime = (msTime:number) => {
    let numerator = msTime;
    const minutes = Math.floor(numerator/60000);
  
    numerator -= (minutes * 60000);
    const seconds = Math.floor(numerator/1000);
  
    numerator -= (seconds * 1000);
    const milliseconds = Math.floor(numerator/10);
  
    return `${minutes}:${seconds<10?'0':''}${seconds}:${milliseconds<10?'0':''}${milliseconds}`
    
}

const getRandomInt = (max:number) => {
    return Math.floor(Math.random() * max);
}

interface IdxInc {
    idx:number;
    inc:number;
}

export const idxIncrement = (currentData:UserInfo[]) => {
    let idxInc: IdxInc[] = [];
    let num = getRandomInt(3);
    while(num > 0) {
        const idx = getRandomInt(10);
        const current = currentData[idx].msTime;
        const inc = current > 45000 ? -1 * getRandomInt(Math.floor(currentData[idx].msTime/40)) : -500;
        idxInc.push({
            idx:idx, 
            inc:inc
        })
        num -= 1;
    }
    return idxInc;
}