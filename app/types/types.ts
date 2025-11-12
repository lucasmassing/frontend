export interface User {
    id?: string;
    name: string;
    email: string;
}

export interface UserListProps {
    users: User[]
}