import { createContext, useEffect, useState } from "react"

export const AuthContent = createContext()

export default function AuthProvider( {children} ) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(())
  return (
    <div>AuthProvider</div>
  )
}
