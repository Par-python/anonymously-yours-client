document.getElementById('LoadingScreenLogo').addEventListener("click", () => {
    document.getElementById('LoadingScreenLogo').style.display = 'none';
    document.getElementById('messages').style.display = 'flex';
    document.getElementById('notes').style.display = 'flex';
})

function posts(){
    document.getElementById('notes').style.display = 'none';
    document.getElementById('messages').style.display = 'none';
    document.getElementById('background').style.backgroundImage = 'url(/client/img/background-img-post.png)'
    document.getElementById('post').style.display = 'flex';
}
