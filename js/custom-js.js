try {
    document.getElementById("edit-keys").setAttribute("placeholder", "Search...");
}

catch {
    console.log("No search block to replace");
}

try{

    if (document.getElementById("block-headerimage") == null)
    {
      var rect = document.getElementById('rect');
      rect.style.marginTop = "5%";
  }

}

catch {
    console.log("No header image to check");
}

try {
  $(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
}); 
}

catch {
    console.log("No dropdown menu to fix");
}
