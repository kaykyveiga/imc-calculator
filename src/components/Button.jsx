/* eslint-disable react/prop-types */
import "./Button.css"


const Button = ({ id, text, action }) => {
  const handleAction = (e) => action(e)
  return <button onClick={handleAction} id={id}>{text}</button>
}

export default Button