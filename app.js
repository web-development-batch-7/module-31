document.getElementById('add-bg').addEventListener('click', () => {
    const friends = document.getElementsByClassName('friends');
    for (const friend of friends) {
        friend.style.backgroundColor = 'cyan'
    }
})

document.getElementById('text-center').addEventListener('click', () => {
    document.getElementById('Friend-4').style.textAlign = 'center'
})


document.getElementById('add-content').addEventListener('click', () => {
    const container = document.getElementById('container');
    const divs = document.createElement('div');
    divs.innerHTML =
        `
    <div class="friends">
        <h3 class="friend-name">Friend-6</h3>
        <p>Quae unde necessitatibus commodi nostrum!</p>
    </div>
    `
    container.appendChild(divs)
})