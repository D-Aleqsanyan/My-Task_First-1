import './home.css'
import LoginButton from "../../shared/LogOuth/logOuth";
import img2 from "../../assets/image 2.svg"
import {NavLink} from "react-router-dom";
import {Button} from '@mui/material';


const Home = () => {
    return <div className={'patientWrapper'}>
        <img className={'img2'} src={img2} alt="img2"/>
        <span className={'patientText'}>Coming soon</span>
        <NavLink activeClassName='active' className={'link'} to={'/form'}>

            <Button
                label={'EDIT MY PROFILE AND MY WORKLOG'}
                type={'submit'}
                variant="contained"
                color="primary"
                className="w-full"
                sx={{
                    width:'100%',
                    height:'100%',
                    padding: '8px 20px',
                    borderRadius: '5px',
                    backgroundColor: '#003367',
                    maxWidth: '305px',
                    maxHeight: '36px',
                    fontFamily: 'Roboto sans-serif',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#003367', // Keep the same background color on hover
                    },
                }}
            >
                EDIT MY PROFILE AND MY WORKLOG
            </Button>
        </NavLink>

        <LoginButton/>
    </div>
}

export default Home

