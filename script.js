function login()
{
  username=uname.value;
  pass=password.value;

if(username=="" || pass=="" )
{

  alert("enter username and password")
    
}

else{
      window.location="/employee.html";
    
    console.log(username);
    localStorage.setItem("USERNAME",username)

}
}