$(document).ready(function () {
             function newQuote(){
                
                 $.ajax({
                     url: "http://api.forismatic.com/api/1.0/",
                     jsonp:"jsonp",
                     dataType:"jsonp",
                     data :{
                         method:"getQuote",
                         lang:"en",
                         format:"jsonp"
                     },
                     success: function (data) {
                          quote = data.quoteText;
                          author = data.quoteAuthor;
                         $("#quote").text(quote);
                         if(author){
                         $("#author").text(author);
                         }else{
                         $("#author").text("Unknown");
                         }
                     }
             });
             
             }
            newQuote();

    $("#getQuote").on("click",function(event){
	event.preventDefault();
	newQuote();
		});
	$("#tweet").on("click",function(event){
	event.preventDefault();
	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " : " + author));
		});
  });


