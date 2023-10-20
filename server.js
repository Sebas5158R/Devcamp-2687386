const express=require('express');
const dotenv=require('dotenv');
const colors = require('colors'); //Para poner color a lo que pasa en consola

//Vincular en archivo .env
dotenv.config(
    { 'path' : './config/.env' }
);

// Construir objeto app
app = express()

//Rutas de prueba
app.get('/prueba', (request, response) => {
    response.send('Hola')
});

//rutas para bootscamps
//endpoint
//Traer todos los bootcamps
app.get('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostraran Todos Los Bootcamps"
    })
});

// Traer un bootcamp por id
app.get('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara el bootcamp cuyo id es ${req.params.id}`
    })
});

//Crear un bootcamp
app.post('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se creará un bootcamp"
    })
});

// Actualizar un bootcamp por id
app.put('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el bootcamp cuyo id es ${req.params.id}`
    })
});

// eliminar un bootcamp por id
app.delete('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el bootcamp cuyo id es ${req.params.id}`
    })
});



//cursos
app.get('/courses', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostraran Todos Los cursos"
    })
});

// Traer un curso por id
app.get('/course/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara el curso cuyo id es ${req.params.id}`
    })
});


//Crear un curso
app.post('/course', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se creará un curso"
    })
});


// Actualizar un cursos por id
app.put('/course/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el curso cuyo id es ${req.params.id}`
    })
});

// eliminar un cursos por id
app.delete('/course/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el curso cuyo id es ${req.params.id}`
    })
});


//Usuarios
app.get('/users', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostraran Todos Los usuario"
    })
});

// Traer un curso por id
app.get('/user/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara el usuario cuyo id es ${req.params.id}`
    })
});


//Crear un curso
app.post('/user', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se creará un usuario"
    })
});


// Actualizar un cursos por id
app.put('/user/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el usuario cuyo id es ${req.params.id}`
    })
});

// eliminar un cursos por id
app.delete('/user/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el usuario cuyo id es ${req.params.id}`
    })
});

// app.get('/prueba/:id', (request, response) => {
//     response.send(`Hola, ${request.params.id}`)
// });



app.listen(process.env.PUERTO, () => {
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgGreen.bold)
});

