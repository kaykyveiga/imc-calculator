import "./Table.css"
import Button from "./Button"
/* eslint-disable react/prop-types */

const Table = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div id='result-conteiner'>
      <p id="imc-number">Seu IMC: <span className={infoClass}>{imc}</span></p>
      <p id="imc-info">Situação Atual: <span className={infoClass}>{info}</span></p>
      <h3>Confira as classificações:</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Voltar" action={resetCalc} />
    </div>
  )
}

export default Table