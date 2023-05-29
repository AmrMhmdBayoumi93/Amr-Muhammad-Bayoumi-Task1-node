 // const express = require('express')
import express from 'express'
const app = express();
   

   const studentsFunction = (request,response ) => {
    console.log(" TEST ");
    response.send("Ahmad");


   }



    app.get("/students", studentsFunction)
    app.listen(5000);










































































