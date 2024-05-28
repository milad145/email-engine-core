function login(e) {
    e.preventDefault();
    $("#errorForm").hide();
    let userCode = $("#userCode").val();
    let password = $("#password").val();
    let userData = {userCode, password}

    $.ajax({
        method: "POST",
        url: "/panel/login",
        data: userData,
    })
        .done(function (msg) {
            if (msg) window.location.href = '/panel';
            else $("#errorForm").show();
        })
        .fail(function (error) {
            $("#errorForm").show();
        });

}


$(document).ready(function () {

    $("#fullTime").on('change', () => {
        let fullTime = !!parseInt($("#fullTime").val())
        if (!fullTime) {
            $("#startHourBox").hide()
            $("#startHour").removeAttr('required', '');
        } else {
            $("#startHourBox").show()
            $("#startHour").attr('required', '');
        }
    })

})
