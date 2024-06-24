//게시글숨김버튼
const boardButton = $('#boardButton');
const board = $('#board');
boardButton.on('click', function () {
    board.slideToggle(1000);
})

// 댓글작성버튼
const replyButton = $('#replyButton');
const replyWrite = $('#replyWrite');
replyButton.on('click', function () {
    replyWrite.slideToggle();
})

// 댓글등록버튼
const replyContentBox = $('#replyContentBox');
const replyRegister = $('#replyRegister');
$('#replyRegister').one('click', function () {
    $(function () {
        replyContentBox.slideUp(1500);
        replyRegister.fadeOut(700);
    })

    // setInterval(function(){
    setTimeout(function () {
        replyContentBox.css("display", "none");
        $('#replyList').prepend(replyContentBox);
        replyContentBox.css("display", "block");
        replyContentBox.show(1500);
        console.log(replyContentBox);
    }, 1500)

    // $(this).onclick=null;
    // $(replyContent).css("display","none");
    // $('#replyList').append(replyContent);
    // $(replyContent).fadeIn(1500);
})

// 댓글보기버튼
const replyPlusButton = $('#replyPlusButton');
const replyPlusButtonLogo = $('#replyPlusButton span');
const replyList = $('#replyList');
const replyListDiv = $('#replyList>div');
const length = $('#replyList>div').length;
var indexCount = 0;
const num = 10;
var quo = parseInt(length / num);
var res = length % num;
replyPlusButton.on('click', function () {
    
    if (indexCount < length) {
        // replyList.css("display","block");
        if (indexCount <= ((quo * num) - 1)) {
            for (let i = 0; i < num; i++) {
                $(replyListDiv[indexCount]).slideDown();
                indexCount++;
            }
            replyList.slideDown();
            
        } else {
            for (let i = 0; i < res; i++) {
                $(replyListDiv[indexCount]).slideDown();
                indexCount++;
            }
            // replyPlusButtonLogo.css("backgroundColor","red");  
            replyPlusButtonLogo.css("color","red");  
        }
    }else{
        replyPlusButtonLogo.css("color",""); 
        replyList.slideUp();
        for (let i = 0; i < length; i++) {
            $(replyListDiv[i]).slideUp();
        }

        indexCount=0;
        
    }



})


//댓글숨김버튼
const replyMinusButton = $('#replyMinusButton');
replyMinusButton.on('click', function () {
    replyList.slideToggle();
})


