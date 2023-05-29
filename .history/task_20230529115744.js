 // const express = require('express')
import express from 'express'
const app = express();
   
const students = [ 
    'Ahmad',
    'Amr',
    'Ali',

   ];

   const studentsFunction = (request,response ) => {

    let output = "<ul>"
    for (let i = 0; i < Students.length; i++) {
        output += "<li>" + Students[i] + "</li>";
    }
    output += "</ul>"
            


    console.log(" TEST ");
    response.send(output);


   }



    app.get("/students", studentsFunction)
    app.listen(5000);











































































