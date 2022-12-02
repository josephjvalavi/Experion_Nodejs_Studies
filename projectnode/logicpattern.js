// let k=1;
// let string="";
// for(let i=1;i<10;i++){
//     for(let j=0;j<i;j++){
//         string += k;
//         string += " ";
// ;
//     }
//     k+=2;
//     string += '\n'
// }
// console.log(string)

//////palindrom

// ar=[1,23,34,5]
// console.log(ar[-1])

//duplicate items printing
//----------------------------------------------------------------
// var arr=[1,2,3,3]
// //var count=0
// var dupe=[]
// for(let i=0;i<arr.length;i++){
//     var count=0
    
//     for(let j=i;j<=arr.length;j++){
//         if(arr[i]===arr[j])
//         count++
//     }
//     if(count>1){
//         dupe.push(arr[i])
//     }

// }
// console.log(dupe)


//------------------------------------------------------------

//patern printing 

//--------------------------
// for( i=0;i<=10;i+=2){
//     for( j=10;j>i;j--)
//     {
//         process.stdout.write(' ')
//     }
//     for( k=0;k<=i;k++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }
//------------------------------------------------------- 
//           *
//         ***
//       *****
//     *******
//   *********
// **********/

// ////palindrome
// var flag=0
//  var ar="malayalam"
//  var l=ar.length
//  for(i=1 ;i<l/2;i++){
//     if(ar[i]!==ar[1-1-i])

    
//  }
// console.log("not palindrome")
 



//---------------------------------------------------function example

// function icecream(makeicecream,flavour,flavours)
// { setTimeout(()=>{ makeicecream(flavour); },flavours.kiwi) } 
// const flavours = { "kiwi": 6000, "pineapple": 7000, } 
// icecream(function (flavour,flavours){
//      console.log(`${flavour} flavoured icecream`) },"kiwi",flavours)



//arraysorting
// var len=a.length
// console.log(len)
// //k=0
// a=[1,3,4,67,3,6,78,4,4]
// for(i=0;i<len;i++){
//     for(j=0;j<len;j++){
//         if(a[i]>a[j])
//         a[i]=a[j]
//         a[j]=a[i]
//     }
// }
// console.log(a)
//------------------------------
// for (let i = 0; i < 5; i++) {
//     let count = 1;
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(count++ + ' ');
//     }
//     count = 1;
//     console.log();
//}

//----------------------------
// for(i=0;i<=5;i++){
//     console.log("*")
// }
// for(i=0;i<6;i++){
//     process.stdout.write("* ")
// }
//-----------------------------------

//pattern printing

// for(i=1;i<=5;i++){
//     for(j=5;j>i;j--){
//         process.stdout.write(' ')

//     }
//     for(k=1;k<=i;k++){
//         if(k%2==0){
//             process.stdout.write('')
//         }
//         process.stdout.write(' '+i)
//     }
// console.log()
//}

//////-------------------------------\
//      1
//     2  2
//    3  3 3
//   4  4 4  4
//  5  5 5  5 5
 
 /////fobnocci
 //=---------------------------------------------
// var a=0
// var b=1
// var n=10
// console.log(0)
// console.log(1)
//  for(i=3;i<=n;i++){
//     var fib=a+b
//     console.log(fib)
//     a=b
//     b=fib
    
    

 //}
 //------------------------------------------------
 // print reverse of a string


//  var s='india'
// var l=s.length
// console.log(l)
// for(i=l-1;i>=0;i--){
//     process.stdout.write(''+s[i])
   
// }
//-------------------------------------------------------------------
//array elemets duplivation elimauinating
// var a=[1,2,3,4,5,6,7]
// var b=[1,2,8,4,7,0,3]

// c=[]
// console.log(c)
// var f=0

// for(i=0;i<7;i++){
//     for(j=0;j<7;j++){
//         if(a[i]==b[j]){
//             f++
//              if(f>=1){
//                 c[i]=a[i]


//              }
            

//             }
        
//     }
// }
// console.log(c)

//=------------------------
// var isValid=true
// for(i=0;i<=c.length;i++){
//     for(j=i+1;j<c.length;j++){
//         if(c[i]===c[j]){
//             c[i]=c[i+1]
//         }
//     }
// }
// // console.log(c)


// //snakes and ladder
score_a=0
score_b=0
while(score_a<=100||score_b<=100){
    score_a=play1(score_a)
    score_b=play2(score_b)
    if(score_a>=100){
        console.log("player1 wins")
    }
    if(score_b>=100){
        console.log("player2 wins")
    }
    
    
    
}
function play1(score){
    console.log("player 1")
    
    var x = Math.floor(Math.random() * (6 - 1)) + 1
    console.log("dice player1",x)
    if(x==1&score==0){
        score=1
        console.log("score",score)
        return(score)

    }
    if(score>=1){
        var scoreret
        eeni (score)
        pamb (score)
        scoreret+=score
        console.log("score",scoreret)
        return(scoreret)

    }
    }
function play2(score){
    console.log("player 2")
    y=Math.floor(Math.random() * (6 - 1)) + 1
    console.log('dice',y)
    if(y==1&score==0){
        score=1
        console.log("score",score)
        return(score)
        

    }
    if(score>=1){
        var scoreret
        eeni (score)
        pamb (score)
         scoreret+=score
        console.log("score",scoreret)
        return(scoreret)
        

    }

}




function pamb(score){
    snake=[[4,14],[8,30],[28,76],[71,92],[50,67]]
    for(i=0;i<5;i++){
    if(score==snake[i][0]){
        score=snake[i][1]
    }
}

    return(score)
}


function eeni(score){
ladder=[[4,14],[8,30],[28,76],[71,92],[50,67]]
for(i=0;i<5;i++){
if(score==ladder[i][0]){
    score=ladder[i][1]
}
}

return(score)
}
