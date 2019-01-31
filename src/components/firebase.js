import app from "firebase/app";
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAUzIll7CUHHmdHohIwqdHYSVrf-xtVbI0",
  authDomain: "canwork-blog.firebaseapp.com",
  databaseURL: "https://canwork-blog.firebaseio.com",
  projectId: "canwork-blog",
  storageBucket: "canwork-blog.appspot.com",
  messagingSenderId: "947054502105"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***
}

export default Firebase;