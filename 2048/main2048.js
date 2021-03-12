var border = new Array();
var score = 0;

$document.ready(function () {
    newgame();
})

function newgame() {
    init();//初始化棋盘
}

function init() {
    for (var i = 0;i < 4;i ++){
        border[i] = new Array();
        for (var j = 0;j < 4;j ++){
            border[i][j] = 0;
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

            if (border[i][j] == 0){
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