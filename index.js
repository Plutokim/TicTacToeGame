document.addEventListener(`DOMContentLoaded`,() => {
    let container = document.querySelector(`.container`);
    let resetBtn = document.getElementById(`reset`);
    let playerSpan = document.querySelector('.display-player');
    let avatars = document.querySelectorAll('.avatar-icon');
    let avatarContainers = document.querySelectorAll('.avatar-container');
    let avatarsStart = document.querySelector('.icons').innerHTML;
    let anounce = document.querySelector('.announcer');
    let turnX = true;
    let end =0;
    let two = 2;
    let three =3;
    let four = 4;
    let five =5;
    let six = 6;
    let seven = 7;
    let eight =8;
    const drawTiles = () => {
        const MAX_TILE = 9;
        container.innerHTML='';
        for(let i =0; i<MAX_TILE; i++){
            let tile = document.createElement('div');
            tile.classList.add('tile');
            container.appendChild(tile);
        }
    }


    const reset = () => {
        document.querySelector('.icons').innerHTML=avatarsStart;
        avatarContainers[0].innerHTML='';
        avatarContainers[1].innerHTML='';
        avatars = document.querySelectorAll('.avatar-icon');
        avatarContainers = document.querySelectorAll('.avatar-container');
        dragNdrop();
        drawTiles();
        playerSpan.classList.remove('playerO');
        playerSpan.classList.add('playerX');
        playerSpan.innerHTML=`X`;
        end =0;
        turnX = true;
        anounce.innerHTML='';
        anounce.classList.add('hide');
    }
    const checkWinner = () => {
        let tiles = document.querySelectorAll('.tile');
        let first = tiles[0].innerHTML;
        let second = tiles[1].innerHTML;
        let third = tiles[two].innerHTML;
        let fourth = tiles[three].innerHTML;
        let fifth = tiles[four].innerHTML;
        let sixth = tiles[five].innerHTML;
        let seventh = tiles[six].innerHTML;
        let eighth = tiles[seven].innerHTML;
        let ninth = tiles[eight].innerHTML;
        if (first === 'X' && second ==='X' && third==='X'){
            return 1;
        }else if (fourth === 'X' && fifth ==='X' && sixth==='X'){
            return 1;
        }else if (eighth === 'X' && ninth ==='X' && seventh==='X'){
            return 1;
        }else if (first === 'X' && fourth ==='X' && seventh==='X'){
            return 1;
        } else if (fifth === 'X' && second ==='X' && eighth==='X'){
            return 1;
        }else if (sixth === 'X' && ninth ==='X' && third==='X'){
            return 1;
        }else if (first === 'X' && fifth ==='X' && ninth==='X'){
            return 1;
        }else if (seventh === 'X' && fifth ==='X' && third==='X'){
            return 1;
        }
        if (first === 'O' && second ==='O' && third==='O'){
            return two;
        }else if (fourth === 'O' && fifth ==='O' && sixth==='O'){
            return two;
        }else if (eighth === 'O' && ninth ==='O' && seventh==='O'){
            return two;
        }else if (first === 'O' && fourth ==='O' && seventh==='O'){
            return two;
        } else if (fifth === 'O' && second ==='O' && eighth==='O'){
            return two;
        }else if (sixth === 'O' && ninth ==='O' && third==='O'){
            return two;
        }else if (first === 'O' && fifth ==='O' && ninth==='O'){
            return two;
        }else if (seventh === 'O' && fifth ==='O' && third==='O'){
            return two;
        }


    }
    drawTiles();

    resetBtn.addEventListener('click',reset);

    container.addEventListener('click',(event) => {
        let target = event.target;
        if(avatarContainers[0].hasChildNodes() && avatarContainers[1].hasChildNodes()) {
            if (!end) {
                if (target.classList.length === 1) {
                    if (turnX) {
                        target.classList.add('playerX');
                        target.innerHTML = `X`;
                        turnX = false;
                        playerSpan.classList.remove('playerX');
                        playerSpan.classList.add('playerO');
                        playerSpan.innerHTML = `O`;
                    } else {
                        target.classList.add('playerO');
                        target.innerHTML = `O`;
                        turnX = true;
                        playerSpan.classList.remove('playerO');
                        playerSpan.classList.add('playerX');
                        playerSpan.innerHTML = `X`;
                    }
                }
                end = checkWinner();
            }
        }
        switch (end){
            case 1:
                anounce.classList.remove('hide');
                anounce.innerHTML='Player <span class="display-player playerX">X</span> won';
                break;
            case two:
                anounce.classList.remove('hide');
                anounce.innerHTML='Player <span class="display-player playerO">O</span> won';
                break;
            default:
                break;
        }
    }
    )

    const dropPermission = (event) => {
        event.preventDefault();
    }

    const drag = (event) => {
      event.dataTransfer.setData('num',event.target.getAttribute('data-item'));
    }

    const drop = (event) => {
    if(!event.target.hasChildNodes() && !event.target.hasAttribute('data-item')){
            let num = event.dataTransfer.getData('num');
            event.target.append(avatars[num - 1]);
    }
    }

const dragNdrop = () => {
    avatarContainers[0].ondragover = dropPermission;
    avatarContainers[1].ondragover = dropPermission;
    avatars[0].ondragstart = drag;
    avatars[1].ondragstart = drag;
    avatars[two].ondragstart = drag;
    avatars[three].ondragstart = drag;
    avatarContainers[0].ondrop = drop;
    avatarContainers[1].ondrop = drop;
}

dragNdrop();
});