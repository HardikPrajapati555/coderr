const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Screen API',
      version: '1.0.0',
      description: 'API for managing screens',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
    components: {
      schemas: {
        Screen: {
          type: 'object',
          properties: {
            screen_id: {
              type: 'string',
              example: '12345',
            },
            parsingcode: {
              type: 'string',
              example: 'abc123',
            },
            screenstatus: {
              type: 'boolean', // Changed from string to boolean
              example: true,  // Example value for boolean
            },
          },
          required: ['screen_id', 'parsingcode', 'screenstatus'],
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Path to your API routes files
});

module.exports = {
  swaggerUi,
  swaggerSpec,
};
