// answer_btn, number, data_type, result2


const result = document.querySelector('#result')
const data_type = document.querySelector('#result1')
const user_answer = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')


console.log(data_type, user_answer, answer_btn)


answer_btn.addEventListener('click',function(){
    let temp = Number(result.value);
    // console.log('this')
    data_type.value = typeof (temp)
    user_answer.value = temp
})
