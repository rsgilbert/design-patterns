// A remote proxy executes a client request over the network on a remote object.
// It handles all the details on how to send the request over a network
const axios = require('axios');

// First run from bash: export NODE_EXTRA_CA_CERTS = "/Users/gilbert/Projects/node/learning/design-patterns/structural/proxy/intermediate.pem"
console.log(process.env.NODE_EXTRA_CA_CERTS)
const soapUrl = 'XX'

class PartnerPageRemoteProxy {
    constructor(){

    }
    // We are calling a method on a remote object.
    async list() {
       const result = await this._axios({
            serviceName: 'PartnerCard',
            serviceType: 'Page',
            action: 'ReadMultiple'
       });
       return result;
    }

    async _axios(obj){
        try {
            const result = await axios({
                method: 'POST',
                url: soapUrl,
                body: JSON.stringify(obj)
            });
            const data = result.data;
            return data;
        }
        catch(e) {
            const content = e.response?.statusText ||  e.message;
            throw new Error(content);
        }
    }
}

const partnerPage = new PartnerPageRemoteProxy();
partnerPage.list()
.then(v => console.log('list is',v ))
.catch(e => {throw e})