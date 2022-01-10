var nineAM = document.getElementById("nine-am");
var tenAM = document.getElementById("ten-am");
var elevenAM = document.getElementById("eleven-am");
var twelvePM = document.getElementById("twelve-pm");
var onePM = document.getElementById("one-pm");
var twoPM = document.getElementById("two-pm");
var threePM = document.getElementById("three-pm");
var fourPM = document.getElementById("four-pm");
var fivePM = document.getElementById("five-pm");

console.log(localStorage);
$(document).ready(function(){
    update = function()
    {
        //Momentjs time code for time/date display on header
        var time = moment().format("MMM Do, YYYY, HH:mm:ss");
        $("#currentDay").text(time);

        //Creating a time variable to compare to the different time rows in order to change the color based on the current time
        currentTime = moment();

        //9 AM Time Comparison
        if(moment(currentTime).hour() < 9)
        {
            document.getElementById('nine-am').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 9)
        {
            document.getElementById('nine-am').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 9)
        {
            document.getElementById('nine-am').style.backgroundColor = 'red';
        }
        //10 AM Time Comparison
        if(moment(currentTime).hour() < 10)
        {
            document.getElementById('ten-am').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 10)
        {
            document.getElementById('ten-am').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 10)
        {
            document.getElementById('ten-am').style.backgroundColor = 'red';
        }
        //11 AM Time Comparison
        if(moment(currentTime).hour() < 11)
        {
            document.getElementById('eleven-am').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 11)
        {
            document.getElementById('eleven-am').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 11)
        {
            document.getElementById('eleven-am').style.backgroundColor = 'red';
        }
        //12 PM Time Comparison
        if(moment(currentTime).hour() < 12)
        {
            document.getElementById('twelve-pm').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 12)
        {
            document.getElementById('twelve-pm').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 12)
        {
            document.getElementById('twelve-pm').style.backgroundColor = 'red';
        }
        //1 PM Time Comparison
        if(moment(currentTime).hour() < 13)
        {
            document.getElementById('one-pm').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 13)
        {
            document.getElementById('one-pm').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 13)
        {
            document.getElementById('one-pm').style.backgroundColor = 'red';
        }
        //2 PM Time Comparison
        if(moment(currentTime).hour() < 14)
        {
            document.getElementById('two-pm').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 14)
        {
            document.getElementById('two-pm').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 14)
        {
            document.getElementById('two-pm').style.backgroundColor = 'red';
        }
        //3 PM Time Comparison
        if(moment(currentTime).hour() < 15)
        {
            document.getElementById('three-pm').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 15)
        {
            document.getElementById('three-pm').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 15)
        {
            document.getElementById('three-pm').style.backgroundColor = 'red';
        }
        //4 PM Time Comparison
        if(moment(currentTime).hour() < 16)
        {
            document.getElementById('four-pm').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 16)
        {
            document.getElementById('four-pm').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 16)
        {
            document.getElementById('four-pm').style.backgroundColor = 'red';
        }
        //5 PM Time Comparison
        if(moment(currentTime).hour() < 17)
        {
            document.getElementById('five-pm').style.backgroundColor = 'green';
        }
        if(moment(currentTime).hour() > 17)
        {
            document.getElementById('five-pm').style.backgroundColor = 'gainsboro';
        }
        if(moment(currentTime).hour() == 17)
        {
            document.getElementById('five-pm').style.backgroundColor = 'red';
        }
        retrieveData();
    }

    update();
    setInterval(update,1000);

});

//This is a set of functions that for each text area, it will store the value of said area locally for retrieval at a later time
function saveNineAM()
{
    localStorage.setItem("nine-am-storage",JSON.stringify(nineAM.value));
}
function saveTenAM()
{
    localStorage.setItem("ten-am-storage", JSON.stringify(tenAM.value));
}
function saveElevenAM()
{
    localStorage.setItem("eleven-am-storage", JSON.stringify(elevenAM.value));
}
function saveTwelvePM()
{
    localStorage.setItem("twelve-pm-storage", JSON.stringify(twelvePM.value));
}
function saveOnePM()
{
    localStorage.setItem("one-pm-storage", JSON.stringify(onePM.value));
}
function saveTwoPM()
{
    localStorage.setItem("two-pm-storage", JSON.stringify(twoPM.value));
}
function saveThreePM()
{
    localStorage.setItem("three-pm-storage", JSON.stringify(threePM.value));
}
function saveFourPM()
{
    localStorage.setItem("four-pm-storage", JSON.stringify(fourPM.value));
}
function saveFivePM()
{
    localStorage.setItem("five-pm-storage", JSON.stringify(fivePM.value));
}

//This is a function that retrieves all of the stored texts from local storage, and adds them to the textarea of its corresponding ID
function retrieveData()
{
    var retrievedNineAmText = JSON.parse(localStorage.getItem("nine-am-storage"));
    var retrievedTenAmText = JSON.parse(localStorage.getItem("ten-am-storage"));
    var retrievedElevenAmText = JSON.parse(localStorage.getItem("eleven-am-storage"));
    var retrievedTwelvePmText = JSON.parse(localStorage.getItem("twelve-pm-storage"));
    var retrievedOnePmText = JSON.parse(localStorage.getItem("one-pm-storage"));
    var retrievedTwoPmText = JSON.parse(localStorage.getItem("two-pm-storage"));
    var retrievedThreePmText = JSON.parse(localStorage.getItem("three-pm-storage"));
    var retrievedFourPmText = JSON.parse(localStorage.getItem("four-pm-storage"));
    var retrievedFivePmText = JSON.parse(localStorage.getItem("five-pm-storage"));

    if(retrievedNineAmText !== null)
    {
        document.getElementById("nine-am").innerHTML = retrievedNineAmText;
    }
    if(retrievedTenAmText !== null)
    {
        document.getElementById("ten-am").innerHTML = retrievedTenAmText;
    }
    if(retrievedElevenAmText !== null)
    {
        document.getElementById("eleven-am").innerHTML = retrievedElevenAmText;
    }
    if(retrievedTwelvePmText !== null)
    {
        document.getElementById("twelve-pm").innerHTML = retrievedTwelvePmText;
    }
    if(retrievedOnePmText !== null)
    {
        document.getElementById("one-pm").innerHTML = retrievedOnePmText;
    }
    if(retrievedTwoPmText !== null)
    {
        document.getElementById("two-pm").innerHTML = retrievedTwoPmText;
    }
    if(retrievedThreePmText !== null)
    {
        document.getElementById("three-pm").innerHTML = retrievedThreePmText;
    }
    if(retrievedFourPmText !== null)
    {
        document.getElementById("four-pm").innerHTML = retrievedFourPmText;
    }
    if(retrievedFivePmText !== null)
    {
        document.getElementById("five-pm").innerHTML = retrievedFivePmText;
    }
}