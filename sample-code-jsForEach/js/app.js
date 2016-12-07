console.log('Sanity Check: app.js is linked correctly!');

$(document).ready(function(){

  // select a template script, and pull out the handlebars and html inside it
//selecting source via script tag
  var source = $('#developer-li-template').html();
  console.log('template script source:', source);

  // compile the handlebars template
  //template function. Returns another function
  var template = Handlebars.compile(source);
  console.log(template);

  // use the template function from handlebars to create an HTML string
  // the template function takes in an object where:
    // each key is a variable the html template expects
    // each key's value is the data we want that variable to have
    //heres where developer html is created
  data.developers.forEach(function(developer){
    //going through for each person on list
    //uses template funtion from above. Gives back HTML
    var developerHtml = template({ github_username: developer.github_username,
    //give info about how to fill in blanks
    //give it keys that match blanks "first_name" & values to fill in w/
      first_name: developer.first_name,
      last_name: developer.last_name
     });
    console.log('generated html string:', developerHtml);

    // append html to the view
    $("#developers-list").append(developerHtml);
  });
});
