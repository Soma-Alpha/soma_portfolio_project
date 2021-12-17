let github = new GitHub();

class UI {
  constructor() {
    this.profile = document.querySelector("#profile_display");
  }

  displayProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-5">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      
        `;
  }

  clearData() {
    this.profile.innerHTML = "";
  }
}

let ui = new UI();

let search_user = document.querySelector("#search_user");

search_user.addEventListener("keyup", (e) => {
  let user_data = e.target.value;

  if (user_data !== "") {
    github.getData(user_data).then((data) => {
      ui.displayProfile(data);
    });
  }
});
