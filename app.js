var facebook_login = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    facebook_login.auth().signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        var user = result.user;
    
        window.location = "home.html"
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var credential = FacebookAuthProvider.credentialFromResult(result);
        // var accessToken = credential.accessToken;
        console.log("user===>",user)
        // ...
      })
      .catch((error) => {
       
        console.log(error.message)
      });
}

const signout = () => {

    firebase.auth().signOut()
    .then(() => {
        window.location = "login.html"
    })
    .catch(() =>{

        
    })
}