const rp = require('request-promise');
rp('https://jsonplaceholder.typicode.com/users/2')
.then((body) => {
    const parsedData = JSON.parse(body);
    console.log(parsedData.name + " mora em "+ parsedData.address.city);
})
.catch((err)=>{
    console.log("Error: ", err);
});
    
 