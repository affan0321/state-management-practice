"use client";
import React, { useState } from 'react';

const Quiz = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Which programming language is used for React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correct: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Creative Style System",
      "Computer Styled Sheets",
      "Colorful Styling System",
    ],
    correct: "Cascading Style Sheet",
  },
]


export default function Home() {
  const [like, setLike] = useState(0);
  const HandleLike = () => {
    setLike(like + 1);
  }

  const [isVisible, setIsvisible] = useState(false);
  const handleVisible = () => {
    setIsvisible(!isVisible)
  }

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError("Invalid email")
    }
    else {
      setError("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && email) {
      alert(`email submitted ${email}`)
    }
  }

  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode((prevMode => !prevMode))
  }

  const [Email, setEemail] = useState('');
  const [name, setName] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleOutput = (e) => {
    e.preventDefault();
    setSubmittedEmail(Email);
    setSubmittedName(name);

  }

  const [submittedAddTask, setSubmittedAddTask] = useState([]);
  const [addTask, setAddTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (addTask.trim() === '') return
    setSubmittedAddTask([...submittedAddTask, addTask]);
    setAddTask('');
  }

  const Quiz = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "Which programming language is used for React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correct: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheet",
        "Creative Style System",
        "Computer Styled Sheets",
        "Colorful Styling System",
      ],
      correct: "Cascading Style Sheet",
    },
  ]

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const increasedQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreasedQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    )
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === Quiz[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < Quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(""); // Reset selection for next question
    } else {
      setQuizFinished(true);
    }
  };





  return (
    <div style={{
      backgroundColor: darkMode ? "#333" : "#ffffff",
      color: darkMode ? "#ffffff" : "#333",
    }}>
      <div>
        <p>Likes : {like}</p>
        <button onClick={HandleLike}>Like</button>
        <br />
        <input type={isVisible ? "text" : "password"} />
        <button onClick={handleVisible}>{isVisible ? "Hide" : "Show"}</button>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={handleChange} placeholder='enter your email' />
          <button type='submit'>Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <button onClick={handleThemeChange}>{darkMode ? "Switch to light mode" : "switch to dark mode"}</button>

        <form onSubmit={handleOutput}>
          <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Enter Your e-mail' onChange={(e) => setEemail(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>

        {submittedName && submittedEmail &&
          <div>
            <h5>Submitted Data :</h5>
            <h6>{submittedName}</h6>
            <h6>{submittedEmail}</h6>
          </div>
        }

        <form onSubmit={handleAddTask}>
          <input type="text" placeholder='Add Task' value={addTask} onChange={(e) => setAddTask(e.target.value)} />
          <button type='submit'>Add task</button>
        </form>

        <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
          {submittedAddTask.map((item, index) => (
            <li key={index} style={{ padding: '5px 0', fontSize: '18px' }}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>

        {quizFinished ? (
          <div>
            <h3>Quiz Finished! 🎉</h3>
            <p>
              Your score: <strong>{score}</strong> out of {Quiz.length}
            </p>
            <button onClick={() => window.location.reload()}>Restart Quiz</button>
          </div>
        ) : (
          <div>
            <h3>{Quiz[currentQuestion].question}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {Quiz[currentQuestion].options.map((option, index) => (
                <li key={index} style={{ padding: "10px" }}>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                  {option}
                </li>
              ))}
            </ul>
            <button
              onClick={handleAnswerSubmit}
              disabled={!selectedAnswer}
            >
              {currentQuestion === Quiz.length - 1 ? "Finish Quiz" : "Next"}
            </button>
          </div>
        )}

        <div>
          <h2>🛒 Shopping Cart</h2>

          <h3>Product List</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name - product.price}
                <button onClick={() => addToCart(product)}>Add To Cart</button>
              </li>
            ))}
          </ul>

          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p>Your Cart is empty</p>
          ) :
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                  <button onClick={() => increasedQuantity(item.id)}>➕</button>
                  <button onClick={() => decreasedQuantity(item.id)}>➖</button>
                  <button onClick={() => removeItem(item.id)}>❌ Remove</button>
                </li>
              ))}
            </ul>
          }
          <h3>Total Price : {totalPrice}</h3>
        </div>

      </div>
    </div>
  );
}
