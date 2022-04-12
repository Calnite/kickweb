

var elem = document.getElementsByClassName('rap-box');

function isIntoView(elem)
{
    var documentViewTop = $(window).scrollTop();
    var documentViewBottom = documentViewTop + $(window).height();

    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();

    return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}

  $(window).scroll(function(){
   if (isIntoView($('#rap-text'))){
    var text = document.getElementById('rap-text');
    var newDom = '';
    var animationDelay = 10;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    }
})
        


        

        
    





        
