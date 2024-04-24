import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTasks } from "../Service/taskApi"
// import toast from "react-hot-toast"

function useDeleteTask() {
 const queryClient = useQueryClient()
const {mutate,isLoading}= useMutation({
  mutationFn:deleteTasks,
  onSuccess:()=>{
queryClient.invalidateQueries({queryKey:["task"]})
// toast.success("task sucessfully deleted")
  }
 })
 return {mutate,isLoading}
}

export default useDeleteTask