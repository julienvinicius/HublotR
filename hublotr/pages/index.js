import Nav from "@/components/nav";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>test
      <div className="text-center w-full">
          <button onClick={()=>signIn('google')} className='bg-white p2 px-4 rounded-lg'>login com google</button>
      </div>
    </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen">
      <Nav/>
      <div>login {session.user.email}</div>
    </div>
  )
}
