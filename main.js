let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = (passed_string, passed_list) =>{
    for(let i = 0; i < passed_list.length; i++){
        if(passed_string.search(passed_list[i]) != -1){
            console.log(passed_list[i])
        }else{
            console.log('no match')
        }
    }
}

findWords(dog_string, dog_names)

let given_arr =[13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i]*2 > 50){
            arr.splice(i, 1)
            i--
        }
        
    }
    return arr 
}

replaceEvens(given_arr)