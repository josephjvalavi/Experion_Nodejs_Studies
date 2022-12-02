//mycode which is corect*************8
// function insert(){
//     // const { stringify } = require('querystring')
//     var n=read.question("enter the number:")
//     while(i<=n){
//     var id=read.question("enter the id:")
//     console.log(id)
//     var name=read.question("enter the name:")
//     console.log(name)
//     var age=read.question("enter the age:")
//     console.log(age)
//     obj={cid:id,
//         cnmae:name,
//         cage:age}
//         var string=JSON.stringify(obj)
//     fs.writeFileSync(`${id}.json`,string)
//     i++
//     }
//     }
    
    
//     console.log(obj)
    // const read = require('readline-sync')
    // const fs = require('fs')




   // mishelscode********************************************************

//    const read = require('readline-sync')
// const fs = require('fs');
// const { dir } = require('console');

// while (true) {
//     console.log("1. Add User");
//     console.log("2. Update User");
//     console.log("3. Delete User");
//     console.log("4. Search User");
//     console.log("5. Exit");

//     let option = read.question('Please select an option: ');
//     switch (option) {
//         case "1":
//             addUser();
//             break;
//         case "2":
//             updateUser();
//             break;
//         case "3":
           
//             deleteUser()
//             break;
//         case "4":
//             console.log("Search User Selected");
//             searchByEmail()
//             break;
//         case "5":
//             process.exit(0);
//             break;
//         default:
//             console.log("Invalid option");
//     }
// }

// function searchByEmail(){
//     let iEmail = read.question('Enter the email to searched: ');

//     var files=fs.readdirSync('./cusdetails/')

// for(i=0;i<files.length;i++)

// {

// var data=fs.readFileSync(`./cusdetails/${files[i]}`,'utf-8')

// var obj=JSON.parse(data)
// if(obj.email==iEmail){

// console.log(obj)
// }


// }

// }
// function deleteUser(){
//     let userName = read.question('Enter the username: ');
//     var fileName = getFileName(userName);
//     fs.unlinkSync(fileName)
//     console.log("deleted file sucsesfully")



// }

// function updateUser() {
//     let userName = read.question('Enter the username: ');
//     var fileName = getFileName(userName);

//     var userText = fs.readFileSync(fileName, 'utf8');
//     var user = JSON.parse(userText);

//     console.log("Enter the details or leave it blank");
//     let name = read.question("Name: ");
//     let email = read.question("Email: ");
//     let phone = read.question("Phone: ");

//     user.name = name == "" ? user.name : name;
//     user.email = email == "" ? user.email : email;
//     user.phone = phone == "" ? user.phone : phone;

//     fs.writeFileSync(fileName, JSON.stringify(user));
//     console.log("User updated successfully 👍");
// }

// function addUser() {
//     console.log("Add User Selected");
//     var user = {
//         name: null,
//         username: null,
//         email: null,
//         phone: null
//     };
//     user.name = read.question("Name: ");
//     user.username = read.question("Username: ")
//         .toLowerCase();
//     user.email = read.question("Email: ");
//     user.phone = read.question("Phone: ");
    
//     let fileName = getFileName(user.username);
//     var json = JSON.stringify(user);
//     fs.writeFileSync(fileName, json);
// }


// function getFileName(userName){
//     return `cusdetails/${userName}.json`;
// }

//asynck file handling try//-------------------------------------

const read = require('readline-sync')
const fs = require('fs/promises');
//const { dir } = require('console');

while (true) {
    console.log("1. Add User");
    console.log("2. Update User");
    console.log("3. Delete User");
    console.log("4. Search User");
    console.log("5. Exit");

    let option = read.question('Please select an option: ');
    switch (option) {
        case "1":
            addUser();
            break;
        case "2":
            updateUser();
            break;
        case "3":
           
            deleteUser()
            break;
        case "4":
            console.log("Search User Selected");
            searchByEmail()
            break;
        case "5":
            process.exit(0);
            break;
        default:
            console.log("Invalid option");
    }
}

//     const fs = require('fs/promises');

// async function example() {
//   try {
//     const content = 'Some content!';
//     await fs.writeFile('/Users/joe/test.txt', content);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();

function addUser(){

    var user = {
   
                name: null,
   
                username: null,
   
                email: null,
   
                phone: null
   
            };
   
     user.name = read.question("Name: ");
   
    user.username = read.question("Username: ")
   
    user.email = read.question("Email: ");
   
    user.phone = read.question("Phone: ");
   
    
   
    let fileName = getFileName(user.username);
   
    var json = JSON.stringify(user);
   
    fs.writeFile(fileName+'.json',json,err =>{
   
        if(err){
   
           console.log(err)
   
        }
   
   
   
       })
   
   }
   
   function getFileName(userName){
   
          return `cusdetails/${userName}`;
   
      }
   
   
   
    
   
   


