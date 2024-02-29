const snackbartime = document.querySelector('#snackbar')
function snackbar() {  
  snackbartime.style.opacity = '1';
  setTimeout(()=>{
    snackbartime.style.opacity = '0';
  },"3000")
  //   Code
}
