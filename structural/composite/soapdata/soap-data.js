const _ = require("lodash");


class SoapData {
    rawData;
    data = [];
    // We compose httpSoapData so it can be accessed over a common interface ie an array.
    constructor(httpSoapData) {
        if (httpSoapData === null ||
            httpSoapData === undefined) {
            // httpSoapData is null or undefined, 
            // so we leave data to be an empty array
            return;
        }
        if (_.isArray(httpSoapData)) {
            // httpSoapData is an array of records. We use it as it is
            this.data = httpSoapData;
        }
        else
            // data is not put into an array. We do it for them
            this.data = [httpSoapData];
    }
}

module.exports = { SoapData }