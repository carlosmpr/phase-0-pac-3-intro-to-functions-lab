function shout(string) {
    return string.toUpperCase();
} 

const whisper = (string) => string.toLowerCase()

const logShout = (string) =>console.log(string.toUpperCase())

const logWhisper = (string) => console.log(string.toLowerCase())


const sayHiToGrandma = (string) => {
    if(string === "hello"){
        return  "I can't hear you!"
    } 
    
    if(string === "HELLO"){
        return  "YES INDEED!"
    }


    if(string === "I love you, Grandma."){
        return  "I love you, too."
    }
}