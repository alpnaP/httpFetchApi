const User = (props) => {
  const { user } = props;
  return (
    <div className="users">
      <h3>Name:{user.name}</h3> <hr />
      <h3>User:{user.username}</h3> <hr />
      <h3>Name:{user.email}</h3>
    </div>
  );
};

export default User;
