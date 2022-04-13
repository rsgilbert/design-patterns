let validator = {
    set(obj, prop, value) {
        console.log('obj=', obj, ',prop=', prop, ',value=', value);
        switch(prop) {
            case 'email': {
                if(! value.includes('@')) {
                    throw Error('Invalid email')
                }
            }
            case 'password': {
                if(value.length < 4) {
                    throw Error('short password. Should be atleat 5 letters');
                }
            }
        }
        obj[prop] = value;
    }
}

const signUpInfo = {}

const signUpInfoProxy = new Proxy(signUpInfo, validator);

// Set values
// signUpInfoProxy.email = 'Gss';
signUpInfoProxy.email = 'gss@gm.com'
// signUpInfoProxy.password = 'd' // errors
signUpInfoProxy.password = 'talatala'
console.log(signUpInfo)
console.log(signUpInfoProxy)