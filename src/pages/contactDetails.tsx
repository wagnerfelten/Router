import { useParams, useNavigate } from "react-router-dom";


const ContactDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();


    const handlerContact = () => {
        alert('Enviado')
        return navigate('/')
    }

    return (
        <div>
           <h1>Exibindo informações do contato: {id}</h1>
           <button onClick={handlerContact}>Enviar Solicitação</button>
        </div>
    )
}

export default ContactDetails;