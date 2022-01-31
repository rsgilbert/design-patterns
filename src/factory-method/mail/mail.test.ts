import { AirMail, Mail, WaterMail } from "./mail";


describe('mail', () => {
    let mail: Mail;

    test('land', () => {
        mail = new Mail();
        expect(mail.send()).toContain('land');
    });

    test('water', () => {
        mail = new WaterMail();
        expect(mail.send()).toContain('water');
        expect(mail.send()).toContain('boat');
    });
    
    test('air', () => {
        mail = new AirMail();
        expect(mail.send()).toContain('air');
        expect(mail.send()).toContain('plane');
    })
})