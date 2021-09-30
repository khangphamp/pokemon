import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import './Loading.scss';
function Loading() {
    const loading = useSelector((state:RootState)=>state.loading.isLoading)
    if(loading === true) {
        return (
        
            <div className="Loading">
                <img src="images/loading.gif" alt="" />
            </div>
        )      
    }
    else {
        return (<></>)
    }
   
}

export default Loading
