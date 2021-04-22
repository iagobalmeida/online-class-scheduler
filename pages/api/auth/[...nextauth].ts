import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import connect from '../../../utils/database'

interface UserCredentials {
    email: string,
    password: string
}

export default NextAuth({
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    pages: {
        signIn: '/auth/credentials-signin',
    },
    // Configure one or more authentication providers
    providers: [
        Providers.Credentials({
            name: '',
            credentials: {
                email: { label: "E-mail", type: "email", placeholder: "exemplo@dominio.com" },
                password: {  label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = Object.create(credentials) as UserCredentials;
                if ( !email || !password ) { return null; }
                const { db }   = await connect();
                const user = await db.collection('users').findOne({email: email, password: password})
                return user ? user : null;
            }
        })
    ],
    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
})