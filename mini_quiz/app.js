const correctAnswers = ['C','A','B','A','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

//calculate score and display result.
form.addEventListener('submit' , e=> {
    e.preventDefault();
    let score=0;
    const input = [ form.q1.value , form.q2.value , form.q3.value , form.q4.value , form.q5.value];

    input.forEach((answer, index)=>{
        if(answer===correctAnswers[index])
        {
            score+=20;
        }
    });
    //scorll to the page top 
    scrollTo(0,0);

    //display result on page

    result.classList.remove('d-none');
    
    //animate result
    let output=0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}` ;

        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;}
    }, 10);
    
});