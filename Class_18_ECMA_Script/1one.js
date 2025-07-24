let eids = [101, 102, 103, 104, 105];
for(let i = 0; i < eids.length; i++){
    console.log(eids[i])
}

let i = 0
while(i <eids.length){
    console.log(eids[i]);
    i++
}

eids.forEach(function(eid){
    console.log(eids)
})

for (let eid of eids){
    console.log(eids)
}

eids.map((eid)=>{console.log(eid)})