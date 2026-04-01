export const SITE_NAME = 'The Cutting Bar'
export const SITE_TAGLINE = 'Quality haircuts. No appointments. Just walk in.'

export const CONTACT = {
  address: '125 Pound Way, Templars Square, Cowley, Oxford OX4 3XH',
  addressLines: [
    '125 Pound Way',
    'Templars Square',
    'Cowley',
    'Oxford OX4 3XH',
  ],
  phone: '07484 099100',
  phoneHref: 'tel:07484099100',
  email: 'hello@thecutttingbar.co.uk',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=125+Pound+Way+Oxford+OX4+3XH',
  googleMapsEmbed: 'https://maps.google.com/maps?q=125+Pound+Way+Oxford+OX4+3XH&output=embed',
  lat: 51.7379,
  lng: -1.2168,
}

export const HOURS: { day: string; hours: string }[] = [
  { day: 'Monday', hours: '9:00am – 5:30pm' },
  { day: 'Tuesday', hours: '9:00am – 5:30pm' },
  { day: 'Wednesday', hours: '9:00am – 5:30pm' },
  { day: 'Thursday', hours: '9:00am – 5:30pm' },
  { day: 'Friday', hours: '9:00am – 5:30pm' },
  { day: 'Saturday', hours: '8:30am – 5:30pm' },
  { day: 'Sunday', hours: '10:00am – 4:00pm' },
]

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Find Us', href: '/location' },
  { label: 'Contact', href: '/contact' },
]

export const LADIES_PRICES: { service: string; price: string }[] = [
  { service: 'Spray & Cut', price: '£26.50' },
  { service: 'Wash & Cut', price: '£28.50' },
  { service: 'Spray & Roughdry', price: '£29.50' },
  { service: 'Spray Cut & B\'Dry', price: '£36.00' },
  { service: 'Wash Cut & Blow Dry', price: '£39.00' },
  { service: 'Wash & Blow Dry', price: 'from £26.00' },
  { service: 'Complete Restyle', price: 'add £5.00' },
]

export const LADIES_OVER_65_PRICES: { service: string; price: string }[] = [
  { service: 'Spray & Cut', price: '£24.50' },
  { service: 'Wash & Cut', price: '£26.50' },
  { service: 'Spray Cut & B\'Dry', price: '£31.00' },
  { service: 'Spray & Roughdry', price: '£27.50' },
  { service: 'Wash Cut & Blow Dry', price: '£34.00' },
  { service: 'Wash & Blow Dry', price: 'from £24.50' },
  { service: 'Complete Restyle', price: 'add £5.00' },
]

export const GENTS_PRICES: { service: string; price: string }[] = [
  { service: 'Haircut', price: '£16.00' },
  { service: 'Same Grade', price: '£11.00' },
  { service: 'Two Grades', price: '£12.00' },
  { service: 'Over 65s (Mon–Fri)', price: '£13.00' },
]

export const CHILDREN_PRICES: { ageGroup: string; boys: string; girls: string }[] = [
  { ageGroup: '0–4', boys: '£11.50', girls: '£11.50' },
  { ageGroup: '5–9', boys: '£13.50', girls: '£15.50' },
  { ageGroup: '10–12', boys: '£14.50', girls: '£17.50' },
  { ageGroup: '13–16', boys: '£15.50', girls: '£19.50' },
]

export const TESTIMONIALS: { quote: string; name: string; location: string }[] = [
  {
    quote: 'I\'ve been coming here for over ten years and wouldn\'t go anywhere else. Always a great cut, always a warm welcome — and no booking needed, which suits me perfectly.',
    name: 'Sarah M.',
    location: 'Cowley, Oxford',
  },
  {
    quote: 'Best barber I\'ve found in Oxford. Reasonable prices, friendly staff and they always get it exactly right. The walk-in model is such a refreshing change.',
    name: 'James T.',
    location: 'Headington, Oxford',
  },
  {
    quote: 'I bring my whole family here — from my youngest (who\'s four) to my mum. Everyone leaves happy. It\'s a proper family salon in the truest sense.',
    name: 'Rachel K.',
    location: 'Rose Hill, Oxford',
  },
]

export const PRODUCTS: { brand: string; description: string; url: string }[] = [
  {
    brand: 'REF Stockholm',
    description: 'Swedish sustainable haircare made from plant-based, vegan ingredients. REF blends Scandinavian simplicity with professional performance — every product is free from sulphates, parabens and silicones.',
    url: 'https://www.ref.se',
  },
  {
    brand: 'Neal & Wolf',
    description: 'A professional luxury salon brand crafted in the UK. Neal & Wolf products are formulated with the finest ingredients and designed to deliver salon-quality results from the comfort of your own home.',
    url: 'https://www.nealandwolf.com',
  },
  {
    brand: 'Moroccanoil',
    description: 'World-renowned for argan oil-infused treatments that transform hair. Moroccanoil products deeply nourish, add shine, and tame frizz — trusted by stylists and clients across the globe for over a decade.',
    url: 'https://www.moroccanoil.com',
  },
]

export const TIMELINE: { year: string; event: string }[] = [
  { year: '2004', event: 'Founded in Newbury, Berkshire — a single salon with a clear idea: great haircuts, no appointments.' },
  { year: '2008', event: 'Expanded to four locations across Berkshire and Oxfordshire, growing by word of mouth alone.' },
  { year: '2012', event: 'Opened our Oxford flagship at Templars Square, Cowley — now one of our busiest salons.' },
  { year: '2016', event: 'Reached ten salons across the South of England, remaining proudly independent and family-run.' },
  { year: '2020', event: 'Navigated the pandemic and emerged stronger — our loyal clients returned the moment we reopened.' },
  { year: '2024', event: 'Celebrating 20 years in business with 21 locations and thousands of happy clients every week.' },
]

export const STATS: { value: string; suffix: string; label: string }[] = [
  { value: '20', suffix: '+', label: 'Years in business' },
  { value: '21', suffix: '', label: 'Salons across the South' },
  { value: '1000', suffix: 's', label: 'Happy clients weekly' },
]

export const VALUES: { title: string; description: string }[] = [
  {
    title: 'Quality',
    description: 'Every cut is carried out with care and precision by trained, experienced stylists. We hold ourselves to a high standard — and so do our clients.',
  },
  {
    title: 'Convenience',
    description: 'No apps. No booking systems. No waiting weeks for an appointment. We believe getting a great haircut should be simple — just walk in.',
  },
  {
    title: 'Family',
    description: 'We welcome everyone: children, teens, adults, seniors. We\'re a family business and we treat every client like one of our own.',
  },
]

export const SERVICES_PREVIEW: { category: string; startingFrom: string; description: string }[] = [
  {
    category: 'Ladies Hairdressing',
    startingFrom: '£26.50',
    description: 'Spray cuts, wash & cuts, blow dries and complete restyling — tailored to every hair type.',
  },
  {
    category: 'Gents Barbering',
    startingFrom: '£11.00',
    description: 'Precision cuts, grades and trims for every style and preference. Quick, skilled, no-fuss.',
  },
  {
    category: "Children's Cuts",
    startingFrom: '£11.50',
    description: 'Patient, friendly stylists who know how to work with kids of all ages — from toddlers to teens.',
  },
]
