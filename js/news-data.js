// Kunaut News Data
// News items are sorted by date (newest first)

const spaceNewsData = [
    {
        id: 1,
        date: "2026-01-28",
        title: "Hrvatski znanstvenici sudjeluju u ESA-in projektu istraživanja Marsa",
        titleEn: "Croatian scientists participate in ESA Mars exploration project",
        description: "Tim hrvatskih znanstvenika s Prirodoslovnog fakulteta u Zagrebu pridružio se europskoj svemirskoj agenciji u ambicioznom projektu istraživanja površine Marsa. Projekt uključuje razvoj naprednih senzora za detekciju vode u marsovskom tlu.",
        descriptionEn: "A team of Croatian scientists from the Faculty of Science in Zagreb has joined the European Space Agency in an ambitious Mars surface exploration project. The project involves developing advanced sensors for detecting water in Martian soil.",
        image: "mars-exploration",
        source: "ESA",
        url: "https://www.esa.int/"
    },
    {
        id: 2,
        date: "2026-01-25",
        title: "Zagreb Aerospace Club pokreće program za mlade inženjere",
        titleEn: "Zagreb Aerospace Club launches program for young engineers",
        description: "Zagreb Aerospace Club najavio je novi edukativni program namijenjen studentima strojarstva i elektrotehnike. Program će uključivati praktične radionice izgradnje malih satelita i raketa.",
        descriptionEn: "Zagreb Aerospace Club has announced a new educational program for mechanical and electrical engineering students. The program will include hands-on workshops on building small satellites and rockets.",
        image: "aerospace-education",
        source: "Zagreb Aerospace Club",
        url: "https://zac.hr/"
    },
    {
        id: 3,
        date: "2026-01-20",
        title: "Hrvatska dobiva prvi svemirski inkubator u regiji",
        titleEn: "Croatia gets first space incubator in the region",
        description: "U Zagrebu će biti otvoren prvi regionalni inkubator za svemirske startupove. Inicijativa koju podržava Ministarstvo gospodarstva ima za cilj potaknuti inovacije u svemirskoj industriji JI Europe.",
        descriptionEn: "The first regional incubator for space startups will open in Zagreb. The initiative supported by the Ministry of Economy aims to foster innovation in the space industry of Southeast Europe.",
        image: "space-incubator",
        source: "Ministarstvo gospodarstva",
        url: "https://mingor.gov.hr/"
    },
    {
        id: 4,
        date: "2026-01-15",
        title: "Hrvatski teleskop otkrio novi asteroid u blizini Zemlje",
        titleEn: "Croatian telescope discovers new near-Earth asteroid",
        description: "Astronomi iz Višeslavove zvjezdarnice otkrili su novi asteroid koji prolazi u blizini Zemlje. Otkriće je potvrđeno od strane Međunarodne astronomske unije i predstavlja značajan doprinos globalnom praćenju objekata blizu Zemlje.",
        descriptionEn: "Astronomers from the Višeslav Observatory have discovered a new near-Earth asteroid. The discovery has been confirmed by the International Astronomical Union and represents a significant contribution to global near-Earth object tracking.",
        image: "asteroid-discovery",
        source: "Hrvatsko astronomijsko društvo",
        url: "https://had.hr/"
    },
    {
        id: 5,
        date: "2026-01-10",
        title: "Hrvatska potpisala sporazum o suradnji s NASA-om",
        titleEn: "Croatia signs cooperation agreement with NASA",
        description: "Ministar znanosti i obrazovanja potpisao je povijesni sporazum o suradnji s NASA-om. Sporazom predviđa razmjenu znanstvenika, zajedničke istraživačke projekte i sudjelovanje hrvatskih stručnjaka u budućim svemirskim misijama.",
        descriptionEn: "The Minister of Science and Education has signed a historic cooperation agreement with NASA. The agreement provides for the exchange of scientists, joint research projects, and participation of Croatian experts in future space missions.",
        image: "nasa-cooperation",
        source: "Ministarstvo znanosti",
        url: "https://mzo.gov.hr/"
    },
    {
        id: 6,
        date: "2026-01-05",
        title: "Split Tech City pokreće svemirski hub za mediteranske inovacije",
        titleEn: "Split Tech City launches space hub for Mediterranean innovations",
        description: "Split Tech City najavio je osnivanje novog tehnološkog huba posvećenog svemirskim tehnologijama. Fokus će biti na primjeni satelitskih podataka za poljoprivredu, turizam i zaštitu okoliša na mediteranskom području.",
        descriptionEn: "Split Tech City has announced the establishment of a new technology hub dedicated to space technologies. The focus will be on applying satellite data for agriculture, tourism, and environmental protection in the Mediterranean region.",
        image: "split-space-hub",
        source: "Split Tech City",
        url: "https://splittechcity.com/"
    },
    {
        id: 7,
        date: "2025-12-28",
        title: "Hrvatski studenti osvojili brončanu medalju na Europskoj svemirskoj olimpijadi",
        titleEn: "Croatian students win bronze at European Space Olympiad",
        description: "Tim hrvatskih srednjoškolaca osvojio je brončanu medalju na Europskoj svemirskoj olimpijadi održanoj u Amsterdamu. Učenici su se natjecali u rješavanju kompleksnih problema vezanih uz svemirske misije i astrofiziku.",
        descriptionEn: "A team of Croatian high school students won the bronze medal at the European Space Olympiad held in Amsterdam. Students competed in solving complex problems related to space missions and astrophysics.",
        image: "space-olympiad",
        source: "Agencija za znanost i visoko obrazovanje",
        url: "https://www.azvo.hr/"
    },
    {
        id: 8,
        date: "2025-12-20",
        title: "Rijeka domaćin konferencije o budućnosti svemirske industrije",
        titleEn: "Rijeka hosts conference on the future of space industry",
        description: "Rijeka će biti domaćin međunarodne konferencije 'Space Future 2026' koja će okupiti vodeće stručnjake iz svemirske industrije. Konferencija će raspravljati o komercijalizaciji svemira i novim poslovnim prilikama.",
        descriptionEn: "Rijeka will host the international conference 'Space Future 2026' bringing together leading experts from the space industry. The conference will discuss space commercialization and new business opportunities.",
        image: "space-conference",
        source: "Grad Rijeka",
        url: "https://www.rijeka.hr/"
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = spaceNewsData;
}
