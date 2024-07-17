//this app only serves JSON, not client js nor css, only an html that explains how to use the API.
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age':29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

//this code acts as an event listener for the main page,
//instead of it being a 'click event' it's a network request, 
//so when it hears said request the rest of the code fires. 
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html') //this code responds with an index.html and starts looking in the main diresctory for it. __dirname is the root.
})

//if they make a request to this route we respond with the object. ':name' is a query parameter. whenever a req comes in, if theres a bit of thext after / we can grab it with the next line of code.
app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    if( rappers[rapperName] ){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT}! Betta Go Catch It!`)
})