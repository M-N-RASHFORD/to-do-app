import React from 'react';
import firebase from 'firebase';
import {useState, useEffect} from 'react';
import Todo from './Home';
import LogIn from './LogInForm';
function App() {
  const [initialiastion, setInitialise] = useState(true);
  const [user, setUser] = useState(null);
  const Monitor = (user) => {
    setUser(user);
    if (initialiastion) {
      setInitialise(false);
    }
  }
  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(Monitor);
    return subscribe;
  }, []);
  if (initialiastion) {
    return null;
  }
  if (!user) {
    return (<LogIn />);
  }
  return (<Todo />);
}
export default App;
