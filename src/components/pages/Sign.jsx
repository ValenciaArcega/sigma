import { SignIn } from "../forms/SignIn"
import { SignUp } from "../forms/SignUp"
import { Loader } from '../loader/Loader'
import { useEffect, useState } from "react"

export function Sign() {
  const [isLoading, setIsLoading] = useState(true)
  const [isRegistering, setIsRegistering] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  return (
    <>
      {isLoading
        ?
        <Loader />
        : !isRegistering
          ? <SignIn setIsRegistering={setIsRegistering} />
          : <SignUp setIsRegistering={setIsRegistering} />}
    </>
  )
};
