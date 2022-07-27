import './styles/reset.css';
import './styles/common.css';
import './App.css';
import Nav from './components/Nav';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TypingTitle = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Yuto Village';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <h1 className="main-title">{blogTitle}</h1>;
};

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <div className="main-content">
          <p className="sub-title">공부하는 코린이 유토 블로그</p>
          {<TypingTitle />}
        </div>
      </div>
      <Routes>
        <Route path="/study" element={<div> Route 테스트 </div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
