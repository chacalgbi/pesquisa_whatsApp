
function alertSave(){

  Swal.fire({
    title: 'Você quer salvar as alterações??',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Salvar`,
    denyButtonText: `Nao salvar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
      setTimeout(() =>  {document.querySelector('form').submit()},2000);
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  
}


const alertAdd = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
  
  setTimeout(() =>  {document.getElementById('add').submit()},2000);
  
}