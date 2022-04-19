document.addEventListener("DOMContentLoaded",function(){
    //take the name of the champions and store them in our the datalist
    getChampion();
    searchImg();
    searchImg2();

})

function getChampion(){
    fetch( `http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json`)
    .then(res => {
        if (res.ok){
            console.log("sucess")
            res.json()
            .then((data) => {
                championslist = data;
                if(data){
                        storechampions(championslist);
                }
            })
        } else if(res.status == 404){
            showError(
            'pokemon not found',
           )
        }
        
    })
}

function storechampions(){
    let goodchamplist = document.getElementById("goodchamplist")
    for (var name in championslist.data){
        let championName = [name];
        // console.log(championName);
        let option = document.createElement('option');
        option.value = `${name}`;
        goodchamplist.appendChild(option)
    }
}
function searchChampion(){
    event.preventDefault()

    console.log(searchGood.val)

}

function searchImg(){

    //get the champion image and put inside the requested div
    let searchGood = document.getElementById("formGood")
    searchGood.onsubmit = function(event){
    // disable the page refresh when submit the form
    event.preventDefault();
    
    inputgood = document.querySelector("#searchGood").value;
    inputgood = inputgood[0].toUpperCase() + inputgood.slice(1).toLowerCase()
    console.log(inputgood);

    printChamp(inputgood);

    }
}

function printChamp(input){
    console.log(input);
        fetch(`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${input}.png`)
        .then(res => {
            if (res.ok){
                console.log("we get img sucefully")
                res.blob()
                .then((data) => {
                    let imageObjectURL = URL.createObjectURL(data);

                    let image = document.createElement('img')
                    image.src = imageObjectURL
                    image.setAttribute("class","icons")
                    image.setAttribute("onclick","this.remove()")

                    let container = document.getElementById("goodchampicons")
                    console.log(container.lastElementChild)
                    if (container.children.length < 5){
                        container.append(image);

                    }

                    console.log('remove one champion and try again')


                    
                })
            } else if(res.status == 404){
                showError(
                'pokemon not found',
               )
            }
            
        })
    
}

function searchImg2(){

    //get the champion image and put inside the requested div
    let searchbad = document.getElementById("formBad")
    searchbad.onsubmit = function(event){
    // disable the page refresh when submit the form
    event.preventDefault();
    
    inputbad = document.querySelector("#searchbad").value;
    inputbad = inputbad[0].toUpperCase() + inputbad.slice(1).toLowerCase()
    console.log(inputbad);

    printChamp2(inputbad);

    }
}

function printChamp2(input){
    console.log(input);
        fetch(`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${input}.png`)
        .then(res => {
            if (res.ok){
                console.log("we get img sucefully")
                res.blob()
                .then((data) => {
                    let imageObjectURL = URL.createObjectURL(data);

                    let image = document.createElement('img')
                    image.src = imageObjectURL
                    image.setAttribute("class","icons")
                    image.setAttribute("onclick","this.remove()")


                    let container = document.getElementById("badchampicons")
                    console.log(container.lastElementChild)
                    if (container.children.length < 5){
                        container.append(image);

                    }

                    console.log('AA')


                    
                })
            } else if(res.status == 404){
                showError(
                'pokemon not found',
               )
            }
            
        })
}