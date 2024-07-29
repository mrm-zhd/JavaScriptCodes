var stdArray = [{name:'ali', age:22, gender:'male'},
                {name:'reza', age:25, gender:'male'},
                {name:'sara', age:23, gender:'female'},
                {name:'mina', age:27, gender:'female'},
                {name:'rasoul', age:29, gender:'male'},
                {name:'sanaz', age:22, gender:'female'},
                {name:'neda', age:24, gender:'female'},
                {name:'arman', age:26, gender:'male'},
                {name:'iman', age:25, gender:'male'},]
function showStdList()
{
    for(var i=0; i < stdArray.length;i++){
        if(stdArray[i].gender=='male'){
            var males = document.createElement('li');
            males.innerText = stdArray[i].name;
            document.getElementById('malesList').appendChild(males);
        }
        else if(stdArray[i].gender=='female'){
            var females = document.createElement('li');
            females.innerText = stdArray[i].name;
            document.getElementById('femalesList').appendChild(females);
        }
    }
    // $females = stdArray['length']-$males;

    // console.log('Number Of Males:', $males);
    // console.log('Number Of Females:', $females);
}