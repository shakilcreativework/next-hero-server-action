import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
    'use server'
    // const name = formData.get('name');
    // const description = formData.get('description');
    // const priority = formData.get('priority');
    // const status = formData.get('status');
    // const assignedTo = formData.get('assignedTo');

    // const newTask = {name, description, priority, status, assignedTo};

    const newTask = Object.fromEntries(formData.entries());

    console.log('Adding a task with name', newTask);
    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks');
    }

    return res;

};


export const newTaskAction = async(formData) => {
    'use server'
    const newTask = Object.fromEntries(formData.entries());

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks');
        redirect('/tasks');
    }

    console.log('Adding a task with name:', newTask);
};