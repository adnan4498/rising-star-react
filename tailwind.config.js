/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'england-banner-image': "url('../public/images/inside-visa-images/england/england-1.jpg')", 
        'england-banner-image-2': "url('../public/images/inside-visa-images/england/england-2.jpg')", 
        'australia-banner-2': "url('../public/images/visa-banners/australia-banner-2.webp')", 
        'america-banner': "url('../public/images/visa-banners/america-banner.webp')", 


        'bahrain-banner': "url('../public/images/visa-banners/bahrain-banner.jpg')",
        'azerbaijan-banner': "url('../public/images/visa-banners/azerbaijan-banner.jpg')",
'canada-banner': "url('../public/images/visa-banners/canada-banner.webp')",
'china-banner': "url('../public/images/visa-banners/china-banner.jpg')",
'dubai-banner': "url('../public/images/visa-banners/dubai-banner.jpg')",
'germany-banner': "url('../public/images/visa-banners/germany-banner.avif')",
'indonesia-banner': "url('../public/images/visa-banners/indonesia-banner.jpg')",
'italy-banner': "url('../public/images/visa-banners/italy-banner.jpeg')",
'japan-banner': "url('../public/images/visa-banners/japan-banner.jpg')",
'malaysia-banner': "url('../public/images/visa-banners/malaysia-banner.webp')",
'myanmar-banner': "url('../public/images/visa-banners/myanmar-banner.webp')",
'oman-banner': "url('../public/images/visa-banners/oman-banner.jpg')",
'philippines-banner': "url('../public/images/visa-banners/philippines-banner.webp')",
'qatar-banner': "url('../public/images/visa-banners/qatar-banner.jpg')",
'russia-banner': "url('../public/images/visa-banners/russia-banner.avif')",
'saudi-banner': "url('../public/images/visa-banners/saudi-banner.webp')",
'singapore-banner': "url('../public/images/visa-banners/singapore-banner.webp')",
'south-africa-banner': "url('../public/images/visa-banners/south-africa-banner.jpeg')",
'tajikstan-banner': "url('../public/images/visa-banners/tajikstan-banner.jpg')",
'thailand-banner': "url('../public/images/visa-banners/thailand-banner.jpg')",
'turkey-banner': "url('../public/images/visa-banners/turkey-banner.webp')",
'zimbabwe-banner': "url('../public/images/visa-banners/zimbabwe-banner.jpg')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
