let btnadd=document.querySelector('#button')
let table=document.querySelector('table')

let firstname   =document.querySelector('#fname')
let lastname    =document.querySelector('#lname')
let Address     =document.querySelector('#Address')
let pincode     =document.querySelector('#pincode')
let Gender      =document.querySelector('#Gender')
let State       =document.querySelector('#State')
let Fooditem    =document.querySelector('#food')
let Country     =document.querySelector('#Country')

btnadd.addEventListener('click',()=>{
    let fname      =firstname.value;
    let lastname1    =lastname  .value
    let Address1     =Address   .value
    let pincode1     =pincode   .value
    let Gender1      =Gender    .value
    let State1       =State     .value
    let Fooditem1    =Fooditem  .value
    let Country1     =Country   .value  

let tem=`
<tr>
    <td>${fname}</td>
    <td>${lastname1}</td>
    <td>${Address1}</td>
    <td>${pincode1}</td>
    <td>${Gender1}</td>
    <td>${State1}</td>
    <td>${Fooditem1}</td>
    <td>${Country1}</td>
</tr>`;
table.innerHTML+=tem;
})