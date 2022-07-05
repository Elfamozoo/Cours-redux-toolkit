import { configureStore, createSlice } from "@reduxjs/toolkit";

/* Création d'une tranche de l'état. */
const todoSlice = createSlice({
    name: "todo",
    /* L'état initial du réducteur. */
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        /* Ajout d'une nouvelle tâche à l'état. */
        addTask: (state, action) => {
            // { type: "todo/addTask, payload: "Faire les courses" }
            const newTask = {
                id: Date.now(),
                text: action.payload,
                done: false,
            }

            state.push(newTask)
        },
        /* Basculer la tâche. */
        toggleTask: (state, action) => {
            // { type: "todo/toggleTask", payload: 20}
            const task = state.find(t => t.id === action.payload)
            task.done = !task.done;
        },
        /* Filtrage du tableau d'état et retour d'un nouveau tableau sans la tâche avec l'identifiant
        passé dans la charge utile. */
        deleteTask: (state, action) => {
            // { type: "todo/deleteTask", payload: 20}
            state = state.filter(t => t.id !== action.payload)
            return state;
        },
    }
})

/* Exportation des actions depuis l'objet todoSlice.actions. */
export const { addTask, deleteTask, toggleTask } = todoSlice.actions

/* Création d'un magasin avec le réducteur. */
export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})


