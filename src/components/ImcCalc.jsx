import { useState } from "react"
import Button from "./Button"
import "./ImcCalc.css"
/* eslint-disable react/prop-types */

const ImcCalc = ({ calcImc }) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const clearForm = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue)
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setWeight(updateValue)
    }
    
    return (
        <div id="calc-conteiner">
            <h2>Calculadora IMC</h2>
            <form onSubmit={handleSubmit} id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label>
                            <span>Altura:</span>
                            <input type="text" name="height" id="height" placeholder="Exemplo 1,75" value={height} onChange={handleHeightChange} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>
                            <span>Peso:</span>
                            <input type="text" name="weight" id="weight" placeholder="Exemplo 70,5" value={weight} onChange={handleWeightChange} />
                        </label>
                    </div>
                    <div className="action-control">
                        <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
                        <Button id="clear-btn" text="Limpar" action={clearForm} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ImcCalc