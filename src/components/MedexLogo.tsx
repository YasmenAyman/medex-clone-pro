const MedexLogo = ({ className = "h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8C10 8 14 20 18 28C22 20 26 8 26 8" stroke="hsl(0, 72%, 51%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M30 8C30 8 34 20 38 28C42 20 46 8 46 8" stroke="hsl(0, 72%, 51%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="28" cy="12" r="4" fill="hsl(0, 72%, 51%)"/>
    <text x="52" y="24" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="18" fill="hsl(0, 0%, 13%)">MEDEX</text>
    <text x="52" y="36" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="7" fill="hsl(0, 0%, 45%)" letterSpacing="2">مـــيديـــكـــس</text>
  </svg>
);

export default MedexLogo;
