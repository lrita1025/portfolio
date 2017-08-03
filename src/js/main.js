//錨點
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.box-block').on('click', '[data-img]', function() {
        $('img', '.modal').attr('src', $(this).data('img'));
        $('body').css({ overflow: 'hidden' });
        $('.modal').fadeIn();
    });

    $('.modal').on('click', '.closeBtn', function() {
        $('.modal').fadeOut();
        $('body').css({ overflow: 'auto' });
        $('img', '.modal').attr('src', '');
    });

    // //作品資料
    var proditem = [
        { src: "1.jpg", caption: "物流", groups: "edm", class: "edm" },
        { src: "2.jpg", caption: "行銷", groups: "edm", class: "edm" },
        { src: "3.jpg", caption: "行銷", groups: "edm", class: "edm" },
        { src: "4.jpg", caption: "行銷", groups: "edm", class: "edm" },
        { src: "5.jpg", caption: "行銷" },
        { src: "6.jpg", caption: "行銷" },
        { src: "7.jpg", caption: "行銷" },
        { src: "8.jpg", caption: "行銷" },
        { src: "9.jpg", caption: "行銷" },
        { src: "10.jpg", caption: "行銷" },
        { src: "11.jpg", caption: "行銷" },
        { src: "12.jpg", caption: "行銷" },
        { src: "14.jpg", caption: "行銷" },
        { src: "15.jpg", caption: "行銷" },
        { src: "16.jpg", caption: "行銷" },
        { src: "17.jpg", caption: "行銷" },
        { src: "18.jpg", caption: "行銷" },
        { src: "19.jpg", caption: "行銷" },
        { src: "20.jpg", caption: "行銷" },
        { src: "21.jpg", caption: "行銷" },
        { src: "22.jpg", caption: "行銷" },
        { src: "24.jpg", caption: "行銷" },
        { src: "ahoya01.gif", caption: "ㄟ好野遊戲選機台畫面", groups: "games", class: "games" },
        { src: "ahoya02.gif", caption: "ㄟ好野遊戲拉霸畫面", groups: "games", class: "games" },
        { src: "kid.gif", caption: "幼兒美語網頁" }
    ]

    for (var key in proditem) {
        $(".box-row").append(
            '<div class="col-lg-3 box filter ' + proditem[key].class + ' ">' +
            '<div data-img="src/images/jpg/' + proditem[key].src + '">' +
            '<a href="javascript:;">' +
            '<img src="src/images/jpg/' + proditem[key].src + '">' +
            '<div class="mask">' +
            '<div class="caption">' +
            '<span>' + proditem[key].caption + '</span>' +
            '<button>Read more</button>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</div>' +
            '</div>');
    }

    // //篩選


    $(document).ready(function() {

        $(".filter-button").click(function() {
            var value = $(this).attr('data-filter');

            if (value == "all") {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            } else {
                //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');

            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");

    });
});