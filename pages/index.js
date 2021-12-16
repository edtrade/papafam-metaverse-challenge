import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if(!isAuthenticated) return <Login authenticate={authenticate}/>

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-between items-center p-5'>
        <div>
          Authenticated
        </div>
        <div>
          <button className='bg-yellow-500 rounded-md px-2 py-1' onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
