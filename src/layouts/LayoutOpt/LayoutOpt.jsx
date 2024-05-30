import './LayoutOpt.css'
import img1 from "..//..//assets/image 1.svg"
import Otp from "../../pages/Login/Otp";

export const LayoutOtp = () => {
    return <div className={'layout'}>
        <div className={'loginRight'}>
            <span className={'rightSpan'}>PLAYGROUND</span>
            <img className={'img1'} src={img1} alt="img1"/>
        </div>
        <Otp/>
    </div>
}
