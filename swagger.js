const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contact API'
  },
  host: 'cse341node-samson.herokuapp.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);