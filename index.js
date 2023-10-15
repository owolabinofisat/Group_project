document.addEventListener('DOMContentLoaded', function () {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const carrierIcon = document.getElementById('carrierIcon');

    phoneNumberInput.addEventListener('input', function () {
        const phoneNumber = phoneNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters
        const isAirtel = /^(\+234|0)(702|802|812|902|912|708|808|818|908|918)/.test(phoneNumber);
        const isMtn = /^(\+234|0)(700|800|810|900|910|701|801|811|901|911|703|803|813|903|913|704|804|814|904|914|706|806|816|906|916)/.test(phoneNumber);
        const isGlo = /^(\+234|0)(705|805|815|905|915|707|807|907|917)/.test(phoneNumber);
        const isEtisalat = /^(\+234|0)(709|809|817|909|919|819)/.test(phoneNumber);

        // document.body.prepend(carrierIcon)// this will add it just b4 the body opening tag before the script

        if (isAirtel) {
            carrierIcon.innerHTML = '<img src="./logo/airtel.png" alt="Airtel">';
        } else if (isMtn) {
            carrierIcon.innerHTML = '<img src="./logo/mtn.png" alt="MTN">';
        } else if (isGlo) {
            carrierIcon.innerHTML = '<img src="./logo/glo.png" alt="GLO">';
        } else if (isEtisalat) {
            carrierIcon.innerHTML = '<img src="./logo/9mobile.png" alt="9MOBILE/ETISALAT">';
        } else {
             
            carrierIcon.innerHTML = 'Unknown Network'; // Clear the icon if the number is not Airtel
        }

      
    });
});

