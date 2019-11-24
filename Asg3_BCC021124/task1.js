        //1) Declare and Initialize an array and store available education qualifications in Pakistan 
        //(e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

        var education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
        document.write("<h1> Qualifications: </h1><br>");
        for (let i = 0; i < education.length; i++) {
             document.write(i+1 + ") "+ education[i] +" </br> ");
        }