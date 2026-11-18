(()=>{'use strict';
 const cfg=window.STOON_CONFIG||{};
 const year=document.getElementById('year'); year.textContent=String(new Date().getFullYear());
 const countdown=document.getElementById('countdown');
 let timer;
 if(cfg.releaseDate){const target=Date.parse(cfg.releaseDate);if(Number.isFinite(target)&&target>Date.now()){
  countdown.hidden=false;
  const render=()=>{const diff=Math.max(0,target-Date.now());const secs=Math.floor(diff/1000);const vals=[Math.floor(secs/86400),Math.floor(secs/3600)%24,Math.floor(secs/60)%60,secs%60];['days','hours','minutes','seconds'].forEach((id,i)=>document.getElementById(id).textContent=String(vals[i]).padStart(2,'0'));if(!diff){clearInterval(timer);countdown.hidden=true;}};
  render();timer=setInterval(render,1000);
 }}
 const form=document.getElementById('signup-form');const input=document.getElementById('email');const status=document.getElementById('form-status');const button=form.querySelector('button');
 form.addEventListener('submit',async e=>{e.preventDefault();status.classList.remove('success');status.textContent='';
  if(!input.checkValidity()){status.textContent='Enter a valid email address.';input.focus();return;}
  if(!/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(cfg.signupEndpoint||'')){status.textContent='Email signup is not active yet. Please check back soon.';return;}
  button.disabled=true;button.textContent='SENDING…';
  try{const response=await fetch(cfg.signupEndpoint,{method:'POST',body:JSON.stringify({email:input.value.trim(),source:'Stories of Stoon coming-soon page'}),headers:{'Content-Type':'application/json','Accept':'application/json'}});
   if(!response.ok)throw new Error('Provider rejected request');
   status.textContent='You’re on the list. Watch your inbox.';status.classList.add('success');form.reset();
  }catch(_){status.textContent='Could not submit right now. Please try again later.';}
  finally{button.disabled=false;button.innerHTML='NOTIFY ME <span aria-hidden="true">↗</span>';}
 });
 const links=[['amazon-link','amazonUrl'],['direct-link','directUrl']];let any=false;
 for(const [id,key] of links){const url=cfg[key];if(typeof url==='string'&&/^https:\/\//.test(url)){const a=document.getElementById(id);a.href=url;a.hidden=false;any=true;}}
 document.getElementById('purchase').hidden=!any;
})();
