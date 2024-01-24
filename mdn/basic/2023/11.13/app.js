
const app = () => {

   let arr = [1,2,3,4,5];
   // console.log(arr);

   // for(let item of arr) {
   //     console.log(item)
   // }

    arr.map((item, index) => {
        // console.log(index+'째 값 :' + item);

        if(index / 2 === 0) {
            console.log(item);
        }
    })
}

document.addEventListener('DOMContentLoaded', app);

