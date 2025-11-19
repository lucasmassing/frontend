export interface User {
    id?: string;
    name: string;
    email: string;
    passwordHash?: string;
}

export interface UserListProps {
    users: User[]
}

export interface UserFormProps {
    userSelected: User | null;
    onSave: (user: User) => void;
}

export interface UserListProps {
    users: User[];
    onDelete: (id: string) => void;
    onEdit: (User: User) => void;
}
