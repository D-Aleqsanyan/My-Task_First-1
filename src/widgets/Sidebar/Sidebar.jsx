import './Sidebar.css'
import {NavLink} from "react-router-dom";
import schedule from '../../assets/Schedule_24px.svg';
import patient from '../../assets/Patient_24px.svg';
import menu from '../../assets/menu_24px.svg';
import {useState} from "react";


export const Sidebar = () => {

    const [showButtons, setShowButtons] = useState(false);

    return <div className={'sidebarWrapper'}>
            <div>

                <button
                    onClick={() => setShowButtons(!showButtons)}
                    className="menuButton"
                    style={{
                        border: 'none',
                        background: 'none',
                        padding: 0,
                        cursor:"pointer",
                    }}
                >
                    <img className={'menuImg'} src={menu} alt="menu"/>
                </button>

                {showButtons && (
                    <div>
                        <div className={'row'}>
                            <NavLink activeClassName='active' className={'link'} to={'/home'}> <img className={'icon'} src={schedule} alt="schedule"/></NavLink>
                        </div>
                        <div className={'row'}>
                            <NavLink activeClassName='active' className={'link'} to={'/form'}><img className={'icon'} src={patient} alt="patient"/></NavLink>
                        </div>
                    </div>
                )}
            </div>



</div>
}
