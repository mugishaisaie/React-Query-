
import SingleItem from './SingleItem';
import {useFetchTasks} from './ReactQueryCustomHooks';

const Items = () => {
const{isLoading,isError,data}= useFetchTasks()
  
  console.log(data)
        if(isLoading) return <p style={{marginTop:'1rem', fontSize:'1.3rem'}}>Loading....</p>
        if(isError) return <p style={{marginTop:'1rem', fontSize:'1.3rem'}}>There Was an Error</p>
  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
