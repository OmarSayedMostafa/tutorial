// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid()
 {

    var tableElement = document.getElementById('pixeltable'); // get table elemnt by its id to add to it rows and columns
    var rows = document.getElementById('inputHeight').value; // get the value of the rows from height input element
    var coloumns = document.getElementById('inputWidth').value; //هنا بستدعي الحجات الي هشتغل عليها كلها ب idبتعها 


    for(var i = tableElement.rows.length - 1; i >= 0; i--)
    {
        tableElement.deleteRow(i);
    }


    for(var i=0; i<rows; i++)  //هنا انا خليت ال loop  الاولانيه صف عشان هعمل الصف الاول تخش ع اللوب التانيه تعمل كل العواميد الي فيها 
    {
        var tableRow = document.createElement('tr'); // هنا هكاريت صف 
        for(var j = 0; j< coloumns; j++)
        {
            var tableCell = document.createElement('td'); //هنا هكاريت عمود
            tableRow.appendChild(tableCell);  //هنا هدخل الاعمده جوا الصفوف
            tableCell.addEventListener('click', function(event){  // ال tablecell بقت عباره عن مربع هعملها داله تنفذ حاجه معينه
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;  
            })
        }
        tableElement.appendChild(tableRow);// كل الكلام ده هدخلو جوا tableElament
        
    }

    


}
