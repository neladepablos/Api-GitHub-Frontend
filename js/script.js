let link = 'https://api.github.com/users/';
const buscar = document.getElementById('buscar');
const texto = document.getElementById('texto');
const profilePhoto = document.getElementById('profile-photo');
const login = document.getElementById('login')
const name = document.getElementById('name')
const verUrl = document.getElementById('verUrl');
const takeRepo = document.getElementById('takeRepo')
let link2;
let nameRepositore = document.getElementById('nameRepositore');
// console.log(login.innerHTML)


// ----------------------------------------------------------------------------------

buscar.addEventListener('click', (e) => {
    e.preventDefault();
    let ApiUser = `${link}${texto.value}`
    fetch(ApiUser)
        .then(res => res.json())
        .then(data => {
            cambiarImagenJS(data)
            cambiarLogin(data)
            cambiarName(data)
            verUrlProfile(data)
                // console.log(data.avatar_url)
                // console.log(data.repos_url)
            link2 = data.repos_url;
        })


})

function cambiarImagenJS(data) {
    profilePhoto.src = data.avatar_url;
}

function cambiarLogin(data) {
    login.innerHTML = `@${data.login}`;
}

function cambiarName(data) {
    name.innerHTML = data.name;
}

function verUrlProfile(data) {
    verUrl.href = data.html_url;

}

// https://api.github.com/users/neladepablos/repos?per_page=10
let container_repositories = document.getElementById('repositories');
takeRepo.addEventListener('click', (e) => {
    e.preventDefault()
    let apiRepo = link2;
    // console.log(apiRepo)
    fetch(apiRepo)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            // console.log(data.avatar_url)
            for (i = 0; i < data.length; i++) {
                container_repositories.innerHTML +=
                    `<div class="repositories-info">
                    <div>
                        <h2 id="nameRepositore">${data[i].name }</h2>
                        <p>${data[i].description}</p>
                        <p>${data[i].language}</p>
                    </div>
                    <div>
                        <a href="${data[i].html_url}" class="search" target="_blank">Ver repo</a>
                    </div>
                    </div>
                    <div class="line"></div>`;
                // console.log(data[i].name)
                // console.log(data[i].description)
                // console.log(data[i].language)
            }

        })

})



// function verRepo(data) {
//     texto = data.repos_url
// }