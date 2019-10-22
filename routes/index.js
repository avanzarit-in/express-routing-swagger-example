const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');

/**
 * @swagger
 * definitions:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sexx:
 *         type: string
 */

routes.use('/models', models);
routes.use('/cars', cars);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
