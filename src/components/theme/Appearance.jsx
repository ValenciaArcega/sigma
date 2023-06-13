import { IconMoon, IconSun } from "../svg/Appearance";
import AppearanceCl from "../../functions/Appearance";

export function Appearance() {
  const classAppearance = new AppearanceCl();
  return (
    <>
      <button
        type="button"
        className="btn-Dark"
        onClick={() => classAppearance._makeDark()}>
        <IconMoon />
      </button>

      <button
        type="button"
        className="btn-Light hidden"
        onClick={() => classAppearance._makeLight()}>
        <IconSun />
      </button>
    </>
  );
};
