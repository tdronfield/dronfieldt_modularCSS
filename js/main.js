(() => {

    // make an AJAX request with Fetch API - the new way
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {

        // debugger;
        console.log(data);
    
        handleData(data);
        // call the function that populates page
    })

    .catch((err) => {
        console.log(err);
    })

    // select elements and populate content

    function handleData(data) {
       
        let coursename = document.querySelector(".profPanelText .text-muted"),
            name = document.querySelector("#profname"),
            times = document.querySelector("#classtimes");

        // debugger;

        coursename.innerHTML = data.coursename + " - " + '<span class="text-primary">' + data.coursecode + "</span";
        name.textContent = "Professor - " + data.profname;
        times.innerHTML = "<li>" +"&#128339;"+ data.classtime[0] + "</li>" + "<li>" +"&#128339;"+ data.classtime[1] + "</li>";
        
    }
})();