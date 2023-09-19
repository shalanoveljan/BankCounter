let btn=document.getElementById('btn');
let monthly_payment=document.getElementById('monthly_payment')
let general_payment=document.getElementById('general_payment')

btn.onclick=() => {
let kreditmebleg=parseInt(document.getElementById('Kredit_meblegi').value);
let kreditmuddeti=parseInt(document.getElementById('Kredit_muddeti').value);
let faiz=parseInt(document.getElementById('Faiz_derecesi').value);
if(typeof kreditmebleg=="number" && typeof kreditmuddeti=="number" && typeof faiz=="number" ){
general_payment=kreditmebleg+(kreditmebleg*(faiz/100));
monthly_payment=(general_payment/kreditmuddeti)

general_payment.innerHTML=`${general_payment}`
monthly_payment.innerHTML=`${monthly_payment}`
console.log(general_payment);
console.log(monthly_payment);
}
else{
    alert("Number daxil edin")
}
}