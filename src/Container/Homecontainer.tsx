import Sidebar from '../components/shared/Sidebar';
import { Outlet } from 'react-router-dom';
// import { IsLoggedin } from '@src/Shared/utils/authService/authService';

function HomeContainer() {
    return (
        <div className='flex'>
          <Sidebar  /> 
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default HomeContainer
