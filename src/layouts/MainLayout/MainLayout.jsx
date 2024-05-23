import './MainLayout.css'
import {Sidebar} from "../../widgets/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return <div className={'wrapper'}>
        <div className={'main'}>
            <Sidebar/>
            <div className={'mainPage'}>
                <Outlet/>
            </div>
        </div>
    </div>
}