
score = 0;

document.addEventListener("keydown", (event) => {
    var name = event.key;
    var code = event.code;
    alert(`key pressed ${name} \r\n key code value: ${code}`);
    change();
}, true);

function change();
{
    document.getElementById("button").value="f";
}


