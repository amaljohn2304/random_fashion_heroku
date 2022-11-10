const express =require('express');
const app=express();
const asyncRoute = require("route-async");

const mysql = require("mysql2/promise");

///insert shit
const insertDBShirt = async (color,pattern,fabric,sleeve,collar,fit) =>{
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

    var colorRating = await(connection.query(`SELECT MAX(colorRating) from shirt_collection where color='${color}'`));
    console.log(colorRating)
    colorRating=colorRating[0][0]["MAX(colorRating)"]+10

    var patternRating = await(connection.query(`SELECT MAX(patternRating) from shirt_collection where pattern='${pattern}'`));
    patternRating=patternRating[0][0]["MAX(patternRating)"]+10

    var fabricRating = await(connection.query(`SELECT MAX(fabricRating) from shirt_collection where pattern='${fabric}'`));
    fabricRating=fabricRating[0][0]["MAX(fabricRating)"]+10

    var sleeveRating = await(connection.query(`SELECT MAX(sleeveRating) from shirt_collection where pattern='${sleeve}'`));
    sleeveRating=sleeveRating[0][0]["MAX(sleeveRating)"]+10

    var collarRating = await(connection.query(`SELECT MAX(collarRating) from shirt_collection where pattern='${collar}'`));
    collarRating=collarRating[0][0]["MAX(collarRating)"]+10

    var fitRating = await(connection.query(`SELECT MAX(fitRating) from shirt_collection where pattern='${fit}'`));
    fitRating=fitRating[0][0]["MAX(fitRating)"]+10

    

    await connection.query(`UPDATE shirt_collection SET colorRating=${colorRating} where color='${color}'`)

    await connection.query(`UPDATE shirt_collection SET patternRating=${patternRating} where pattern='${pattern}'`)

    await connection.query(`UPDATE shirt_collection SET fabricRating=${fabricRating} where fabric='${fabric}'`)

    await connection.query(`UPDATE shirt_collection SET sleeveRating=${sleeveRating} where sleeve='${sleeve}'`)

    await connection.query(`UPDATE shirt_collection SET collarRating=${collarRating} where collar='${collar}'`)

    await connection.query(`UPDATE shirt_collection SET fitRating=${fitRating} where fit='${fit}'`)

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
        var finalId=id[0][0]["MAX(id)"]+1
        var m_ids= await(connection.query(`SELECT * from users where email='${email}'`));
        console.log(m_ids[0])
        if(m_ids[0].length>0){
            var response = {"Approval_status":"mail already exists","Approval_code":0}
            console.log(response)
            return response
        }

        
    try{
        await connection.query(
            `INSERT INTO users (username,password,number,email,id) VALUES 
            ('${username}','${password}','${number}','${email}','${finalId}')`);
            console.log("Insertion done",username,password,number,email);
            
    }
    catch(e){
        console.log(e); 
    }


    
        var res={"Approval_status":"REgistration Approved","Approval_code":1}
        return res
    

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
    

        var response ={"Approval_status":"nil","Approval_code":0}

    if(dets[0].length==0){
        response ={"Approval_status":"success","Approval_code":0}
        return response
    }
    console.log(password,dets[0][0].password)
    if(password==dets[0][0].password){
        console.log(password,dets[0][0].password)
        response ={"Approval_status":"success","Approval_code":1}
        return response
    }
    else{
        response ={"Approval_status":"success","Approval_code":0}
        return response
    }

    

};

const insertDBPant = async (type,color,pattern,fabric,fit) =>{
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12537936",
        password: "kTVQwPmi8z",
        database: "sql12537936",
        port: 3306,
    })

    var id= await(connection.query(`SELECT MAX(pieceID) from pant_collection`));
        var finalId=id[0][0]["MAX(pieceID)"]+1
        console.log(finalId) 

        var colorRating = await(connection.query(`SELECT MAX(colorRating) from pant_collection where color='${color}'`));
        
        colorRating=colorRating[0][0]["MAX(colorRating)"]+10
    
        var patternRating = await(connection.query(`SELECT MAX(patternRating) from pant_collection where pattern='${pattern}'`));
        console.log("pattern",patternRating)
        patternRating=patternRating[0][0]["MAX(patternRating)"]+10
    
        var fabricRating = await(connection.query(`SELECT MAX(fabricRating) from pant_collection where fabric='${fabric}'`));
        console.log("fabric",fabricRating)
        fabricRating=fabricRating[0][0]["MAX(fabricRating)"]+10
    
        var typeRating = await(connection.query(`SELECT MAX(typeRating) from pant_collection where type='${type}'`));
        console.log("type",typeRating)
        typeRating=typeRating[0][0]["MAX(typeRating)"]+10
    
        var fitRating = await(connection.query(`SELECT MAX(fitRating) from pant_collection where fit='${fit}'`));
        console.log("fit",fitRating)
        fitRating=fitRating[0][0]["MAX(fitRating)"]+10
    
        
    
        await connection.query(`UPDATE pant_collection SET colorRating=${colorRating} where color='${color}'`)
    
        await connection.query(`UPDATE pant_collection SET patternRating=${patternRating} where pattern='${pattern}'`)
    
        await connection.query(`UPDATE pant_collection SET fabricRating=${fabricRating} where fabric='${fabric}'`)
    
        await connection.query(`UPDATE pant_collection SET typeRating=${typeRating} where fit='${type}'`)

        await connection.query(`UPDATE pant_collection SET fitRating=${fitRating} where fit='${fit}'`)



    try{
        await connection.query(
            `INSERT INTO pant_collection (type,typeRating,color,colorRating,pattern,patternRating,fabric,fabricRating,fit,fitRating,pieceId) VALUES 
            ('${type}','${typeRating}','${color}','${colorRating}','${pattern}','${patternRating}','${fabric}','${fabricRating}','${fit}','${fitRating}','${finalId}')`);
            console.log("Insertion done",`('${type}','${typeRating}','${color}','${colorRating}','${pattern}','${patternRating}','${fabric}','${fabricRating}','${fit}','${fitRating}','${finalId}')`);
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
    const pieceId= await connection.query(`SELECT MAX(pieceId) FROM pant_collection`);
        var Id= pieceId;
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
            `SELECT color FROM pant_collection WHERE pieceId=${r1}`);
            console.log(color[0][0]['color']);
        
        const pattern = await connection.query(
                `SELECT pattern FROM pant_collection WHERE pieceId=${r2}`);
                console.log(pattern[0][0]['pattern']);
        
        const fabric = await connection.query(
                `SELECT fabric FROM pant_collection WHERE pieceId=${r3}`);
                console.log(fabric[0][0]['fabric']);

        const fit = await connection.query(
                `SELECT fit FROM pant_collection WHERE pieceId=${r5}`);
                console.log(fit[0][0]['fit']);
        const type = await connection.query(
                `SELECT type FROM pant_collection WHERE pieceId=${r6}`);
                console.log(type[0][0]['type']);
        

        const colorR = await connection.query(
            `SELECT colorRating FROM pant_collection WHERE pieceId=${r1}`);
            console.log(colorR[0][0]['colorRating']);
        
        const patternR = await connection.query(
                `SELECT patternRating FROM pant_collection WHERE pieceId=${r2}`);
                console.log(patternR[0][0]['patternRating']);
        
        const fabricR = await connection.query(
                    `SELECT fabricRating FROM pant_collection WHERE pieceId=${r3}`);
                    console.log(fabricR[0][0]['fabricRating']);

        const fitR = await connection.query(
                    `SELECT fitRating FROM pant_collection WHERE pieceId=${r5}`);
                    console.log(fitR[0][0]['fitRating']);

        const typeR = await connection.query(
                    `SELECT typeRating FROM pant_collection WHERE pieceId=${r6}`);
                    console.log(typeR[0][0]['typeRating']);

        const string=color[0][0]['color']+" "+fit[0][0]['fit']+" fit  "+type[0][0]['type']+" made of "+fabric[0][0]['fabric']+" fabric with "+pattern[0][0]['pattern'];
        const rating=colorR[0][0]['colorRating']+patternR[0][0]['patternRating']+fabricR[0][0]['fabricRating']+typeR[0][0]['typeRating']+fitR[0][0]['fitRating'];
        console.log(rating);
        
        if(rating>280)
            {
                console.log(string)
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



///paths and stuff
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        'hello':'hi'
    });
});

app.get('/shirt/:pieceId',async (req,res)=>{

        var a= await retrieveShirt(req.params.pieceId)
        while(a==='a'){
            a= await retrieveShirt(req.params.pieceId)
        }
        console.log(a)
    const ret={
        "desc":a
    }
    res.send(ret);
});

app.post('/register',async (req,res)=>{
    var approval = await insertUsers(req.body.username,req.body.password,req.body.number,req.body.email);

    res.send(approval);
});

app.post('/login',async (req,res)=>{
    var approval= await loginHandle(req.body.email,req.body.password);
    
    res.send(approval);
});


app.get('/pants',async (req,res)=>{
    var a= await retrievePants()
        while(a==='a'){
            a= await retrievePants()
        }
        console.log(a)
    var ret={
        "desc":a
    }
    res.send(ret);
});

app.post('/shirt',(req,res)=>{
    insertDBShirt(req.body.color,req.body.pattern,req.body.fabric,req.body.sleeve,req.body.collar,req.body.fit);
    res.send(req.body);
});

app.post('/pants',(req,res)=>{
    insertDBPant(req.body.type,req.body.color,req.body.pattern,req.body.fabric,req.body.fit);
    res.send(req.body);
});


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on ${port}....`))
