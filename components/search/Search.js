// components/Search.js
"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./style.css"
import { useRouter } from 'next/navigation'

export default function Search() {
  const router = useRouter()
  const [showInputs, setShowInputs] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const toggleInputs = () => {
    setShowInputs(prevShowInputs => !prevShowInputs)

  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }


  const handleSearch = () => {

    router.push(`/search/${searchQuery}`)

  }

  return (
    <div className="search-container">


      <div onClick={toggleInputs}      >
        <FaSearch className="search-icon" />

      </div>
      <div
        className={showInputs ? 'input-container active' : 'input-container'}

      >
        <input
          type="text"
          placeholder="Search..."


          value={searchQuery}
         onChange={handleInputChange}
        />
        <button

          onClick={handleSearch}

        >Go</button>
      </div>
    </div>
  );
};

