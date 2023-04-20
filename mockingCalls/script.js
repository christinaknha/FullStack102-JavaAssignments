users = [
    {id: 1, name: "Christina", email:"christina@gmail.com"},
    {id: 2, name: "Karen", email:"karen@gmail.com"},
    {id: 13, name: "Emily", email:"emily@gmail.com"}    
]

// let userInfo = 0;

// for this function to work, use a try catch method
// function fetchUserById(userId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             for (let i = 0; i < users.length; i++){
//                 if (users[i].id == userId){
//                     let userInfo = users[i];
//                     resolve(userInfo);
//                     break;
//                 }else {
//                     reject(new Error("Oops! an error occurred."));
//                 }
//             }
//         }, 1000);
                   
//     });
// }

// function with try catch
// function fetchUserById(userId){
//     try{
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 for (let i = 0; i < users.length; i++){
//                     if (users[i].id == userId){
//                         const userInfo = users[i];
//                         resolve(userInfo);
//                         break;
//                     }
//                 }
//             }, 1000);

//         });
//     }
//     catch(error){
//         console.error("Error fetching data:", error)
//     }
// }




function fetchUserById(userId){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let userInfo = users.find(user => user.id == userId)
                    if(userInfo){
                        resolve(userInfo);
                    }else {
                        reject(new Error("Oops! an error occurred."));
                    }
                }, 1000)
            });
                       
};

fetchUserById(1)
    .then((userInfo) => {
        console.log("User Information:", userInfo)
        // let userInfo2 = fetchUserById(2)
        // return userInfo2
        return fetchUserById(2)
    })
    .then((userInfo) => { 
        console.log("User Information:", userInfo)
    })
    .catch((error) => {
        console.error("Error fetching data:", error)
    });
     
