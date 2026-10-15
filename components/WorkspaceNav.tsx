import React from 'react';
import { ResearchIcon } from './icons/ResearchIcons';
import { useI18n } from '../hooks/useI18n';

// monk 宇宙入口：点开是 universe.monk.party 下发的统一切换菜单（index.html 里引入的 switcher.js）
export function OrbitIcon({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3" fill="#F97316" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-25 12 12)"/></svg>;
}

export default function WorkspaceNav({ onSettings, onNews, onHistory, busy }: { busy: boolean; onSettings: () => void; onNews: () => void; onHistory: () => void }) {
  const { locale } = useI18n();
  const zh = locale === 'zh';
  const focusResearch = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const input = document.getElementById('news-input');
    input?.scrollIntoView({ block: 'center' });
    input?.focus({ preventScroll: true });
  };
  return <aside className="workspace-nav">
    <a className="workspace-brand" href="#news-input" onClick={focusResearch}><ResearchIcon name="brand"/><span>{zh ? '挖掘机' : 'Mastersgo'}<small>MASTERSGO</small></span></a>
    <nav aria-label={zh ? '研究导航' : 'Research navigation'}>
      <a className="nav-primary" href="#news-input" onClick={focusResearch}><ResearchIcon name="research"/>{zh ? '研究工作台' : 'Workspace'}</a>
      <button disabled={busy} onClick={onNews}><ResearchIcon name="radar"/>{zh ? '热点线索' : 'News signals'}</button>
      <a href={window.location.hostname === 'super-digger-linked-preview.mastergo.workers.dev' ? 'https://stocks-design-preview.mastergo.workers.dev' : 'https://stocks.mastersgo.cc'} target="_blank" rel="noopener noreferrer"><ResearchIcon name="map"/>{zh ? '产业图谱' : 'Industry map'}<span className="ml-auto text-xs">↗</span></a>
      <button disabled={busy} onClick={onHistory}><ResearchIcon name="history"/>{zh ? '研究记录' : 'Research history'}</button>
    </nav>
    <a className="nav-universe" data-monk-switcher href="https://universe.monk.party/" title={zh ? 'monk 宇宙：切换到其他服务' : 'monk universe: switch to another service'}><OrbitIcon/>{zh ? 'monk 宇宙' : 'monk universe'}</a>
    <button className="nav-settings" onClick={onSettings}><ResearchIcon name="settings"/>{zh ? '模型设置' : 'Model settings'}</button>
  </aside>;
}
