function calculateGrade() {
    // Step 1: User enters marks (you can edit these values)
    let marks = [85, 90, 78, 88, 92]; // Example marks for 5 subjects
  
    // Step 2: Calculate total and average
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    let average = total / marks.length;
  
    // Step 3: Assign grade
    let grade;
    if (average >= 90) {
      grade = "A";
    } else if (average >= 75) {
      grade = "B";
    } else if (average >= 50) {
      grade = "C";
    } else {
      grade = "F";
    }
  
    // Step 4: Display the result
    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average);
    console.log("Grade: " + grade);
  }
  
  // Call the function
  calculateGrade();
  