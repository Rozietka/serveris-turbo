/*
1) susirasti forma ir jos VISUS LAUKUS
2) susirinkti informacija is formos
3) FE validacija
4a) jei yra klaidu - atvaizduojame
4b) jie nera klaidu - siunciame info objekta i serveri
5) is serverio gauta atsakyma interpretuojame ir kazka darome
6a) jei serveris rado klaidu - atvaizduojame
6b) jei serveris nerado klaidu - END
 */

const formDOM = document.querySelector('form');
const errorsDOM = document.querySelector('form-errors');
const allInputsDOM = formDOM.querySelectorAll('input');
const submitDOM = formDOM.querySelector('button');

submitDOM.addEventListener('click', (e) => {
    e.preventDefault();

   const formData = {};

    for (const inputDOM of allInputsDOM) {
        const { id, value } = inputDOM;
        formData[id] = value;
       
    }
    if (formData.pass === formData.repass) {
        errorsDOM.innerText = '';
    } else {
        errorsDOM.innerText = 'Nesutampa slaptazodziai';
        return;
    }

    console.log('SIUNCIAME I SERVERI:', formData);
})




