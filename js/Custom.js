function displayName(name =null){
    return name;
}
function computeTwoNumbers(num1,num2){
    return num1 + num2;
}
function confirmSubmission(){
    if (confirm("do you want to confirm?")){
        alert(computeTwoNumbers(7,3));
    }
}
//Function to compute 2 numbers and display the result
function inputTwoNumbers(){
    var firstNumber = perseInt(prompt("Enter FirstNumber:"));
    var SecondNumber = perseInt(promptT("Enter SecondNumber:"));
    alert("Your Name is: " + name+ "\n The Sum Of Two Numbers is:"+computeTwoNumbers(firstNumber, secondNumber));
}

function processInputs() {
    let studentName = prompt("Enter your name:");
    console.log("Name entered:", studentName);

    let totalItems = prompt("Enter total number of items:");
    console.log("Total items:", totalItems);

    let totalScore = prompt("Enter your total score:");
    console.log("Total score:", totalScore);

    totalItems = parseInt(totalItems);
    totalScore = parseInt(totalScore);

    if (isNaN(totalItems) || isNaN(totalScore)) {
        alert("Please enter valid numbers for total items and score.");
        return;
    }
    
    let grade= -4 * (totalScore / totalItems) + 5;

    let status = (grade>= 3.1)? "Failed" : "Passed";
    
    alert("Your Name is: " + studentName + "\nYour Total Score is: " + grade + "\nYour remarks is: " + status);
    document.getElementById("outputName").innerHTML = "Your name: " + studentName;
    document.getElementById("totalGrade").innerHTML = "Your total grade is: " + grade.toFixed(2);
    document.getElementById("remarks").innerHTML = "Your remarks are: " + status;

    console.log("Name: " + studentName);
    console.log("Total Items: " + totalItems);
    console.log("Total Score: " + totalScore);
    console.log("grade score: " + grade.toFixed(2));
    console.log("Status: " + status);
}