const express =require('express');
const app=express();
const asyncRoute = require("route-async");

const mysql = require("mysql2/promise");

///insert shit
const insertDBShirt = async (color,colorRating,pattern,patternRating,fabric,fabricRating,sleeve,sleeveRating,collar,collarRating,fit,fitRating,pieceId) =>{
    console.log("hello"); 
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12537936",
        password: "kTVQwPmi8z",
        database: "sql12537936",
        port: 3306,
    })


    
    console.log("hello"); 
    var id= await(connection.query(`SELECT MAX(pieceID) from shirt_collection`));
        var finalId=id[0][0]["MAX(pieceID)"]+1
        console.log(finalId) 
    
    try{
        await connection.query(
            `INSERT INTO shirt_collection (color,colorRating,pattern,patternRating,fabric,fabricRating,sleeve,sleeveRating,collar,collarRating,fit,fitRating,pieceId) VALUES 
            ('${color}','${colorRating}','${pattern}','${patternRating}','${fabric}','${fabricRating}','${sleeve}','${sleeveRating}','${collar}','${collarRating}','${fit}','${fitRating}','${finalId}')`);
            console.log("Insertion done",color,colorRating,pattern,patternRating,fabric,fabricRating,sleeve,sleeveRating,collar,collarRating,fit,fitRating,finalId);
            
    }
    catch(e){
        console.log(e); 
    }


    

};


const insertUsers = async (username,password,number,email) =>{
    console.log("hello"); 
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12537936",
        password: "kTVQwPmi8z",
        database: "sql12537936",
        port: 3306,
    })


    
    console.log("hello"); 
    var id= await(connection.query(`SELECT MAX(id) from users`));
    console.log(id) 
        var finalId=id[0][0]["MAX(id)"]+1
        console.log(finalId) 

    try{
        await connection.query(
            `INSERT INTO users (username,password,number,email,id) VALUES 
            ('${username}','${password}','${number}','${email}','${finalId}')`);
            console.log("Insertion done",username,password,number,email);
            
    }
    catch(e){
        console.log(e); 
    }


    

};

const loginHandle = async (email,password) =>{
    console.log("hello"); 
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12537936",
        password: "kTVQwPmi8z",
        database: "sql12537936",
        port: 3306,
    })

    var dets= await(connection.query(`SELECT * from users where email='${email}'`));
    console.log(dets[0][0]) 
    var response ={"Approval_status":"nil","Approval_code":0}
    console.log(password,dets[0][0].password)
    if(password==dets[0][0].password){
        console.log(password,dets[0][0].password)
        response ={"Approval_status":"success","Approval_code":1}
        return response
    }

    

};

const insertDBPant = async (type,typeRating,color,colorRating,pattern,patternRating,fabric,fabricRating,fit,fitRating,pieceId) =>{
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12537936",
        password: "kTVQwPmi8z",
        database: "sql12537936",
        port: 3306,
    })
    try{
        await connection.query(
            `INSERT INTO pant_collection (type,typeRating,color,colorRating,pattern,patternRating,fabric,fabricRating,fit,fitRating,pieceId) VALUES 
            ('${type}','${typeRating}','${color}','${colorRating}','${pattern}','${patternRating}','${fabric}','${fabricRating}','${fit}','${fitRating}','${pieceId}')`);
            console.log("Insertion done");
    }
    catch(e){
        console.log(e); 
    }
};


////retrieve shit
const retrieveShirt = async (id) =>{
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12537936",
        password: "kTVQwPmi8z",
        database: "sql12537936",
        port: 3306,
    })
    const pieceId= await connection.query(`SELECT MAX(pieceId) FROM shirt_collection`);
        var Id= await pieceId;
        var maxId=Id[0][0]['MAX(pieceId)'];
        var r1=Math.floor(Math.random() * maxId)+1
        var r2=Math.floor(Math.random() * maxId)+1
        var r3=Math.floor(Math.random() * maxId)+1
        var r4=Math.floor(Math.random() * maxId)+1
        var r5=Math.floor(Math.random() * maxId)+1
        var r6=Math.floor(Math.random() * maxId)+1


        
        console.log(r1,r2,r3,r4,r5,r6)
    
    try{
        const color = await connection.query(
            `SELECT color FROM shirt_collection WHERE pieceId=${r1}`);
            console.log(color[0][0]['color']);
        
        const pattern = await connection.query(
                `SELECT pattern FROM shirt_collection WHERE pieceId=${r2}`);
                console.log(pattern[0][0]['pattern']);
        
        const fabric = await connection.query(
                    `SELECT fabric FROM shirt_collection WHERE pieceId=${r3}`);
                    console.log(fabric[0][0]['fabric']);
        const sleeve = await connection.query(
                    `SELECT sleeve FROM shirt_collection WHERE pieceId=${r4}`);
                    console.log(sleeve[0][0]['sleeve']);
        const collar = await connection.query(
                    `SELECT collar FROM shirt_collection WHERE pieceId=${r5}`);
                    console.log(collar[0][0]['collar']);
        const fit = await connection.query(
                        `SELECT fit FROM shirt_collection WHERE pieceId=${r6}`);
                        console.log(fit[0][0]['fit']);

        const colorR = await connection.query(
            `SELECT colorRating FROM shirt_collection WHERE pieceId=${r1}`);
            console.log(colorR[0][0]['colorRating']);
        
        const patternR = await connection.query(
                `SELECT patternRating FROM shirt_collection WHERE pieceId=${r2}`);
                console.log(patternR[0][0]['patternRating']);
        
        const fabricR = await connection.query(
                    `SELECT fabricRating FROM shirt_collection WHERE pieceId=${r3}`);
                    console.log(fabricR[0][0]['fabricRating']);
        const sleeveR = await connection.query(
                    `SELECT sleeveRating FROM shirt_collection WHERE pieceId=${r4}`);
                    console.log(sleeveR[0][0]['sleeveRating']);
        const collarR = await connection.query(
                    `SELECT collarRating FROM shirt_collection WHERE pieceId=${r5}`);
                    console.log(collarR[0][0]['collarRating']);
        const fitR = await connection.query(
                        `SELECT fitRating FROM shirt_collection WHERE pieceId=${r6}`);
                        console.log(fitR[0][0]['fitRating']);
        const string= color[0][0]['color']+" shirt with "+pattern[0][0]['pattern']+" pattern made of "+fabric[0][0]['fabric']+" which is "+sleeve[0][0]['sleeve']+" sleeve and has "+collar[0][0]['collar']+" collar and also is "+fit[0][0]['fit']+" fit";
        const rating=colorR[0][0]['colorRating']+patternR[0][0]['patternRating']+fabricR[0][0]['fabricRating']+sleeveR[0][0]['sleeveRating']+collarR[0][0]['collarRating']+fitR[0][0]['fitRating'];
        console.log(rating);
        
        if(rating>300)
            {
                return string;
            }
        else{
            return  'a';
        }
    }
    catch(e){
        console.log(e); 
    }
};


const retrievePants = async () =>{
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12537936",
        password: "kTVQwPmi8z",
        database: "sql12537936",
        port: 3306,
    })
    try{
        const result = await connection.query(
            `SELECT * FROM pant_collection WHERE pieceId=1121`);
            console.log(result[0]);
            return result;
    }
    catch(e){
        console.log(e); 
    }
};



///paths and stuff
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        'hello':'hi'
    });
});

app.get('/shirt/:pieceId',async (req,res)=>{

        const a= await retrieveShirt(req.params.pieceId)
        while(a==='a'){
            const a= await retrieveShirt(req.params.pieceId)
        }
        console.log(a)
    const ret={
        "desc":a
    }
    res.send(ret);
});

app.post('/register',(req,res)=>{
    insertUsers(req.body.username,req.body.password,req.body.number,req.body.email);
    res.send(req.body);
});

app.post('/login',async (req,res)=>{
    var approval= await loginHandle(req.body.email,req.body.password);
    console.log(approval)
    res.send(approval);
});


app.get('/pants/:pieceId',async (req,res)=>{
    const a= await retrievePants(req.params.pieceId)
    console.log(a[0][0]);
    res.send(a[0][0]);
});

app.post('/shirt',(req,res)=>{
    insertDBShirt(req.body.color,req.body.colorRating,req.body.pattern,req.body.patternRating,req.body.fabric,req.body.fabricRating,req.body.sleeve,req.body.sleeveRating,req.body.collar,req.body.collarRating,req.body.fit,req.body.fitRating,req.body.pieceId);
    res.send(req.body);
});

app.post('/pants',(req,res)=>{
    insertDBPant(req.body.type,req.body.typeRating,req.body.color,req.body.colorRating,req.body.pattern,req.body.patternRating,req.body.fabric,req.body.fabricRating,req.body.fit,req.body.fitRating,req.body.pieceId);
    res.send(req.body);
});


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on ${port}....`))
