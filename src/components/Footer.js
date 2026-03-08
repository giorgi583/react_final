import React from 'react'
import '../css/footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="upper container">
<div className='footer-div'>
        <h3>Movies.ge</h3>
        <p>Discover and explore the world of cinema with us. We bring you a curated selection of movies that cater to every taste. Dive into our extensive collection and find your next favorite film today!</p>
      </div>
<div className='footer-div'>
        <h3>Quick link</h3>
        <a href="">privacy policy</a>
        <a href="">terms of service</a>
        <a href="">support</a>
        <a href="">FAQ</a>
      </div>
      <div className='footer-div'>
        <h3>Contact Us</h3>
        <p>Email: info@movies.ge</p>
        <p>Phone: +995 123 456 789</p>
        <p>Address: 123 Movie St, Tbilisi, Georgia</p>
      </div>
      <div className='footer-div'>
        <h3>Follow Us</h3>
        <a href=""><i class="fa-brands fa-instagram"></i>instagram</a>
        <a href=""><i class="fa-brands fa-facebook"></i>facebook</a>
        <a href=""><i class="fa-brands fa-twitter"></i>twitter</a>
      </div>
      </div>
      <div className="lower">
        <p>&copy; 2024 Movies.ge. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer