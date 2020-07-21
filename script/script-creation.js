$(document).ready(function() {


    // creation-popup-first
    let popupCreate = $(".popup-create-degree__overlay");
    $(".popup-create-btn").click(function () {
        popupCreate.addClass("popup-create-degree_open");
    });

    $(".popup-create-degree__close").click(function () {
        popupCreate.removeClass("popup-create-degree_open");
    });

    $(".popup-create-degree-close-btn").click(function () {
        popupCreate.removeClass("popup-create-degree_open");
    });

    $(function () {
        $(".popup-create-degree__toggle").bind("click", function (e) {
        e.preventDefault();
        });
    });
    // End of creation-popup-first

    // create-popup-second(company-popup)
    let popupCompany = $(".popup-create-company__overlay");
    $(".create-degree-middle-item").click(function () {
        popupCompany.addClass("popup-create-company_open");
        popupCreate.removeClass("popup-create-degree_open");
    });

    $(".popup-create-company__close").click(function () {
        popupCompany.removeClass("popup-create-company_open");
    });

    $(".popup-create-company-close-btn").click(function () {
        popupCompany.removeClass("popup-create-company_open");
    });

    $(function () {
        $(".popup-create-company__toggle").bind("click", function (e) {
        e.preventDefault();
        });
    });
    // End of create popup-second(company-popup)

    // Create-popup-thired(curriculum-popup)
    let popupCurriculum = $(".popup-create-curriculum__overlay");
    $(".create-company-btn").click(function () {
        popupCurriculum.addClass("popup-create-curriculum_open");
        popupCompany.removeClass("popup-create-company_open");
    });

    $(".popup-create-curriculum__close").click(function () {
        popupCurriculum.removeClass("popup-create-curriculum_open");
    });

    $(".popup-create-curriculum-close-btn").click(function () {
        popupCurriculum.removeClass("popup-create-curriculum_open");
    });

    $(function () {
        $(".popup-create-curriculum__toggle").bind("click", function (e) {
        e.preventDefault();
        });
    });
    // End of create-popup-thired(curriculum-popup)

    $('.table-condensed .prev').html(" 123 ");

    // Datepicker
  
        // $('#datepicker').datepicker();
 

    // Script for tabs
    $(".creation-tabs-main-label").click(function() {
        $(".creation-tabs-main-label").removeClass("creation-tabs-main-label-active").eq($(this).index()).addClass("creation-tabs-main-label-active");
        $(".creation-tab-body").removeClass("creation-tab-body-active");
        $(".creation-tab-body").hide().eq($(this).index()).fadeIn().addClass("creation-tab-body-active");        
    }).eq(0).addClass("creation-tabs-main-label-active");
    // End of script for tabs

    // script for assessment tabs
    $(".assessment-block-tabs-item").click(function() {
        // $(".creation-tabs-main-label").removeClass("creation-tabs-main-label-active").eq($(this).index()).addClass("creation-tabs-main-label-active");
        $(".main-left-block-form-assessment").removeClass("main-left-block-form-active");
        $(".main-left-block-form-assessment").hide().eq($(this).index()).fadeIn(0.05);        
    });

    // Select2 functions
    $('.create-dropdown-single').select2();

    $(".create-dropdown-multiple").select2({
        placeholder: "Select collaborators",
        allowClear: false
    });

    $(".assessment-question-block-delete").click(function() {
        $(".assessment-question-block-item").animate({
            height: 0,
            visibility: 'hidden',
            opacity: 0
        });
    });

    // click function on drag n drop show/hide
    let btnSlide = $(".drag-drop-slide-btn");
    let bigBtnSlide = $('.drag-drop-slide-block');

    bigBtnSlide.click(function () { 
        
        if($('.drag-drop-slide_container').css('display')=='block') {
            $('.drag-drop-slide_container').slideUp();
            $('.drag-drop-slide-block').html('SHOW STEPS');
            btnSlide.css({
                transform: 'rotate(180deg)'
            });
        } else {
            $('.drag-drop-slide_container').slideDown();
            $('.drag-drop-slide-block').html('HIDE STEPS');
            btnSlide.css({
                transform: 'rotate(0deg)'
            });
        }
        
    });

    btnSlide.click(function () { 
        
        if($('.drag-drop-slide_container').css('display')=='block') {
            $('.drag-drop-slide_container').slideUp();
            $('.drag-drop-slide-block').html('SHOW STEPS');
            btnSlide.css({
                transform: 'rotate(180deg)'
            });
        } else {
            $('.drag-drop-slide_container').slideDown();
            $('.drag-drop-slide-block').html('HIDE STEPS');
            btnSlide.css({
                transform: 'rotate(0deg)'
            });
        }
    
    });
    // End click function on drag n drop show/hide


        // Script for up btn on creation page
    let scrollTopBtn = $('.create-other-top-btn');	

    scrollTopBtn.on('click', function(){
        $('body, html').animate({
        scrollTop: 0
    }, 800);
        return false;
    });	
    // End of script for up btn on creation page

    
    // Drag n Drop
    $(function () {
        $(".drag-drop-list").sortable({
            onDrop: function ($item, container, _super, event) {
                $('.drag-drop-list-item').removeClass('dragged');
                $("body").removeClass('dragging');
                $('.drag-drop-list-item-content .item-content-task-number').each(function (i) {
                    var humanNum = i + 1;
                    $(this).html(humanNum + '');
                });
            }
        });
    });

});
