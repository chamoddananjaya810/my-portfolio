import { useEffect, useRef, useState } from 'react';
import { FaAndroid, FaCss3Alt, FaGlobe, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiFlutter, SiHibernate, SiLaravel, SiMysql, SiPhp, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import './App.css';
import profileImg from './assets/pp4 (1).jpg';
import Navbar from './components/Navbar';

// ---------------------------------------------------------------------
// AUTO IMAGE LOADER
// src/assets/project/<folder-name>/ ඇතුළට image file දාන්න විතරයි ඕන.
// Code එකේ මොකුත් edit කරන්න ඕන නෑ - මේ එකෙන්ම හොයාගන්නවා.
// File names 01.jpg, 02.jpg, 03.jpg විදිහට දාන්න (order එක ඒ අනුව).
// ---------------------------------------------------------------------
const allProjectImages = import.meta.glob('./assets/project/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});

// folderNames array එකක් දුන්නොත් ඒ ඔක්කොම folders වල images, folder order එකටම, sequence එකට එකතු කරලා දෙනවා
function getImagesForFolders(folderNames) {
  const names = Array.isArray(folderNames) ? folderNames : [folderNames];
  let combined = [];
  for (const folderName of names) {
    const imagesInFolder = Object.keys(allProjectImages)
      .filter((path) => path.includes(`/project/${folderName}/`))
      .sort() // file name අනුව (01, 02, 03...) sort වෙනවා
      .map((path) => allProjectImages[path]);
    combined = combined.concat(imagesInFolder);
  }
  return combined;
}

const skills = [
  { icon: FaHtml5, label: 'HTML', color: 'text-orange-500' },
  { icon: FaCss3Alt, label: 'CSS', color: 'text-blue-500' },
  { icon: FaJs, label: 'JavaScript', color: 'text-yellow-400' },
  { icon: FaJava, label: 'Java', color: 'text-red-500' },
  { icon: FaGlobe, label: 'Web', color: 'text-indigo-400' },
  { icon: SiSpringboot, label: 'Spring Boot', color: 'text-green-500' },
  { icon: FaAndroid, label: 'Android', color: 'text-green-400' },
  { icon: SiFlutter, label: 'Flutter', color: 'text-sky-400' },
  { icon: SiLaravel, label: 'Laravel', color: 'text-red-400' },
  { icon: SiHibernate, label: 'Hibernate', color: 'text-yellow-600' },
  { icon: FaReact, label: 'React', color: 'text-cyan-400' },
  { icon: SiMysql, label: 'MySQL', color: 'text-amber-400' },
  { icon: SiPhp, label: 'PHP', color: 'text-indigo-300' },
  { icon: SiFirebase, label: 'Firebase', color: 'text-yellow-500' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-300' },
];

// Project data - "folders" field එකට array එකක් දුන්නොත් ඒ folders ටිකේම images එකම carousel එකකට merge වෙනවා
const projects = [
   {
    id: 'aswanu-admin',
    title: 'Aswanu Admin (React Web & Management Panel)',
    folders: ['aswanu admin'], // src/assets/project/aswanu admin/ folder එකේ images (farmer/admin side)
    shortDesc: 'The administrative and seller-side web companion for Aswanu, empowering farmers and administrators to manage product listings, pricing, and live orders efficiently.',
    longDesc: 'Built using React as the web administration counterpart to the Aswanu ecosystem. This panel provides farmers and local producers with a robust interface to counter market price inflation by directly setting and managing their own fruit and vegetable prices. It allows sellers to track incoming orders in real-time, handle large harvests, and list surplus produce either for local buyers or for potential preservation and export channels.',
    features: [
      'Real-time product inventory and stock management.',
      'Dynamic pricing control to adapt to market fluctuations independently.',
      'Order tracking and management dashboard for farmers.',
      'Seamless integration with the mobile marketplace ecosystem.',
    ],
    vision: 'Designed to uplift local cultivators by giving them digital market control, turning agricultural surpluses into viable economic streams, and supporting national economic growth through structured local trade.',
    tech: ['React', 'Firebase'],
    liveLink: '',
    githubLink: '',
  },
 {
    id: 'aswanu',
    title: 'Aswanu (Mobile App - Buyer/Customer Side)',
    folders: ['aswanu'], // src/assets/project/aswanu/ folder එකේ images (buyer/customer side)
    shortDesc: 'An application designed to connect local farmers and buyers efficiently with map integrations, removing middlemen and ensuring fair pricing.',
    longDesc: 'Developed as an innovative solution for a viva project during a time of high fruit and vegetable price fluctuations and market instability. Aswanu bridges the gap between local farmers and consumers by enabling direct-to-consumer transactions within a 20km radius or island-wide using advanced Google Maps integration. The app empowers buyers to purchase fresh produce directly from growers, calculate dynamic shipping costs based on distance and vehicle selection, and choose between home delivery or direct pickup.',
    features: [
      'Direct farmer-to-buyer marketplace with no middlemen.',
      'Google Maps integration for distance calculation and vehicle-based shipping cost estimation.',
      'Location-based discovery to find fresh produce nearby.',
      'Direct ordering and flexible fulfillment options (delivery or self-pickup).',
    ],
    vision: 'Built to create self-employment opportunities for unemployed individuals through agriculture, manage national surplus production to prevent waste, and encourage exporting local yields to generate foreign exchange.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Java'],
    liveLink: '',
    githubLink: '',
  },
 

 
{
    id: 'smart railway admin',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smart railway admin'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },


  {
    id: 'smart railway user',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smart railway user'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },

   {
    id: 'moshop',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smart railway user'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
  {
    id: 'e-commerse',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
    {
    id: 'clothshop',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
    {
    id: 'friutsshop',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
     {
    id: 'friutsshop',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
    {
    id: 'SmartTrade',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
  {
    id: 'QuickChat-app',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
 {
    id: 'school_management_system',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },

   {
    id: 'ContactApp',
    title: 'SmartRetail (Cross-Platform POS & Repair Management System)',
    folders: ['smartretail'], // src/assets/project/smartretail/ folder එකේ images
    shortDesc: 'A cross-platform point-of-sale and repair management system with a robust backend built in Laravel, letting a shop run efficiently.',
    longDesc: 'SmartRetail was built for a client who needed a retail and repair-shop management system. Powered by a robust Laravel backend for secure data management and API handling, and built with Flutter for cross-platform support across Android, iOS, Windows, macOS, and Web, the app runs smoothly to manage store operations.',
    features: [
      'Robust backend architecture developed using Laravel for secure database management and API integration.',
      'Built with Flutter for true cross-platform support: Android, iOS, Windows, macOS, and Web.',
      'Runs efficiently with streamlined data synchronization.',
      'Role-based access control with four distinct user roles: Admin, Cashier, Repair, and Technician.',
      'Admin role with full access to manage users, inventory, pricing, and system settings.',
      'Cashier role to issue bills and process sales for items purchased from the shop.',
      'Repair role to log and manage incoming repair items such as mobile phones and laptops.',
      'Technician role to track, update, and complete assigned repair jobs.',
    ],
    vision: 'Designed to remove the barrier of expensive, multi-device retail setups. SmartRetail lets small shop owners run a complete point-of-sale and repair-tracking operation, making professional retail and repair-shop management accessible to businesses of any size.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },

];

function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const lightboxRef = useRef(null);

  // Fullscreen lightbox එකේදී Esc/arrow keys වැඩ කරන්න
  useEffect(() => {
    if (!isFullscreen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFullscreen, images.length]);

  // Image එක change වුනාම / fullscreen close වුනාම zoom reset වෙනවා
  useEffect(() => {
    setIsZoomed(false);
  }, [current, isFullscreen]);

  // Zoom toggle කරාම, හෝ image එක change වුනාම, scroll position එක top/left එකට reset කරනවා
  // (මේකෙන් "image එක යටට යනවා" වගේ පේන bug එක fix වෙනවා)
  useEffect(() => {
    if (lightboxRef.current) {
      lightboxRef.current.scrollTop = 0;
      lightboxRef.current.scrollLeft = 0;
    }
  }, [isZoomed, current]);

  // Fullscreen open වෙලා තියෙද්දී browser pinch/Ctrl+scroll zoom එක block කරනවා
  // (React onWheel prop එක passive නිසා preventDefault() ඇත්තටම වැඩ නොකරන්න පුළුවන්, ඒ නිසා මෙතන native listener එකක් add කරනවා)
  useEffect(() => {
    if (!isFullscreen) return;
    const blockZoom = (e) => {
      if (e.ctrlKey) e.preventDefault();
    };
    window.addEventListener('wheel', blockZoom, { passive: false });
    return () => window.removeEventListener('wheel', blockZoom);
  }, [isFullscreen]);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-56 text-sm text-gray-500 bg-gray-800 sm:h-72">
        No images added yet for {title}
      </div>
    );
  }

  const goPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const preventCopy = (e) => e.preventDefault(); // right-click menu block කරනවා

  return (
    <div className="relative">
      <div className="flex items-center justify-center w-full h-[400px] sm:h-[520px] bg-black">
        <img
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="object-contain w-full h-full select-none cursor-zoom-in"
          onClick={() => setIsFullscreen(true)}
          onContextMenu={preventCopy}
          draggable={false}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute flex items-center justify-center text-white transition -translate-y-1/2 rounded-full w-9 h-9 left-3 top-1/2 bg-black/50 hover:bg-black/70"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute flex items-center justify-center text-white transition -translate-y-1/2 rounded-full w-9 h-9 right-3 top-1/2 bg-black/50 hover:bg-black/70"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute flex gap-2 -translate-x-1/2 bottom-3 left-1/2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-indigo-400' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute px-2 py-1 text-xs text-white rounded-md top-3 left-3 bg-black/50">
            {current + 1} / {images.length}
          </div>
        </>
      )}

      {/* Fullscreen Lightbox - image click කරාම මුළු screen එකේම open වෙනවා, ආයෙත් click කළොත් zoom වෙනවා */}
      {isFullscreen && (
        <div
          ref={lightboxRef}
          className={`fixed inset-0 z-[200] bg-black overflow-auto flex justify-center ${isZoomed ? 'items-start py-10' : 'items-center'}`}
          style={{ touchAction: 'pan-x pan-y', overscrollBehavior: 'contain' }}
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="fixed z-10 flex items-center justify-center w-10 h-10 text-white transition rounded-full top-4 right-4 bg-white/10 hover:bg-white/20"
            aria-label="Close fullscreen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {isZoomed ? (
            // Zoomed in - image එක natural size එකට ළඟින්, scroll කරලා (drag/scroll) ඕන කොටස බලන්න පුළුවන්
            <img
              src={images[current]}
              alt={`${title} screenshot ${current + 1} fullscreen zoomed`}
              className="select-none cursor-zoom-out"
              style={{ width: 'auto', height: 'auto', maxWidth: 'none' }}
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
              onContextMenu={preventCopy}
              draggable={false}
            />
          ) : (
            <img
              src={images[current]}
              alt={`${title} screenshot ${current + 1} fullscreen`}
              className="object-contain max-w-full max-h-full select-none cursor-zoom-in"
              onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }}
              onContextMenu={preventCopy}
              draggable={false}
            />
          )}

          {!isZoomed && (
            <div className="fixed px-3 py-1 text-xs text-white -translate-x-1/2 rounded-md bottom-6 left-1/2 bg-white/10">
              Tap image to zoom
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="fixed flex items-center justify-center text-white transition -translate-y-1/2 rounded-full w-11 h-11 left-4 top-1/2 bg-white/10 hover:bg-white/20"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="fixed flex items-center justify-center text-white transition -translate-y-1/2 rounded-full w-11 h-11 right-4 top-1/2 bg-white/10 hover:bg-white/20"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="fixed px-3 py-1 text-sm text-white -translate-x-1/2 rounded-md bottom-6 left-1/2 bg-white/10">
                {current + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  const images = getImagesForFolders(project.folders);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute z-10 flex items-center justify-center w-8 h-8 text-gray-300 transition rounded-full top-4 right-4 bg-gray-900/80 hover:bg-gray-800 hover:text-white"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ImageCarousel images={images} title={project.title} />

        <div className="p-6 sm:p-8">
          <h3 className="mb-3 text-2xl font-bold text-indigo-400">{project.title}</h3>
          <p className="mb-5 leading-relaxed text-gray-300">{project.longDesc}</p>

          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold tracking-wide text-gray-400 uppercase">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-sm text-indigo-300 border rounded-full bg-indigo-500/10 border-indigo-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {(project.liveLink || project.githubLink) && (
            <div className="flex gap-4">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 font-medium text-gray-300 transition border border-gray-600 rounded-lg hover:border-indigo-400 hover:text-white">
                  View Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen text-white bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="w-full px-6 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center mx-auto text-center max-w-7xl">
          <img src={profileImg} alt="Chamod Dhananjaya" className="object-cover mb-6 border-4 rounded-full shadow-lg w-36 h-36 sm:w-44 sm:h-44 border-indigo-500/50 shadow-indigo-500/20" />
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-indigo-400">Chamod Dhananjaya</span>
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-300 sm:text-xl">
            Software Engineering Undergraduate | Backend & Web Developer passionate about building robust applications.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">View Projects</a>
            <a href="#contact" className="px-6 py-3 font-medium text-gray-300 transition border border-gray-600 rounded-lg hover:border-indigo-400 hover:text-white">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center">About Me</h2>
          <p className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed text-center text-gray-300">
            I am a Software Engineering undergraduate reading for my <span className="font-semibold text-indigo-400">BSc (Hons) in Software Engineering</span> at <span className="text-white">Birmingham City University</span> via the Java Institute.
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed text-center text-gray-400">
            I hold UK-awarded qualifications including a <span className="font-medium text-gray-200">Diploma</span> and a <span className="font-medium text-gray-200">Higher National Diploma (HND) in Software Engineering</span>. I specialize in backend development and enterprise web applications, focusing on scalable, clean, and efficient solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center">Skills</h2>
          <div className="grid grid-cols-3 gap-5 text-center sm:grid-cols-4 md:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-2 p-4 transition duration-300 bg-gray-900 border border-gray-800 rounded-lg hover:border-indigo-500 hover:-translate-y-1 group"
                >
                  <Icon className={`w-8 h-8 ${skill.color} transition duration-300 group-hover:scale-110`} />
                  <span className="text-xs font-medium text-gray-200 sm:text-sm">{skill.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section - image count automatic ව folder(s) එකෙන් load වෙනවා */}
      <section id="projects" className="w-full px-6 py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-2 text-3xl font-bold text-center">Projects</h2>
          <p className="mb-10 text-sm text-center text-gray-500">Click a project to see more details</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => {
              const images = getImagesForFolders(project.folders);
              const coverImage = images[0]; // combined list එකේ පළමු image එක card cover එකට
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="overflow-hidden text-left transition bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500/60 hover:-translate-y-1 group"
                >
                  <div className="h-48 overflow-hidden bg-gray-800">
                    {coverImage ? (
                      <img
                        src={coverImage}
                        alt={`${project.title} project screenshot`}
                        className="object-cover w-full h-48 transition duration-300 select-none group-hover:scale-105"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                        No image yet
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-indigo-400">{project.title}</h3>
                    <p className="text-gray-300">{project.shortDesc}</p>
                    <span className="inline-block mt-4 text-sm font-medium text-indigo-400 group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full px-6 py-20 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
          <p className="mb-6 text-gray-300">Feel free to reach out for collaborations or opportunities.</p>
          <a href="mailto:chamoddhananjaya76@gmail.com" className="inline-block px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">chamoddhananjaya76@gmail.com</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-sm text-center text-gray-500 border-t border-gray-900">
        © 2026 Chamod Dhananjaya. All rights reserved.
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;