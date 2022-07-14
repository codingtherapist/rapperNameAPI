const express = require ('express')
const app = express()
const PORT = 8000

const rappers ={
 '21 savage':{
    'birthName':'Sheyaa Bin Abrham-Joseph',
    'age': 29, 
    'birthLocation': 'London, England',
},
'chance the rapper':{
    'age': 29,
    'birthName':'',
    'birthLocation':'',
},
'unknown':{
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
}
}


app.get('/', (request, response)=>{
    //sends html file to be shown 
    response.sendFile(__dirname + '/index.html')
})

//when a request is name for a name, respond with... [grabbing properties from objects based on names]
app.get('/api/:name',(request, response)=>{
    //rappername = whatever the request sent is like name of the rapper
  const rapperName = request.params.name.toLowerCase()
     if (rappers[rapperName]){
        response.json(rappers[rapperName])
     }else{
        response.json(rappers['unknown'])
     }
})
    //if the name requested is in the rappers object, respond with the information in the rappers name
  //console.log(rappers[rapperName].birthname)

    //  if (rappers[rapperName]){
       // ['21 savage'.birthName])

app.listen(PORT,()=>{
    console.log('The server in now runnign node on port ${PORT}! Betta Go Catch It!')
})  