/* Small presentation helpers. No records, exports, agronomy or server writes. */
(() => {
  'use strict';
  const module = document.body.dataset.casurModule;
  // React modules retain ownership of their tables and their existing controls.
  if (!['produccion','insumos','tch','convertidor'].includes(module)) return;
  const seen = new WeakSet();
  const hash = s => { let n=0; for(const c of s)n=((n<<5)-n+c.charCodeAt(0))|0; return String(n); };
  function enhance() {
    document.querySelectorAll('table').forEach(table => {
      if(seen.has(table)) return;
      const header=table.tHead?.rows[table.tHead.rows.length-1];
      if(!header || header.cells.length<4 || [...header.cells].some(c=>c.colSpan!==1))return;
      seen.add(table);
      const labels=[...header.cells].map((c,i)=>c.textContent.trim()||`Columna ${i+1}`);
      const key='casur_ui_columns_v1:'+module+':'+hash(labels.join('|'));
      let hidden=[];try{hidden=JSON.parse(localStorage.getItem(key)||'[]').filter(i=>Number.isInteger(i)&&i>0&&i<labels.length)}catch{}
      if(hidden.length>=labels.length-1)hidden=[];
      const tools=document.createElement('div'); tools.className='casur-table-tools';
      const hint=document.createElement('span');hint.textContent='Tabla · columnas configurables';tools.append(hint);
      const details=document.createElement('details');const summary=document.createElement('summary');summary.textContent='Columnas';details.append(summary);
      const options=document.createElement('div');options.className='casur-column-options';
      const apply=()=>{
        [...table.rows].forEach(row=>{if(row.cells.length===labels.length && [...row.cells].every(c=>c.colSpan===1)) [...row.cells].forEach((c,i)=>c.classList.toggle('casur-column-hidden',hidden.includes(i)))});
        try{localStorage.setItem(key,JSON.stringify(hidden))}catch{}
      };
      labels.forEach((name,i)=>{const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.checked=!hidden.includes(i);input.disabled=i===0;
        input.addEventListener('change',()=>{hidden=input.checked?hidden.filter(x=>x!==i):[...hidden,i];apply()});label.append(input,document.createTextNode(name));options.append(label);
      });
      const reset=document.createElement('button');reset.type='button';reset.textContent='Mostrar todas';reset.addEventListener('click',()=>{hidden=[];options.querySelectorAll('input').forEach(i=>i.checked=true);apply()});options.append(reset);details.append(options);tools.append(details);
      table.parentElement.insertBefore(tools,table);
      apply();
    });
  }
  let timer;
  new MutationObserver(records=>{
    if(records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1&&(n.matches('table,tr')||n.querySelector('table,tr'))))){clearTimeout(timer);timer=setTimeout(enhance,80)}
  }).observe(document.body,{childList:true,subtree:true});
  enhance();
})();
