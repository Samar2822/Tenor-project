const container = document.getElementById('container');
const gotBtn = document.getElementById('got-btn');
const number = document.getElementById('number');

// GOT API
gotBtn.addEventListener('click', function() {
    container.innerHTML = '';
    let searchValue = search.value;
    let numberValue = number.value;

    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://g.tenor.com/v1/search?q='+ searchValue +'&key=A9M4SZS4AF4R' +'&limit='+ numberValue + '');
    myRequest.responseType = 'json';
    myRequest.onreadystatechange = function(){
        if( myRequest.readyState === 4 && myRequest.status === 200 ){
            printData(myRequest.response.results);
        }
    };
    myRequest.send();
});
// Print the GOT data
function printData(data){
    for(var i=0; i<data.length; i++){
        let newUser = document.createElement("div");
        newUser.setAttribute('class', 'character');
        
        let userImage = document.createElement('img');
        userImage.setAttribute('src', data[i].media[0].gif.url);
        userImage.setAttribute('alt', data[i].fullName);
        userImage.setAttribute('class', 'character-image');

        let userTitle = document.createElement('h3');
        userTitle.innerText = data[i].title;
        
        newUser.appendChild(userImage);
        container.appendChild(newUser);
    }
}