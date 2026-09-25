function login()
{
      window.location="/employee.html";
    username=uname.value;
    console.log(username);
    localStorage.setItem("USERNAME",username)
    
}