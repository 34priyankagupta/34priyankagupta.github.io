$(document).ready(function () {

    $(document).scroll(function () {
        var y = $(this).scrollTop();


        /* Giving animation to experience part */
        var a = $("#sectionB").position();

        if (y > (a.top - 500)) {
            $("#exp1Infy").addClass("animated").addClass("fadeInLeft");
        }
        else {
            $("#exp1Infy").removeClass(
                "animated fadeInLeft");
        }


        /* Giving animation to experience part */
        if (y > (a.top - 500)) {
            $("#exp2Bosh").addClass("animated").addClass("fadeInRight");
        }
        else {
            $("#exp2Bosh").removeClass("animated").removeClass("fadeInRight");
        }


        /* For Education - section */
        var b = $("#sectionC").position();

        if (y > (b.top - 600)) {
            $(".percentInfo").addClass("animated").addClass("slideInLeft");
        } else {
            $(".percentInfo").removeClass("animated").removeClass("slideInLeft");
        }


        /* Zoomable images in skill sets */
        var c = $("#sectionD").position();
        if (y > (c.top - 400)) {
            $("#centerImage").addClass("animated").addClass("slideInDown");
        }
        else {
            $("#centerImage").removeClass("animated").removeClass("slideInDown");
        }




    });




});