import React from "react"

class Form extends React.Component {  
  constructor() {
    super()

    this.state = {
        name: "",
        email: "",
        cpf: "",
        adress: "",
        city: "",
        state: "",
        tipo: "",
        resume: "",
        office: "",
        describe: "",
    }
  }
  
  render() {
    localStorage.setItem('alerted', '');

    const handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState(() => ({
            [name]: value
        }))
    };

    const handleAdress = ({ target }) => {
      const myRegex = /[^a-z]/gi;
      target.value = target.value.replace(myRegex, '');
    };

    const handleCity = ({ target }) => {
      if (!isNaN(target.value[0])) {
      target.value = ''
      }
    };

    const handleCargo = () => {
      const alerted = localStorage.getItem('alerted') || '';
      if (alerted != 'yes') {
        alert("Preencha com cuidado esta informação.");
        localStorage.setItem('alerted','yes');
      }
    };

    const previewInfo = () => {
      const { name, email, cpf, adress, city, state, tipo, resume, office, describe } = this.state;
      const infoPreview = document.querySelector('.preview');
      const createPreview = document.createElement('p');
      createPreview.innerText = `
      Nome: ${name}
      Email: ${email}
      CPF: ${cpf}
      Endereço: ${adress}
      Cidade: ${city}
      Estado: ${state}
      Tipo de Residência: ${tipo}
      Resumo: ${resume}
      Cargo: ${office}
      Descrição do cargo: ${describe}`;
      infoPreview.innerHTML = '';
      infoPreview.style.display = "block";
      infoPreview.appendChild(createPreview);
    }

    const clearAll = () => {
      const infoPreview = document.querySelector('.preview');
      this.setState(() => ({
        name: "",
        email: "",
        cpf: "",
        adress: "",
        city: "",
        state: "",
        tipo: "",
        resume: "",
        office: "",
        describe: "",
      }))
      infoPreview.style.display = "none";
    };

    return (
      <div className="App">
        <h1>Meu Currículo</h1>
        <form>
          <fieldset>
            <label>
              Nome
              <input
                name="name"
                value={this.state.name}
                maxLength={ 40 }
                style={ { textTransform: "uppercase" } }
                onChange={ handleChange }
                type="text"
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                value={this.state.email}
                maxLength={ 50 }
                onChange={ handleChange }
                type="text" 
                required  
              />
            </label>
            <label>
              CPF
              <input
                value={this.state.cpf}
                name="cpf"
                type="text"
                maxLength={ 11 }
                onChange={ handleChange }
                required
              />
            </label>
            <label>
              Endereço
              <input
                value={this.state.adress}
                name="adress"
                type="text"
                maxLength={ 200 }
                onKeyUp={ handleAdress }
                onChange={ handleChange }
                required
              />
            </label>
            <label>
              Cidade
              <input
                value={this.state.city}
                name="city"
                type="text"
                maxLength={ 28 }
                onBlur={ handleCity }
                onChange={ handleChange }
                required
              />
            </label>
            <label>
              Estado
              <select
                value={this.state.state}
                onChange={ handleChange }
                className="states"
                name="state"
                required
              >
                <option>Acre</option>
                <option>Alagoas</option>
                <option>Amapá</option>
                <option>Amazonas</option>
                <option>Bahia</option>
                <option>Ceará</option>
                <option>Distrito Federal</option>
                <option>Espírito Santo</option>
                <option>Goiás</option>
                <option>Maranhão</option>
                <option>Mato Grosso</option>
                <option>Mato Grosso do Sul</option>
                <option>Minas Gerais</option>
                <option>Pará</option>
                <option>Paraná</option>
                <option>Paraná</option>
                <option>Pernambuco</option>
                <option>Piauí</option>
                <option>Rio de Janeiro</option>
                <option>Rio Grande do Norte</option>
                <option>Rio Grande do Sul</option>
                <option>Rondônia</option>
                <option>Roraima</option>
                <option>Santa Catarina</option>
                <option>São Paulo</option>
                <option>Sergipe</option>
                <option>Tocantins</option>
              </select>
            </label>
            <label>
              Tipo
              <input
                name="tipo"
                type="radio"
                value="Casa"
                onChange={ handleChange }
                required
              /> Casa
              <input
                name="tipo"
                type="radio"
                value="Apartamento"
                onChange={ handleChange }
                required
              /> Apartamento
            </label>
          </fieldset>
          <fieldset>
            <label>
              Resumo do Currículo
              <textarea
                value={this.state.resume}
                name="resume"
                type="text"
                maxLength={ 1000 }
                onChange={ handleChange }
                required
              />
            </label>
            <label>
              Cargo
              <textarea
                value={this.state.office}
                name="office"
                type="text"
                maxLength={ 40 }
                required
                onChange={ handleChange }
                onMouseEnter={ handleCargo }
              />
            </label>
            <label>
              Descrição do cargo
              <textarea
                value={this.state.describe}
                name="describe"
                type="text"
                maxLength={ 500 }
                required
                onChange={ handleChange }
              />
            </label>
          </fieldset>
          <fieldset style={ { display: "none" } } className="preview" >
          </fieldset>
          <button onClick={ previewInfo } >Preview</button>
          <button onClick={ clearAll } >Clear</button>
        </form>
      </div>
    );
  }
}

export default Form;