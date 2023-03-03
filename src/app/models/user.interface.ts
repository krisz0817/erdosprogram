export interface User {
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    token : string;
    role_id: number;
    role_name: string;
    status_id: number;
    status_name: string;
    school_id: number;
    teacher: string;
    class: number;
    statement_file: string;
    application_file: string;    
    createdAt: Date;
    updatedAt: Date;
}