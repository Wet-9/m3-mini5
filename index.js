const express = require('express');
const app = express();
const cors = require('cors');
const arithmeticFunctions = require('../Arithmetic Calculation/arithmeticFunctions');

app.listen(3000, ()=>{
    console.log('The server is on');
});

app.use(express.json());

// post http
app.post('/postdata/calculate',(req, res)=>{
    const calculation = {
      operation: req.body.operation,
      value_1: req.body.value_1,
      value_2: req.body.value_2,
    };
  // Asigns input value 
    const oper = calculation.operation;
    const num1 = calculation.value_1;
    const num2 = calculation.value_2;
  // functions assinging 
    const result = arithmeticFunctions[calculation.operation](num1, num2);
// print on console
    console.log('Operation:', calculation.operation);
    console.log('Value 1:', num1);
    console.log('Value 2:', num2);
    console.log('Result:', result);
    
// print out results on json

const jsonresults = {
    oper,
    num1,
    num2,
    result
};

    return res.json({ jsonresults });
  });
  
  
