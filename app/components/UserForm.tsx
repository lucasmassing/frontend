"use client";

import { useEffect, useState } from "react";
import { UserFormProps } from "../types/types";

const UserForm = (params: UserFormProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    useEffect(() => {
        if (params.userSelected) {
            setName(params.userSelected.name);
            setEmail(params.userSelected.email);
        } else {
            setName("");
            setEmail("");
        }
    }, [params.userSelected]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        params.onSave({ name, email, passwordHash: '1234' });
        setName("");
        setEmail("");
    };

    return (

        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mb-2 w-80" />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mb-2 w-80" />

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded
hover:bg-blue-700">
                Salvar
            </button>
        </form>
    );
}
export default UserForm;