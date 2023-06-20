import { ReviewFormAddGarage } from '../../functions/Review'

export function AddGarage() {
  const classReview = new ReviewFormAddGarage()

  return (
    <section className="container-form-addGarage">
      <form className="form-addGarage">
        <h1 className="form-addGarage-h1"><span className="gradient">Postular mi taller</span></h1>

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


      </form>
    </section>
  )
}