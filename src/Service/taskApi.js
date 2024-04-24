import supabase from "../Pages/supabase";

export async function getTask () {

const  { data: todo, error } = await supabase
.from('todo')
.select('*')
if (error) {
    throw new Error(`couldn't find tasks`);
  }
return todo 
}

export async function createTasks (newTask){
const { data, error } = await supabase
    .from('todo')
    .insert([newTask])
    .select()
    if (error) {
        throw new Error(`couldn't create tasks`);
    }
    return data
}

export async function editTasks (newTask , id){

const { data, error } = await supabase
    .from('todo')
    .update(newTask)
    .eq("id", id)
if (error) {
    throw new Error(`couldn't edit tasks`);
  }
return data
}

export async function deleteTasks (id){
    
const { error } = await supabase
    .from('todo')
    .delete()
    .eq('id', id)
if (error) {
    throw new Error(`couldn't delete tasks`)
}
}
