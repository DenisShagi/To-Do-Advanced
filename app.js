// Event logic

document.addEventListener("DOMContentLoaded", initApp);

// Async logic

async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return data;
}
async function getAllUsers(params) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
}
