import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <div className='flex justify-center pt-10 mb-10'>
                <button onClick={onCLickEvent} className={props.open ? 'text-white' : 'pr-20'}>HOME</button>
            </div>
        </div>
    )
}

export default Sidebar