
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

// Load data from external JSON file
function check() {
  // alert('click')
  fetch("result.json")
      // alert("tickets.json")
      .then(response => response.json())
      .then(data => {
        // json table name  "nftlist" from json file
        allData = data.draw;
        // alert('erics')

        const digit1 = document.getElementById('digit1');
        const digit2 = document.getElementById('digit2');
        const digit3 = document.getElementById('digit3');
        // alert(digit1.value)
        // alert(digit2.value)
        // alert(digit3.value)

        d = digit1.value +" "+ digit2.value +" "+ digit3.value
        // let d = document.getElementById('digit1').textContent & " " & document.getElementById('digit2').textContent & " " & document.getElementById('digit3').textContent
        // alert(d)
        filtered = allData.filter(filter => filter.draw1.toLowerCase() == d || filter.draw2.toLowerCase() == d || filter.draw3.toLowerCase() == d)
        UpdateTable(filtered);
        GetDatesResult(filtered);
        updateTable2(my_list)
        // UpdateTable(allData);
        // UpdateSuspendTable(allData);
        // UpdateClosedTable(allData);
        // UpdateLatestAlarmTable(allData);
      })
      .catch(error => console.error("Error loading JSON:", error));    

}
console.log(allData)


function UpdateTable(data) {
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
}

function GetDatesResult(data) {
    // alert('update')
    // update active table
    const tableBody = document.querySelector("#table2 tbody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(result => {
        // date.textContent = result.date;
        // alert(result.date)
        const currentdate = result.date;

        mydate = new Date(result.date);
        mydate.setDate(mydate.getDate()-1)
        month = mydate.getMonth() + 1; // Month is 0-indexed, so add 1
        day = mydate.getDate();
        year = mydate.getFullYear();
        prevdate = month +"/"+ day +"/"+ year

        // row = document.createElement("tr");
        // date = document.createElement("td");
        // date.textContent = prevdate;
        // date.setAttribute("data-label", "date");
        // row.appendChild(date);
        // tableBody.appendChild(row);

        mydate = new Date(result.date);
        mydate.setDate(mydate.getDate()+1)
        month = mydate.getMonth() + 1; // Month is 0-indexed, so add 1
        day = mydate.getDate();
        year = mydate.getFullYear();
        nextdate = month +"/"+ day +"/"+ year

        // row = document.createElement("tr");
        // date = document.createElement("td");
        // date.textContent = nextdate;
        // date.setAttribute("data-label", "date");
        // row.appendChild(date);
        // tableBody.appendChild(row);

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

function updateTable2() {

}