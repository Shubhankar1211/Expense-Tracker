document.addEventListener('DOMContentLoaded',()=>{
   const expenseForm = document.getElementById('expense-form')
   const expenseNameInput = document.getElementById('expense-name')
   const expenseAmountInput = document.getElementById('expense-amount')
   const expenseList = document.getElementById('expense-list')
   const totalAmountDisplay = document.getElementById('total')

   let expenses =[]
   let totalAmount = calculateTotal() // this will give you the final amount which will be done at the time of loading // 

   // this total amount will be given back a method that method will go into the expenses array and will get all the amountby looping thorugh it all the amount in numbers and get it back
   // how can i add things to it i will be added things by listening to the event somebuddy has to submit the form then i have to listening to this
   expenseForm.addEventListener('submit',(e)=>{
      e.preventDefault() // so that it does not take the form where is to taking the action
      // once then somebody sumbit the form then and only then we have to grab the input values otherwise we don't want to only at he form submission
      const name = expenseNameInput.value.trim()
      const amount = parseFloat(expenseAmountInput.value.trim())  // this will come to us as a string format and we dont want to store it as string format // one additional thing is whenever the from is submitted no matter where every single input comes into the string format // so we have to change the format od string to number

      if(name !== "" && !isNaN(amount) && amount>0){ // this is loop is nessessary for filling of correct value in the input fields like name and amount
        const newExpense = {
            id : Date.now(),
            name : name,
            amount : amount,
        }
        expenses.push(newExpense) // expenses it the array an the new expense is the object
        saveExpensesTolocal() // when we actually run this it saves the array freshly into the local storage
        updateTotal() // but somebody has to update the total that is why we are using it if it is zero it ko we will update the total if is not zero then we will have to update it 

        //clear out the values
        expenseNameInput.value = ""
        expenseAmountInput.value =""
      }

   })

   function calculateTotal(){
      return expenses.reduce((sum,expense)=> sum + expense.amount ,0) // where sum is the accumulatar // == ki jarrorat nahi h yha = whatever the value sum hold it keeps updating every single iteration
   }

   function saveExpensesTolocal(){
    localStorage.setItem("expenses", JSON.stringify(expenses)) // first one expenses is the key and we have to convert the element of array which is object into the string // thorught this all the expenses is added to the local storage
   }

   function updateTotal(){
     totalAmount = calculateTotal()
     totalAmountDisplay.textContent=totalAmount.toFixed(2)

   }
})