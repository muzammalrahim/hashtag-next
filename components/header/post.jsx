import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()

  if (typeof window !== "undefined") {

    localStorage.setItem("Activetabindex2",router.route)
    
    }

  return  <p> {}</p>
}

export default Post