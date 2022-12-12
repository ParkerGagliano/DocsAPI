const saveForm = document.getElementById('save-form');

function handleSaveForm(e) {
    e.preventDefault();
    let data = document.getElementById('main-text').value;
    let filename = document.getElementById('title').value;
    console.log(filename, data)
    let myHeaders = new Headers();
    let formdata = new FormData();
    formdata.append("title", filename);
    formdata.append("content", data);
    myHeaders.append("Content-Type", "form-data");
    let requestOptions = { 
        method: 'POST',
        headers: myHeaders,
        body: formdata,
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


saveForm.addEventListener('submit', handleSaveForm);




