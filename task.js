 // const express = require('express')
import express from 'express'
const app = express();
   
const students = [ 
    'Ahmad',
    'Amr',
    'Ali',

   ];

   const studentsFunction = (request,response ) => {

            let output = " <h> List of Students </h> <ul> "
            for (let i =0; i<students.length; i++){
                output += "<li>" + students[i] +"</li>";
            }
           
            output += "</ul>";
            response.send(output);
            console.log(" TEST Connection ");

   }



    app.get("/students", studentsFunction)
    app.listen(8000);











































































