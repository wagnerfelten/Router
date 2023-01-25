import { Link } from "react-router-dom";

function Contact() {
    return (
     <div className='App'>
      <h1>Contatos</h1>

     
      <Link to="/contact/1">Contato 01</Link><br />
      <Link to="/contact/2">Contato 02</Link><br />
      <Link to="/contact/3">Contato 03</Link>
     </div>
  
    );
  }
  
  export default Contact
  