const axios = require('axios');
var fs = require('fs');

async function getdata() {
  const api =  await axios.get(
  'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=2fa9fbc4559e98df17dfaf0c5c2e518f5233cfde'
  
  );
  console.log(api)
  mydata = JSON.stringify(api.data, null, 2)
  fs.writeFile("answer.json", mydata, function(err) {
      if (err) {
          console.log(err);
      }
  });
}

getdata();
