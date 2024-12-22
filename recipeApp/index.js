const userinput = document.querySelector('#userinput')
const btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    console.log('Button Clicked')
    async function partone(){
        const userinp = userinput.value.trim()
       try{
        const responce1 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userinp}`);
        console.log(`responce 1 completed`)
        if(responce1.ok){
            const responce2 = await responce1.json()
            console.log(`responce 2 completed`)
            console.log(responce2)
        }
        else{
            console.log('Error',responce1.statusText)
        }
       }
       catch(error){
        console.error(error)
       }
    }
    partone();
})
