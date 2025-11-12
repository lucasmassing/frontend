"use client";
const UserForm = () => {
    return (
        <form className="flex flex-col items-center mb-4">
            <input
                type="text"
                placeholder="Nome"
                className="border p-2 mb-2 w-80" />
            <input
                type="email"
                placeholder="Email"
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