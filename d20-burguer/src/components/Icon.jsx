export default function Icon({ name }) {
  const paths = {
    sword: 'M7 17 17 7m0 0V4m0 3h-3M6 18l-2 2m4-4-2-2 2-2 2 2-2 2Z',
    map: 'M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2V6Zm5-2v14m6-12v14',
    clock: 'M12 7v5l3 2m7-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
    flame: 'M12 21c4 0 7-2.8 7-7 0-2.8-1.5-5.2-4-7.5.2 2-1 3.4-2.3 4.2.2-3.8-1.8-6.2-4.7-8.7.2 4-3 6.2-3 10.3C5 18 8 21 12 21Z',
    instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5-1h.01',
  }
  return <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d={paths[name]} /></svg>
}