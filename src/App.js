import Header from "./Header"
import Content from "./Content";
import Footer from "./Footer"
import React from "react";
import { useState } from "react";



function App() {

  const [item, setItem] = useState([
    {
      id: 1,
      checked: true,
      items: "lets play",
    }, {
      id: 2,
      checked: true,
      items: "eat",
    }, {
      id: 3,
      checked: false,
      items: "sleep"
    }
  ])

  const handleChecked = (id) => {
    const letitems = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } :
        item
    )
    setItem(letitems)

  }

  const handleDelete = (id) => {
    const listdelete = item.filter((item) =>
      item.id !== id)

    setItem(listdelete)
  }
  return (
    <div >

      <Header />
      <Content item={item}
        handleChecked={handleChecked}
        handleDelete={handleDelete} />
      <Footer length={item.length} />
    </div>
  );
}

export default App;
