const Bottone = (props) => {
    return <button onClick={() =>alert (`Hai cliccato il ${props.text}`) }>{props.text}</button>
}

export default Bottone;