class Parent{
    constructor(){
        console.log("Parent Class Constructor")
    }
}
class child extends Parent{
    constructor(){
        super()
        console.log("Child Class Constructor")
    }
}
new child()