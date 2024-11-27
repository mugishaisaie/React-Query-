import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './Utils';
const Items = () => {

  const {isLoading,data,isError,error} = useQuery({
    queryKey: ['tasks'],
    queryFn: ()=>customFetch.get('/')
  })
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
