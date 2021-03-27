
const MainContainer = document.querySelector('.grid')
const board = [1,1,2,2,3,3,4,4,5,5,6,6]

const pair ={
    firstCard:-1,
    SecondeCard:-1,
    Success:0,
    Failure:0
}

//Shuffle the board
const shuffle = () =>{
    for(let i=0;i<board.length;i++){
     let RandomIndex = Math.floor(Math.random()*12)
     let temp = board[i]
     board[i] = board[RandomIndex]
     board[RandomIndex] = temp
    }
    
}

const createBoard = () =>{
    for(let i=0;i<board.length;i++){
        
        let div = document.createElement('div')
        div.classList.add('back')
        div.setAttribute('dataType',`${board[i]}`)
        MainContainer.appendChild(div)
        div.addEventListener('click',clickCard)
    }
  
}

const clickCard = (p) =>{
    picNumber = p.target.getAttribute('datatype')
    if(pair.firstCard === -1){
       pair.firstCard = p.target
       p.target.classList.remove('back')
       p.target.classList.add(`pic${picNumber}`)
    }
    else if(pair.SecondeCard === -1){
        pair.SecondeCard = p.target
        p.target.classList.remove('back')
        p.target.classList.add(`pic${p.target.getAttribute('datatype')}`) 
    
        if(pair.firstCard.getAttribute('datatype') !== pair.SecondeCard.getAttribute('datatype')){
            
            pair.wrong += 1
            setTimeout( () =>{
                pair.firstCard.classList.remove(`pic${pair.firstCard.getAttribute('datatype')}`)
                pair.firstCard.classList.add(`back`)
                pair.SecondeCard.classList.remove(`pic${pair.SecondeCard.getAttribute('datatype')}`)
                pair.SecondeCard.classList.add(`back`)
                pair.firstCard = -1
                pair.SecondeCard = -1
            },1500)

        }else{
            pair.Success += 1
            pair.firstCard = -1
            pair.SecondeCard = -1
        }
      
    }
    
   

    if(pair.firstCard !== -1 && pair.SecondeCard !== -1){
        
        console.log( pair.firstCard )
        console.log( pair.SecondeCard )
        
    }

       if(pair.Success === board.length/2){
           console.log('Winner')
       }
}

const start = () =>{
    shuffle()
    createBoard()
}

start()