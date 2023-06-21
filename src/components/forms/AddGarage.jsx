import { ReviewAddGarage } from "../../functions/review/cl-addGarage"

export function AddGarage() {
  const classReview = new ReviewAddGarage()

  return (
    <section className="container-form-addGarage">
      <form className="form-addGarage">
        <h1 className="form-addGarage-h1"><span className="gradient">Registrar mi taller</span></h1>

        <label className="form-addGarage-label" htmlFor="inputGarageName">Nombre y municipio</label>
        <input
          id="inputGarageName"
          className="form-addGarage-input inputGarage-name"
          type="text"
          autoComplete="new-password"
          placeholder="Ej. MecaCarro Tultitlan"
          onFocus={() => classReview._inputNameFocusIn()}
          onBlur={() => classReview._inputNameBlur()}
          onKeyUp={() => classReview._inputNameKeyUp()}
        />
        <p className="form-addGarage-p addGarage-p-name"></p>

        <label className="form-addGarage-label" htmlFor="inputGarageNumber">Número telefónico</label>
        <input
          id="inputGarageNumber"
          className="form-addGarage-input inputGarage-number"
          type="number"
          inputMode="numeric"
          autoComplete="new-password"
          placeholder="Ej. 5525449076"
          onFocus={() => classReview._inputNumberFocusIn()}
          onBlur={() => classReview._inputNumberBlur()}
        />

        <h3 className="form-addGarage-help-title">Localización del taller</h3>
        <p className="form-addGarage-help-p">Para mostrarle tu taller en el mapa al usuario, asegurate de escribir las coordenadas correctas</p>

        <label className="form-addGarage-label form-addGarage-label-lat" htmlFor="inputGarageLat">Coordenadas (Latitud)</label>
        <input
          id="inputGarageLat"
          className="form-addGarage-input inputGarage-coorLat"
          type="number"
          inputMode="numeric"
          autoComplete="new-password"
          placeholder="Ej. -99.2347213"
          onFocus={() => classReview._inputLatitudeFocusIn()}
          onBlur={() => classReview._inputLatitudeBlur()}
        />

        <label className="form-addGarage-label" htmlFor="inputGarageLong">Coordenadas (Longitud)</label>
        <input
          id="inputGarageLong"
          className="form-addGarage-input inputGarage-coorLong"
          type="number"
          inputMode="numeric"
          autoComplete="new-password"
          placeholder="Ej. 19.2347213"
          onFocus={() => classReview._inputLongitudeFocusIn()}
          onBlur={() => classReview._inputLongitudeBlur()}
        />


      </form>
    </section>
  )
}