import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: 'mobiles', route: '/Mobiles' },
    { name: 'computers', route: '/Computers' },
    { name: 'watches', route: '/Watches' },
    { name: 'kitchen', route: '/Kitchen' },
    { name: 'clothes', route: '/Clothes' }
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = categories.filter(category =>
        category.name.startsWith(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions(categories);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setSuggestions(categories);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100); // Delay to allow click event to register
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      navigateToCategory(searchTerm);
    }
  };

  const navigateToCategory = (term) => {
    const category = categories.find(cat => cat.name === term.toLowerCase());
    if (category) {
      navigate(category.route);
      setSearchTerm('');
      setSuggestions([]);
    } else {
      alert('Category not found');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigateToCategory(suggestion.name);
  };

  return (
    <>
      <div className='navSection'>
        <div className='title'>
          <h2>E-mart</h2>
        </div>
        <div className='search'>
          <input
            type='text'
            placeholder='search..'
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isFocused && suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.name}
                  className="suggestion-item"
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name.charAt(0).toUpperCase() + suggestion.name.slice(1)}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='user'>
          <div className='user-details'>
            SignIn/SignUp
          </div>
          <div className='cart'>
            Cart
          </div>
        </div>
      </div>
      <div className='subMenu'>
        <ul>
          {categories.map((category) => (
            <Link key={category.name} to={category.route}>
              <li>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
