import {string, z, TypeOf} from 'zod'

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
        userType:z.enum(userDefinedTypes),
        password:string({
            required_error: 'Password is required'
        }),
        passwordConfirmation:string({
            required_error: 'Password confirmation is required'
        }).or(z.undefined())
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords don't match",
        path: ["confirm"], // path of error
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>['body']