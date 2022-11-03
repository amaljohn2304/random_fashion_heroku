const mysql = require("mysql2/promise");
const insertDB = async () =>{
    const connection = await mysql.createConnection({
        host: "sql6.freesqldatabase.com",
        user: "sql6522053",
        password: "BxugmqLGsm",
        database: "sql6522053",
        port: 3306,
    })
    try{
        await connection.query(
            "INSERT INTO shirt_collection (color,colorRating,pattern,patternRating,fabric,fabricRating,sleeve,sleeveRating,collar,collarRating,fit,fitRating,pieceId) VALUES ('blue',24,'check',26,'cotton',26,'half',27,'chinese',28,'skinny',53,1101)");
            console.log("Insertion done");
    }
    catch(e){
        console.log(e); 
    }
};
insertDB();



{
    "type": "cargo",
    "typeRating":36,
    "color" : "red",
    "colorRating":76,
    "pattern": "stripes",
    "patternRating":36,
    "fabric" : "suede",
    "fabricRating":75,
    "fit":"slim",
    "fitRating":76,
    "pieceId":1121

}

{
    "color" : "red",
    "colorRating":76,
    "pattern": "floral",
    "patternRating":36,
    "fabric" : "cotton",
    "fabricRating":75,
    "sleeve":"full",
    "sleeveRating":34,
    "collar":"Oxford",
    "collarRating":90,
    "fit":"slim",
    "fitRating":76,
    "pieceId":0

}