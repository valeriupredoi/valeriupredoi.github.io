
$(document).ready(function() {

    $.base64.is_unicode = true;

    $('span.cwxprotectemails').each(function() {        
        data = $('span.cwxprotectemails')[0].getAttribute('data-cwxprotectemails-0');
        $(this).replaceWith($.base64.decode(data));
    });

    $('.cwxprotectemails').each(function() {    
        var node = $(this)        
        var decoded = {};        
        var encoded = {};
        $(this).removeClass('cwxprotectemails')

        // prepare decoded attributes
        $.each(this.attributes, function(i, attribute) {
            if (attribute.name.match(/^data-cwxprotectemails/)) {
                var data = attribute.value.split("|");
                var name = data[0];
                var value = $.base64.decode(data[1]);
                decoded[name] = value;
                encoded[i] = attribute.name;                
            };
        });

        // remove encoded attributes
        $.each(encoded, function(key, value) {
            node.removeAttr(value);
        });

        // set decoded attributes
        $.each(decoded, function(key, value) {        
            node.attr(key, value);
        });

    });
});
