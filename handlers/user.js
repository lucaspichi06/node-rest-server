const {response} = require('express');

const usersGet = (req, res = response) => {
    const params = req.query;
    res.json({
        message: 'get endpoint - handler',
        params
    });
}

const usersPost = (req, res = response) => {
    const body = req.body;
    res.status(201).json({
        message: 'post endpoint - handler',
        body
    });
}

const usersPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        message: 'put endpoint - handler',
        id
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        message: 'delete endpoint - handler'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}