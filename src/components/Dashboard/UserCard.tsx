import type { User } from "../../types/types";

export default function UserCard({
  user,
  onClick,
}: {
  user: User;
  onClick: () => void;
}) {
  return (
    <tr
      onClick={onClick}
      style={{ cursor: "pointer" }}
      title="Click for details"
    >
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.company.name}</td>
    </tr>
  );
}
