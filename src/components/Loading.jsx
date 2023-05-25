import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-52px)] flex  items-center justify-center '>
            <div className='text-8xl'> L</div>
            <div className='h-28 w-28 animate-spin border-sky-500 border-8 border-dashed rounded-full'></div>
            <div className='text-8xl'>ading...</div>
        </div>
    );
};

export default Loading;