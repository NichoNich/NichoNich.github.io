$(function () {
    var activeTab = "#page1";

    $(".tabBtn").on("click", function () {
        $(activeTab).removeClass('d-flex');
        $(activeTab).addClass('d-none');
        activeTab = $(this).attr('data-button');
        $(activeTab).removeClass('d-none');
        $(activeTab).addClass('d-flex');
    })
})