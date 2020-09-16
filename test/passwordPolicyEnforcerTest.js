"use strict";

const PasswordPolicyEnforcer = require('../utilities/passwordPolicyEnforcer'),
    Setting = require('../models/setting'),
    chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    expect = require("chai").expect,
    Hasher = require('../utilities/pbkdf2')();

chai.use(sinonChai);

describe("Password Policy Enforcer Tests", function () {

    afterEach(function () {
        sinon.restore();
    });


    it('Test password history enforcement', function (done) {
        sinon.stub(Setting, 'getSetting').returns(Promise.resolve({
            settings: {
                test: {
                    passwordPolicy: {
                        passwordHistoryCount: 1,
                        passwordHistoryCountEnabled: true
                    }
                }
            }
        }));

        const existingAuthentication = {
            password: 'password',
            previousPasswords: ['one', 'two', 'three']
        };
        const auth = {
            password: 'password123',
            previousPasswords: ['one', 'two', 'three']
        };

        PasswordPolicyEnforcer.enforce('test', existingAuthentication, auth).then(() => {
            expect(auth.previousPasswords.length).to.equal(1);
            expect(auth.previousPasswords[0]).to.equal('password');
            done();
        }).catch(err => {
            done(err);
        });
    });
});