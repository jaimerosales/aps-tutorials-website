import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

let customNavbarInitialized = false;
function initializeCustomNavbar() {
  if (typeof window === 'undefined' || customNavbarInitialized) {
    return;
  }

  let script = document.createElement('script');
  script.src = 'https://developer.static.autodesk.com/forgeunified/releases/current/adskf.common.entry.js';
  script.dataset.resolveMenuUrl = 'https://aps.autodesk.com';
  script.dataset.resolveFooterUrl = 'https://aps.autodesk.com';
  document.head.appendChild(script);

  let style = document.createElement('style');
  style.innerText = `.navbar { padding: 0; height: 65px; }`;
  document.head.appendChild(style);

  customNavbarInitialized = true;
}

export default function Navbar() {
  const { siteConfig, siteMetadata } = useDocusaurusContext();

  const useDefaultNavbar = !!siteConfig.themeConfig.useDefaultNavbar;
  if (typeof window !== 'undefined' && !useDefaultNavbar) {
    initializeCustomNavbar();
  }

  return (
    <NavbarLayout>
      {useDefaultNavbar ? <NavbarContent /> : <div id="app-navbar" style={{width: '100%'}}></div>}
    </NavbarLayout>
  );
}
