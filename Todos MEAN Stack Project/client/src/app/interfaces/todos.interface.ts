export interface TODOS {
    _id:string,
    title: string,
    details:string,
    completed: boolean,
    createdBy: {
        id: string,
        name: string
    },
    createdAt: string
}

export const defaultTodos : TODOS = {
    _id : '',
    title: '',
    details:'',
    completed: false,
    createdBy: {
        id: '', 
        name: ''
    },
    createdAt: ''
}

