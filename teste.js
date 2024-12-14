var nome = "Roberto" //Global 
//let sobrenome = " "
function colocaSobrenome() {
     var sobrenome = "Carlos" //Local 
     console.log("Olá " + nome + " " + sobrenome)
}
function func1() {
     
   console.log("Olá " + nome + " " + "sobrenome")
   
}
colocaSobrenome()
func1()



