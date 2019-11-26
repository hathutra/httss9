// const fethData=()=>{
//     const randomPromise= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('dataaaa');
//         },5000)
//     })
//     return randomPromise;

// }
// +6
// fethData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
const fetchData = async() => {
    try {
        const data = await fetch('http://quotes.rest/qod.json')
            .then((data) => {
                return data.json();
            })
            console.log(data.contents.quotes[0]);
    } catch (error) {
        console.log(error.message);
    }

}  

fetchData().then