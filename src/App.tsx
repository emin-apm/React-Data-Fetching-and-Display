import { useEffect, useState } from "react";
import type { User } from "./types/types";
import axios from "axios";
import UserList from "./components/Dashboard/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch {
        setError("Error loading users.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return <UserList users={users} loading={loading} error={error} />;
}

export default App;
