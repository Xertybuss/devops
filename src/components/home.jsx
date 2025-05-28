import { Component } from "react"
import React from "react"
import "../style/home.css"

class Home extends React.Component {
    render() {
        return (
            <body>
            <nav class="navbar">
            <div class="logo">Cars Encyclopedia</div>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">About</a></li>
            </ul>
            </nav>

            <div class="main">
                <h1>Welcome to the Ultimate Cars Encyclopedia</h1>
            </div>

            <footer class="footer">
                &copy; 2025 Cars Encyclopedia. All rights reserved.
            </footer>
            </body>
        );
    }
}

export default Home;