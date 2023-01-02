import HashLoader from 'react-spinners/HashLoader';

//css
import style from './loader.module.css';

function Loader ({color, loading, size}) {
    return(
        <div className={style.loader}>
            <HashLoader color={color} loading={loading} size={size} speedMultiplier={1.5}/>
        </div>
    )
}

export default Loader;
