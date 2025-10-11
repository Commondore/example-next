import { IUser } from "@/types/user";

const fetchUsers = async (): Promise<IUser[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="container">
      <h1>Страница пользователей</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
