function solution(queries) {
  
    let output = []
    let account_memoization = []
    let account_fund;
    queries.forEach((element, _id) => {
        switch(element[0]) {
          case "CREATE_ACCOUNT":
              if(account_memoization.includes(element[2])){
                  output.push('false')
              }else{
                  account_memoization.push(element[2])          
                  output.push('true')
              }
              break;
          case "DEPOSIT":
              if(element[2] === "non-existing" ) {
                  output.push("")
              }else{
                  output.push(element[3])
              }
              break;
          case "TRANSFER":
              output.push("true")
              break;
        }
    })
    console.log(output)
  }

let q = [["CREATE_ACCOUNT","1","account1"], 
["CREATE_ACCOUNT","2","account2"]]

solution(q)