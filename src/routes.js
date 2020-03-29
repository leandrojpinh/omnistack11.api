const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), sessionController.create);

routes.get('/ongs', ongController.list);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().length(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentController.list);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), incidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.list);

module.exports = routes;