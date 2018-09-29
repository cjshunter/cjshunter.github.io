class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-3">
                        <img class='img-fluid mb-2' src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mb-3">View Profile</a>
                    </div>
            
                    <div class="col-md-9">
                        <span class="badge badge-info">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-danger">Followers: ${user.followers}</span>
                        <span class="badge badge-warning mb-2">Following: ${user.following}</span>
            
                        <br><br>
            
                        <ul class="list-group gl">
                            <li class="list-group-item"><b>Company      :</b> ${user.company}</li>
                            <li class="list-group-item"><b>Website/Blog :</b> ${user.blog}</li>
                            <li class="list-group-item"><b>Location     :</b> ${user.location}</li>
                            <li class="list-group-item"><b>Member Since :</b> ${user.created_at}</li>
                        </ul>
            
                    </div>
                </div>
            </div>
            <h4 class='text-center m-4'>Latest Repositories </h4>
            <div id="repos"></div>
        `
    }

    showRepos(repos) {
        let output = ''

        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2 text-center">
                <div class="row">
                <div class="col-md-6">
                    <ul>
                        <li><a id='repo-name' href="${repo.html_url}" target="_blank">${repo.name}</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-warning">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                </div>
                </div>
            </div>
            `

        })

        document.querySelector('#repos').innerHTML = output
    }

    clearProfile () {
        this.profile.innerHTML = ''
    }

    showAlert(massage, className) {
        this.clearAlert()

        const div = document.createElement('div')
        div.className = className
        div.textContent = massage
        const idont = document.querySelector('.grid-container')
        const idont2 = document.querySelector('.grid-100')
        idont.insertBefore(div, idont2)

        setTimeout(() => {
            this.clearAlert()
        }, 3000)

    }

    clearAlert() {
        const currentAlert =  document.querySelector('.alert')

        if (currentAlert) {
            currentAlert.remove()
        }
    }
}