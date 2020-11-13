
function make_all_superscript(lookup_string) {
    $(lookup_string).each(function() {
        var super_script = "<sup>" + $(this).html() + "</sup>";
        $(this).html(super_script);
    });
}

$(function () {
    make_all_superscript('.money-cents');
    make_all_superscript('.money-decimal');
});