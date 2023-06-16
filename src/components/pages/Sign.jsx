import { SignIn } from "../forms/SignIn"
import { SignUp } from "../forms/SignUp"
import { useState } from "react"

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false)

  return (
    !isRegistering
      ? <SignIn setIsRegistering={setIsRegistering} />
      : <SignUp setIsRegistering={setIsRegistering} />
  )
};
