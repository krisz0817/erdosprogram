export function passwordShowHide(inputId: string, btnId: string) {
  let x = document.getElementById(inputId);
  let y = document.getElementById(btnId);
  y?.addEventListener('click', function(){
    if(x?.attributes[1].value === "password") {
      x.attributes[1].value = "text";
    } else {
      x!.attributes[1].value = "password";
    }
  })
}
