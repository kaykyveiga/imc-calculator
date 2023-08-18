import { data } from './data/data'
import { useState } from 'react'
import './App.css'
import ImcCalc from './components/ImcCalc'
import Table from './components/Table'

function App() {

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) {
      alert("Preencha todos os campos");
      return;
    }

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
    if (!info) return;

  };
  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
    <>
      <div className='conteiner' >
        {!imc ? <ImcCalc calcImc={calcImc} /> : <Table data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
      </div>

    </>
  )
}

export default App