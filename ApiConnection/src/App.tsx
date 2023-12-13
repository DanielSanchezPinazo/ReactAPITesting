// import { useState } from 'react'
import './App.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import React from 'react';
import { NavbarComponent } from './components/navbarComponent/navbar';
import { FilterComponent } from './components/filterComponent/filter';

function App() {
  // const [count, setCount] = useState<number>(0)

  return (
    <section>
      <section>
        <NavbarComponent />
        <div>
          <FilterComponent />
        </div>
      </section>
    </section>
  )
}

export default App
