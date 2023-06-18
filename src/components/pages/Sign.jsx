import { SignIn } from "../forms/SignIn"
import { SignUp } from "../forms/SignUp"
import { useEffect, useState } from "react"

export function Sign() {
  const [isLoading, setIsLoading] = useState(true)
  const [isRegistering, setIsRegistering] = useState(false)

  function timer() {

  }
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <>
      {isLoading
        ?
        <section className="container-loader">
          <div className="loader">
            <p className="loader-p">Cargando</p>
          </div>
        </section>
        : !isRegistering
          ? <SignIn setIsRegistering={setIsRegistering} />
          : <SignUp setIsRegistering={setIsRegistering} />}
    </>
  )
};
