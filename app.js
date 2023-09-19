let btn=document.getElementById('btn');
let monthly_payment=document.getElementById('monthly_payment')
let general_payment=document.getElementById('general_payment')




btn.onclick=() => {
let kreditmebleg=parseInt(document.getElementById('Kredit_meblegi').value);
let kreditmuddeti=parseInt(document.getElementById('Kredit_muddeti').value);
let faiz=parseInt(document.getElementById('Faiz_derecesi').value);
    let General_payment=kreditmebleg+(kreditmebleg*(faiz/100));
    let Monthly_payment=(General_payment/kreditmuddeti)
    console.log( typeof kreditmebleg);  
    general_payment.innerHTML=`${General_payment}`
    monthly_payment.innerHTML=`${Monthly_payment}`
    console.log(General_payment);
    console.log(Monthly_payment);    
} 
