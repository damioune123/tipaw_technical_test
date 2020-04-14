const supertest = require('supertest');
const app = require('../../app');
const contactValidator = require('./validator');
const endpoint = '/api/contacts/';

describe('01-contacts 01-add-contact Endpoint: ' + endpoint, () => {
    context('', () => {
        const getContactOne = () => {
            return {
                firstName: "John",
                lastName: "Foe",
                email: "johnfoe@gmail.com",
                messageObject: "Question",
                messageContent: "This is my message content.",
                phoneNumber: "+32 555 123 555"
            }
        };
        it('should FAIL [400] to POST without params ' + endpoint, async () => {
            await supertest(app)
                .post(endpoint)
                .expect(400);
        });

        [
            'firstName',
            'lastName',
            'email',
            'messageObject',
            'messageContent',
        ].forEach((param) => {
            it(`should FAIL [400] to POST with param ${param} being empty ${endpoint}`, async () => {
                const params = getContactOne();
                params[param] = '';
                await supertest(app)
                    .post(endpoint)
                    .send(params)
                    .expect(400);

            });
        });

        [
            'firstName',
            'lastName',
            'email',
            'messageObject',
            'messageContent',
        ].forEach((param) => {
            it(`should FAIL [400] to POST with param ${param} having just spaces ${endpoint}`, async () => {
                const params = getContactOne();
                params[param] = '';
                await supertest(app)
                    .post(endpoint)
                    .send(params)
                    .expect(400);
            });
        });
        [
            'firstName',
            'lastName',
            'email',
            'messageObject',
            'messageContent',
        ].forEach((param) => {
            it(`should FAIL [400] to POST with missing param ${param} ${endpoint}`, async () => {
                const params = getContactOne();
                delete params[param];
                await supertest(app)
                    .post(endpoint)
                    .send(params)
                    .expect(400);
            });
        });

        [
            {param: 'firstName', maxLength: 200},
            {param: 'lastName', maxLength: 200},
            {param: 'email', maxLength: 200},
            {param: 'messageObject', maxLength: 150},
            {param: 'messageContent', maxLength: 2000},
            {param: 'phoneNumber', maxLength: 20},
        ].forEach((paramConfig) => {
            it(`should FAIL [400] to POST with param ${paramConfig.param} having more than ${paramConfig.maxLength} characters ${endpoint}`, async () => {
                const params = getContactOne();
                params[paramConfig.param] = '#'.repeat(paramConfig.maxLength + 1);
                await supertest(app)
                    .post(endpoint)
                    .send(params)
                    .expect(400);
            });

        });

        it('should SUCCESS [201] to POST ' + endpoint, async () => {
            const params = getContactOne();
            await supertest(app)
                .post(endpoint)
                .send(params)
                .expect(201)
                .then((res) => {
                    contactValidator.newContact(res, getContactOne());
                });
        });
    });
});


