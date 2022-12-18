const saveForm = document.getElementById('save-form');
const docSide = document.getElementById('addTitles');
allDocs = fetch(`http://127.0.0.1:3000/api/docs`).then((response) => response.json()).then((result) => fillSideBar(result)).catch((error) => console.log('error', error));


function getbyOwnerID() {
    ownData = fetch(`http://http://127.0.0.1:3000/api/docs/owner`).then((response) => response.text()).then((result) => console.log(result)).catch((error) => console.log('error', error));

}
function fillSideBar(data) {
    if (data != null) {
        for (let i = 0; i < data.length; i++) {
            let title = data[i].title;
            let id = data[i].id;
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `<button class="btn btn-primary" onclick="loadDoc(${data[i]})">${title}</button>`;
            docSide.appendChild(newDiv);
        }
    }
}

function handleSaveForm(e) {
    e.preventDefault();
    let data = document.getElementById('main-text').value;
    let filename = document.getElementById('title').value;
    console.log(filename, data)
    let myHeaders = new Headers();
    let urlencoded = new URLSearchParams();
    urlencoded.append("title", filename);
    urlencoded.append("content", data);
    urlencoded.append("owner_id", 1)
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    let requestOptions = { 
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(`http://127.0.0.1:3000/api/docs`, requestOptions).then((response) => response.text())
    .then((result) => alert(result))
    .catch((error) => alert(error));
}

function handleEditForm(e) {
    e.preventDefault();
    let filename = document.getElementById('title').value;
    let myHeaders = new Headers();
    let requestOptions = { 
        method: 'PATCH',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`http://127.0.0.1:3000/api/docs`, requestOptions)

}

function loadDoc(id) {
    console.log('dnaosjndaj')
    let joe = id
    let myHeaders = new Headers();
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    let data = fetch(`http://127.0.0.1:3000/api/docs`)
    data.then((response) => response.json())
    .then((result) => {
        console.log(result)
        let doc = result[0]
        console.log(doc)
        document.getElementById('main-text').value = doc.content;
        document.getElementById('title').value = doc.title;
    }
    )

}

saveForm.addEventListener('submit', handleSaveForm);





