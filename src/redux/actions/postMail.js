import axios from 'axios';

export function  postMail(input,assist){
    input.assist = assist;
    return async (dispatch)=>{
        try {
            var json = await axios.post(`http://192.168.3.100:3001/postMail`, input);
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