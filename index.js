let list = $("#list");
let textbox = $("#textbox")

$("#submit-btn").on( "click", function( event ) {
    event.preventDefault();
    list.append(`
    <li class="list-item">
        <p>${textbox.val()}</p>
        <div class="buttons">
            <button id="check">Check</button>
            <button id="delete">Delete</button>
        </div>
    </li>
    `);
    textbox.val("")

});

list.on( "click", "#check", function( event ) {
    event.preventDefault();
    $( this ).parent().siblings("p").toggleClass("striked");
});

list.on( "click", "#delete", function( event ) {
    event.preventDefault();
    $( this ).parent().parent().remove();

});
