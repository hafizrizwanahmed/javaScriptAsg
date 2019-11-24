        // 2) Write a program to store 3 student names in an array.Take anotherarray to store score of these three students. 
        //Assume that total marks are 500 for each student, display the scores & percentages of students like:
        var students = ['Ali', 'Tahir', 'Rizwan'];
        var scores = [320, 230, 480];
        var totalMarks = 500;
        for (let i = 0; i < students.length; i++) {
            document.write('Score of ' + students[i] + ' is ' + scores[i] + '. Percentage: ' + (scores[i]/totalMarks*100) + "% <br>");
        }