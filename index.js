var rnumber;
var textColor = "silver";
var ad1 = "https://www.instagram.com/p/CGO8gp-H7jP/";
var ad2 = "https://www.instagram.com/p/CGZZ7gqnKx4/";
var ad3 = "https://www.instagram.com/p/CGri0rnnmNy/";
var ad4 = "https://www.instagram.com/p/CGtu3mMnEjs/";
var ad5 = "https://www.instagram.com/p/CICyxcnjrcg/";
var ad6 = "https://www.instagram.com/p/CIFXdr8jjxW/";
var ad7 = "https://www.instagram.com/p/CJpjP4QjT4g/";
var ad8 = "https://www.instagram.com/p/CJsSgETDzQJ/";
var ad9 = "https://www.instagram.com/p/CJxhmHvjIZ-/";
var ad10 = "https://www.instagram.com/p/CKgFKpHjv7t/";
var ad11 = "https://www.instagram.com/p/CKjGTtTDeUs/";
var ad12 = "https://www.instagram.com/p/CKndT8iDDH2/";
var ad13 = "https://www.instagram.com/p/CLBU-egjN4T/";
var ad14 = "https://www.instagram.com/p/CLHHTfKjnaQ/";
var ad15 = "https://www.instagram.com/p/CLL1RJojYDv/";
var ad16 = "https://www.instagram.com/p/CLlPvKJDhRy/";
var ad17 = "https://www.instagram.com/p/CLqfQ2OjTGb/";
var ad18 = "https://www.instagram.com/p/CLvjC7qDbDb/";
var ad19 = "https://www.instagram.com/p/CNR1D3UDxsT/";
var ad20 = "https://www.instagram.com/p/CNW6PC9jwGG/";
var ad21 = "https://www.instagram.com/p/CNbuqp_j-Jq/";
var ad22 = "https://www.instagram.com/p/COrOXVwDsdD/";
var ad23 = "https://www.instagram.com/p/COwONRdjGwT/";
var ad24 = "https://www.instagram.com/p/CO2AwQ4jP39/";
var ad25 = "https://www.instagram.com/p/CO9tZTlj2bD/";
var ad26 = "https://www.instagram.com/p/CPCq1YlD6-F/";
var ad27 = "https://www.instagram.com/p/CPISvQMjKHj/";
var ad28 = "https://www.instagram.com/p/CRqMijQDarP/";



$(document).ready(function () {

    var rarray = [];
    var adarray = [];

    while (rarray.length < 28) {
        rnumber = parseInt(Math.random() * 28) + 1;

        if (rarray.indexOf(rnumber) < 0) {
            rarray.push(rnumber);
        }
    }

    console.log(rarray);

    for (var i = 0; i < 28; i++) {

        var rpicture = '<img src="img/' +
            rarray[i] +
            '.jpg" />';

        $(".pic" + i + "").append(rpicture)
    }

    $(".recruitwall").on("click", function () {
        $(".photowall").css("color", "");
        // $(".recruiting").css("display", "block");
        $(".recruiting").fadeIn(1000);
        $(".picture").fadeOut(1000);
        $(".recruitwall").css("color", textColor);
    });

    $(".photowall").on("click", function () {
        $(".recruitwall").css("color", "");
        // $(".recruiting").css("display", "none");
        $(".recruiting").fadeOut(1000);
        $(".picture").fadeIn(1000);
        $(".photowall").css("color", textColor);
    });

});
