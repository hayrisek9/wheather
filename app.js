const form = document.querySelector('.top-banner form');
const input = document.querySelector('.top-banner input');
const msg = document.querySelector('.top-banner .msg');
const list = document.querySelector('.ajax-section .villes');
const apiKey = "bb826f53c2cf12a0208486fc81fd5f66"

form.addEventListener('submit', (e)=>{
    e.preventDefault(); // prevents page reload
    let inputVal = input.value;

    const listItems = document.querySelectorAll('ajax-section .ville')
    const listItemsArray = Array.from(listItems)
    if(listItemsArray.length > 0){
        const filteredArray = listItemsArray.filter((el) =>{
            let content = el
            .querySelector('.ville-name span')
            .textContent.toLowerCase();
            return content == inputVal.toLowerCase();
        })
        if(filteredArray.length > 0){
           msg.textContent = `you ${filteredArray[0].querySelector('.ville-name span').textContent} know this meteo`;
           form.reset();
           input.focus();
           return;
        }
    }
    const url = `api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
   .then(response => response.json())
  .then((data) =>{
    
  })
})