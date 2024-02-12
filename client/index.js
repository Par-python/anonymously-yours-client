document.getElementById('LoadingScreenLogo').addEventListener("click", () => {
    document.getElementById('LoadingScreenLogo').style.display = 'none';
    document.getElementById('messages').style.display = 'flex';
    document.getElementById('notes').style.display = 'flex';
    document.getElementById('page-count').style.display ='flex'
})

function posts(){
    document.getElementById('notes').style.display = 'none';
    document.getElementById('messages').style.display = 'none';
    document.getElementById('background').style.backgroundImage = 'url(/client/img/background-img-post.png)'
    document.getElementById('post').style.display = 'flex';
    document.getElementById('page-count').style.display ='none'
}
function back(){
    document.getElementById('post').style.display = 'none';
    document.getElementById('background').style.backgroundImage = 'url(/client/img/backrgound-img.png)'
    document.getElementById('messages').style.display = 'flex';
    document.getElementById('notes').style.display = 'flex';
    document.getElementById('page-count').style.display ='flex'
}