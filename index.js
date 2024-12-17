import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/', (req,res)=>{
    res.render('index.ejs',{mark:true});
});

app.get('/advise',async (req,res)=>{
    try{const response = await axios.get('https://api.adviceslip.com/advice');
    const result = response.data;
    setTimeout(()=>{res.render('index.ejs',{data:result ,mark:false})},10600);
}catch(error){
   console.log('failed to process request',error.message);
   res.render('index.ejs',{error:'Something went wrong please try again later !'});
}
});

app.listen(port,()=>{console.log(`server running at http://127.0.0.1:${port}`)});