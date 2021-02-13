var settings = {
    "url": "http://localhost:8000/its/Login",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({"user_email":"Admin@gmail.com","user_password":"Admin"}),
  };
  
  jQuery.ajax(settings).done(function (response) {
    console.log(response);
  });