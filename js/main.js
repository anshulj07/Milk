jQuery(document).ready(function () {
    // This button will increment the value
    $('.increase').click(function (ev) {
        var currentTarget = $(ev.currentTarget);
        var inputElement = currentTarget.prev('.number');
        var inputValue = parseInt(inputElement.val());
        inputElement.val(inputValue + 1);
        currentTarget.closest('.myform').find('.addtocart').attr('data-value', inputValue + 1);
    });
    // This button will decrement the value till 0
    $(".decrease").click(function (ev) {
        var currentTarget = $(ev.currentTarget);
        var inputElement = currentTarget.next('.number');
        var inputValue = parseInt(inputElement.val());
        if (inputValue !== 0) {
            inputElement.val(inputValue - 1);
            currentTarget.closest('.myform').find('.addtocart').attr('data-value', inputValue - 1);
        }
    });
});

$('.login-tab').click(function () {
    $('.signup-active').removeClass('signup-active').addClass('login-active');
})

$('.signup-tab').click(function () {
    $('.login-active').removeClass('login-active').addClass('signup-active');
})