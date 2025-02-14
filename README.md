<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>📌 User Authentication API</h1>
<p>This project is a backend application built with <strong>Express.js</strong> and <strong>MongoDB</strong> that allows user registration, login, and searching users by username or email.</p>

<hr>

<h2>🚀 Features</h2>
<ul>
    <li><strong>User Registration:</strong> Register with validation</li>
    <li><strong>User Login:</strong> JWT-based authentication</li>
    <li><strong>Search Users:</strong> Search by username or email</li>
    <li><strong>Secure Password Handling:</strong> Hashed passwords using bcrypt</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>
<h3>Backend:</h3>
<ul>
    <li><strong>Node.js</strong> - Runtime Environment</li>
    <li><strong>Express.js</strong> - Web Framework</li>
    <li><strong>MongoDB (Mongoose)</strong> - Database</li>
    <li><strong>JWT Authentication</strong> - Secure login</li>
</ul>

<hr>

<h2>📌 Installation & Setup</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/S-Khan786/user-auth-app.git
cd user-auth-app</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<hr>

<h2>📜 API Endpoints</h2>

<h3>Authentication API</h3>
<ul>
    <li><code>POST /api/auth/register</code> - Register a new user</li>
    <li><code>POST /api/auth/login</code> - Login user and return JWT token</li>
</ul>

<h3>User Management API</h3>
<ul>
    <li><code>GET /api/users/search?query=username_or_email</code> - Search users</li>
</ul>

<hr>
    <footer>
    <p>&copy; 2025 <strong>Mohammad Sahil</strong>. All rights reserved.</p>
  </footer>
</body>
</html>
