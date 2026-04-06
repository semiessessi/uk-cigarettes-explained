(function(){
  const data=[
    {label:'Benson & Hedges',value:19.4,color:'#d4943a'},
    {label:'Lambert & Butler',value:11.0,color:'#7a8b6e'},
    {label:'Players / JPS',value:9.9,color:'#5a7a9b'},
    {label:'Sterling',value:8.4,color:'#c44b2b'},
    {label:'Marlboro',value:6.0,color:'#b8374a'},
    {label:'Sovereign',value:6.0,color:'#8b6914'},
    {label:'Richmond',value:5.5,color:'#3a5ba0'},
    {label:'Mayfair',value:4.3,color:'#2b6b4f'},
    {label:'Silk Cut',value:3.5,color:'#8855aa'},
    {label:'Pall Mall',value:3.0,color:'#d48a3a'},
    {label:'Others',value:23.0,color:'#c0b8ad'}
  ];
  const svg=document.querySelector('.pie-svg');
  const legend=document.getElementById('chartLegend');
  const cx=200,cy=200,r=160;
  let cum=-90;
  data.forEach(d=>{
    const a=d.value/100*360;
    const s=cum*Math.PI/180, e=(cum+a)*Math.PI/180;
    const x1=cx+r*Math.cos(s),y1=cy+r*Math.sin(s);
    const x2=cx+r*Math.cos(e),y2=cy+r*Math.sin(e);
    const p=document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d',`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${a>180?1:0} 1 ${x2},${y2} Z`);
    p.setAttribute('fill',d.color);p.setAttribute('stroke','#f5f0eb');p.setAttribute('stroke-width','2.5');
    p.style.cssText='transition:transform .2s;transform-origin:200px 200px;cursor:pointer';
    p.addEventListener('mouseenter',()=>p.style.transform='scale(1.05)');
    p.addEventListener('mouseleave',()=>p.style.transform='scale(1)');
    svg.appendChild(p);
    if(d.value>=5){
      const m=(cum+a/2)*Math.PI/180,lr=r*.62;
      const t=document.createElementNS('http://www.w3.org/2000/svg','text');
      t.setAttribute('x',cx+lr*Math.cos(m));t.setAttribute('y',cy+lr*Math.sin(m));
      t.setAttribute('text-anchor','middle');t.setAttribute('dominant-baseline','central');
      t.setAttribute('fill','#fff');t.setAttribute('font-size','13');t.setAttribute('font-weight','700');
      t.setAttribute('font-family','DM Sans,sans-serif');t.setAttribute('pointer-events','none');
      t.textContent=d.value+'%';svg.appendChild(t);
    }
    cum+=a;
    const li=document.createElement('div');li.className='cl-item';
    li.innerHTML=`<span class="cl-dot" style="background:${d.color}"></span><span class="cl-label">${d.label}</span><span class="cl-val">${d.value}%</span>`;
    legend.appendChild(li);
  });
})();
