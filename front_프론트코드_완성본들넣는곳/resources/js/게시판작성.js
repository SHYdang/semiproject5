$('#boardDate').html(new Date().toLocaleDateString());
$('textarea').on("input", function () {
    $(this).css('height', 'auto');
    $(this).height(this.scrollHeight);
})
$('#footer').on("mouseover",function(){
    $(this).css("backgroundColor","blue");
})
