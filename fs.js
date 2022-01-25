const {readFile} = require('fs').promises;
const path = require('path')


// console.log(__dirname);



const getAllReducers = async () =>{
     const data =  await readFile(__dirname + '/src/reducer.js', 'utf8');

    const arr = data.split(';');


    const reducersPath = arr.filter((item)=> {
        return (/.\/reducers\//.test(item))
   
    })

    return reducersPath;

}

 getAllReducers().then(data => console.log(data)); ;





