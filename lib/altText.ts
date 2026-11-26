/**
 * Central alt-text for every real content photo on the site, keyed by the
 * same original filename used by lib/images.ts. Edit descriptions here
 * rather than at each call site.
 *
 * Images that already have a visible, identical caption right next to them
 * (service tiles, certification badges) are intentionally left out of this
 * map and given alt="" at the call site instead, so screen readers aren't
 * forced to announce the same label twice.
 */
export const altText: Record<string, string> = {
  // Hero / feature photography
  "chatgpt_image_sep_17_2026_12_57_06_pm.png":
    "Xtend Yourself client with long, healthy waves",
  "pexels-cottonbro-3993311.jpg":
    "Close-up of soft, healthy waves representing the Xtend Yourself approach to hair care",
  "chatgpt_image_sep_21_2026_04_06_20_pm.png":
    "Niki posing in front of a lit angel-wings backdrop at a photo booth",
  "chatgpt_image_sep_21_2026_08_59_59_am.png":
    "Niki Z., owner and hair artisan at Xtend Yourself, standing outdoors",
  "header.png": "Woman brushing her long, healthy brushed-out hair",
  "494220950_4014090412142241_8598158627694081_n.jpg":
    "Inside Xtend Yourself's private salon suite in Cave Creek, Arizona",
  "img_5643.jpg": "Client with glossy, defined dark curls after a styling session",
  "img_5656.jpg": "Client with sleek, healthy hair after a blowout",
  "pexels-pnw-prod-8377213.jpg":
    "Close-up of a client's hand resting in her long, healthy hair",
  "pexels-deni-priyo-3550015-10028673.jpg":
    "Niki styling a client's hair with a round brush and blow-dryer",

  // Services modal photography (cropped from the salon's own reference photos)
  "/images/services-modal-cut-style.jpg":
    "Rainbow-dyed hair close-up with iridescent cutting shears",
  "/images/services-modal-hair-restoration.jpg":
    "Niki examining a client's scalp with a magnifying lamp during a hair restoration consultation",
  "/images/services-modal-extensions.jpg":
    "Client with long, wavy blonde hair extensions looking over her shoulder",
  "/images/services-modal-hair-color.jpg":
    "Two clients with pastel pink, teal, and blonde fantasy hair color",
  "/images/services-modal-hair-loss.jpg":
    "Collage of wig fitting and scalp care for a client navigating hair loss",

  // Portfolio / transformation gallery
  "img_5637_1.jpg":
    "Client with long wavy hair looking back over her shoulder in Cave Creek",
  "pexels-oleksandra-23349908.jpg":
    "Niki shampooing and massaging a client's hair at the wash station",
  "chatgpt_image_sep_18_2026_11_07_35_am.png":
    "Collage of a client's curly hair transformed from frizzy to defined, healthy curls",
  "chatgpt_image_sep_18_2026_11_01_13_am.png":
    "Niki examining a client's scalp with a magnifying lamp during a consultation",
  "chatgpt_image_sep_18_2026_11_17_04_am.png":
    "Client with long dark curly hair smiling after her haircut",
  "chatgpt_image_sep_18_2026_11_06_26_am.png":
    "Collage of a client's hair transformed from a short gray bob to long platinum-blonde extensions",
  "img_5651.jpg":
    "Bride in a flowing white gown with styled hair posing beside a private jet",
  "img_5642_1.jpg":
    "Hand-tied hair extension wefts in two tones prepared for application",
  "img_5636_1.jpg":
    "Client in a black gown with styled hair and makeup posing beside a private jet",
  "img_5658.jpg": "Fantasy-color braid blending teal, orange, and red tones",
  "img_5505_1.jpg": "Side profile of a teal fantasy-color braid with warm highlights",
  "img_5508_1.jpg":
    "Client with vibrant pink and orange peekaboo highlights laughing through sheer curtains",
  "avcalla-liz-5-400x516.jpg":
    "Client with long curly brunette hair and honey highlights smiling outdoors",
  "avcalla-amber-8-400x516.jpg":
    "Client with long curly hair in a floral kimono smiling outdoors",
  "57774884_2365778490306783_503910263523639296_n.jpg":
    "Niki curling a client's golden-blonde layers with a curling iron",
  "avcalla-liz-3-400x516.jpg":
    "Client with long, wavy blonde hair extensions smiling outdoors",
  "75220750_2505337006350930_1117430227039944704_n.jpg":
    "Before-and-after of a client's short haircut styled with soft waves",
  "73352236_2505337293017568_3238439619317989376_n.jpg":
    "Before-and-after of a client's hair transformed from flat to voluminous curls",
  "83194785_2583839731833990_2324653802034036736_n.jpg":
    "Before-and-after of a client's hair blended into a soft, healthy blonde",
  "480143923_1130191849005430_3151350967952352516_n.jpg":
    "Client with blonde hair and bright pink and orange peekaboo color",
  "473450013_3923546547863295_1366655854016137054_n.jpg":
    "Client with a teal bob haircut laughing in front of palm trees",
  "497514532_4024117131139569_6997829202646189028_n.jpg":
    "Before-and-after of a client's hair transformed into long, voluminous waves",
  "494294539_4014090592142223_5718186802554414692_n.jpg":
    "Client with vivid orange and pink fantasy hair color posing beside a private jet",
  "98313565_2670622169822412_905561487488057344_n.jpg":
    "Collage of a client's wavy golden-blonde bob styled from multiple angles",
  "480412655_1131560885535193_5213467224412261619_n.jpg":
    "Rainbow-dyed hair close-up with iridescent cutting shears",
  "37201592_2192489114302389_8588173247386746880_n.jpg":
    "Step-by-step collage of a client's hair colored a vivid yellow-green",
  "img_5623.jpg":
    "Collage of a client's hair color journey from dark to a soft blended ombre",
  "img_5628.jpg":
    "Collage of a client's hair transformed from a short bob to long platinum waves",
  "490220355_3992989800918969_7160486609251216914_n.jpg":
    "Collage of clients wearing vivid fantasy hair colors, from pastel pink and teal to fiery red",
  "img_5629.jpg":
    "Collage of a client's hair styled from a short bob into long platinum waves",
  "img_5631.jpg":
    "Collage contrasting a client's thinning hair with her fuller, restored result",
  "img_5633.jpg":
    "Three-photo collage of a client's scalp and hair before and after a restoration treatment",
  "img_5635.jpg":
    "Collage of a client's hair styling session finishing in a sleek blowout",
  "img_5562_1.jpg":
    "Client with long dark hair and a blonde ombre smiling indoors",
  "img_5639.jpg": "Three friends with purple, brown, and red fantasy-color hair",
  "75576385_2517619481789349_1972079975360102400_n.jpg":
    "Niki applying color to a client's hair in the salon chair",
  "istockphoto-1334561894-612x612.jpg":
    "Rows of hair extension wefts in a range of natural shades",
};

export function altFor(filename: string, fallback = ""): string {
  return altText[filename] ?? fallback;
}
