const FICHA = document.getElementById("infoUser").children

function getRadioValue(value){
    const selectedValue = value
    
    const select = document.querySelector('#languages')
    const actualOptions = Array.from(select.children)
    
    
    FICHA[1].innerHTML = 'Caminho: ' + selectedValue

    if(selectedValue === 'Back-End'){
        if(actualOptions.length > 2){
            select.removeChild(actualOptions[0])
            select.removeChild(actualOptions[1])
        }
        select.insertAdjacentHTML(
            'afterbegin',
            `<option value="C#">C#</option>
             <option value="Java">Java</option>
            ` 
        )
        return;
    }
    if(selectedValue === 'Front-End'){
        if(actualOptions.length > 2){
            select.removeChild(actualOptions[0])
            select.removeChild(actualOptions[1])
        }
        select.insertAdjacentHTML(
            'afterbegin',
            `<option value="React">React</option>
            <option value="Vue">Vue</option>
            ` 
            )
            return;
        }
}

function changeRecordLang(){
    FICHA[2].innerHTML = 'Linguagem: ' + document.getElementById("languages").value
}

function especialMessage(){
    const carrerPlan = document.getElementById("message").value

    if(carrerPlan === 'especializacao'){
        FICHA[3].innerHTML = 'Especialização: aprofundar no conteúdo da caminho escolhida'
    }
    if(carrerPlan === 'fullstack'){
        FICHA[3].innerHTML = 'FullStack: Sabe um pouco de Front-End e Back-End'
    }
}

function addTec(){
    const value = document.getElementById("tecInput").value

    FICHA[5].insertAdjacentHTML(
        'beforeend',
        `<a>${value}</a><br>
        ` 
        ) 
        document.getElementById("tecInput").value = ''
}