const FormPost = () => {
  return (
    <section className="container-formPost">
      <form className="formPost">
        <h3 className="formPost-title">Crear publicación</h3>

        <label className="formPost-label" htmlFor="">Nombre del vehiculo</label>
        <input className="formPost-input" type="text" placeholder="Ingresa el nombre de tu vehiculo" />

      </form>
    </section>
  );
};

export default FormPost;