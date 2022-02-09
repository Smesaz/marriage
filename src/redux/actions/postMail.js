import axios from 'axios';

export function  postMail(input,assist){
    input.assist = assist;
    return async (dispatch)=>{
        try {
            var json = await axios.post(`https://lsweddingbackend.herokuapp.com/postMail`, input);
            return dispatch({
                type: 'POST_MAIL',
                payload: json.data,
            });
        } catch (error) {
            console.log(error);
            return dispatch({
                type:'POST_MAIL',
                payload: {
                    error: `Nombre o correo electrónico anteriormente registrado. 
                    Si deseas cambiar el estado de tu asistencia, por favor utiliza los mismos datos del primer
                    registro.`
                },
            });
        }
    }
}