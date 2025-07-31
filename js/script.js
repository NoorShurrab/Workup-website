let bttn = document.querySelector('#bttn')
let body = document.querySelector('body')
let header = document.querySelector('header')
bttn.onclick = () => {
   //body.style.background = '#000';
   //body.style.color = '#fff';
   header.classList.toggle('dark');
   body.classList.toggle('dark');
   bttn.classList.toggle('fa-sun');
    //alert("hhhello")
}
console.log(bttn)
//let bttn = document.querySelector('#bttn');
//let body = document.querySelector('body');

//if (bttn && body) {  // إذا كان العنصران موجودين
   // bttn.onclick = () => {
      //  body.classList.toggle('dark');    // يضيف/يزيل كلاس "dark" من body
      //  bttn.classList.toggle('fa-sun'); // يضيف/يزيل أيقونة الشمس (إذا كنت تستخدم FontAwesome)
 //   };
//} else {
 //   console.error("العنصر #bttn أو body غير موجود!");
//}