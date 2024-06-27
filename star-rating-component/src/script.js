let estrela = document.querySelectorAll('.estrela-container');
let cor = document.querySelectorAll('.fa-star');
const mensagem = document.querySelector(".mensagem")


let events = {
    mouse:{
        over: "click",
    },
    touch:{
        over: 'touchstart',
    }
};

let deviceType = "";

const isTouchDevice = () => {
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e){
        deviceType = "mouse"
        return false
    }
};

isTouchDevice();

estrela.forEach((element,index) => {
    element.addEventListener(events[deviceType].over, () => {
        if(element.classList.contains("inativo")){
            ratingUpdate(0, index, true);
        } else{
            ratingUpdate(index, estrela.length - 1, false);
        }
    });
});

const ratingUpdate = ( start, end, active) => {
    for(let i = start; i<=end; i++){
        if(active){
            estrela[i].classList.add("ativo");
            estrela[i].classList.remove("inativo");
            cor[i].style.color = "#fbcd16";
        } else {
            estrela[i].classList.remove("ativo");
            estrela[i].classList.add("inativo");
            cor[i].style.color = "#e6e9fb";
        }
    };
    let elementoAtivo = document.getElementsByClassName("ativo");
    if(elementoAtivo.length > 0){
        switch(elementoAtivo.length){
            case 1:
                mensagem.innerText = "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.";
                break;
            case 2:
                mensagem.innerText = "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.";
                break;
            case 3:
                mensagem.innerText = "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.";
                break;
            case 4:
                mensagem.innerText = "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.";
                break;
            case 5:
                mensagem.innerText = "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.";
                break;
        }
    } else {
        mensagem.innerText = ""
    }
    
};



