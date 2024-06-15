import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import  Signout  from '../components/Login/Signout';

type SidebarProps = {
    open: boolean;
    setSession: any;
};

const Sidebar: FC<SidebarProps> = (props) => {
    const navgate = useNavigate();

    const onCLickEvent = () => {
        navgate('/');
    };

    return (
        <div className={props.open ? 'w-40 z-50 md:z-0 md:w-60 bg-gray-900  h-screen pt-20 absolute': 'w-0'}>
            <div className='flex flex-col justify-center pt-10 mb-10'>
                <div className='text-center'>
                    {props.open && <button onClick={onCLickEvent} className='text-white'>HOME</button>}
                </div>
                <div className='pt-10 text-center'>
                    {props.open && <Signout open={props.open} />}
                </div>
            </div>

        </div>
    )
}

export default Sidebar