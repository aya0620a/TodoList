import { FC } from 'react';

type SidebarProps = {
    open: boolean;
};

const Sidebar: FC<SidebarProps> = (props) => {
    const onCLickEvent = () => {
        console.log('click');
        const now = new Date();
        console.log(now);
    };

    return (
    //onClickでメニュー開閉
    <div>
        <div className={props.open ? 'w-60 bg-gray-900  h-screen pt-20' : 'w-0'}>
            <div className='flex justify-center pt-10 mb-10'>
                <button onClick={onCLickEvent} className='text-white'>HOME</button>
            </div>
        </div>
    </div>
    )
}

export default Sidebar