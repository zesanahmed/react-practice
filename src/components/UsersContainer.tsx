import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const UsersContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const Url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(Url);
      const data = await res.json();
      setIsLoading(false);
      setData(data);
      console.log(data);
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

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
