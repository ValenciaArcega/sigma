import IconPadlocked from "../svg/IconPadlocked";

const BadCredentials = () => {
  return (
    <div className="containerMessage-wrongCredentials">
      <IconPadlocked />
      Las credenciales no coinciden
    </div>
  );
};

export default BadCredentials;