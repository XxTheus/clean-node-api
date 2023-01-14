import { SignupController } from './signup'

describe('Signup Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignupController();
    const httpRequest = {
      body:{
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      }
    }
    const hhtpResponse = sut.handle(httpRequest)
    expect(hhtpResponse.statusCode).toBe(400)
    expect(hhtpResponse.body).toEqual(new Error('Missing param: name'))
  })
})