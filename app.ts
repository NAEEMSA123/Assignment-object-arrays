//Assignment 1: Building Your Friend List

interface Friend {
    firstName:string;
    lastName:string;
    id?:number;
};

let people = {
    friend:[] as Friend[]
}

let friend1 = {
    firstName:"Naeem",
    lastName:"Ahmed",
    id: 1
};

let friend2 = {
    firstName:"Sarim",
    lastName:"Ali",
    id: 2
};

let friend3 = {
    firstName:"Shuraim",
    lastName:"Raza",
    id: 3
};

people.friend.push(friend1,friend2,friend3);
console.log(people);

//Assignment 2:Manipulating an Array: Rearranging Words
 
 let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
 
 let filteredArray = scrambledArray.filter(scrambledArray =>  scrambledArray.toLocaleString());
 
  let rearrangedArray = [];
 rearrangedArray.push(filteredArray.find(element => element === "I"));
 rearrangedArray.push(filteredArray.find(element => element === "am"));
 rearrangedArray.push(filteredArray.find(element => element === "a"));
 rearrangedArray.push(filteredArray.find(element => element === "student"));
 rearrangedArray.push(filteredArray.find(element => element === "of"));
 rearrangedArray.push(filteredArray.find(element => element === "GIAIC"));
 
 let result = rearrangedArray.join(' ');
 // Output the result
 console.log(result); // "I am a student of GIAIC"


