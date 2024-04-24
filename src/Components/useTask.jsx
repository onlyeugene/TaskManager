import { useQuery } from "@tanstack/react-query"
import { getTask } from "../Service/taskApi";


function useTasks() {
const { isLoading, data: task=[] } = useQuery({
  queryKey: ["task"],
  queryFn: getTask,
});
return {isLoading,task}
}

export default useTasks