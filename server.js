//import app.js
const app=require('./backend/app')
//Listen to http://localhost:3000
app.listen(3000,()=>{
    console.log('Express Server is running on port 3000');
});
