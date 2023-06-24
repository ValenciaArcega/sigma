import { ClReviewAddGarage } from "../../classes/cl-addGarage"

export function AddGarage() {
  const cl = new ClReviewAddGarage()

  return (
    <section className="container-form-addGarage">
      <form className="form-addGarage">
        <section className="form-addGarage-section-1">
          <h1 className="form-addGarage-h1"><span className="gradient">Registrar mi taller</span></h1>

          <label>Nombre y municipio</label>
          <input
            id="inputGarageName"
            className="form-addGarage-input inputGarage-name"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. MecaCarro Tultitlan"
            onFocus={() => cl._inputFocusIn('name')}
            onBlur={() => cl._inputBlur('name')}
            onKeyUp={() => cl._inputNameKeyUp()}
          />
          <p className="form-addGarage-p addGarage-p-name"></p>

          <label>Número telefónico</label>
          <input
            id="inputGarageNumber"
            className="form-addGarage-input inputGarage-number"
            type="number"
            inputMode="numeric"
            autoComplete="new-password"
            placeholder="Ej. 5525449076"
            onFocus={() => cl._inputFocusIn('number')}
            onBlur={() => cl._inputBlur('number')}
          />

          <h3 className="form-addGarage-help-title">Localización del taller</h3>
          <p className="form-addGarage-help-p">Para mostrarle tu taller en el mapa al usuario, asegurate de escribir las coordenadas correctas</p>

          <label>Coordenadas (Latitud)</label>
          <input
            id="inputGarageLat"
            className="form-addGarage-input inputGarage-coorLat"
            type="number"
            inputMode="numeric"
            autoComplete="new-password"
            placeholder="Ej. -99.2347213"
            onFocus={() => cl._inputFocusIn('coorLat')}
            onBlur={() => cl._inputBlur('coorLat')}
          />

          <label>Coordenadas (Longitud)</label>
          <input
            id="inputGarageLong"
            className="form-addGarage-input inputGarage-coorLong"
            type="number"
            inputMode="numeric"
            autoComplete="new-password"
            placeholder="Ej. 19.2347213"
            onFocus={() => cl._inputFocusIn('coorLong')}
            onBlur={() => cl._inputBlur('coorLong')}
          />
        </section>

        <section className="form-addGarage-section-2">
          <h3>Servicios del taller</h3>
          <p className="form-addGarage-help-p">Lista los 3 servicios principales que puede ofrecer tu taller</p>

          <label>Servicio 1</label>
          <input
            id="inputGarageService1"
            className="form-addGarage-input inputGarage-serv1"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. Ajuste de frenos"
            onFocus={() => cl._inputFocusIn('serv1')}
            onBlur={() => cl._inputBlur('serv1')}
            onKeyUp={() => cl._inputServicesKeyUp('serv1')}
          />
          <p className="form-addGarage-p addGarage-p-serv1"></p>

          <label>Servicio 2</label>
          <input
            id="inputGarageService2"
            className="form-addGarage-input inputGarage-serv2"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. Cambio de aceite"
            onFocus={() => cl._inputFocusIn('serv2')}
            onBlur={() => cl._inputBlur('serv2')}
            onKeyUp={() => cl._inputServicesKeyUp('serv2')}
          />
          <p className="form-addGarage-p addGarage-p-serv2"></p>

          <label>Servicio 3</label>
          <input
            id="inputGarageService3"
            className="form-addGarage-input inputGarage-serv3"
            type="text"
            autoComplete="new-password"
            placeholder="Ej. Documentación"
            onFocus={() => cl._inputFocusIn('serv3')}
            onBlur={() => cl._inputBlur('serv3')}
            onKeyUp={() => cl._inputServicesKeyUp('serv3')}
          />
          <p className="form-addGarage-p addGarage-p-serv3"></p>

          <button className="form-addGarage-btn">Enviar Solicitud</button>
        </section>
      </form>
    </section>
  )
}