document.addEventListener('DOMContentLoaded', function () {
  const nameElement = document.querySelector('#name');
  const usernameElement = document.querySelector('#username');
  const avatarElement = document.querySelector('#avatar');
  const reposElement = document.querySelector('#repos');
  const followersElement = document.querySelector('#followers');
  const followingElement = document.querySelector('#following');
  const linkElement = document.querySelector('#link');

  fetch('https://api.github.com/users/luizhenriquee01')
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      nameElement.innerText = json.name;
      usernameElement.innerText = json.name;
      avatarElement.src = json.avatar_url;
      reposElement.innerText = json.public_repos;
      followersElement.innerText = json.followers;
      followingElement.innerText = json.following;
      linkElement.href = json.html_url;
    })
    .catch(function (error) {
      console.error('Erro ao carregar dados:', error);
    });
});
