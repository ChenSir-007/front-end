var board = new Array();
var score = 0;

$(document).ready(function () {
    newgame();
})

function newgame() {
    init();//初始化棋盘
    generateOneNumber();//初始化一个新的数
    generateOneNumber();
}

function init() {
    for (var i = 0;i < 4;i ++){
        board[i] = new Array();
        for (var j = 0;j < 4;j ++){
            board[i][j] = 0;
        }
    }
    updateBoardView();
}

function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0;i < 4;i ++){
        for(var j = 0;j < 4;j ++){
            $("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
            var theNumberCell = $('#number-cell-'+i+'-'+j);

            if (board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j)+50);
                theNumberCell.css('left',getPosLeft(i,j)+50);
            }
            else {
                theNumberCell.css('width','100px');
                theNumberCell.css('height','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                theNumberCell.css('background',getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color',getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);//.text方法设置文本
            }
        }
    }
}

function generateOneNumber() {
    if (nospace(board))
        return false;

    //生成随机位置坐标
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));
    while (true){
        if (board[randx][randy] == 0)
            break;
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
    }
    //生成随机数
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    //在随机位置显示随机数字
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx,randy,randNumber);

    return true;
}

$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37://left
            if (moveLeft()){
                generateOneNumber();
                isgameover();
            }
            break;
        case 38://up
            if (moveUp()){
                generateOneNumber();
                isgameover();
            }
            break;
        case 39://right
            if (moveRight()){
                generateOneNumber();
                isgameover();
            }
            break;
        case 40://down
            if (moveDown()){
                generateOneNumber();
                isgameover();
            }
            break;
        default://default
            break;
    }
});

function moveLeft() {
    if (!canMoveLeft(board))
        return false;

    for (var i = 0;i < 4;i ++){
        for(var j = 1;j < 4;j ++){
            if (board[i][j] !=0){
                for (var k = 0;k < j;k ++){
                    if (board[i][k] == 0 && noBlockHorizontal(i ,k ,j ,board)){
                        continue;//move
                    }
                    else if(board[i][k] == board[i][j] && noBlockHorizontal(i ,k ,j ,board)){
                        continue;//move
                    }
                }
            }
        }
    }
    return true;
}