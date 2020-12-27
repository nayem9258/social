function go(url){window.location.replace(url);}
function toggle_it(itemID){ 
  if ((document.getElementById(itemID).style.display == 'none')) 
  { 
    document.getElementById(itemID).style.display = 'inline'; 
  } else { 
    document.getElementById(itemID).style.display = 'none'; 
  } 
} 
function js_BackUpCCcam(adminid){
  $.post('bkupdownload.php',{Admin:adminid, Server:'CCcam'})
}
function js_BackUpMGcam(adminid, filename){
  $.post('bkupdownload.php',{Admin:adminid, Server:'MGcam'})  
}
function js_BackUpNewcam(adminid, filename){
  $.post('bkupdownload.php',{Admin:adminid, Server:'Newcam'}) 
}
function js_DeleteFile(id){
  var answer = confirm("هل تريد بالتأكيد حذف هذا الملف؟")
  if (answer){
    go('servers.php?action=del&id='+id);
  }
}
function js_EditFile(id){
  go('editserverfile.php?id='+id);
}
$('.datepicker').datepicker();