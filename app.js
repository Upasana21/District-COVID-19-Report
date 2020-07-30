const StateDiv = document.getElementById('state');

console.log(StateDiv);
const stateDistrict= new State_District;

//http call
stateDistrict.getStateDistrict()
.then((report)=>{
  console.log(report); // object 
  const State = Object.keys(report);
  // console.log(State);
  
  let stateUI ='';
  State.map((stateName)=>{
     stateUI += `<li id="${stateName}">${stateName}</li>`
  })
  StateDiv.innerHTML=stateUI;
  console.log(stateUI);
   //console.log('arrlist',arrList);// 37 array of objects
  
    // arrList.map(eachArrayObj=>{
    //    // console.log(eachArrayObj)
    //    // set condition to get data of specific state
    //    //with statecode
    //    if(eachArrayObj.statecode ==='JK'){
    //        //console.log(eachArrayObj);
    //        //console.log(Object.values(eachArrayObj))
    //        const districtList=Object.values(eachArrayObj)[0]
    //          //console.log(districtList);
    //          //console.log(Object.values(districtList))
    //          const eachDistrict=Object.values(districtList);
    //          console.log(Object.keys(districtList))//names
             
    //          eachDistrict.map(details=>{
    //              console.log(details)
    //             //console.log(Object.values(details))
    //          })

           
    //     }
    // })
 
})