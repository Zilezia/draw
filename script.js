$(document).mousemove(function(e) 
{
    var x = e.pageX;
    var y = e.pageY;

    $("#xcoord").text("X: " + x);
    $("#ycoord").text("Y: " + y);
});

$(document).ready(function ()
 {
    function updateElementCount() 
    {
        var elementCount = $('.custom-element').length;
        $('#element-count').text("Elements: " + elementCount);
    }

    //checks if mouse is pressed
    $(".draw-space").on("mousedown", function () 
    {
        isMouseDown = true;
    });
    $(document).on("mouseup", function () 
    {
        isMouseDown = false;
    });

    $(".draw-space").on("mousemove", function (e) 
    {
        if (isMouseDown) 
        {
            var newElement = $('<div class="custom-element"></div>');

            //gets mouse x and y coordinates, then adjusts for the offset
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;

            newElement.css({
                left: x,
                top: y,
            });

            $(this).append(newElement);
            updateElementCount();
        }
    });
});

$('svg').on("click", function()
{
    setTimeout
    $('.custom-element').remove();
    $('#element-count').text("Elements: 0");
});