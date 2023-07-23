import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";
const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`${user.id}`}>{user.name}</Link>
    </li>
  ));

  return renderedUsers;
};

export default UsersList;
