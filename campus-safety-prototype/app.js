const screens=[...document.querySelectorAll('.screen')];
const state={request:null,history:[],report:null};
function showScreen(name){screens.forEach(s=>s.classList.toggle('active',s.dataset.screen===name));window.scrollTo({top:0,behavior:'smooth'});if(name==='status')renderStatus();}
document.addEventListener('click',e=>{const t=e.target.closest('[data-target]');if(t)showScreen(t.dataset.target)});

const assistLocationSelect=document.getElementById('assistLocationSelect');
const manualAssistWrap=document.getElementById('manualAssistWrap');
assistLocationSelect.addEventListener('change',()=>manualAssistWrap.classList.toggle('hidden',assistLocationSelect.value!=='manual'));

function currentAssistLocation(){return assistLocationSelect.value==='manual'?document.getElementById('assistManualLocation').value.trim():assistLocationSelect.value;}
function makeRef(prefix='SAFE'){return `${prefix}-${Date.now().toString().slice(-6)}`;}
function now(){return new Date().toLocaleString();}

document.getElementById('assistForm').addEventListener('submit',e=>{
  e.preventDefault();
  const category=document.getElementById('assistCategory').value;
  const location=currentAssistLocation();
  const description=document.getElementById('assistDescription').value.trim();
  const error=document.getElementById('assistError');
  if(!category||!location){error.textContent='Please select an assistance category and provide a location before continuing.';return;}
  error.textContent='';
  document.getElementById('reviewCategory').textContent=category;
  document.getElementById('reviewLocation').textContent=location;
  document.getElementById('reviewDescription').textContent=description||'No description provided';
  state.request={category,location,description};
  showScreen('assist-review');
});

document.getElementById('confirmAssist').addEventListener('click',()=>{
  if(!state.request)return;
  const ref=makeRef();
  const timestamp=now();
  state.request={...state.request,ref,timestamp,status:'Submitted'};
  state.history=[`Submitted • ${timestamp}`];
  document.getElementById('confirmReference').textContent=ref;
  document.getElementById('confirmTime').textContent=timestamp;
  showScreen('confirmation');
});

document.getElementById('simulateFailure').addEventListener('click',()=>showScreen('fallback'));

function renderStatus(){
  const empty=document.getElementById('noRequestState');
  const panel=document.getElementById('requestState');
  if(!state.request||!state.request.ref){empty.classList.remove('hidden');panel.classList.add('hidden');return;}
  empty.classList.add('hidden');panel.classList.remove('hidden');
  document.getElementById('statusReference').textContent=state.request.ref;
  document.getElementById('statusCategory').textContent=state.request.category;
  document.getElementById('statusLocation').textContent=state.request.location;
  const sv=document.getElementById('statusValue');sv.textContent=state.request.status;sv.className='status '+(state.request.status==='Submitted'?'submitted':'review');
  document.getElementById('statusHistory').innerHTML=state.history.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('cancelRequest').disabled=state.request.status==='Cancelled';
}

document.getElementById('cancelRequest').addEventListener('click',()=>{
  if(!state.request)return;
  state.request.status='Cancelled';
  state.history.push(`Cancelled by requester • ${now()}`);
  renderStatus();
});

document.getElementById('reportForm').addEventListener('submit',e=>{
  e.preventDefault();
  const category=document.getElementById('reportCategory').value;
  const description=document.getElementById('reportDescription').value.trim();
  const location=document.getElementById('reportLocation').value.trim();
  const error=document.getElementById('reportError');
  if(!category||!description||!location){error.textContent='Please complete the category, description and location fields.';return;}
  error.textContent='';
  const ref=makeRef('INC');
  state.report={ref,category,description,location,evidence:document.getElementById('evidenceNote').value.trim(),restricted:document.getElementById('restrictedVisibility').checked,status:'Submitted'};
  document.getElementById('reportReference').textContent=ref;
  showScreen('report-confirmation');
});

document.getElementById('saveOfficerUpdate').addEventListener('click',()=>{
  document.getElementById('officerSaved').textContent='Simulated case update saved to the prototype.';
});

document.getElementById('largeTextToggle').addEventListener('change',e=>document.documentElement.classList.toggle('large-text',e.target.checked));
document.getElementById('motionToggle').addEventListener('change',e=>document.documentElement.classList.toggle('reduced-motion',e.target.checked));

showScreen('home');
