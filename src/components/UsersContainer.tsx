import UserList from "./UserList";
import useUsersData from "../hooks/UseUsersData";

const UsersContainer = () => {
  const { isLoading, error, data } = useUsersData();

  const props = {
    isLoading,
    error,
    data,
  };

  return (
    <div>
      <UserList {...props} />
    </div>
  );
};

export default UsersContainer;
