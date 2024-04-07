
const title = document.getElementById("userName");
const email = document.getElementById("userEmail");

const fetchUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/HarryPotter/login.html";
    return;
  }

  const response = await fetch(`http://127.0.0.1:3000/getMyProfile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    window.location.href = "/login.html";
    return;
  } else if (response.status === 403) {
    window.location.href = "/login.html";
    return;
  }

  const user = await response.json();
  console.log(user);

  title.innerHTML = await user.name;

  email.innerHTML = await user.email;
};

fetchUser();