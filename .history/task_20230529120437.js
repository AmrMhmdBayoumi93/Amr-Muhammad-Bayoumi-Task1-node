 // const express = require('express')
import express from 'express'
const app = express();
   
const students = [ 
    'Ahmad',
    'Amr',
    'Ali',

   ];

   const studentsFunction = (request,response ) => {

            let output = "<ul>";
            for (let i =0; i<students.length; i++){
                output += "<li>" + students[i] +"</li>";
            }
            output += "</ul>"
            


    console.log(" TEST Connrction ");
    response.send(output);


   }



    app.get("/students", studentsFunction)
    app.listen(6000);











































































