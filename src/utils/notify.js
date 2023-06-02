import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (isError, msg) => {
    if (isError) {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else {
        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

export default notify;