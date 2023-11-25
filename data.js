// module.exports = [
//     {
//         name: "Nijat"
//     }
// ]

document.querySelector(".f1").addEventListener("click", (e) => {
    fetch("http://localhost:9001/aa")
    .then(res => res.json())
    .then(data=> console.log(data))
})
    

document.querySelector(".f2").addEventListener("click", () => {
    fetch("http://localhost:9001/")
    .then(res => res.json())
    .then(data=> console.log(data))
})
    
