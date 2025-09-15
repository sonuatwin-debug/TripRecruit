
export const Flag = ({ country, className }: { country: string, className?: string }) => {
  const flags: { [key: string]: React.ReactNode } = {
    菲律宾: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#0038a8" d="M0 0h1200v300H0z"/><path fill="#ce1126" d="M0 300h1200v300H0z"/><path fill="#fff" d="m0 0 520 300L0 600z"/><path fill="#fcd116" d="m188 300-40-122-108 84 12-129-92 100 40-122-72 112 61-118-49 121 72-112-40 122 83-108-12 129 100-92-61 118 112-72-84 108 129-12z"/><circle cx="160" cy="300" r="70" fill="#fcd116"/></svg>
    ),
    迪拜: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#00732f" d="M0 0h1200v200H0z"/><path fill="#fff" d="M0 200h1200v200H0z"/><path fill="#000" d="M0 400h1200v200H0z"/><path fill="red" d="M0 0h300v600H0z"/></svg>
    ),
    泰国: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#A51931" d="M0 0h1200v600H0z"/><path fill="#fff" d="M0 100h1200v400H0z"/><path fill="#2D2A4A" d="M0 200h1200v200H0z"/></svg>
    ),
    柬埔寨: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}><path fill="#032ea1" d="M0 0h900v600H0z"/><path fill="#e00025" d="M0 150h900v300H0z"/><path fill="#fff" d="m450 216-90 60v48h180v-48zm-150-12h300v12H300zm-30 132h360v12H270z" stroke="#000" strokeWidth="3"/><path fill="#fff" d="m390 276 30 24v12h-30zm-90 0h30v24h-30zm45 30h30v12h-30zm-30-48h90v12h-90z"/></svg>
    ),
    日本: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}><path fill="#fff" d="M0 0h900v600H0z"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>
    ),
    马来西亚: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#fff" d="M0 0h1200v600H0z"/><path stroke="#c00" strokeWidth="43" d="M0 64.5h1200M0 150.5h1200M0 236.5h1200M0 322.5h1200M0 408.5h1200M0 494.5h1200M0 580.5h1200"/><path fill="#003566" d="M0 0h600v387H0z"/><path fill="#fecb00" d="M420 193.5a133 133 0 1 0-262-52 159 159 0 1 1 200 200 133 133 0 0 0 62-148z"/><path fill="#fecb00" d="m287 40 10 65 59-32-32 59 65 10-54 40 40 54-65-10-10 65-40-54-54 40 10-65-59 32 32-59-65-10 54-40-40-54 65 10z"/></svg>
    ),
    香港: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}><path fill="#de2910" d="M0 0h900v600H0z"/><path fill="#fff" d="m450 300-112-35 83 91-91 83 35-112-70 100 100-70-35 112 91-83-83-91 112 35-100 70z"/><circle cx="450" cy="300" r="60" fill="#de2910"/><path fill="#fff" d="m450 300-37-12 28 30-30 28 12-37-23 33 33-23-12 37 30-28-28-30 37 12-33 23z"/></svg>
    ),
    斯里兰卡: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#FFB81C" d="M0 0h1200v600H0z"/><path fill="#00534E" d="M0 0h150v600H0z"/><path fill="#F26422" d="M150 0h150v600H150z"/><g fill="#8D1A38"><path d="M350 50h800v500H350z"/><path d="M380 80h740v440H380z" fill="#FFB81C"/><path d="M1030 500c25 0 25-25 25-25V80c0-20-20-20-20-20h-5c-20 0-20 20-20 20v400s0 25 25 25zM430 100c-25 0-25 25-25 25v370c0 20 20 20 20 20h5c20 0 20-20 20-20V125s0-25-25-25z"/><path d="M905 300s-7-2-12 21c-5 23-11 41-11 41s-10-10-38-10-38 10-38 10l-11-41c-5-23-12-21-12-21s7 2 12-21c5-23 11-41 11-41s10 10 38 10 38-10 38-10l11 41c5 23 12 21 12 21z"/><path d="M750 320a100 100 0 0 0-20-60l-135 75a100 100 0 0 0-35-15 100 100 0 0 0-10-30L450 300l90 10a100 100 0 0 0-10 100l-65 20 15 65a100 100 0 0 0 100 0l-5-100z"/></g></svg>
    ),
  };
  const flag = flags[country];
  if (!flag) return null;
  return flag;
};
