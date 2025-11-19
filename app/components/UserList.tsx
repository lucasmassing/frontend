"use client";

import { UserListProps } from "../types/types";

const UserList = (params: UserListProps) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="px-4 py-2">Nome</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {params.users.map((user, index) => {
                        return <tr className="border-t" key={user.id}>
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2 text-center">
                                <div className="flex justify-center space-x-2">
                                    <button onClick={() => params.onEdit(user)} className="bg-yellow-500 text-white px-4 py-2 rounded
hover:bg-yellow-600">
                                        Editar
                                    </button>
                                    <button onClick={() => params.onDelete(user.id ?? '')} className="bg-red-500 text-white px-4 py-2 rounded
hover:bg-red-600">
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>
                    }
                    )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default UserList;
