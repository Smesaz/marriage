import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {HashLoader} from 'react-spinners';
import './contactUs.css';
import Swal from 'sweetalert2';
import { postMail } from '../../../redux/actions/postMail.js';

const ContactUs = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const override =`
    display: flex;
    position: absolute;
	  width: 100vw;
	  height: 100vh;
	  justify-content: center;
	  align-items: center;
		z-index: 500;
		transition: all .5s ease-out;
	`;

  const [input, setInput] = useState({
    name:'',
    phone:'',
    email:'',
  });
  const [error, setError] = useState(''); 
  
  const handleInputChange = (e)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if(e.target.name==='email'){
      validateMail(e);
    }
  }
  const validateMail = (e)=>{
    if(!/\S+@\S+\.\S+/.test(e.target.value)){
      setError('"Debe ser un email válido"');
    } else{
      setError('');
    }
  }
  const alertYes = async(e)=>{
    e.preventDefault();
    setLoading(true);
    let json = await dispatch(postMail(input, true));
    setLoading(false)
    if(json.payload.error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: json.payload.error,
      });
    } else{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success!",
        text: "Has confirmaado tu asistencia a la boda! 🤩",
      });
      setInput({
        name:'',
        phone:'',
        email:'',
      })
    }
  }
  const alertNo = async(e)=>{
    e.preventDefault();
    setLoading(true);
    let json = await dispatch(postMail(input, false));
    setLoading(false)
    if(json.payload.error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: json.payload.error,
      });
    } else{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success!",
        text: "Has confirmaado tu ausencia 😢",
      });
      setInput({
        name:'',
        phone:'',
        email:'',
      })
    }
  }
  const notAlert = (e)=>{
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "All fields are required!",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  return (
    <section id="contactUs" class="contact sec-pad dynamicBg">
      {loading && (<HashLoader
        css={override}
        size={70}
        color={"#dd6b6b"}
        loading={loading} />
        )}
    <div class="main-container">
        <span class="heading-sec__main heading-sec__main--lt">Confirma tu asistencia</span>
     
      <div class="contact__form-container">
        <form action="#" class="contact__form">
          <div class="contact__form-field">
            <label class="contact__form-label" for="name">Nombre Completo</label>
            <input
              required
              placeholder="Escribe tu nombre"
              type="text"
              class="contact__form-input"
              name="name"
              value={input.name}
              onChange={(e)=> handleInputChange(e)}
            />
          </div>
          <div class="contact__form-field">
            <label class="contact__form-label" for="phone">Celular</label>
            <input
              required
              placeholder="Escribe tu teléfono celular"
              type="number"
              class="contact__form-input"
              name="phone"
              value={input.phone}
              onChange={(e)=> handleInputChange(e)}
            />
          </div>
          
          <div class="contact__form-field">
            <label class="contact__form-label" for="email">Correo electrónico</label>
            <input
              required
              placeholder="Ecribe tu correo electrónico"
              type="email"
              class={error ? "contact__form-input-error" : "contact__form-input"}
              name="email"
              value={input.email}
              onChange={(e)=> handleInputChange(e)}
            />
          </div>
          {!error ? null : <span class="contact__form-error-span">{error}</span>}
          
          {input.name.length<=0 || input.phone.length<=0 || input.email.length<=0 || error ? (
            <div>
            <button 
            type="submit" 
            class="btn isDisabled primary-btn" 
            onClick={notAlert}>
            Si 😀
          </button>
            <button 
            type="submit" 
            class="btn isDisabled primary-btn" 
            onClick={notAlert}>
            No 😞
          </button>  
            </div>
          ):(
            <div className='btnGroup'>
            <button 
            type="submit" 
            class="btn primary-btn"
            onClick={alertYes}>
            Si 😀
          </button>
            <button 
            type="submit" 
            class="btn primary-btn"
            onClick={alertNo}>
            No 😞
          </button>
            </div>
          )}
          
        </form>
      </div>
    </div>
  </section>
  )
};

export default ContactUs;