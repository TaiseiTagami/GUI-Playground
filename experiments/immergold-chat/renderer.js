/* Immergold chat design mock, based on immergold-voice/voice_app/main.py,
   panel.py and static/imc.css. No Hermes API calls or user data. */
(function () {
  'use strict';
  const defaults = {
    background:'#0c0e12', foreground:'#d7dae0', accent:'#ffb454',
    borderColor:'#232830', borderWidth:1, radius:0, opacity:100,
    padding:14, shadow:0, fontSize:14, lineColor:'#ffb454',
    lineWidth:2, showBorder:true, borderStyle:'solid',
    chatSidebarWidth:230, chatSidebarVisible:true, chatHeaderHeight:38,
    chatMessageGap:16, chatInputHeight:58, chatShowProcesses:true,
    chatShowStats:true, chatShowStatus:true, chatShowTimestamps:false,
    chatShowVoice:true, chatShowWake:true, chatShowMainChat:true,
    chatMono:true, chatAccentSecondary:'#5ccfe6', chatSidebarColor:'#12161c',
    chatInputColor:'#0c0e12'
  };
  const groups = [
    {name:'Immergold layout',fields:[
      ['chatSidebarWidth','Sidebar width','range',140,360,5,'px'],
      ['chatHeaderHeight','Header height','range',30,72,1,'px'],
      ['chatMessageGap','Message spacing','range',4,36,1,'px'],
      ['chatInputHeight','Composer height','range',40,120,2,'px'],
      ['chatSidebarVisible','Show sidebar','toggle'],
      ['chatShowStatus','Show status bar','toggle']
    ]},
    {name:'Chat content',fields:[
      ['chatShowProcesses','Show process steps','toggle'],
      ['chatShowStats','Show token statistics','toggle'],
      ['chatShowTimestamps','Show timestamps','toggle'],
      ['chatShowVoice','Show microphone','toggle'],
      ['chatShowWake','Show wakewords','toggle'],
      ['chatShowMainChat','Show main chat switch','toggle'],
      ['chatMono','Monospace typography','toggle']
    ]},
    {name:'Immergold palette',fields:[
      ['chatSidebarColor','Sidebar background','color'],
      ['chatInputColor','Composer background','color'],
      ['chatAccentSecondary','Tool highlight','color']
    ]}
  ];
  function render(instance,escape) {
    const c={...defaults,...instance.config};
    const safe=escape||String;
    const rootStyle=[
      '--im-bg:'+c.background,'--im-fg:'+c.foreground,'--im-accent:'+c.accent,
      '--im-line:'+c.borderColor,'--im-sidebar:'+c.chatSidebarColor,
      '--im-input:'+c.chatInputColor,'--im-tool:'+c.chatAccentSecondary,
      '--im-gap:'+c.chatMessageGap+'px','--im-head:'+c.chatHeaderHeight+'px',
      '--im-composer:'+c.chatInputHeight+'px','--im-sidewidth:'+c.chatSidebarWidth+'px',
      '--im-font:'+c.fontSize+'px','--im-radius:'+c.radius+'px',
      '--im-border:'+ (c.showBorder?c.borderWidth:0)+'px',
      'opacity:'+c.opacity/100,'box-shadow:0 16px '+(c.shadow*2)+'px rgba(0,0,0,.4)'
    ].join(';');
    const steps=c.chatShowProcesses?`<div class="im-steps"><div class="im-step"><span class="im-orange">✻</span> Thinking <span class="im-faded">✓</span></div><div class="im-step"><span class="im-tool">⚙</span> tool · calendar lookup <span class="im-faded">✓</span></div></div>`:'';
    const stats=c.chatShowStats?'<div class="im-stats">in 1.2k (800 cached) · out 256 · 2.4s · hermes-agent</div>':'';
    const sidebar=c.chatSidebarVisible?`<aside class="im-sidebar"><button type="button" class="im-new">＋ new chat</button><div class="im-search">⌕ &nbsp; search chats…</div><div class="im-chatitem active">▌ &nbsp; Design review</div><div class="im-chatitem"> &nbsp; Today's priorities</div><div class="im-chatitem"> &nbsp; Planning session</div><div class="im-chatitem"> &nbsp; Quick notes</div></aside>`:'';
    return `<section class="im-chat ${c.chatMono?'im-mono':''}" style="${rootStyle}" aria-label="Immergold chat mockup">
      <header class="im-header"><span class="im-brand">⚕ immergold</span><span class="im-tab active">chat</span><span class="im-tab">config</span><span class="im-tab">Debug</span><span class="im-spacer"></span><span class="im-gateway"><i></i> gateway</span>${c.chatShowMainChat?'<span class="im-toggle">◉ main chat</span>':''}${c.chatShowWake?'<span class="im-toggle">○ wakewords</span>':''}<span class="im-ready"><i></i> idle</span></header>
      <div class="im-body">${sidebar}<main class="im-main"><div class="im-transcript">
        <div class="im-ascii">██╗███╗   ███╗███╗   ███╗███████╗██████╗  ██████╗ ██╗     ██████╗<br>██║████╗ ████║████╗ ████║██╔════╝██╔══██╗██╔════╝ ██║     ██╔══██╗<br>██║██╔████╔██║██╔████╔██║█████╗  ██████╔╝██║  ███╗██║     ██║  ██║</div>
        <div class="im-subtitle">Hermes API · localhost · model hermes-agent</div>
        <div class="im-subtitle">Type a message, or /help for commands. Sending while the agent works steers it.</div>
        <div class="im-message im-user"><span class="im-prompt">❯</span><div>Can you help me plan my tasks for today?${c.chatShowTimestamps?'<small>16:24:08</small>':''}</div></div>
        <div class="im-message im-assistant"><div>${steps}<p>Sure. We can organize your tasks by priority and time available.</p><p>I'd start by identifying the three most important items and estimating how long each will take.</p>${stats}</div></div>
        <div class="im-message im-user"><span class="im-prompt">❯</span><div>Let's start with the highest priority.${c.chatShowTimestamps?'<small>16:24:14</small>':''}</div></div>
      </div><div class="im-composer"><span class="im-prompt">❯</span><span class="im-placeholder">message hermes… (enter to send, shift+enter for newline, /help)</span>${c.chatShowVoice?'<span class="im-mic">♩</span>':''}<span class="im-send">➤</span></div>${c.chatShowStatus?'<div class="im-status"><span>ready</span><span>hermes-agent @ 127.0.0.1:8642 &nbsp; ↓</span></div>':''}</main></div>
      </section>`;
  }
  window.ImmergoldChat={defaults,groups,render};
})();
