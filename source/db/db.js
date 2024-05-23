const {Client} = require('@elastic/elasticsearch');

// Elasticsearch connection settings
const config = {
    node: 'https://localhost:9200', // Elasticsearch URL
    auth: {
        username: 'milad', // Replace with your Elasticsearch username
        password: 'milad145', // Replace with your Elasticsearch password
    },
    tls: {
        rejectUnauthorized: false
    }


};

const client = new Client(config);

module.exports = client;
