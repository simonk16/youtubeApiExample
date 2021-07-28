$(document).ready(function(){
    // initialize searchResults globally so we can use it in the generateVideo function
    var searchResults = [];

    // fetch videos from youtube  api
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dragon%age%origins&key=AIzaSyAzAOJ7_jMZq-33BUaxhdDSFJBr1LJdY8U")
        .then(function(res) {
            return res.json();
        }).then(function(data){
            console.log(data)
            // set search results to the array of videos, it is now available globally
            searchResults = data.items
            // run generate video
            generateVideo()
        })

        function generateVideo() {
            // dynamically create an iframe element with jquery. The string inside of the $() is a template literal, a special type of string that allows the use of javascript variables inside of it
            var videoEl = $(`<iframe width='560' height='315' src='https://www.youtube.com/embed/${searchResults[0].id.videoId}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`)
            
            // append the iframe to our video div
            $("#videoDiv").append(videoEl)
        }


})