class GitHub {
  constructor() {
    this.id = "732261c6935eae954ff0";
    this.key = "96081795d47b623bd17ee8b557f8ad2bf1053e46";
  }

  async getData(user) {
    let fetched_data = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.key}`
    );

    let response = await fetched_data.json();

    return response;
  }
}
