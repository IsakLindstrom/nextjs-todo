import Login from '@/components/Login'
import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '../context/authContext'
import UserDashboard from '../components/UserDashboard'
export default function Home() {
  const { currentUser } = useAuth()
  
  return (
    
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <Login/>}
      {currentUser && <UserDashboard/>}
      </>   
  )
}
