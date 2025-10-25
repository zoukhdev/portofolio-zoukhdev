import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tnjujlgzipbxomxikksq.supabase.co'; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuanVqbGd6aXBieG9teGlra3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NjgwODQsImV4cCI6MjA3NDM0NDA4NH0.Vv8raSVDKyj4GtVj920EdJQf4LzxVsL5LnJ5EhQ3CnA';

// Create a mock Supabase client if credentials are missing
let supabase;

if (!supabaseUrl || !supabaseKey || supabaseUrl === 'https://dummy.supabase.co' || supabaseUrl === 'undefined') {
  console.warn("Supabase credentials not configured. Using mock client for development.");
  
  // Create a comprehensive mock Supabase client with all required methods
  supabase = {
    from: (table) => ({
      select: () => ({
        order: () => {
          if (table === 'projects') {
            return Promise.resolve({ 
              data: [
                {
                  id: 1,
                  Title: "Photography Agency",
                  Description: "A stunning portfolio website featuring 3D animations and smooth interactions.",
                  Img: "/project-1.webp",
                  Link: "https://photography-agency.vercel.app/",
                  TechStack: ["React", "GSAP", "Three.js"],
                  Features: ["3D Animations", "Smooth Interactions", "Modern Design"]
                },
                {
                  id: 2,
                  Title: "Tech Start Pro Agency", 
                  Description: "An immersive gaming interface with real-time data visualization and 3D elements.",
                  Img: "/project-2.webp",
                  Link: "https://tech-start-pro-cyan.vercel.app/",
                  TechStack: ["Vue.js", "WebGL", "GSAP"],
                  Features: ["Real-time Data", "3D Elements", "Gaming Interface"]
                },
                {
                  id: 3,
                  Title: "E-commerce App",
                  Description: "A modern e-commerce solution with advanced animations and user experience.",
                  Img: "/project-3.png",
                  Link: "https://zoukhdev-ecommerce.netlify.app/",
                  TechStack: ["Flutter", "Dart"],
                  Features: ["Mobile App", "E-commerce", "Modern UI"]
                },
                {
                  id: 4,
                  Title: "Al Hijjra Tourisme",
                  Description: "A cutting-edge agency website with immersive 3D experiences and smooth animations.",
                  Img: "/project-4.webp",
                  Link: "https://tourism-agency2-kr3e.vercel.app/",
                  TechStack: ["Next.js", "Three.js", "GSAP"],
                  Features: ["3D Experiences", "Tourism Agency", "Immersive Design"]
                },
                {
                  id: 5,
                  Title: "E-Commerce Platform",
                  Description: "An innovative platform showcasing the latest in technology and design trends.",
                  Img: "/project-5.webp",
                  Link: "https://masterecomm.vercel.app/",
                  TechStack: ["React", "WebGL", "GSAP"],
                  Features: ["E-commerce", "WebGL", "Innovative Design"]
                },
                {
                  id: 6,
                  Title: "Digital Art Gallery",
                  Description: "A virtual gallery experience with interactive 3D art pieces and smooth navigation.",
                  Img: "/project-6.webp",
                  Link: "https://nova-taupe-psi.vercel.app/",
                  TechStack: ["Vue.js", "Three.js", "GSAP"],
                  Features: ["Virtual Gallery", "3D Art", "Interactive Experience"]
                }
              ], 
              error: null 
            });
          } else if (table === 'comments') {
            return Promise.resolve({ 
              data: [
                {
                  id: 1,
                  name: "John Doe",
                  comment: "Great portfolio! Love the design.",
                  is_pinned: true,
                  created_at: new Date().toISOString()
                },
                {
                  id: 2,
                  name: "Jane Smith", 
                  comment: "Amazing work! Very professional.",
                  is_pinned: false,
                  created_at: new Date().toISOString()
                }
              ], 
              error: null 
            });
          }
          return Promise.resolve({ data: [], error: null });
        }
      }),
      eq: (column, value) => ({
        order: () => {
          if (table === 'comments' || table === 'portfolio_comments') {
            return Promise.resolve({ 
              data: [
                {
                  id: 1,
                  user_name: "John Doe",
                  content: "Great portfolio! Love the design.",
                  is_pinned: column === 'is_pinned' && value === true,
                  created_at: new Date().toISOString()
                },
                {
                  id: 2,
                  user_name: "Jane Smith",
                  content: "Amazing work! Very professional.",
                  is_pinned: false,
                  created_at: new Date().toISOString()
                }
              ], 
              error: null 
            });
          }
          return Promise.resolve({ data: [], error: null });
        },
        single: () => {
          if (table === 'portfolio_comments' && column === 'is_pinned' && value === true) {
            return Promise.resolve({ 
              data: {
                id: 1,
                user_name: "John Doe",
                content: "Great portfolio! Love the design.",
                is_pinned: true,
                created_at: new Date().toISOString()
              }, 
              error: null 
            });
          }
          return Promise.resolve({ data: null, error: { code: 'PGRST116', message: 'No rows found' } });
        }
      }),
      insert: (data) => {
        return Promise.resolve({ 
          data: data, 
          error: null 
        });
      }
    }),
    channel: (name) => ({
      on: (event, options) => ({
        subscribe: () => {
          console.log(`Mock subscription to channel: ${name}, event: ${event}`);
          return { unsubscribe: () => console.log('Mock unsubscribe') };
        }
      })
    }),
    storage: {
      from: (bucket) => ({
        upload: (path, file) => Promise.resolve({ 
          data: { path: path }, 
          error: null 
        }),
        getPublicUrl: (path) => ({
          data: { publicUrl: `https://mock-storage.com/${path}` }
        })
      })
    }
  };
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export { supabase };
