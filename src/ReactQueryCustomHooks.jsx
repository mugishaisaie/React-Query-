import { useQuery, useQueryClient,useMutation } from "@tanstack/react-query"
import customFetch from "./Utils"
import { toast } from 'react-toastify';



export const useFetchTasks = ()=>{
    
    const {isLoading,data,isError,error} = useQuery({
        queryKey: ['tasks'],
        queryFn: ()=>customFetch.get('/')
        
        
    })
    return {isLoading, data,isError,error}
}
export const useCreateTasks = ()=>{
    // react query
  const queryClient = useQueryClient();
  const {mutate:createTask,isLoading} = useMutation({
    mutationFn: (taskTitle)=>customFetch.post('/',{title:taskTitle}),
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['tasks']}),
      toast.success("Task Added Successfully")
    
    },
    onError: (error)=>{
      toast.error(error.response.data.msg)
    }
  })

  return {createTask,isLoading}
}
export const useEditTasks = ()=>{
    const queryClient = useQueryClient();
    const {mutate: editTask} = useMutation({
        mutationFn: ({taskId,isDone})=>{
          return customFetch.patch(`/${taskId}`,{isDone})
        },
        onSuccess: ()=>{
          queryClient.invalidateQueries({queryKey:['tasks']})
        }
      })
      return {editTask}
}
export const useDeleteTasks = ()=>{
    const queryClient = useQueryClient();
    const {mutate: deleteTask,isLoading} = useMutation({
        mutationFn: (taskId)=>{
          return customFetch.delete(`/${taskId}`)
        },
        onSuccess: ()=>{
          queryClient.invalidateQueries({queryKey:['tasks']})
        }
    
      })
      return {deleteTask,isLoading}
}


