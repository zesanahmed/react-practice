const UserAvatar = ({ imageUrl }) => {
  return (
    <div>
      <img className="w-20 h-20 rounded-full" src={imageUrl} alt="" />
    </div>
  );
};

export default UserAvatar;
