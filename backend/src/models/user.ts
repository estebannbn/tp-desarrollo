// passwordConfirmation solo se usa cuando el usuario se esta registrando

export interface User{
    name:string,
    lastName:string,
    email: string,
    userType:'tecnico' | 'cliente',
    password: string
}

export interface Tecnico extends User {
    id: number,
    bio?: string
}