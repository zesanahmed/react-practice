const UserList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Something went wrong</div>;
  }
  return (
    <div>
      {data.map((user) => (
        <p>
          {user.name} <br />
        </p>
      ))}
    </div>
  );
};

export default UserList;
