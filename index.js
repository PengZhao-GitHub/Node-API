const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];


/*
----------------------------------------------------
GET
*/

app.get('/', (req,res)=>{
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res)=> {
    res.send(courses);
});

// /api/courses/1
// route paramters /:id/:name/... for required values
app.get('/api/courses/:id',(req,res)=>{
    //res.send(courses[parseInt(req.params.id)-1]);
    const course = courses.find((c) => c.id === parseInt(req.params.id) );
    if (!course) res.status(404).send('This course with the given id was not found');
    res.send(course);

});

// Query string parameters  for optional data
///api/couses/
app.get('/api/:year/:month',(req,res)=>{
    //res.send(req.params);
    res.send(req.query);
});

/*
----------------------------------------------------
POST
*/

app.post('/api/courses', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    /*
    if (!req.body.name || req.body.name.length < 3) {
        //400 bad reqes
        res.status[400].send('Name is required and should be minimum 3 characters');
        return;
    }
    */

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    console.log(course);

    courses.push(course);
    
    res.send(course);

});

/*
--------------------------------------------------------------
PUT

*/
app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existing return 404
    const course = courses.find((c) => c.id === parseInt(req.params.id) );
    if (!course) {
        res.status(404).send('This course with the given id was not found');
        return;
    }
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    //Update course
    // Retrurn the udptaed couse
    course.name = req.body.name;
    res.send(course);
});

/*
----------------------------------
DELETE

*/

app.delete('/api/courses/:id', (req, res) => {
    //Look up the course
    // Not existing, return 404
    const course = courses.find((c) => c.id === parseInt(req.params.id) );
    if (!course) res.status(404).send('This course with the given id was not found');

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same course
    res.send(course);    

});

// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));

