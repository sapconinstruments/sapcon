import { FormEvent, useMemo, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'bot';
  text: string;
  showSupportLinks?: boolean;
};

type ChatStage = 'new' | 'greeted';

const COMPANY_PHONE = '+91-731-4855999';
const CONTACT_SECTION_LINK = '#contact';
const COMPANY_EMAIL = 'web@sapcon.in';
const COMPANY_ADDRESS = '131, Palshikar Colony, Indore, Madhya Pradesh 452007, India';

type Product = {
  name: string;
  code: string;
};

type Partner = {
  location: string;
  company: string;
  contactPerson?: string;
  email?: string;
  phone: string;
};

type ArticleItem = {
  title: string;
  category: 'News' | 'Exhibitions' | 'General' | 'Engineering Technology and Tools for Level Sensing';
  summary: string;
  author: string;
  date: string;
  readTime: string;
  keywords: string[];
};

const featuredProduct = {
  name: 'Orbit-Lite: Rotary Paddle Level Switch for Solids',
  code: 'RPL',
  specs: [
    'Input Power Supply: 230 V AC',
    'Application Temperature Range: up to 200° C',
    'Outputs: 1NO, 1NC 6Amp potential-free at 230 V AC',
    'Switching: Single-point switching',
    'Suitable for Bulk Density >= 0.5 g/cm3',
    'Probe Length Range: 100mm - 1000mm',
    'Foldable paddle mechanism for ease of installation',
    'Wetted Parts: Aluminum, SS-316, FKM / NBR',
  ],
};

const products: Product[] = [
  { name: 'Orbit-Lite: Rotary Paddle Level Switch for Solids', code: 'RPL' },
  { name: 'Float & Board Type Level Indicator', code: 'MECH_FAB' },
  { name: 'Vibrosonde: Vibrating Rod Type Level Sensor for Solids', code: 'VS' },
  { name: 'Vital- Vibrating Fork Level Switch for Solids', code: 'VITAL' },
  { name: 'Elixir- Tuning Fork Level Switch for Liquids', code: 'ELIXIR' },
  { name: 'Vital-T: Tuning Fork Level Sensor for Solids', code: 'VT' },
  { name: 'Elixir-T-Uni: Tuning Fork Level Sensor for Liquids', code: 'ETU' },
  { name: 'Coat-Endure: RF-Admittance Level Switch for Sticky Solids and Liquids', code: 'CE' },
  { name: 'Casper: Capacitive Level Sensor', code: 'CPR' },
  { name: 'Capvel-FUEL: Level Sensor/Transmitter for remote tracking of fuel', code: 'VAT' },
];

const keyApplications = [
  'Cement Manufacturing',
  'Chemical Plants',
  'Water Treatment',
  'Packaging Machines',
  'Fuel Monitoring Systems',
  'Pharmaceuticals',
  'Steel & Metallurgy',
  'Food and Beverage',
  'Grain Handling',
  'Dairy Processing',
];

const globalPartners: Partner[] = [
  {
    location: 'Dubai',
    company: 'Aimtrade International (F.Z.E)',
    email: 'sales@aimtrade-intl.com',
    phone: '+971553506133',
  },
  {
    location: 'Thailand',
    company: 'Calor Tech Solutions Co. Ltd.',
    contactPerson: 'Mr. Shailesh Shinde',
    email: 'shailesh.shinde@calor.co.th',
    phone: '+6626919933',
  },
  {
    location: 'Sri Lanka',
    company: 'Hemsons International (Pvt) Limited',
    contactPerson: 'Mr. Amir Esufally',
    email: 'himasha@hemsons.lk',
    phone: '+94777351321 / +94772612336',
  },
  {
    location: 'Nepal',
    company: 'K P G International Pvt. Ltd.',
    contactPerson: 'Mr. Praveen Sharma',
    email: 'kpg.internationalpltd@gmail.com',
    phone: '+9779855019477',
  },
  {
    location: 'Indonesia',
    company: 'PT. Multitek Mitra Sejati',
    contactPerson: 'Julianto',
    email: 'sales@multitekms.com',
    phone: '021-62307089 / 90',
  },
];

const indiaDealers: Partner[] = [
  { location: 'Ahmednagar', company: 'Heatcon System', contactPerson: 'Mr. Sanjay Walunj', email: 'info@heatconsystems.com', phone: '9822015260' },
  { location: 'Nagpur', company: 'AV Engineers', contactPerson: 'Mr. Atul Lanjewar', email: 'aveng_nag@yahoo.co.in', phone: '9822203891' },
  { location: 'Pune', company: 'Merit Enterprises', contactPerson: 'Mr. Rohan Mehta', email: 'sapconpune@yahoo.co.in', phone: '9823873848' },
  { location: 'Mumbai', company: 'Contech Engineers', contactPerson: 'Mr. Yogesh Joshi', email: 'yogesh@contechengineers.com', phone: '9324612687' },
  { location: 'Delhi', company: 'Technocomm Engineers', contactPerson: 'Mr. Aditya Godbole', email: 'sales@technocomm.co.in', phone: '9811017040' },
  { location: 'Bangalore', company: 'Pentagon Systems & Automation', contactPerson: 'Mr. Sudhir Mirasker', email: 'sudhir@pentagonsystems.in', phone: '9448053714' },
  { location: 'Hyderabad', company: 'Vinayak Automation', contactPerson: 'Mr. Manmohan Mogalgiddi', email: 'sales1.vinayakautomation@gmail.com', phone: '9000789305' },
  { location: 'Vadodara', company: 'Dynacraft Inc.', contactPerson: 'Mr. BK Puri', email: 'dynainc1@gmail.com', phone: '9825060678' },
  { location: 'Chennai', company: 'Sophi Controls', contactPerson: 'Mr. KV Giretharan', email: 'sophicontrols@yahoo.co.in', phone: '9003040160' },
  { location: 'Kolkata', company: 'Roshar Corporation', contactPerson: 'Mr. Arup Bhattacharya', email: 'roshar.corporation@gmail.com', phone: '9831499998' },
];

const rndOverview = {
  foundedYear: 1983,
  annualInvestment: '10% of revenue',
  teamSize: '15 members',
  summary:
    'Sapcon R&D focuses on new product development, product upgrades, and quality/process improvements for level switches, level transmitters, and speed monitoring systems.',
};

const rndActivities = [
  'New Product Development',
  'Upgrading Products',
  'Quality and Process Improvements',
];

const rndExpertise = [
  'Analog and Digital Circuit Design',
  'PCB Design and Signal Inspection',
  'Mechanical Design with FEM-based validation',
  'Firmware Development for instrumentation devices',
  'Desktop and Mobile Apps for field support',
  'ERP-backed Process Improvement',
];

const articles: ArticleItem[] = [
  {
    title: "Sapcon's Liquid Fork Level Limit Switch Sensor is now ATEX certified",
    category: 'News',
    summary: 'Elixir is now ATEX certified for use in potentially explosive atmospheres and compliance with European safety directives.',
    author: 'Prajakta Deokar',
    date: 'January 10, 2026',
    readTime: '1 min read',
    keywords: ['atex', 'liquid fork', 'elixir', 'explosive atmosphere'],
  },
  {
    title: 'Sapcon Instruments at Food Expo 2023',
    category: 'Exhibitions',
    summary: 'Participation in ANUTEC-International FoodTec India Exhibition held 7th-9th September, 2023.',
    author: 'Bhushan Kharche',
    date: 'October 12, 2023',
    readTime: '2 min read',
    keywords: ['food expo', 'anutec', 'foodtec', 'exhibition'],
  },
  {
    title: 'Sapcon Instruments at Automation Expo 2023',
    category: 'Exhibitions',
    summary: 'Participation in Automation Expo 2023 at BEC Goregaon, Mumbai.',
    author: 'Ashwin Palshikar',
    date: 'October 6, 2023',
    readTime: '1 min read',
    keywords: ['automation expo', 'mumbai', 'bec', 'exhibition'],
  },
  {
    title: 'Sapcon Instruments is now an IPC Member',
    category: 'News',
    summary: 'Sapcon joined IPC, which develops electronics manufacturing standards and practices.',
    author: 'Dhananjay Palshikar',
    date: 'December 3, 2022',
    readTime: '1 min read',
    keywords: ['ipc', 'member', 'electronics manufacturing'],
  },
  {
    title: 'Sapcon Terminal',
    category: 'Engineering Technology and Tools for Level Sensing',
    summary: 'Announcement of Sapcon-Terminal, a cross-platform open-source tool for serial communication and logging.',
    author: 'Dhananjay Palshikar',
    date: 'April 15, 2022',
    readTime: '1 min read',
    keywords: ['sapcon terminal', 'open-source', 'serial', 'logging'],
  },
  {
    title: 'One of the most Compact Vibrating Fork ever',
    category: 'News',
    summary: 'Launch of a more compact vibrating fork with better amplitude suitable for hygienic applications.',
    author: 'Bhavana Rawat',
    date: 'January 28, 2022',
    readTime: '2 min read',
    keywords: ['compact vibrating fork', 'hygienic'],
  },
  {
    title: "Sapcon's RF Level Limit Switch is now Intrinsically safe!",
    category: 'News',
    summary: 'Coat-Endure and Casper Namur are certified for intrinsic safety in explosive atmosphere applications.',
    author: 'Bhavana Rawat',
    date: 'January 6, 2022',
    readTime: '1 min read',
    keywords: ['rf level', 'intrinsically safe', 'coat-endure', 'casper namur'],
  },
  {
    title: 'PMI testing for level sensors',
    category: 'News',
    summary: 'Commissioning of PMI-XRF for alloy detection from Al-Pb onwards.',
    author: 'Dhananjay Palshikar',
    date: 'September 18, 2021',
    readTime: '1 min read',
    keywords: ['pmi', 'xrf', 'alloy testing'],
  },
  {
    title: 'Vibration Testing Certification for Vibrating Fork Level Sensor',
    category: 'News',
    summary: 'Vibrating Fork Level Sensor passed IEC 60068-2-64 vibration test certification.',
    author: 'Megha Parolkar',
    date: 'June 17, 2021',
    readTime: '1 min read',
    keywords: ['vibration testing', 'iec 60068-2-64', 'certification'],
  },
  {
    title: 'New Launch : AS-Interface for Vibrating Fork Level Sensors',
    category: 'News',
    summary: 'Vibrating fork series made accessible with AS-Interface protocol.',
    author: 'Megha Parolkar',
    date: 'January 6, 2021',
    readTime: '1 min read',
    keywords: ['as-interface', 'vibrating fork', 'protocol'],
  },
  {
    title: "Sapcon's Liquid Fork Level Sensor is now Intrinsically safe!",
    category: 'News',
    summary: 'Elixir Namur with flameproof and weatherproof enclosure certified with intrinsic safety.',
    author: 'Megha Parolkar',
    date: 'December 23, 2020',
    readTime: '1 min read',
    keywords: ['liquid fork', 'intrinsically safe', 'elixir namur'],
  },
  {
    title: 'Explore: New Coat-Endure',
    category: 'News',
    summary: 'New Coat-Endure with bar display and additional features for industry advantages.',
    author: 'Megha Parolkar',
    date: 'October 22, 2020',
    readTime: '2 min read',
    keywords: ['coat-endure', 'bar display'],
  },
  {
    title: "New Product Launch : Casper - Capacitance Level Sensor",
    category: 'News',
    summary: 'Launch of Casper capacitance level sensor with two-point switching and sensitivity bar display.',
    author: 'Megha Parolkar',
    date: 'August 6, 2020',
    readTime: '2 min read',
    keywords: ['casper', 'capacitance level sensor', 'new product launch'],
  },
  {
    title: 'A new normal life at Sapcon Instruments',
    category: 'News',
    summary: 'Operations resumed with additional safety precautions during COVID-19.',
    author: 'Ashwin Palshikar',
    date: 'July 4, 2020',
    readTime: '1 min read',
    keywords: ['covid', 'operations', 'safety'],
  },
  {
    title: 'Manufacturing Resumes at Sapcon Instruments',
    category: 'News',
    summary: 'Manufacturing resumed with limited capacity under strict regulations.',
    author: 'Ashwin Palshikar',
    date: 'June 3, 2020',
    readTime: '1 min read',
    keywords: ['manufacturing resumes', 'lockdown'],
  },
  {
    title: "Sapcon's financial Contribution amid COVID-19 outbreak",
    category: 'News',
    summary: 'Contribution of Rs. 2,50,000 towards PM-CARES fund.',
    author: 'Megha Parolkar',
    date: 'March 31, 2020',
    readTime: '1 min read',
    keywords: ['covid', 'pm-cares', 'contribution'],
  },
  {
    title: 'Message for reduced operations during lockdown',
    category: 'News',
    summary: 'Communication of COVID-19 lockdown operational status.',
    author: 'Megha Parolkar',
    date: 'March 24, 2020',
    readTime: '1 min read',
    keywords: ['lockdown', 'reduced operations', 'covid status'],
  },
  {
    title: 'Promised Continuity of Generations and Ethos',
    category: 'General',
    summary: 'Reflection on 35+ years of committed relationship with customers in automation.',
    author: 'Ashwin Palshikar',
    date: 'March 5, 2020',
    readTime: '1 min read',
    keywords: ['generations', 'ethos', '35+ years'],
  },
  {
    title: 'Sapcon Instruments at Messe Dusseldorf Expo 2019',
    category: 'Exhibitions',
    summary: 'Participation in Messe Dusseldorf Expo at Pragati Maidan, New Delhi.',
    author: 'Megha Parolkar',
    date: 'December 24, 2019',
    readTime: '1 min read',
    keywords: ['messe dusseldorf', 'pragati maidan', 'new delhi', 'exhibition'],
  },
  {
    title: 'Sapcon Instruments at Dairy Expo 2019',
    category: 'Exhibitions',
    summary: 'Participation in Dairy Expo at Auto Cluster Exhibition Center, Pune.',
    author: 'Megha Parolkar',
    date: 'November 11, 2019',
    readTime: '1 min read',
    keywords: ['dairy expo', 'pune', 'exhibition'],
  },
];

const relatedKeywords = [
  'sapcon',
  'featured',
  'spec',
  'specs',
  'company',
  'product',
  'sensor',
  'level',
  'switch',
  'transmitter',
  'installation',
  'industry',
  'pricing',
  'quote',
  'contact',
  'phone',
  'email',
  'address',
  'certified',
  'iso',
  'peso',
  'team',
  'support',
  'service',
  'whatsapp',
  'dealer',
  'distributor',
  'partner',
  'orbit',
  'elixir',
  'vital',
  'casper',
  'coat-endure',
  'rpl',
  'mech_fab',
  'vital',
  'elixir',
  'etu',
  'ce',
  'cpr',
  'vat',
  'about',
  'mission',
  'vision',
  'experience',
  'application',
  'industry',
  'r&d',
  'research',
  'development',
  'firmware',
  'mechanical',
  'fem',
  'pcb',
  'emi',
  'emc',
  'process improvement',
  'erp',
  'new product development',
  'upgrading products',
  'quality',
  'apps',
  'desktop',
  'mobile',
  'linux',
  'article',
  'blog',
  'news',
  'exhibition',
  'atex',
  'ipc',
  'covid',
  'expo',
  'sapcon terminal',
  'pmi',
  'vibration testing',
  'as-interface',
];

const quickTags = [
  'Featured Specs',
  'Product List',
  'R&D Activities',
  'Latest News',
  'Dealer in Mumbai',
  'Contact Details',
];

function formatPartner(partner: Partner) {
  const who = partner.contactPerson ? `Contact: ${partner.contactPerson}\n` : '';
  const email = partner.email ? `Email: ${partner.email}\n` : '';
  return `${partner.location}\n${partner.company}\n${who}${email}Phone: ${partner.phone}`;
}

function findProductByQuery(query: string) {
  const normalized = query.toLowerCase();
  return products.find((product) => {
    const productName = product.name.toLowerCase();
    const firstToken = productName.split(':')[0];
    return normalized.includes(product.code.toLowerCase()) || normalized.includes(productName) || normalized.includes(firstToken);
  });
}

function findPartnerByLocation(query: string, list: Partner[]) {
  const normalized = query.toLowerCase();
  return list.find((item) => normalized.includes(item.location.toLowerCase()));
}

function findArticleByQuery(query: string) {
  const normalized = query.toLowerCase();
  return articles.find((article) => {
    if (normalized.includes(article.title.toLowerCase())) return true;
    return article.keywords.some((keyword) => normalized.includes(keyword.toLowerCase()));
  });
}

function isGreeting(query: string) {
  const q = query.toLowerCase().trim();
  return (
    q === 'hi' ||
    q === 'hello' ||
    q === 'hey' ||
    q.includes('good morning') ||
    q.includes('good afternoon') ||
    q.includes('good evening')
  );
}

function buildGreetingReply() {
  return 'Hello and greetings from Sapcon Instruments. I can help with products, featured specs, R&D, applications, article/news updates, and partner/dealer contacts. Please ask your question.';
}

function isCompanyRelated(query: string) {
  const normalized = query.toLowerCase();
  return relatedKeywords.some((keyword) => normalized.includes(keyword));
}

function buildCompanyReply(query: string) {
  const q = query.toLowerCase();

  if (q.includes('hello') || q.includes('hi')) {
    return 'Hello. I can help with Sapcon products, featured specs, applications, company details, and partner/dealer contacts by location.';
  }

  if (q.includes('featured') || q.includes('orbit-lite') || q.includes('rpl')) {
    return `Featured Product: ${featuredProduct.name}\nItem Code: ${featuredProduct.code}\n\n${featuredProduct.specs.join('\n')}`;
  }

  if (q.includes('r&d') || q.includes('research') || q.includes('development')) {
    return `R&D Overview:\n- Since: ${rndOverview.foundedYear}\n- Investment: ${rndOverview.annualInvestment}\n- Team: ${rndOverview.teamSize}\n\n${rndOverview.summary}`;
  }

  if (q.includes('r&d activit') || q.includes('activities') || q.includes('new product') || q.includes('upgrading products')) {
    return `R&D Activities:\n- ${rndActivities.join('\n- ')}`;
  }

  if (q.includes('r&d expertise') || q.includes('expertise') || q.includes('capabilities')) {
    return `R&D Expertise Areas:\n- ${rndExpertise.join('\n- ')}`;
  }

  if (q.includes('analog') || q.includes('digital') || q.includes('circuit') || q.includes('pcb') || q.includes('emi') || q.includes('emc') || q.includes('oscilloscope')) {
    return 'R&D has in-house analog/digital circuit and PCB design capabilities, supported by signal analysis tools and experience with EMI/EMC and intrinsic safety certifications.';
  }

  if (q.includes('mechanical') || q.includes('fem') || q.includes('assembly') || q.includes('bom') || q.includes('prototype')) {
    return 'Mechanical R&D includes prototyping support, FEM-based design validation, 1000+ maintained part designs, and approximately 400K assemblies under management.';
  }

  if (q.includes('firmware') || q.includes('micro-controller') || q.includes('microcontroller')) {
    return 'Sapcon has shipped firmware-enabled instrumentation for about 25 years, with focus on reliable implementation, portability, modular architecture, and faster time-to-market.';
  }

  if (q.includes('desktop') || q.includes('mobile app') || q.includes('app support') || q.includes('gnu/linux') || q.includes('linux')) {
    return 'Sapcon develops cross-platform desktop and mobile apps for field configuration and real-time remote support across common operating systems including GNU/Linux and smartphones.';
  }

  if (q.includes('process improvement') || q.includes('erp') || q.includes('constraints') || q.includes('quality and fast deliveries')) {
    return 'Process improvements at Sapcon focus on quality, speed, and scalability. The ERP implementation is referenced as a success story by ERPNext customer case studies.';
  }

  if (q.includes('r&d team') || q.includes('research team') || q.includes('people in r&d')) {
    return `R&D People: ${rndOverview.teamSize} team with interdisciplinary reviews and customer-feedback-driven planning, including graduates from institutions such as Columbia University, RGPV, DAVV, and Virginia Tech.`;
  }

  if ((q.includes('latest') || q.includes('recent')) && (q.includes('news') || q.includes('blog') || q.includes('article'))) {
    const latest = articles.slice(0, 5).map((item) => `- ${item.title} (${item.date})`).join('\n');
    return `Latest updates:\n${latest}`;
  }

  if (q.includes('exhibition') || q.includes('expo')) {
    const exhibitionPosts = articles
      .filter((item) => item.category === 'Exhibitions')
      .slice(0, 5)
      .map((item) => `- ${item.title} (${item.date})`)
      .join('\n');
    return `Exhibition highlights:\n${exhibitionPosts}`;
  }

  if (q.includes('news') || q.includes('blog') || q.includes('article')) {
    const matchedArticle = findArticleByQuery(q);
    if (matchedArticle) {
      return `${matchedArticle.title}\nCategory: ${matchedArticle.category}\nAuthor: ${matchedArticle.author}\nDate: ${matchedArticle.date} | ${matchedArticle.readTime}\n\n${matchedArticle.summary}`;
    }
    const categories = Array.from(new Set(articles.map((item) => item.category))).join(', ');
    return `I can help with Sapcon articles by topic. Available categories: ${categories}. Ask about ATEX, IPC, exhibitions, COVID updates, Sapcon Terminal, or product launch news.`;
  }

  const product = findProductByQuery(q);
  if (product) {
    return `${product.name}\nItem Code: ${product.code}\nCategory: Product Templates\n\nFor full details, open the View All Products section.`;
  }

  if ((q.includes('product') && q.includes('all')) || q.includes('product list')) {
    const list = products.map((product) => `- ${product.name} (${product.code})`).join('\n');
    return `Sapcon Product List:\n${list}`;
  }

  if (q.includes('product') || q.includes('sensor') || q.includes('level')) {
    return 'Sapcon offers level switches, level transmitters, speed monitoring and flow solutions, including rotary paddle, vibrating fork/rod, capacitive, and RF-admittance technologies.';
  }

  if (q.includes('industry') || q.includes('application')) {
    return `Key application industries include:\n- ${keyApplications.join('\n- ')}`;
  }

  if (q.includes('cert') || q.includes('iso') || q.includes('peso')) {
    return 'Sapcon highlights ISO 9001:2015 and PESO-related credentials on the website. For compliance documents, please contact the team directly.';
  }

  if (q.includes('about') || q.includes('company profile') || q.includes('vision') || q.includes('mission') || q.includes('experience')) {
    return 'Sapcon is a 40+ year old Indian manufacturer in process control instrumentation with 90,000+ successful installations, 8,000+ clients, and exports to 90+ countries.';
  }

  if (q.includes('partner') || q.includes('global')) {
    const partner = findPartnerByLocation(q, globalPartners);
    if (partner) {
      return `Global Partner Details:\n${formatPartner(partner)}`;
    }
    const locations = globalPartners.map((item) => item.location).join(', ');
    return `Global partner locations available: ${locations}. Ask with a location name for exact contact details.`;
  }

  if (q.includes('dealer') || q.includes('distributor') || q.includes('india')) {
    const dealer = findPartnerByLocation(q, indiaDealers);
    if (dealer) {
      return `India Distributor Details:\n${formatPartner(dealer)}`;
    }
    const locations = indiaDealers.map((item) => item.location).join(', ');
    return `India distributor locations available: ${locations}. Ask with a city name for exact contact details.`;
  }

  if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('email')) {
    return `Phone: ${COMPANY_PHONE}\nEmail: ${COMPANY_EMAIL}\nAddress: ${COMPANY_ADDRESS}\n\nYou can also use the Get In Touch form on this page.`;
  }

  if (q.includes('team') || q.includes('founder') || q.includes('director')) {
    return 'You can check the Team section for leadership details, including founder and business development leadership information.';
  }

  return 'I can help with Sapcon-related queries about products, industries, team, certifications, or contact details. Ask me a specific company question.';
}

export default function CompanyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chatStage, setChatStage] = useState<ChatStage>('new');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'bot',
      text: 'Hi, I am the Sapcon Assistant. Ask about products, featured specs, applications, company profile, or dealer and partner contacts by location.',
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const processUserQuery = (rawQuery: string) => {
    const trimmed = rawQuery.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = { role: 'user', text: trimmed };

    let botMessage: ChatMessage;
    const greetedInput = isGreeting(trimmed);

    if (chatStage === 'new' && greetedInput) {
      botMessage = { role: 'bot', text: buildGreetingReply() };
      setChatStage('greeted');
    } else {
      if (chatStage === 'new') {
        setChatStage('greeted');
      }

      const related = isCompanyRelated(trimmed);
      botMessage = related
        ? { role: 'bot', text: buildCompanyReply(trimmed) }
        : {
            role: 'bot',
            text: 'I can help with Sapcon details. Try asking like: "featured product specs", "R&D activities", "latest news", "dealer in Mumbai", or "product list".',
          };
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    processUserQuery(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[120]">
      {isOpen ? (
        <div className="w-[92vw] max-w-sm rounded-2xl border border-white/15 bg-[#0A0F2C]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A6CF7] to-[#06B6D4] flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Sapcon Assistant</div>
                <div className="text-gray-400 text-xs">Company help chatbot</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="Close chatbot"
            >
              <X size={16} />
            </button>
          </div>

          <div className="h-80 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((message, idx) => (
              <div
                key={`${message.role}-${idx}`}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-[#4A6CF7] to-[#06B6D4] text-white'
                      : 'bg-white/10 text-gray-100 border border-white/10'
                  }`}
                >
                  <div>{message.text}</div>
                  {message.showSupportLinks && (
                    <div className="mt-2 flex flex-col gap-1 text-xs">
                      <a href="tel:+917314855999" className="text-[#8DE3FF] hover:text-white transition-colors">
                        Call: {COMPANY_PHONE}
                      </a>
                      <a href={CONTACT_SECTION_LINK} className="text-[#8DE3FF] hover:text-white transition-colors">
                        Open Get In Touch form
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 pb-2">
            <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Quick Tags</div>
            <div className="flex flex-wrap gap-2">
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => processUserQuery(tag)}
                  className="text-xs px-2.5 py-1.5 rounded-full border border-[#4A6CF7]/40 bg-[#4A6CF7]/15 text-[#BFE8FF] hover:bg-[#4A6CF7]/25 hover:border-[#06B6D4] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Sapcon products or support..."
              className="flex-1 rounded-xl bg-white/10 border border-white/10 text-white text-sm px-3 py-2.5 outline-none focus:border-[#4A6CF7]"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A6CF7] to-[#06B6D4] text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="whatsapp-glow w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
          aria-label="Open Sapcon assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
