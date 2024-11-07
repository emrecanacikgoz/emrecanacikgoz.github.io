exports.handler = async (event) => {
    const axios = require('axios');
  
    // Make an API call to increment counter
    await axios.post('https://your-server.com/increment-counter', {
      url: event.headers.referer,
    });
  
    return {
      statusCode: 200,
      body: 'Visit counted.',
    };
  };
  