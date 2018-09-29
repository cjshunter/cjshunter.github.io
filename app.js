const http = new Github
const ui   = new UI

const searchUser = document.querySelector('#searchUser')

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value

    if (userText !== "") {
        http.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // Show an alert
                    ui.showAlert('User not found!', 'alert alert-danger')
                }else {
                    // Show Profile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
    } else {
        // Clear Profile
        ui.clearProfile()
    }
})