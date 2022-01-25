// const player="scissor";
var computer=generate();

function generate()
{
    let b=Math.floor(Math.random()*3);
    switch(b)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissor";
            break;
        case 2:
            return "paper";
            break;
    }
}
function playGround(player, computer){
    if(player=="rock" && computer=="scissor")
    {
        return "You Won";
    }
    else if(player=="scissor" && computer=="paper")
    {
        return "You Won";
    }
    else if(player=="paper" && computer=="rock")
    {
        return "You Won"
    }
    else if(computer=="rock" && player=="scissor" )
    {
        return "Computer Won";
    }
    else if(computer=="scissor" && player=="paper")
    {
        return "Computer Won";
    }
    else if(computer=="paper" && player=="rock")
    {
        return "Computer Won";
    }
    else{
        return "Match Draw";
    }
}

// console.log(playGround(player, computer));
//console.log(computerCh);

let a=document.getElementById('i1').addEventListener('click', ()=> {
    let pl='scissor';
    let cm=generate();
    document.getElementById('dis').innerHTML=playGround(pl,cm);
});
let b=document.getElementById('i2').addEventListener('click', ()=>
{
    let pl='paper';
    let cm=generate();
    document.getElementById('dis').innerHTML=playGround(pl,cm);
});
let c=document.getElementById('i3').addEventListener('click', ()=>
{
    let pl='stone';
    let cm=generate();
    document.getElementById('dis').innerHTML=playGround(pl,cm);
} );