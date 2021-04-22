import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'

const IndexPage: NextPage = () => {  
  const [ session, loading ] = useSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bem-vindo ao{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <p className="mt-5">
          {!session && <>
            <button className="ml-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white p-2 w-20 focus:outline-none" onClick={() => signIn()}>Entrar</button>
          </>}
          {session && <>
            Conectado como <b className="text-blue-600">{session.user.name}</b> 
            <button className="ml-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white p-2 w-20 focus:outline-none" onClick={() => signOut()}>Sair</button>
          </>}
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default IndexPage;