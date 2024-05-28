function syncMyMails(folder) {
    let userData = {folder}

    $.ajax({
        method: "POST",
        url: "/sync-mails",
        data: userData,
    })
        .done(function (msg) {
            if (msg)
                alert('sync has finished');
            else
                alert('something goes wrong');

            location.reload();
        })
        .fail(function (error) {
            alert(error)
        });

}


$(document).ready(function () {

    $(".sync-mails").on('click', function () {
        let folder = $(this).attr('id').split('-')[1];
        syncMyMails(folder)
    })

})
