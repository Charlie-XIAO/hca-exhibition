import imgPigDragon from "./assets/pig-dragon.png";
import imgArchedDragonPendants from "./assets/arched-dragon-pendants.jpg";
import imgPanelWithDragon from "./assets/panel-with-dragon.jpg";
import imgDingWithTaotieDecor from "./assets/ding-with-taotie-decor.jpg";

const logotext = "DRAGONS";
const meta = {
  title: "Dragons",
  description: "History of Chinese Art Exhibition",
};

const introdata = {
  title: "Dragons【龍】",
  animated: {
    first: "Subtitle #1",
    second: "Subtitle #2",
    third: "Subtitle #3",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis sed magna ut ornare. Maecenas nibh risus, mollis nec cursus id, tristique sit amet sem. Sed porttitor congue ipsum viverra interdum. Duis leo orci, tristique sed viverra eget, scelerisque volutpat arcu. Cras laoreet malesuada tempus. Cras fringilla efficitur turpis ac molestie. Vivamus eu placerat nunc. Nulla facilisi.",
  your_img_url: "https://picsum.photos/300/400",
};

const dataportfolio = [
  {
    img: imgPigDragon,
    title: "Pig Dragon",
    title_zh: "玉龍豬",
    caption:
      "Jade. Excavated in Dongshanzui, Kezuo county, Liaoning. Hongshan culture, Neolithic. Liaoning Provincial Museum, Shenyang.",
    desc: "What people used to call Northeast China today was once called Manchuria. In that region contains a province named Liaoning, where remnants of the Hongshan culture was discovered. They were a Neolithic civilization that existed around 3500 B.C. Archeologists revealed stone tombs and ritual stone platforms in Liaoning, as well as jade creatures that they named “pig dragons”, or “玉龙猪”. This artifact is one of the earliest depictions of a dragon in the history of Chinese art. As we can see, the pig dragon is curved, and the art piece is C-shaped with a hole in the middle. It has a scrunched nose, and almost has an angry appearance. According to Google Arts and Culture, this artifact also resembles an animal embryo, so it potentially represents a pure form of life force or a symbol of vitality. Jade is also a symbol of high status, therefore whoever owned this pig dragon was someone of importance.",
    ref: [
      {
        href: "https://library.artstor.org/asset/HUNT_56000",
        text: "Ornament in the Shape of a Pig-Dragon. 3600-2000 BCE. Artstor.",
      },
      {
        href: "https://artsandculture.google.com/story/1wUhqSIHizhnkg",
        text: "Discover the Story of the Jade Pig-Dragon. Google Arts & Culture.",
      },
    ],
  },
  {
    img: imgDingWithTaotieDecor,
    title: "Ding Ritual Food Vessel with Tautie Decor",
    title_zh: "帶有饕餮紋飾的鼎禮器",
    caption:
      "Bronze. China. Shang dynasty, c. 1600-c. 1050 BCE. Harvard Art Museums.",
    desc: "In China, there is a saying that \"the dragon has nine sons, each different.\"【龍生九子，各有不同】The nine sons of the dragon include <i>bixi</i>, <i>chiwen</i>, <i>pulao</i>, <i>bian</i>, <i>taotie</i>, <i>baxia</i>, <i>yazi</i>, <i>suanni</i>, and <i>jiaotu</i>. Toatie, the fifth son of the dragon, was first mentioned in Zuozhuan, which covers Chinese history from 722 to 468 B.C. It is said to have a goat's body, a human face, tiger's teeth, human hands as well as the voice of a baby. Its eyes are said to be under its arms. Taotie is a savage glutton, prepared to eat even its own body. The ding featured in the picture is decorated with taotie bands.",
    ref: [
      {
        href: "https://harvardartmuseums.org/collections/object/204094",
        text: "\"Ding\" Ritual Food Vessel with \"Taotie\" Decor. Harvard Art Museums.",
      },
      {
        href: "https://www.christies.com/en/stories/mythical-creatures-in-the-life-and-art-of-ancient-china-c1c2d296024540649dddefa739e53cb4",
        text: "Mythical Creatures in the Life and Art of Ancient China. Christie's.",
      },
    ],
  },
  {
    img: imgArchedDragonPendants,
    title: "Pair of Arched Dragon Pendants",
    title_zh: "龍形玉佩飾",
    caption:
      "Jade. Excavated in China. Eastern Zhou dynasty, Warring States Period 475-221. The Art Institute of Chicago, Edward and Louise B. Sonnenschein Collection.",
    desc: "As we can observe in this photograph, this matching pair of pendants depict serpentine dragons with their heads turned back, tails coiled, and small fins protruding above and below their twisting bodies. These dragons, crafted from jade, showcase the expertise of skilled artisans. Their smooth designs feature intricate details, indicating the use of tools such as saws, grinders, and drills for the carving process. We can assume from their substantial size, thickness, precise craftsmanship, and glossy finish that they were likely commissioned by aristocrats, labeled as a luxury good. The pendants likely hung from the owner's shoulders or waistband, as indicated by holes pierced through the creatures' hindquarters. Dragon motifs were seen often during the Bronze Age. Contemporary texts suggest that dragons were not only decorative but were also seen as supernatural beings. When buried with the dead, jade pendants might have symbolized the belief that dragons could carry the human soul to the afterlife. This illustrates people’s theories of life and death at that time.",
    ref: [
      {
        href: "https://library.artstor.org/asset/AMICO_CHICAGO_1031150546",
        text: "One of a Pair of Arched Dragon Pendants. Eastern Zhou dynasty, Warring States period, 4th/3rd century B.C. Artstor.",
      },
      {
        href: "https://artsandculture.google.com/asset/pair-of-dragon-pendants-chinese/2AFyhohfDc31kA",
        text: "Pair of Dragon Pendants - Chinese. Google Arts & Culture.",
      },
      {
        href: "https://www.artic.edu/artworks/70115/dragon-pendant",
        text: "Dragon Pendant. Arts of Asia. The Art Institute of Chicago.",
      },
    ],
  },
  {
    img: imgPanelWithDragon,
    title: "Panel with Dragon",
    title_zh: "蟒紋妝花緞",
    caption:
      "Silk satin brocaded with silk and metallic thread. China. Qing dynasty (1644-1911). The Metropolitan Museum of Art.",
    desc: "This panel exemplifies the remarkable skill of the weavers employed in the imperial workshops during the Qing dynasty. The intricate dragon motif is woven using two types of  gold threads. The dragon’s face and scales shimmer with a lustrous quality, while its tongue, mane and claw tips are rendered in a matte finish. During the Qing dynasty, there existed a complex system of laws governing the use of animal and bird motifs on official robes. While the five-clawed dragons are used exclusively by emperors and senior members of the royalty, the four-clawed dragons (known as mang), as depicted in this panel, are reserved for use by junior members of the imperial family. This distinction in the use of dragon motifs symbolizes the status of the wearer as well as the hierarchical structure of the court.",
    ref: [
      {
        href: "https://www.metmuseum.org/art/collection/search/50497",
        text: "Panel with Dragon. 17th century. The Metropolitan Museum of Art.",
      },
    ],
  },
];

const socialprofils = {
  github: "https://github.com/Charlie-XIAO/hca-exhibition/tree/main",
};

export { meta, dataportfolio, introdata, socialprofils, logotext };
