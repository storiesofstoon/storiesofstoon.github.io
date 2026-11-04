// Stories of Stoon — archive page script
const episodes = [
 {title:'Flight 92',description:'A devastating crash changes everything.'},
 {title:'The Fire',description:'News of another tragedy reaches the trio.'},
 {title:'The Offering',description:'A secret ritual unfolds beneath the full moon.'},
 {title:'A Place to Stay',description:'Bug finds somewhere to stay.'},
 {title:'The Cemetery',description:'The graveyard news sparks a new idea.'},
 {title:'The Experiment',description:'A sinister attempt to raise the dead.'},
 {title:'Olde Books',description:'The friends visit a mysterious bookshop.'},
 {title:'Introductions',description:'Bug meets Blue’s uncle.'},
 {title:'More Tomes',description:'The cult demands a dangerous shortcut.'},
 {title:'The Museum',description:'A trip to the museum begins.'},
 {title:'The Missing Tome',description:'The disappearance raises the stakes.'},
 {title:'The Ancient Masters',description:'The cult prepares its next move.'}
].map((e,i)=>({...e,number:i+1,image:`images/comic-${String(i+1).padStart(2,'0')}.webp`,thumb:`images/thumb-${String(i+1).padStart(2,'0')}.webp`}));

const grid=document.getElementById('episode-grid');
grid.innerHTML=episodes.map((e,i)=>`<article class="episode"><a href="reader.html?page=${e.number}" aria-label="Read page ${e.number}: ${e.title}"><div class="thumb" style="background-image:url('${e.thumb}')"><strong>PAGE ${e.number}</strong></div></a><div class="episode-content"><h3>${e.title}</h3><p>${e.description}</p><a href="reader.html?page=${e.number}" class="text-link">READ PAGE →</a></div></article>`).join('');
document.getElementById('year').textContent=new Date().getFullYear();
