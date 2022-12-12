function completeAndRedirect() {
  var form = document.forms['myform'];
  text.innerHTML = "Веденні вами дані: <br> І'мя : " + form.elements.Name.value + "<br> EMAIL : " + form.elements.login.value + "<br> ПОвідомлення : " + form.elements.message.value;
}
