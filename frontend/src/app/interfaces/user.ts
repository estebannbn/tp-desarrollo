export interface User {
  name:string,
  lastName:string,
  userType: 'cliente' | 'tecnico',
  password: string
}
