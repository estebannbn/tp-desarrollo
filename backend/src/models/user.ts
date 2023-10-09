// passwordConfirmation solo se usa cuando el usuario se esta registrando

export default interface User{
    name:string,
    lastName:string,
    email: string,
    userType:'tecnico' | 'cliente',
    password: string,
    passwordConfirmation?: string
}