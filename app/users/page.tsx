"use client";

import axios from "axios";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { useEffect, useState } from "react";
import { User } from "../types/types";

export default function UsersPage(){
    
    const [users, setUsers] = useState<User[]>([]);
    
    const getUsers = async () => {
        const response = await axios.get("http://localhost:3000/api/users")
        console.log(response);
    }

    useEffect(() => {
        getUsers()
    }, []);
    
    return (
        <div className= "p-4">
            <h1 className="text - 2x1 font-bold text-center mb-6">Gerenciamento de usuários</h1>

            <UserForm />
            <UserList users={users} />
        </div>
    );
}