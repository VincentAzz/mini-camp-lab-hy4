const paths: Record<string, string> = {
  cliff: '<path d="M3 17l5-7 4 4 3-3 6 6"/><path d="M2 20h20"/><circle cx="17" cy="6" r="2"/>',
  forest: '<path d="M12 3l5 7h-3l4 6H6l4-6H7z"/><path d="M12 16v5"/>',
  wasteland: '<path d="M3 18h18"/><path d="M6 18V9l4-3 4 3v9"/><path d="M16 18v-5h4v5"/><path d="M9 12h2"/>',
  service: '<path d="M4 20V7h9v13"/><path d="M13 11h6l2 4v5"/><path d="M4 11h9"/><path d="M7 15h3"/>',
  'rv-c': '<path d="M3 16V9h11l4 3h3v4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M3 12h18"/>',
  'rv-a': '<rect x="2" y="6" width="20" height="11" rx="1.5"/><path d="M4 10h16M4 13h9"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>',
  trailer: '<path d="M2 15V9h7v6"/><path d="M10 11h9l3 3v2H10z"/><circle cx="5" cy="17" r="1.6"/><circle cx="16" cy="17" r="1.6"/><path d="M9 12h1"/>',
  van: '<path d="M3 16V8a2 2 0 0 1 2-2h9l5 4v6"/><path d="M5 10h5M14 10h4"/><circle cx="7" cy="17" r="1.7"/><circle cx="17" cy="17" r="1.7"/>',
  overland: '<path d="M3 16V9h4l2-3h6l2 3h4v7"/><path d="M6 6h12"/><path d="M9 6V4h6v2"/><circle cx="7" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/>',
  dawn: '<path d="M2 17h20"/><path d="M12 4v3M5 7l2 2M19 7l-2 2"/><path d="M6 17a6 6 0 0 1 12 0"/>',
  day: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
  dusk: '<path d="M2 17h20"/><path d="M6 17a6 6 0 0 1 12 0"/><path d="M9 6h6M12 3v3"/>',
  night: '<path d="M20 15.5A8 8 0 0 1 8.5 4a8 8 0 1 0 11.5 11.5z"/><path d="M17 4v2M15 3l1 2"/>',
  clear: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',
  cloudy: '<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7z"/><circle cx="9" cy="7" r="2"/>',
  rain: '<path d="M7 15h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 8a3.5 3.5 0 0 0 1 7z"/><path d="M8 18l-1 3M13 18l-1 3M18 18l-1 3"/>',
  fog: '<path d="M3 8h18M5 12h14M3 16h18M7 20h10"/>',
  snow: '<path d="M12 3v18M4 7l16 10M20 7L4 17"/><path d="M9 5l3-2 3 2M9 19l3 2 3-2"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off': '<path d="M3 3l18 18"/><path d="M10 5.2A10 10 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3 3.6M6 6.5C3.5 8.3 2 12 2 12s4 7 10 7a10 10 0 0 0 3-.5"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  default: '<circle cx="12" cy="12" r="8"/>',
};

export function iconSvg(key: string, size = 17): string {
  const body = paths[key] ?? paths.default;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
