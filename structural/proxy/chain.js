// See: https://stackoverflow.com/questions/31673587/error-unable-to-verify-the-first-certificate-in-nodejs
// index.js
const axios = require('axios');


// You'll get an error saying first certificate cant be verified
axios.get('https://incomplete-chain.badssl.com')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


// To correct
// Step 1, save server certificate details: 
// openssl s_client -connect sgms.mildmay.or.ug:5000 -servername sgms.mildmay.or.ug | tee logcertfile

// Step 2, find out issuer
// openssl x509 -in logcertfile -noout -text | grep -i "issuer"  
/**
 * Result:
 *     Issuer: C=US, O=DigiCert Inc, OU=www.digicert.com, CN=Thawte RSA CA 2018
                CA Issuers - URI:http://cacerts.thawte.com/ThawteRSACA2018.crt
 */
// From above cmd, URI if signing certificate is: http://cacerts.thawte.com/ThawteRSACA2018.crt

// Step 3, Download issuer certificate:
// curl --output intermediate.crt http://cacerts.thawte.com/ThawteRSACA2018.crt

// Step 5, convert intermediate certificate to .pem
