jQuery(document).ready(function($) {
    var timezone = "Etc/GMT" ;
    var deadline = moment.tz("2018-08-15 23:59:59", timezone);
    $('#countdown').countdown(deadline.toDate(), function(event) {
        $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
    });
});