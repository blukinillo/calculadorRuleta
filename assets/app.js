 $(document).ready(function() {
    $(".roulette button").click(function() {            
        $("#betType").text($(this).text());

        var _val = $(this).attr('class');

        var _kk = $(this).data("bet");
        switch(_kk) {
            case "rboe":                    
                var b = $('#success').text('48.64');
                $('.rboe-calc').css("display", "inline-block").siblings(".hide-calc").hide();
                var c = 2;
                break;

            case "twelve":
                var b = $('#success').text('32.43');
                $('.twelve-calc').css("display", "inline-block").siblings(".hide-calc").hide();
                var c = 3;
                break;
            case "one":
                var b = $('#success').text('2.70');
                $('.one-calc').css("display", "inline-block").siblings(".hide-calc").hide();
                var c = 35;
                break;
            case "two":
                var b = $('#success').text('5.41');
                $('.two-calc').css("display", "inline-block").siblings(".hide-calc").hide();
                var c = 17;
                break;
            case "three":
                var b = $('#success').text('8.11');
                $('.three-calc').css("display", "inline-block").siblings(".hide-calc").hide();
                var c = 11;
                break;
            case "four":
                var b = $('#success').text('10.81');
                $('.four-calc').css("display", "inline-block").siblings(".hide-calc").hide();
                var c = 8;
                break;
            case "six":
                var b = $('#success').text('16.2');
                $('.six-calc').css("display", "inline-block").siblings(".hide-calc").hide();
                var c = 5;
                break;                    
        }

        var a = $('#bet').val();
        var b = $('#success').text();
        var calcprofit = a * c;
        var totalprofit = '€' + calcprofit.toFixed(2);
        var calc = a * ((b * 0.01) - (1 - (b * 0.01)));
        var total = '-€' + Math.abs(calc.toFixed(2));


        $('#profit').text(totalprofit);
        $('#total').text(total);
        var totalbet = '€' + a;
        $('#bet-text').text(totalbet);
    });
});