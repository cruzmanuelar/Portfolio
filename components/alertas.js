import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const correoEnviado = () => toast.success('Correo enviado. Manuel se estará contactando contigo pronto.',{
    toastId:"correo-enviado",
    theme: "dark"
});

export default correoEnviado;