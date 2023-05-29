const express = require('express')
import express from 'express'
const app = express();
    app.listen(5000);

   const studentsFunction = (request,response ) => {
    console.log(" TEST ");
    response.send("Ahmad");


   }



    app.get("/students", studentsFunction)








































