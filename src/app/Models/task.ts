export interface Task {
    id: number, 
    name: string, 
    editStatus: boolean,
    completedStatus: boolean,
    created_at: Date | null, 
    update_at?: Date | null
};