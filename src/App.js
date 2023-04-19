import React from 'react'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'

const App = () => {
  const users = [
    {
      name: "Джонни",
      lastName: "Депп",
      age: 40,
      id: 1,
    },
    {
      name: "Уилл",
      lastName: "Смит",
      age: 35,
      id: 2,
    },
    {
      name: "Джейсон",
      lastName: "Стейтем",
      age: 40,
      id: 3,
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  )
}

export default App