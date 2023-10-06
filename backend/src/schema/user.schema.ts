import {string, z, TypeOf} from 'zod'

// TODO agregar confirmacion de contraseña

const userDefinedTypes = ['tecnico', 'cliente'] as const

export const createUserSchema = z.object({
    body: z.object({
        name: string({
            required_error: 'Name is required'
        }),
        lastName:string({
            required_error:'Last name is required'
        }),
        email:string({
            required_error:'Email is required'
        }).email('Not a valid email'),
        userType:z.enum(userDefinedTypes)
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>['body']