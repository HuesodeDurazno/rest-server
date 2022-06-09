const { response,request } = require('express');

const usersGet=(req=request, res=response) => {
    const {id,nombre='No name'} = req.query
    res.status(200).json({
        message: "Hello World",
        params
    });
}

const usersPost=(req, res=response) => {
    const { name, age } = req.body;
    res.json({
        name,
        age
    });
}

const usersPut=(req=request, res=response) => {
    const {id}=req.params

    res.json({
        id
    });
}


module.exports = {
    usersGet,
    usersPost,
    usersPut
}