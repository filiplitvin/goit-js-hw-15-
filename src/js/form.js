const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

const loadData = () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername) userName.value = savedUsername;
  if (savedPassword) password.value = savedPassword;
};

const handleSave = () => {
  const username = userName.value;
  const pass = password.value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", pass);
};

saveBtn.addEventListener("click", handleSave);

loadData();
