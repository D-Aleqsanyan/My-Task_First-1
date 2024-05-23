import './logOuth.css';
import {Button} from '@mui/material';


import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginButton = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const onClickButton = () => {
        setShow(prev => !prev)
    }

    const onClickLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return <div className={'buttonWrapper'} onClick={onClickLogout}>
        <Button
                sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#003367',
                    fontFamily: 'Roboto sans-serif',
                    inlineSize:'14px',
                    lineHeight:'18px',
                    padding: '8px 20px',
                }}>LOGOUT</Button>




    </div>
}
export default LoginButton