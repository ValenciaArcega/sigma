import { IconMoon, IconSun } from "../svg/Appearance"
import AppearanceCl from "../../classes/cl-appearance"

export function Appearance() {
  const classAppearance = new AppearanceCl()
  return (
    <>
      <button
        type="button"
        className="btn-Dark"
        title="Button to change the appearance to dark"
        onClick={() => classAppearance._makeDark()}>
        <IconMoon />
      </button>

      <button
        type="button"
        className="btn-Light hidden"
        title="Button to change the appearance to light"
        onClick={() => classAppearance._makeLight()}>
        <IconSun />
      </button>
    </>
  )
};
