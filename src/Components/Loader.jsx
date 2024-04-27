import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div  className='flex justify-center items-center min-h-screen'>
            <RotatingLines
               
                visible={true}
                height="96"
                width="96"
                color="#b18b5e"
                strokeWidth="5"
                animationDuration="0.95"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;