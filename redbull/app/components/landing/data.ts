import {
  Award,
  Bike,
  CalendarDays,
  Flag,
  Gauge,
  Globe2,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

export type Language = "mn" | "en";

export const languageOptions: Array<{
  code: Language;
  label: string;
  shortLabel: string;
  ariaLabel: string;
}> = [
  { code: "mn", label: "Монгол", shortLabel: "MN", ariaLabel: "Монгол хэл рүү солих" },
  { code: "en", label: "English", shortLabel: "EN", ariaLabel: "Switch to English" },
];

export const siteCopy = {
  mn: {
    brand: {
      initials: "BM",
      firstName: "Battulga",
      lastName: "Mendbileg",
      fullName: "Battulga Mendbileg",
      homeLabel: "Battulga Mendbileg нүүр хуудас",
    },
    header: {
      navAria: "Үндсэн цэс",
      partnerCta: "Хамтрах",
      openMenu: "Цэс нээх",
      closeMenu: "Цэс хаах",
      languageLabel: "Хэл сонгох",
    },
    navLinks: [
      { label: "Нүүр", href: "#hero" },
      { label: "Тухай", href: "#about" },
      { label: "Амжилт", href: "#achievements" },
      { label: "Зураг", href: "#gallery" },
      { label: "Холбоо", href: "#contact" },
    ],
    loading: {
      status: "Уралдааны шугам бэлдэж байна",
    },
    hero: {
      eyebrow: "Монголын MX элит",
      subtitle: "Мэргэжлийн мотокросс тамирчин",
      primaryCta: "Бичлэг үзэх",
      secondaryCta: "Замналыг үзэх",
      stats: [
        { label: "Аварга цол", value: "07", detail: "Улсын аваргын түрүү" },
        { label: "Унасан жил", value: "14", detail: "Уралдааны сахилга" },
        { label: "Түрүүлсэн гараа", value: "42", detail: "Индэрт шалгарсан амжилт" },
      ],
    },
    about: {
      imageAlt: "Battulga Mendbileg мотокросс тамирчны хөрөг",
      profileEyebrow: "Тамирчны танилцуулга",
      section: {
        eyebrow: "Тамирчны тухай",
        title: "Сахилга, хурд, Монгол газрын хөрснөөс бүтсэн.",
        description:
          "Battulga Mendbileg бол Монголын мотокроссын шинэ үеийн төлөөлөл: техник сайтай, айдасгүй, бэлтгэлдээ туйлын нягт. Түүний уралдааны хэв маяг урт өдрийн бэлтгэл, нарийн тохируулсан мотоцикл, өрсөлдөөний дарамтаар хурцлагддаг.",
      },
      storyCards: [
        {
          title: "Сахилга",
          description:
            "Уралдааны долоо хоног бүр давталтаас эхэлдэг: зам шинжих, гараа, тоормослох цэг, сэргэлт.",
          icon: ShieldCheck,
        },
        {
          title: "Хурд",
          description:
            "Mendbileg тохируулгатай хааз, хожуу тоормос, бартаатай хэсэг дээрх тайван удирдлагаар давхидаг.",
          icon: Gauge,
        },
        {
          title: "Монгол тэсвэр",
          description:
            "Өргөн тал, хатуу хөрсөн дээр өссөн түүний хэв маяг тэсвэр, зоригтой шийдлийг нэгтгэдэг.",
          icon: Globe2,
        },
      ],
      timeline: [
        { year: "2012", event: "Анхны мотокроссын уралдаанд орж, өсвөрийн ангилалд индэрт гарсан." },
        { year: "2016", event: "Үндэсний түвшний тэмцээнд үйлдвэрийн багийн хэмжээний бэлтгэлтэй орсон." },
        { year: "2021", event: "Олон төрлийн зам дээр өрсөлдсөн улиралдаа аваргын том амжилт гаргасан." },
        { year: "2026", event: "Олон улсын уралдааны календарь болон тамирчны брэндээ хөгжүүлж байна." },
      ],
    },
    achievements: {
      section: {
        eyebrow: "Амжилтууд",
        title: "Индэр бүр нарийвчлалаар хэмжигддэг.",
        description:
          "Ил тод гүйцэтгэлийн самбар, аваргын үзүүлэлтүүд, бэлтгэлийг хурд болгож чаддаг тамирчинд зориулсан цомын систем.",
      },
      badge: "MX",
      items: [
        {
          title: "Улсын аварга",
          value: 7,
          suffix: "x",
          detail: "Премьер мотокроссын ангиллын түрүү",
          icon: Trophy,
        },
        {
          title: "Гарааны түрүү",
          value: 42,
          suffix: "+",
          detail: "Элс, хатуу хөрс, техникийн замууд дээр",
          icon: Flag,
        },
        {
          title: "Индрийн хувь",
          value: 86,
          suffix: "%",
          detail: "Топ гурван байрт тогтмол шалгарсан үзүүлэлт",
          icon: Medal,
        },
        {
          title: "Бэлтгэлийн цаг",
          value: 9400,
          suffix: "+",
          detail: "Зам, фитнес, сэргэлт, симуляцийн нийлбэр",
          icon: CalendarDays,
        },
      ],
      marquee: [
        { label: "Гарааны хурд" },
        { label: "Хожуу тоормос", tone: "orange" },
        { label: "Агаарын удирдлага" },
        { label: "Уралдааны мэдрэмж", tone: "sky" },
        { label: "Аваргын төвлөрөл" },
      ],
    },
    gallery: {
      section: {
        eyebrow: "Зургийн сан",
        title: "Кино мэт уралдааны агшнууд.",
        description:
          "Хурд, элс, амортизаторын ачаалал, уралдааны өдрийн цэвэр детальд төвлөрсөн тод, өндөр контрасттай визуал архив.",
      },
      altSuffix: "Battulga Mendbileg мотокросс",
      closeAria: "Зургийн сангийн зургийг хаах",
      images: [
        {
          title: "Цөлийн нисэлт",
          tag: "Freestyle удирдлага",
          src: "/ip.jpg",
        },
        {
          title: "Гарааны төвлөрөл",
          tag: "Уралдааны дарамт",
          src: "/ip.jpg",
        },
        {
          title: "Хатуу замын ритм",
          tag: "Эргэлтийн хурд",
          src: "/ip.jpg",
        },
        {
          title: "Агаарын хяналт",
          tag: "Үсрэлтийн техник",
          src: "/ip.jpg",
        },
        {
          title: "Шөнийн тест",
          tag: "Тохируулгын сесс",
          src: "/ip.jpg",
        },
      ],
    },
    highlights: {
      section: {
        eyebrow: "Видео онцлох",
        title: "Дата давхаргатай мэт уралдааны бичлэг.",
        description:
          "Үсрэлт, гарааны хаалга, бэлтгэлийн сесс, улирлын тоймд зориулсан кино маягийн тоглуулагчийн гадаргуу.",
      },
      reelLabel: "Улирлын reel",
      playAria: "Онцлох бичлэг тоглуулах",
      metrics: [
        { label: "Гарааны хурд", value: "78 km/h", icon: Zap },
        { label: "Үсрэлтийн нум", value: "18 m", icon: Sparkles },
        { label: "Мото тохиргоо", value: "MX Pro", icon: Bike },
      ],
    },
    sponsors: {
      section: {
        eyebrow: "Түншүүд",
        title: "Премиум уралдааны хөтөлбөрт бэлэн.",
        description:
          "Саарал өнгийн нарийвчлал, hover үеийн өнгө, бодит брэндийн хамтын ажиллагаанд хангалттай зайтай цэвэр sponsor runway.",
      },
      brands: ["YAMAHA", "MONSTER", "MOTUL", "FOX", "OAKLEY", "PIRELLI", "ALPINESTARS", "RED BULL"],
    },
    contact: {
      section: {
        eyebrow: "Холбоо барих",
        title: "Тамирчнаа захиал. Улирлаа бүтээ.",
        description:
          "Ивээн тэтгэлэг, медиа ажил, уралдааны урилга, бэлтгэлийн сесс эсвэл тамирчны хамтын ажиллагааны талаар Battulga Mendbileg-ийн багт шууд мессеж илгээнэ үү.",
      },
      socialLinks: [
        { label: "Instagram", href: "#", icon: Award },
        { label: "Уралдааны профайл", href: "#", icon: Flag },
        { label: "Онцлох бичлэг", href: "#", icon: Sparkles },
      ],
      form: {
        nameLabel: "Нэр",
        namePlaceholder: "Таны нэр",
        emailLabel: "Имэйл",
        emailPlaceholder: "you@domain.com",
        messageLabel: "Мессеж",
        messagePlaceholder: "Уралдаан, кампанит ажил эсвэл хамтын ажиллагааны талаар бичнэ үү.",
        submit: "Хүсэлт илгээх",
      },
    },
    footer: {
      role: "Мэргэжлийн мотокросс тамирчин",
      program: "Монголын MX хөтөлбөр 2026",
    },
  },
  en: {
    brand: {
      initials: "BM",
      firstName: "Battulga",
      lastName: "Mendbileg",
      fullName: "Battulga Mendbileg",
      homeLabel: "Battulga Mendbileg home",
    },
    header: {
      navAria: "Primary navigation",
      partnerCta: "Partner",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Choose language",
    },
    navLinks: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Wins", href: "#achievements" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    loading: {
      status: "Preparing race line",
    },
    hero: {
      eyebrow: "Mongolia MX Elite",
      subtitle: "Professional Motocross Rider",
      primaryCta: "Watch Highlights",
      secondaryCta: "Explore Journey",
      stats: [
        { label: "Championships", value: "07", detail: "National titles" },
        { label: "Years Riding", value: "14", detail: "Race discipline" },
        { label: "Races Won", value: "42", detail: "Podium finishes" },
      ],
    },
    about: {
      imageAlt: "Battulga Mendbileg motocross athlete portrait",
      profileEyebrow: "Athlete Profile",
      section: {
        eyebrow: "About the rider",
        title: "Built from discipline, speed, and Mongolian terrain.",
        description:
          "Battulga Mendbileg represents a new generation of Mongolian motocross: technical, fearless, and obsessively prepared. His riding is shaped by long training days, precise bike setup, and the pressure of competition.",
      },
      storyCards: [
        {
          title: "Discipline",
          description:
            "Every race week is built around repetition: track walks, starts, braking markers, and recovery.",
          icon: ShieldCheck,
        },
        {
          title: "Speed",
          description:
            "Mendbileg rides with a clean throttle hand, late braking, and calm control through rough terrain.",
          icon: Gauge,
        },
        {
          title: "Mongolian Grit",
          description:
            "Raised on open landscapes and hard surfaces, his style blends endurance with fearless commitment.",
          icon: Globe2,
        },
      ],
      timeline: [
        { year: "2012", event: "First motocross race and junior podium." },
        { year: "2016", event: "Moved into national competition with factory-level preparation." },
        { year: "2021", event: "Won a breakthrough championship season across mixed terrain." },
        { year: "2026", event: "Building an international race calendar and athlete brand." },
      ],
    },
    achievements: {
      section: {
        eyebrow: "Achievements",
        title: "Podiums measured in precision.",
        description:
          "Transparent performance panels, championship metrics, and a trophy-focused system designed for a rider who turns preparation into speed.",
      },
      badge: "MX",
      items: [
        {
          title: "National Champion",
          value: 7,
          suffix: "x",
          detail: "Premier motocross class titles",
          icon: Trophy,
        },
        {
          title: "Race Wins",
          value: 42,
          suffix: "+",
          detail: "Across sand, hardpack, and technical circuits",
          icon: Flag,
        },
        {
          title: "Podium Rate",
          value: 86,
          suffix: "%",
          detail: "Consistent top-three race finishes",
          icon: Medal,
        },
        {
          title: "Training Hours",
          value: 9400,
          suffix: "+",
          detail: "Track, gym, recovery, and simulation",
          icon: CalendarDays,
        },
      ],
      marquee: [
        { label: "Holeshot speed" },
        { label: "Late braking", tone: "orange" },
        { label: "Air control" },
        { label: "Race craft", tone: "sky" },
        { label: "Championship focus" },
      ],
    },
    gallery: {
      section: {
        eyebrow: "Gallery",
        title: "Cinematic race moments.",
        description:
          "A bright, high-contrast visual archive built around speed, sand, suspension load, and clean race-day detail.",
      },
      altSuffix: "Battulga Mendbileg motocross",
      closeAria: "Close gallery image",
      images: [
        {
          title: "Desert Flight",
          tag: "Freestyle control",
          src: "/ip.jpg",
        },
        {
          title: "Start Gate Focus",
          tag: "Race pressure",
          src: "/ip.jpg",
        },
        {
          title: "Hardpack Rhythm",
          tag: "Corner speed",
          src: "/ip.jpg",
        },
        {
          title: "Air Control",
          tag: "Jump technique",
          src: "/ip.jpg",
        },
        {
          title: "Night Testing",
          tag: "Setup session",
          src: "/ip.jpg",
        },
      ],
    },
    highlights: {
      section: {
        eyebrow: "Video highlights",
        title: "Race footage with a data-layer feel.",
        description:
          "Designed as a cinematic player surface for jump clips, start-gate moments, training sessions, and season recaps.",
      },
      reelLabel: "Season reel",
      playAria: "Play highlights",
      metrics: [
        { label: "Launch speed", value: "78 km/h", icon: Zap },
        { label: "Jump arc", value: "18 m", icon: Sparkles },
        { label: "Bike setup", value: "MX Pro", icon: Bike },
      ],
    },
    sponsors: {
      section: {
        eyebrow: "Partners",
        title: "Built for a premium race program.",
        description:
          "A clean sponsor runway with grayscale precision, color on hover, and enough space for real brand partnerships.",
      },
      brands: ["YAMAHA", "MONSTER", "MOTUL", "FOX", "OAKLEY", "PIRELLI", "ALPINESTARS", "RED BULL"],
    },
    contact: {
      section: {
        eyebrow: "Contact",
        title: "Book the rider. Build the season.",
        description:
          "For sponsorships, media work, race invitations, training sessions, or athlete partnerships, send a direct message to the Battulga Mendbileg team.",
      },
      socialLinks: [
        { label: "Instagram", href: "#", icon: Award },
        { label: "Race profile", href: "#", icon: Flag },
        { label: "Highlights", href: "#", icon: Sparkles },
      ],
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@domain.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about the race, campaign, or partnership.",
        submit: "Send request",
      },
    },
    footer: {
      role: "Professional Motocross Rider",
      program: "Mongolia MX Program 2026",
    },
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Language];
