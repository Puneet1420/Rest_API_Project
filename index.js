const app = require('./app')

const Port = process.env.port;

app.listen(Port, ()=>{
    console.log(`app is running on port ${Port}...`);
})