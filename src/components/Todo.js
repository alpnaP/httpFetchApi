const Todo = (props) => {
  const { todo } = props;

  return (
    <div className="todos">
      <h3>Id: {todo.id}</h3>
      <h3>Title: {todo.title}</h3>
    </div>
  );
};

export default Todo;
