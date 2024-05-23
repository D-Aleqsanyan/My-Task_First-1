import Login from "../../pages/Login/Login";
import './AuthLayouth.css'
import img1 from "..//..//assets/image 1.svg"

export const AuthLayout = () => {
    return <div className={'layout'}>
        <div className={'loginRight'}>
            <span className={'rightSpan'}>PLAYGROUND</span>
            <img className={'img1'} src={img1} alt="img1"/>
        </div>
        <Login/>
    </div>
}
