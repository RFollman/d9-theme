document.getElementById("edit-keys").setAttribute("placeholder", "Search...");

if (document.getElementById("block-headerimage") == null)
	{
		var rect = document.getElementById('rect');
		rect.style.marginTop = "5%";
	}

$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
}); 
