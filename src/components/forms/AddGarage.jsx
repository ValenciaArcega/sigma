import { ReviewAddGarage } from "../../functions/review/cl-addGarage"

export function AddGarage() {
  const cl = new ReviewAddGarage()

  return (
    <section className="container-form-addGarage">
      <form className="form-addGarage">
        <section className="form-addGarage-section-1">
          <h1 className="form-addGarage-h1"><span className="gradient">Registrar mi taller</span></h1>

          <label className="form-addGarage-label" htmlFor="inputGarageName">Nombre y municipio</label>
          <input
            id="inputGarageName"
            className="form-addGarage-input inputGarage-name"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. MecaCarro Tultitlan"
            onFocus={() => cl._inputNameFocusIn()}
            onBlur={() => cl._inputNameBlur()}
            onKeyUp={() => cl._inputNameKeyUp()}
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
            onFocus={() => cl._inputNumberFocusIn()}
            onBlur={() => cl._inputNumberBlur()}
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
            onFocus={() => cl._inputLatitudeFocusIn()}
            onBlur={() => cl._inputLatitudeBlur()}
          />

          <label className="form-addGarage-label" htmlFor="inputGarageLong">Coordenadas (Longitud)</label>
          <input
            id="inputGarageLong"
            className="form-addGarage-input inputGarage-coorLong"
            type="number"
            inputMode="numeric"
            autoComplete="new-password"
            placeholder="Ej. 19.2347213"
            onFocus={() => cl._inputLongitudeFocusIn()}
            onBlur={() => cl._inputLongitudeBlur()}
          />
        </section>

        <section className="form-addGarage-section-2">
          <h3>Servicios del taller</h3>
          <p className="form-addGarage-help-p">Lista los 3 servicios principales que puede ofrecer tu taller</p>

          <label className="form-addGarage-label" htmlFor="inputGarageService1">Servicio 1</label>
          <input
            id="inputGarageService1"
            className="form-addGarage-input inputGarage-serv1"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. Ajuste de frenos"
            onFocus={() => cl._inputServ1FocusIn()}
            onBlur={() => cl._inputServ1Blur()}
            onKeyUp={() => cl._inputServ1KeyUp()}
          />
          <p className="form-addGarage-p addGarage-p-serv1"></p>

          <label className="form-addGarage-label" htmlFor="inputGarageService2">Servicio 2</label>
          <input
            id="inputGarageService2"
            className="form-addGarage-input inputGarage-serv2"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. Cambio de aceite"
            onFocus={() => cl._inputServ2FocusIn()}
            onBlur={() => cl._inputServ2Blur()}
            onKeyUp={() => cl._inputServ2KeyUp()}
          />
          <p className="form-addGarage-p addGarage-p-serv2"></p>

          <label className="form-addGarage-label" htmlFor="inputGarageService3">Servicio 3</label>
          <input
            id="inputGarageService3"
            className="form-addGarage-input inputGarage-serv3"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. Documentación"
            onFocus={() => cl._inputServ3FocusIn()}
            onBlur={() => cl._inputServ3Blur()}
            onKeyUp={() => cl._inputServ3KeyUp()}
          />
          <p className="form-addGarage-p addGarage-p-serv3"></p>

          <button className="form-addGarage-btn">Enviar Solicitud</button>
        </section>
      </form>
    </section>
  )
}