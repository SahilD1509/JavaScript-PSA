let goToGoa = (success,faliure)=>{
    let accBal = 75000
    accBal >= 20000 ? sucess("Go and enjoy!") : faliure("Try next month")
}
goToGoa((resp)=>{console.log(resp)},(err)=>{console.log(err)})