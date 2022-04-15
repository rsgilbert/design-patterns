// implementing validation using chain of responsibility
class Validator {
    data;
    next;
    constructor(data) {
        this.data = data;
    }
    validate() { // we need to call next() after each validation. We do this from the builder and the proxy.
    }
}

class EmailValidator extends Validator {
    validate() {
        if (this.data.email) {
            if (!this.data.email.includes('@')) {
                throw new Error('Invalid email')
            }
        }
    }
}

class PhoneNumberValidator extends Validator {
    validate() {
        if (this.data.phoneNumber) {
            if (this.data.phoneNumber.length > 13
                || this.data.phoneNumber.length < 9) {
                throw new Error('Invalid phone number')
            }
        }
    }
}


class PasswordValidator extends Validator {
    validate() {
        if (this.data.password) {
            if (this.data.password.length < 6) {
                throw new Error('invalid password, too short');
            }
        }
    }
}


class ValidateWithNextDecorator {
    next;
    constructor(validator) {
        this.validator = validator;
        this.next = this.validator.next;
    }
    validate(){ 
        this.validator.validate();
        this.next.validate();
    }
}

class ValidatorBuilder {
    #data;
    #validators = []
    setData(data) { 
        this.#data = data;
        return this;
    }
    addValidator(validator) {
        validator.data = this.#data;
        const decoratedValidator = new ValidateWithNextDecorator(validator);
        this.#validators = [...this.#validators, decoratedValidator];
        return this;
    }
    build(){
        for(let [i, v] of this.#validators.entries()) {
            v.next = this.#validators[i+1];
        }
        const lastNext = new Validator();
        this.#validators[this.#validators.length-1].next = lastNext;
        return this.#validators[0];
    }
}

const validator = new ValidatorBuilder()
    .setData({ email: 'jonk', phoneNumber:'0703424819', password: 'k5fsjk' })
    .addValidator(new EmailValidator())
    .addValidator(new PhoneNumberValidator())
    .addValidator(new PasswordValidator())
    .build();

validator.validate();