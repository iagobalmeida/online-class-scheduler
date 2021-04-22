import { GetServerSideProps } from 'next'
import { getCsrfToken } from 'next-auth/client'
import Head from 'next/head'

export default function SignIn({ csrfToken, error }) : JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold mb-5">
          Insira sua conta do {' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <form method='post' action='/api/auth/callback/credentials'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <div className="row">
          {error && <>
          <p className="p-1 rounded-md bg-red-300 text-red-700 mb-3">E-mail e/ou senha inválidos</p>
          </>}
            <div className="col">
              <label className="mr-3">
                E-mail
              </label>
              <input className="p-1 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-600" name='email' type='email'/>
            </div>
          </div>
          <div className="row">
            <div className="col">
                <label className="mr-3">
                  Senha
                </label>
                <input className="p-1 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-600"  name='password' type='password'/>
            </div>
          </div>
          <button className="ml-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white p-2 focus:outline-none" type='submit'>Fazer Login</button>
        </form>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      error: context.query.error || ''
    }
  }
}
