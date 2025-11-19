"use client";

import axios from "axios";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { useEffect, useState } from "react";
import { User } from "../types/types";

export default function UsersPage() {

    const [users, setUsers] = useState<User[]>([]);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:3000/api/users")
        console.log(response);
        setUsers(response.data);
    }

    const [userSelected, setUserSelected] = useState<User | null>(null);
    const handleSave = async (user: User) => {
        if (userSelected) {
            await axios.put(`http://localhost:3000/api/users/${userSelected.id}`,
                user)
        } else {
            await axios.post("http://localhost:3000/api/users", user)
        }
        setUserSelected(null);
        await getUsers()
    };
    // Excluir user
    const handleDelete = async (id: string) => {
        await axios.delete(`http://localhost:3000/api/users/${id}`)
        await getUsers()
    };
    // Editar user
    const handleEdit = (user: User) => {
        setUserSelected(user);
    };

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div className="p-4">
            <h1 className="text - 2x1 font-bold text-center mb-6">Gerenciamento de usuários</h1>
            
            <UserForm onSave={handleSave} userSelected={userSelected} />
            <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />

            {/*<UserForm />*/}
            {/*<UserList users={users} />*/}
        </div>
    );
}
