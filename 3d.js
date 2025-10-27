
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


// alert("eric")

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

let allData = []; 
let my_list = [];

// alert(switchnumber(1,2,3));

fetch("result.json")
    // alert("tickets.json")
    .then(response => response.json())
    .then(data => {
      // json table name  "nftlist" from json file
      allData = data.draw;
      ShowResult(allData);
    })
    .catch(error => console.error("Error loading JSON:", error));    

function check() {
  // alert('click')
        const digit1 = document.getElementById('digit1');
        const digit2 = document.getElementById('digit2');
        const digit3 = document.getElementById('digit3');
        d = digit1.value +" "+ digit2.value +" "+ digit3.value
        filtered = allData.filter(filter => filter.draw1.toLowerCase() == d || filter.draw2.toLowerCase() == d || filter.draw3.toLowerCase() == d)

        tableBody = document.querySelector("#table3 tbody");
        tableBody.innerHTML = ""; // clear old data

        updateTab1(filtered);
        // updateTab3(digit1.value,digit2.value,digit3.value)

        tableBody = document.querySelector("#table4 tbody");
        tableBody.innerHTML = ""; // clear old data

        updateTab4(digit4.value,digit5.value)
        new_num = switchnumber(digit4.value,digit5.value)

        // alert("new_num"+" "+new_num+" "+new_num.slice(0,1)+" "+new_num.slice(2))
        updateTab4(new_num.slice(0,1),new_num.slice(2))


        tableBody = document.querySelector("#table3 tbody");
        tableBody.innerHTML = ""; // clear old data
        num = [digit1.value,digit2.value,digit3.value]
        getPermutations(num).forEach(perm =>{
          // alert(perm[0]+" "+perm[1]+" "+perm[2])
          updateTab3(perm[0],perm[1],perm[2]);
        });

        // new_num = switchnumber(digit1.value,digit2.value,digit3.value)
        // getPermutations(new_num).forEach(perm =>{
        //   updateTab3(perm[0],perm[1],perm[2]);
        // });
        sortTable("table3");
        sortTable("table4");
}

function checkdigits() {
  const digits1 = document.getElementById('digits1');
  const digits2 = document.getElementById('digits2');

  // alert(digits1.value+" "+digits2.value)
  d1 = digits1.value.slice(0,1)+" "+digits1.value.slice(1,2)+" "+digits1.value.slice(2,3) 
  d2 = digits2.value.slice(0,1)+" "+digits2.value.slice(1,2)+" "+digits2.value.slice(2,3) 
  // alert(d1+" "+d2)

  const tableBody = document.querySelector("#table6 tbody");
  tableBody.innerHTML = ""; // clear old data

  console.log(digits1.value.slice(0,1))
  console.log(digits1.value.slice(1,2))
  console.log(digits1.value.slice(2,3))

  // filtered = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw2.toLowerCase() == d2);
  //     updateTab6(d1,d2);  

  // filtered = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw1.toLowerCase() == d2);
  //   updateTab6(d1,d2);  

  num = [d2.slice(0,1),d2.slice(2,3),d2.slice(4,5)]
  getPermutations(num).forEach(perm =>{
    newd2 = perm[0]+" "+perm[1]+" "+perm[2]
    filter1 = allData.filter(filter => filter.draw1.toLowerCase() == d1 && filter.draw2.toLowerCase() == newd2);
    filter2 = allData.filter(filter => filter.draw2.toLowerCase() == d1 && filter.draw3.toLowerCase() == newd2);
    filter3 = allData.filter(filter => filter.draw2.toLowerCase() == d1 && filter.draw1.toLowerCase() == newd2);
    filter4 = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw2.toLowerCase() == newd2);
    filter5 = allData.filter(filter => filter.draw2.toLowerCase() == d1 && filter.draw1.toLowerCase() == newd2);
    filter6 = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw2.toLowerCase() == newd2);

    filtered = filter1.concat(filter2,filter3,filter4,filter5,filter6)
    updateTab6();  
  });
  num = [d1.slice(0,1),d1.slice(2,3),d1.slice(4,5)]
  getPermutations(num).forEach(perm =>{
    newd1 = perm[0]+" "+perm[1]+" "+perm[2]
    filter1 = allData.filter(filter => filter.draw1.toLowerCase() == d1 && filter.draw2.toLowerCase() == newd1);
    filter2 = allData.filter(filter => filter.draw2.toLowerCase() == d1 && filter.draw3.toLowerCase() == newd1);
    filter3 = allData.filter(filter => filter.draw2.toLowerCase() == d1 && filter.draw1.toLowerCase() == newd1);
    filter4 = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw2.toLowerCase() == newd1);
    filter5 = allData.filter(filter => filter.draw2.toLowerCase() == d1 && filter.draw1.toLowerCase() == newd1);
    filter6 = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw2.toLowerCase() == newd1);

    filtered = filter1.concat(filter2,filter3,filter4,filter5,filter6)
    updateTab6();  
  });
}
function checkdate() {
        const mon = document.getElementById('mon');
        const day = document.getElementById('day');

        str = mon.value +"/"+day.value

        filtered = allData.filter(filter => filter.date.toLowerCase().includes(str))
        // tstdata = allData.filter(tickets => tickets.state.toLowerCase().includes(area_selected))

        tableBody = document.querySelector("#table8 tbody");
        tableBody.innerHTML = ""; // clear old data

        updateTab8(filtered);   
        sortTable("table8");

}
function switchnumber(d1,d2,d3) {
  // alert('eric')
  if (d3 === undefined) {
      d3 = ""
  }
  const nums = [
    [0,1],
    [1,0],
    [2,5],
    [5,2],
    [3,8],
    [8,3],
    [4,7],
    [7,4],
    [6,9],
    [9,6],
  ]

  for (let i = 0; i < nums.length; i++) {
      if (nums[i][0] == d1) {
          new_d1 = nums[i][1]
      }
      if (nums[i][0] == d2) {
          new_d2 = nums[i][1]
      }
      if (d3.length > 0) {
        if (nums[i][0] == d3) {
            new_d3 = nums[i][1]
        }
      } else {
        new_d3 = ""
      }
  }
  return new_d1+" "+new_d2+" "+new_d3;
}
function updateTab1(data) {
    // alert('update')
    // update active table
    const tableBody = document.querySelector("#table1 tbody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(result => {

        // alert("processing")
        // alert(result.date)

        const row = document.createElement("tr");

        const date = document.createElement("td");
        date.textContent = result.date;
        date.setAttribute("data-label", "date");

        const draw1 = document.createElement("td");
        draw1.textContent = result.draw1;
        draw1.setAttribute("data-label", "draw1");

        const draw2 = document.createElement("td");
        draw2.textContent = result.draw2;
        draw2.setAttribute("data-label", "draw2");

        const draw3 = document.createElement("td");
        draw3.textContent = result.draw3;
        draw3.setAttribute("data-label", "draw3");

        row.appendChild(date);
        row.appendChild(draw1);
        row.appendChild(draw2);
        row.appendChild(draw3);

        tableBody.appendChild(row);

  });
  GetDatesResult(filtered);
}

function updateTab3(d1,d2,d3) {
  
    const tableBody = document.querySelector("#table3 tbody");
    // tableBody.innerHTML = ""; // clear old data

    // alert(d)
    d = d1 +" "+ d2 +" "+ d3
    filtered = allData.filter(filter => filter.draw1.toLowerCase() == d || filter.draw2.toLowerCase() == d || filter.draw3.toLowerCase() == d)

    // filtered = allData.filter(filter => filter.draw1.toLowerCase() == d1 || filter.draw2.toLowerCase() == d2 || filter.draw3.toLowerCase() == d3)
    // console.log(allData)
    // console.log(filtered)

     filtered.forEach(result => {

        const row = document.createElement("tr");

        const date = document.createElement("td");
        date.textContent = result.date;
        date.setAttribute("data-label", "date");

        const draw1 = document.createElement("td");
        draw1.textContent = result.draw1;
        draw1.setAttribute("data-label", "draw1");

        const draw2 = document.createElement("td");
        draw2.textContent = result.draw2;
        draw2.setAttribute("data-label", "draw2");

        const draw3 = document.createElement("td");
        draw3.textContent = result.draw3;
        draw3.setAttribute("data-label", "draw3");

        row.appendChild(date);
        row.appendChild(draw1);
        row.appendChild(draw2);
        row.appendChild(draw3);

        tableBody.appendChild(row);
  });
}

function updateTab4(d4,d5) {
    // alert(d4+" "+d5)
    const tableBody = document.querySelector("#table4 tbody");
    // tableBody.innerHTML = ""; // clear old data

    // alert(d)
    d = d4 +" "+ d5

    filtered = allData.filter(filter => filter.draw1.toLowerCase().includes(d));
    console.log(filtered);

// tstdata = allData.filter(tickets => tickets.state.toLowerCase().includes(area_selected))

    // filtered = allData.filter(filter => filter.draw1.toLowerCase() == d || filter.draw2.toLowerCase() == d || filter.draw3.toLowerCase() == d)

    // filtered = allData.filter(filter => filter.draw1.toLowerCase() == d1 || filter.draw2.toLowerCase() == d2 || filter.draw3.toLowerCase() == d3)
    // console.log(allData)
    // console.log(filtered)

     filtered.forEach(result => {

        const row = document.createElement("tr");

        const date = document.createElement("td");
        date.textContent = result.date;
        date.setAttribute("data-label", "date");

        const draw1 = document.createElement("td");
        draw1.textContent = result.draw1;
        draw1.setAttribute("data-label", "draw1");

        const draw2 = document.createElement("td");
        draw2.textContent = result.draw2;
        draw2.setAttribute("data-label", "draw2");

        const draw3 = document.createElement("td");
        draw3.textContent = result.draw3;
        draw3.setAttribute("data-label", "draw3");

        row.appendChild(date);
        row.appendChild(draw1);
        row.appendChild(draw2);
        row.appendChild(draw3);

        tableBody.appendChild(row);
  });
}

function updateTab6() {
  // alert(d1+" "+d2)
    const tableBody = document.querySelector("#table6 tbody");
    // filtered = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw2.toLowerCase() == d2);
    // tableBody.innerHTML = ""; // clear old data
    filtered.forEach(result => {
      const row = document.createElement("tr"); 
      const date = document.createElement("td");
      date.textContent = result.date;
      date.setAttribute("data-label", "date");

      const draw1 = document.createElement("td");
      draw1.textContent = result.draw1;
      draw1.setAttribute("data-label", "draw1");

      const draw2 = document.createElement("td");
      draw2.textContent = result.draw2;
      draw2.setAttribute("data-label", "draw2");

      const draw3 = document.createElement("td");
      draw3.textContent = result.draw3;
      draw3.setAttribute("data-label", "draw3");

      row.appendChild(date);
      row.appendChild(draw1);
      row.appendChild(draw2);
      row.appendChild(draw3);

      tableBody.appendChild(row);
  });
}

function updateTab8() {
  // alert(d1+" "+d2)
    const tableBody = document.querySelector("#table8 tbody");
    // filtered = allData.filter(filter => filter.draw3.toLowerCase() == d1 && filter.draw2.toLowerCase() == d2);
    // tableBody.innerHTML = ""; // clear old data
    filtered.forEach(result => {
      const row = document.createElement("tr"); 
      const date = document.createElement("td");
      date.textContent = result.date;
      date.setAttribute("data-label", "date");

      const draw1 = document.createElement("td");
      draw1.textContent = result.draw1;
      draw1.setAttribute("data-label", "draw1");

      const draw2 = document.createElement("td");
      draw2.textContent = result.draw2;
      draw2.setAttribute("data-label", "draw2");

      const draw3 = document.createElement("td");
      draw3.textContent = result.draw3;
      draw3.setAttribute("data-label", "draw3");

      row.appendChild(date);
      row.appendChild(draw1);
      row.appendChild(draw2);
      row.appendChild(draw3);

      tableBody.appendChild(row);
  });
}

function ShowResult(data) {
    const tableBody = document.querySelector("#table5 tbody");
    tableBody.innerHTML = ""; // clear old data

     data.forEach(result => {

        const row = document.createElement("tr");

        const date = document.createElement("td");
        date.textContent = result.date;
        date.setAttribute("data-label", "date");

        const draw1 = document.createElement("td");
        draw1.textContent = result.draw1;
        draw1.setAttribute("data-label", "draw1");

        const draw2 = document.createElement("td");
        draw2.textContent = result.draw2;
        draw2.setAttribute("data-label", "draw2");

        const draw3 = document.createElement("td");
        draw3.textContent = result.draw3;
        draw3.setAttribute("data-label", "draw3");

        row.appendChild(date);
        row.appendChild(draw1);
        row.appendChild(draw2);
        row.appendChild(draw3);

        tableBody.appendChild(row);
        // sortTable('table5')

  });
}


function GetDatesResult(data) {
    // alert('get date')
    // update active table
    const tableBody = document.querySelector("#table2 tbody");
    tableBody.innerHTML = ""; // clear old data
    my_list = [];
    month = 0;

    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    data.forEach(result => {
        // date.textContent = result.date;
        // alert(result.date)

        mydate = new Date(result.date);
        mydate.setDate(mydate.getDate())
        month = mydate.getMonth() + 1; // Month is 0-indexed, so add 1
        monthstr = `0${month}`.slice(-2); // Add '0' and take the last two characters
        day = mydate.getDate();
        daystr = `0${day}`.slice(-2); // Add '0' and take the last two characters
        year = mydate.getFullYear();
        currentdate = monthstr +"/"+ daystr +"/"+ year

        mydate = new Date(result.date);
        mydate.setDate(mydate.getDate()-1)
        month = mydate.getMonth() + 1; // Month is 0-indexed, so add 1
        monthstr = `0${month}`.slice(-2); // Add '0' and take the last two characters
        day = mydate.getDate();
        daystr = `0${day}`.slice(-2); // Add '0' and take the last two characters
        year = mydate.getFullYear();
        prevdate = monthstr +"/"+ daystr +"/"+ year

        // row = document.createElement("tr");
        // date = document.createElement("td");
        // date.textContent = prevdate;
        // date.setAttribute("data-label", "date");
        // row.appendChild(date);
        // tableBody.appendChild(row);

        mydate = new Date(result.date);
        mydate.setDate(mydate.getDate()+1)
        month = mydate.getMonth() + 1; // Month is 0-indexed, so add 1
        monthstr = `0${month}`.slice(-2); // Add '0' and take the last two characters
        day = mydate.getDate();
        daystr = `0${day}`.slice(-2); // Add '0' and take the last two characters
        year = mydate.getFullYear();
        nextdate = monthstr +"/"+ daystr +"/"+ year

        // console.log(digit1+" "+digit2+" "+digit3+" "+prevdate+" "+currentdate+" "+nextdate)

        my_list.push(prevdate)
        my_list.push(currentdate)
        my_list.push(nextdate)

        // const nextdate = currentdate.setDate(currentdate.getDate()+1)
        // month = nextdate.getMonth() + 1; // Month is 0-indexed, so add 1
        // day = nextdate.getDate();
        // year = nextdate.getFullYear();
        // strndate = month +"/"+day +"/"+year

        // alert(currentdate)
        // alert(strpdate)
        // alert(strndate)
  });
  // console.log(my_list);
  my_list.forEach(function(item) {
    // alert(item)

      // row = document.createElement("tr");
      // date = document.createElement("td");
      // date.textContent = item;
      // date.setAttribute("data-label", "date");
      // row.appendChild(date);
      // tableBody.appendChild(row);

    allData.forEach(result => {
      if (result.date == item) {

        row = document.createElement("tr");
        date = document.createElement("td");
        date.textContent = result.date;
        date.setAttribute("data-label", "date");
        row.appendChild(date);
        tableBody.appendChild(row);

        draw1 = document.createElement("td");
        draw1.textContent = result.draw1;
        draw1.setAttribute("data-label", "draw1");
        row.appendChild(draw1);

        draw2 = document.createElement("td");
        draw2.textContent = result.draw2;
        draw2.setAttribute("data-label", "draw2");
        row.appendChild(draw2);

        draw3 = document.createElement("td");
        draw3.textContent = result.draw3;
        draw3.setAttribute("data-label", "draw3");
        row.appendChild(draw3);

        tableBody.appendChild(row);

      }
    });

  });
}

function getPermutations(input) {
    // Base case: If the input is empty, return an array with a single empty array.
    if (input.length === 0) return [[]];

    // Base case: If there's only one element, return it as the only permutation.
    if (input.length === 1) return [input];

    // This will store the final list of permutations.
    let permutations = [];

    // Iterate through each element in the input.
    for (let i = 0; i < input.length; i++) {
        const currentElem = input[i];
        
        // To prevent duplicate permutations, skip iterations where the current element
        // is the same as the previous one. This assumes the input is sorted for duplicate checks.
        if (i > 0 && input[i] === input[i - 1]) continue;

        if (i == 2 && input[0] === input[2]) continue;

        // Get a new array excluding the current element.
        const remainingInput = [...input.slice(0, i), ...input.slice(i+1)];

        // Recursively get the permutations of the remaining elements.
        const remainingPermutations = getPermutations(remainingInput);

        // Combine the current element with each of the permutations of the remaining elements.
        for (let perm of remainingPermutations) {
            permutations.push([currentElem, ...perm]);
        }
    }

    // Return the generated permutations.
    return permutations;
}

function sortTable(mytable) {    
  let ascending = true;
  const table = document.getElementById(mytable);
  const rows = Array.from(table.rows).slice(1); // exclude header

  rows.sort((a, b) => {
    const dateA = new Date(a.cells[0].innerText.trim());
    const dateB = new Date(b.cells[0].innerText.trim());
    return ascending ? dateA - dateB : dateB - dateA;
  });

  // Append sorted rows
  rows.forEach(row => {
    table.tBodies[0].appendChild(row)
  });
  ascending = !ascending; // toggle sort order
}

