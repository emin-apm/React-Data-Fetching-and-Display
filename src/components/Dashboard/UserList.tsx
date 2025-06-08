import styles from "./DashboardStyles.module.css";
import { useState } from "react";
import UserCard from "./UserCard";
import UserModal from "./UserModal";
import type { User } from "../../types/types";

type Props = {
  users: User[];
  loading: boolean;
  error: string;
};

export default function UserList({ users, loading, error }: Props) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className={styles.mainContent}>
      <div className={styles.headerWraper}>
        <span>Primary</span>
        <h2>User List</h2>
      </div>

      <div className={styles.tableContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onClick={() => setSelectedUser(user)}
                  />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>Total: {users.length} users</td>
                </tr>
              </tfoot>
            </table>

            {selectedUser && (
              <UserModal
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
