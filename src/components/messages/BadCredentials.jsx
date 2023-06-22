import { IconPadlocked } from "../svg/IconPadlocked"

const BadCredentials = ({ message }) => {
  return (
    <div className="containerMessage-wrongCredentials">
      <IconPadlocked />
      {message}
    </div>
  )
}

export default BadCredentials