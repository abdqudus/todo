export const setActive = (navTitle, navRefs) => {
  const otherNavs = navRefs.filter(
    (i) => !i.current.classList.contains(navTitle)
  );
  const active = navRefs.find((i) => i.current.classList.contains(navTitle));
  otherNavs.forEach((i) => i.current.classList.remove("active"));
  active.current.classList.add("active");
};
export const handleSaveTodo = (e, task, navigate, todos) => {
  e.preventDefault();
  const arr = [];
  for (const key in task) {
    if (Object.hasOwnProperty.call(task, key)) {
      const element = task[key];
      arr.push(element);
    }
  }
  if (arr.filter((e) => e === "").length > 0) {
    alert("Kindly fill all field");
  } else {
    task.id = new Date().getTime();
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
    alert("done");
    navigate("/home");
  }
};

export const handleTodoState = (todos, setTodos, id) => {
  const newTodo = todos.map((t) => {
    if (t.id == id) {
      t.isDone = !t.isDone;
      return t;
    } else {
      return t;
    }
  });
  localStorage.setItem("todos", JSON.stringify(newTodo));
  setTodos(newTodo);
};
export const handleDeleteTodo = (todos, id, navigate) => {
  const filteredTodos = todos.filter((t) => t.id != id);
  localStorage.setItem("todos", JSON.stringify(filteredTodos));
  navigate("/home");
};
