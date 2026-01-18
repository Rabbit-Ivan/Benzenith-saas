export type NewsLocale = "zh-CN" | "zh-TW" | "en" | "ja";

export type NewsArticleContent = {
  id: number;
  title: string;
  contentHtml: string;
};

type NewsArticleTranslation = {
  title: string;
  contentHtml: string;
};

type NewsArticle = {
  id: number;
  translations: Record<NewsLocale, NewsArticleTranslation>;
};

const zhCnArticles: NewsArticleTranslation[] = [
  {
    title: "西域手札：在戈壁的寂静中，听见自由的形状",
    contentHtml: `
      <p>如果声音有形状，在都市是嘈杂的波纹，而在西域的戈壁，它是风掠过雅丹地貌时留下的那一道苍茫的弧线。BenZenith本鄯的故事，并非始于繁华名利场，而是始于1940年的新疆鄯善。那里是库姆塔格沙漠的边缘，是风与石头的博弈场。我们的第一代匠人高连昌先生，正是在这片天地的大寂静中，悟出了“善是万物本源”的道理。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-1.png" alt="西域手札配图" class="w-full rounded-md" />
      </figure>
      <h4>从鄯善到世界：一种“苍茫美学”的诞生</h4>
      <p>当现代工业试图用流水线抹平所有棱角时，我们选择回望脚下这片粗粝的土地。西域的美，在于“大”。天高地阔，万物在极端的环境中剥离了多余的修饰，只留下最坚韧的内核。BenZenith本鄯的珠宝美学，便植根于这种“西域苍茫感”——它不是精细到甚至显得脆弱的矫饰，而是一种经过岁月风化后沉淀下来的力量感。我们眼中的高级，是保留材质那一抹“野性”的温润。正如和田玉在河流中历经千万次冲刷，仍保有它的韧性；正如我们在设计中所追求的“刚柔并济” ，那不仅是设计语言，更是西域大地给予我们的生存启示。</p>
      <h4>以风为刀，雕刻自由</h4>
      <p>在西域，风是水的另一种形态。风无形，却能雕刻万物；水无骨，却能穿透顽石。这种对“流动与力量”的理解，凝结在我们的“Fan of Will 随心扇”系列之中。扇，是风的容器，也是心意的指挥棒。设计中那极简而流畅的线条，取材于扇形的洒脱，却也像极了戈壁上延绵的沙丘脊线——那是风吹过的痕迹，是自由的形状。佩戴它，不仅是为了装饰，更是为了提醒身处钢筋水泥森林的现代女性：<strong>心若自由，何处不是广阔天地？</strong></p>
      <h4>精神的避难所：回归“本善”</h4>
      <p>在这个不得不快的时代，我们是一群“生活笃定者” 。无论是承载着财道与乾坤的“宝葫芦”与“聚宝盆”，还是隐喻着云淡风轻的“云舟”，本鄯的每一件作品，本质上都是从西域带回的一捧“本善”。我们运用古老的材质——温润玉髓、深邃的黑玛瑙、流光的白贝母，去承载那些关于时间、关于信仰的宏大叙事。这些材质本身就带有地质的记忆，它们见证过沧海桑田，因此自带一种让情绪落地的“压手感”。当你在喧嚣中触碰颈间的珠宝，愿你能感受到来自1940年那片西域戈壁的寂静。</p>
    `.trim(),
  },
  {
    title: "在三亿年相遇：当“因善而自由”的意志成为一种传承",
    contentHtml: `
      <p>人的一生，不过百年。而我们手中的珠宝，往往经历了三亿年的地质漫游。当我们谈论奢侈品时，我们习惯谈论工艺、克拉数或设计流派。但在本鄯（BenZenith）的哲学里，我们更愿意谈论“时间”。不仅是物理意义上的时间，更是意志与精神在时光长河中的接力。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-2.png" alt="三亿年相遇配图" class="w-full rounded-md" />
      </figure>
      <h4>地质的皱纹，是时间的信物</h4>
      <p>在快消时代，一切都追求“如新”。而我们选用带有“地质特征”的材质——玉髓的温润、玛瑙的纹理、金石的沉甸。这些材质并非工业流水线上的标准化产物，而是大地在亿万年的造山运动、岩浆喷发与河床冲刷中留下的“舍利”。本鄯的故事始于1940年的新疆鄯善，那片苍茫的西域戈壁，本身就是一部裸露的地质史书。当我们选用这些材质时，我们不仅是在创作，更是在从大地手中接过一份沉甸甸的“时间信物”。</p>
      <h4>一种意志的传承：因善，而自由</h4>
      <p>珠宝不仅是物质的传承，更是精神的“诺亚方舟”。1940年，匠人高连昌在鄯善悟出了一个道理：“善”是万物本源。这并非软弱的善，而是一种因内心清澈而无所畏惧的力量。传承至今，这份“因善而自由”的精神，成为了本鄯的灵魂。</p>
      <h4>做时间的长期主义者</h4>
      <p>本鄯笃信“慢价值” 。在这个急躁的世界里，我们愿意做那个“笨拙”的守望者。我们用“慢”来滋养内心，用对文化自觉的敬畏去打磨每一件作品。因为我们知道，只有那些承载了深厚文化内涵与真挚情感的珠宝，才有资格介入时间的对话。而你留给时间的，将是你“听从善意、意行随心”的动人姿态。</p>
    `.trim(),
  },
  {
    title: "从敦煌褐到雅丹红：取色于天地的调色盘，因善而自由的意志表达",
    contentHtml: `
      <p>在珠宝的世界里，色彩往往被赋予了等级：红宝石的热烈、蓝宝石的高贵。但在本鄯（BenZenith）的视觉宇宙中，色彩首先是“大地的呼吸”，是西域千万年风沙淬炼出的本真色。我们拒绝那些工业合成的、过度饱和的视觉刺激，而是回望那片赋予我们灵魂的土地——新疆鄯善。在那里，色彩不是调配出来的，而是长出来的。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-3.png" alt="敦煌褐与雅丹红配图" class="w-full rounded-md" />
      </figure>
      <h4>敦煌褐：慈悲与善意的底色</h4>
      <p>那是石窟壁画历经千年氧化后的沉静，也是BenZenith本鄯品牌基因中“善”的色彩体现。这种褐色不张扬，却有一种包容万物的慈悲感。在我们的作品中，这种色彩往往通过质感温润的木质、深邃的茶色原石或经过特殊氧化处理的金属来呈现。它象征着一种“向内求”的力量——如品牌手册所言，“善是万物本源”。唯有内心拥有如大地般厚重的善意，才能在喧嚣中保持一份定力。</p>
      <h4>雅丹红：在苍茫中燃烧的自由意志</h4>
      <p>当斜阳洒在库姆塔格沙漠的雅丹地貌上，那种红，是带着泥土气息的赭石红，是充满生命张力的土红。它不似玫瑰红那般娇艳，却有着风蚀不掉的倔强。这种“雅丹红”代表了本鄯精神中的“自由意志”。它是高连昌先生在1940年的戈壁滩上悟出的自在：意志如火，在最荒凉的境遇中也能因善而自由地燃烧。我们在宝石的挑选上，倾向于寻找带有自然地质特征的红色系矿石，保留它们不完美的纹理，因为那才是自由生长的痕迹。</p>
      <h4>反工业化的色彩逻辑：让地质特征说话</h4>
      <p>本鄯的色彩哲学是“反工业化”的。我们推崇大地色系，是因为这些色彩中包含了矿物质、金属氧化物与时间博弈的痕迹。</p>
      <ul>
        <li><strong>岩石灰：</strong> 它是时间的脊梁，是不被外界定义的冷峻。</li>
        <li><strong>流沙金：</strong> 它是流动的意志，是“听水”哲学的视觉延伸。</li>
      </ul>
      <h4>意行成愿，色彩即心愿</h4>
      <p>听从内心的善意，像西域的风一样，在属于自己的色彩里，因善而自由。</p>
    `.trim(),
  },
  {
    title: "身披戈壁的寂静：在嘈杂时代，构建一座随身的“精神避难所”",
    contentHtml: `
      <p>现代生活是一场永不停歇的奔赴。在琳琅满目的CBD、在无尽的社交信号中，我们似乎拥有了一切，却唯独丢失了“安宁”。本鄯（BenZenith）认为，珠宝不应只是社交场上的勋章，它更应该是一道屏障——一座坚不可摧的“精神避难所”。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-4.png" alt="戈壁寂静配图" class="w-full rounded-md" />
      </figure>
      <h4>回归本源：从1940年的大寂静说起</h4>
      <p>这种“避难所”的灵感，源于品牌基因中那段1940年的西域往事。在新疆鄯善那片广袤无垠的戈壁滩上，风沙与寂静是永恒的主题。第一代匠人高连昌先生在极致的荒凉中，听见了内心的声音。当佩戴本鄯的珠宝时，触碰的是那种跨越八十余载的定力。我们选取孔雀石、温润的玉髓以及带有地质肌理的金属，它们拥有物理上的“压手感”，这种分量感能瞬间从漂浮的焦虑拉回地面，是一种“回归本源”的踏实。</p>
      <h4>听从善意：珠宝作为内心的“定海神针”</h4>
      <p>本鄯2025-2026的视觉主题是“听水”（Hearken to Water）。水，至柔亦至刚，它总能在岩石间找到自己的出路。在我们的哲学里，这种力量即是“善意”。当你身处复杂的人际或高压的环境，指尖下意识地摩挲颈间的“云归”琉璃，或拨动“随心扇”的弧线，那其实是一场私密的对话。那一刻，珠宝不再是装饰，它是你的图腾，提醒你：<strong>“听从善意，意行随心”</strong> 外界的评价如流云掠过，而你内心的善与自由，才是那座稳固的避难所。</p>
    `.trim(),
  },
  {
    title: "海外华人的选择：为何“东方哲思”在新加坡引起回响？",
    contentHtml: `
      <p>近日，中华网刊发了《新加坡海外华人票选“最喜爱的文化珠宝品牌”》的专题报道。作为深耕新加坡的本土品牌，本鄯（BenZenith）非常荣幸能够获得海内外华人群体的深度认可。这不仅是对我们设计美学的赞许，更是一场关于“东方哲思”与“生活美学”的双向奔赴。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-5.png" alt="图片来源于中华网" class="w-full rounded-md" />
      </figure>
      <h4>植根狮城：作为新加坡品牌的文化自觉</h4>
      <p>新加坡是一个多元文化交汇的独特高地，我们在这里成长，也在这里思考。此次票选结果让我们深切感受到，植根于狮城的品牌基因——那种包容、现代且充满东方智慧的表达，正精准地回响在当代华人的心声中。</p>
      <h4>源自1940：可佩戴的哲学与“善”的传承</h4>
      <p>本鄯的故事始于1940年。匠人高连昌在新疆鄯善悟到“善是万物本源”的真理，这份智慧流传至今，沉淀为本鄯“听从善意，随心而行”的品牌精神。我们始终相信，珠宝不应只是冰冷的装饰，而应是“可佩戴的哲学” 。</p>
      <ul>
        <li><strong>上善若水，刚柔并济：</strong> 我们的产品设计理念汲取传统意象，通过极简有力的流线，呈现水之柔韧与石穿之劲。</li>
        <li><strong>意行成愿，愿随你心：</strong> 无论是象征洒脱自由的“随心扇”系列，还是蕴含禅意智慧的“福光”系列，我们希望每一位佩戴者都能在这些器物中，“倾听内心，自在前行” 。</li>
      </ul>
      <h4>慢价值的笃定：在浮躁时代沉淀美学</h4>
      <p>在这个快消主义盛行的时代，本鄯选择做“慢价值的生活笃定者”。我们尊重匠人精神，坚持将东方禅意融入每一件孤品级的手工精度中。这次在新加坡获得的荣誉，不仅属于品牌，更属于所有信奉“慢而有价值”生活逻辑的朋友们。<strong>感谢每一位在狮城邂逅本鄯的知音。</strong> 未来，我们将继续以文化为源、善意为本，用当代的智慧续写东方的浪漫 。让每一份善意，都能在珠宝的流光溢彩中，找到属于自己的归处。</p>
    `.trim(),
  },
  {
    title: "【本自在 Suchness of Self】以文化万象，映照内心所向",
    contentHtml: `
      <p>在 <strong>本鄯（BenZenith）</strong> 的哲学语境里，珠宝不应只是流光溢彩的装点，而是一面镜子。2025-2026年，我们以“听水 Hearken to Water”为年度视觉主题，并陆续推出了核心系列——“本自在 Suchness of Self”。该系列以“文化万象”为灵感，通过极简且富有张力的现代设计语言，将无形的东方哲思转化为有形的可佩戴艺术。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-6.png" alt="本自在系列配图" class="w-full rounded-md" />
      </figure>
      <h4>这种“自在”，源于对本心的倾听</h4>
      <p>“本自在”系列的命名，取自佛学与东方哲学中的“如是（Suchness）”。它代表了事物的本真面貌，不加修饰，不随境转。 我们观察水流的姿态、云朵的起伏、以及草木的荣枯，将这些大自然的“万象”提炼为珠宝的轮廓。当你佩戴这些作品时，它们不仅是艺术品，更是你内心志趣的延伸——你所选择的“象”，正是你心之所往的境界。</p>
      <h4>孤品级工艺：慢价值的笃定</h4>
      <p>“本自在”系列的每一件作品，都秉承了本鄯自1940年传承至今的匠心。我们坚持“手工精度”，在每一处转角、每一道微小的镶嵌中，倾注对“善”的理解。 我们不追求工业化的高效产出，而是希望通过这种带有温度的“慢价值”，为佩戴者在浮躁的时代中寻找一份定力。</p>
      <h4>结语：于万千善中，听见你的善意</h4>
      <p>“Hearken to Grace, Let Will Embrace.”“本自在”系列不仅是在致敬文化，更是在致敬每一位独立的佩戴者。愿你在这些承载了文化万象的珠宝中，找到属于自己的那份笃定与自在。</p>
    `.trim(),
  },
];

const enArticles: NewsArticleTranslation[] = [
  {
    title: "Notes from the West: Hearing the Shape of Freedom in the Silence of the Gobi",
    contentHtml: `
      <p>If sound had a shape, in the metropolis it would be a chaotic ripple. But in the Gobi Desert of the West, it is a sweeping, desolate arc - the trace left by the wind as it carves through the Yadan landscape. The story of BenZenith begins not in the glitz of a vanity fair, but in Shanshan, Xinjiang, in 1940. There, on the edge of the Kumtag Desert, lies an eternal battleground between wind and stone. It was within this "Great Silence" that our first-generation artisan, Mr. Gao Lianchang, realized a profound truth: "Grace is the origin of all things."</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-1.png" alt="Notes from the West illustration" class="w-full rounded-md" />
      </figure>
      <h4>From Shanshan to the World: The Birth of an "Untamed Aesthetic"</h4>
      <p>When modern industry attempts to smooth every edge with assembly lines, we choose to look back at the gritty earth beneath our feet. The beauty of the West lies in its vastness. Under high skies and wide lands, extreme environments strip away the superfluous, leaving only the most resilient core. BenZenith's jewelry aesthetic is rooted in this sense of "Western Grandeur" - it is not a delicate, fragile ornamentation, but a power sedimented through weathering and time. To us, true luxury preserves the "wild" warmth of the material. Just as Hetian jade retains its resilience after thousands of river washings, our designs pursue a balance of "Strength and Gentleness." This is not just a design language; it is a lesson in survival granted to us by the land itself.</p>
      <h4>Carving Freedom with the Wind</h4>
      <p>In the West, wind is another form of water. Wind has no shape, yet it carves all things; water has no bone, yet it penetrates stone. This understanding of "flow and power" is crystallized in our "Fan of Will" collection. The fan is a vessel for the wind and a conductor of the heart's intent. The minimalist, fluid lines draw from the free spirit of a fan, yet echo the ridges of sand dunes in the Gobi - traces of the wind, the very shape of freedom. To wear it is not merely for decoration. It serves as a totem for the modern woman living in the concrete forest: <strong>If the heart is free, is the world not vast wherever you are?</strong></p>
      <h4>A Sanctuary for the Spirit: Returning to Grace</h4>
      <p>In an era that demands speed, we choose to be the "anchors of life." Whether it is the "Gourd" and "Cornucopia" holding fortune and balance, or the "Cloud Vessel" implying a lightness of being, every BenZenith piece is essentially a handful of Grace brought back from the West. We use ancient materials - warm Chalcedony, deep Black Agate, and iridescent Mother of Pearl - to carry grand narratives of time and faith. Possessing a geological memory, these stones have witnessed the changing of seas into mulberry fields, carrying a physical weight that grounds your emotions. When you touch the jewelry at your neck amidst the noise of the world, may you feel the silence of the Gobi from 1940. <strong>Hearken to Grace, Let Will Embrace.</strong></p>
    `.trim(),
  },
  {
    title: "A Rendezvous Across 300 Million Years: When \"Freedom through Grace\" Becomes a Legacy",
    contentHtml: `
      <p>A human life spans merely a century. Yet, the jewelry we hold has often traversed a geological odyssey of three hundred million years. When discussing luxury, the conversation often revolves around craftsmanship, carats, or design schools. But in the philosophy of BenZenith, we speak of "Time." Not merely in the physical sense, but as a spiritual continuum where will and spirit are passed down through the ages.</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-2.png" alt="A rendezvous across 300 million years illustration" class="w-full rounded-md" />
      </figure>
      <h4>The Earth's Imprints: Tokens of Time</h4>
      <p>In an era of fast fashion where the world chases the "brand new," we choose materials that bear "geological character" - the warmth of Chalcedony, the intricate textures of Agate, and the profound weight of metal and stone. These are not standardized products of an assembly line. They are the sacred relics of the Earth, formed through eons of orogeny, volcanic eruptions, and riverbed scouring. The story of BenZenith begins in 1940 in Shanshan, Xinjiang - a vast Gobi expanse that is, in itself, an open book of geological history. When we select these materials, we are not just creating; we are accepting a weighty "token of time" directly from the hands of the Earth.</p>
      <h4>A Legacy of Will: Freedom Born of Grace</h4>
      <p>Jewelry is not just a material heirloom; it is a spiritual "Noah's Ark." In 1940, artisan Gao Lianchang realized a truth in Shanshan: "Grace is the origin of all things." This is not a fragile grace, but a fearless power born of a crystalline heart. Handed down to this day, this spirit of being "Free through Grace" has become the very soul of BenZenith.</p>
      <h4>The Long-Termist of Time</h4>
      <p>BenZenith believes in "Slow Value." In this impatient world, we are willing to be the steadfast guardians. We use "slowness" to nourish the heart and polish every piece with a reverent cultural consciousness. We know that only jewelry carrying profound cultural depth and sincere emotion earns the right to enter the dialogue of time. And what you leave to time will be your most moving stance: to <strong>Hearken to Grace, Let Will Embrace.</strong></p>
    `.trim(),
  },
  {
    title:
      "From Dunhuang Umber to Yardang Red: A Palette Drawn from Heaven and Earth, an Expression of Will Free through Grace",
    contentHtml: `
      <p>In the world of jewelry, colors are often assigned a hierarchy: the fervor of rubies, the nobility of sapphires. But in the visual universe of BenZenith, color is first and foremost "the breath of the earth" - the authentic hues tempered by the wind and sand of the West over millions of years. We reject the industrially synthesized, over-saturated visual stimuli. Instead, we look back to the land that endowed us with our soul - Shanshan, Xinjiang. There, colors are not mixed; they are grown.</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-3.png" alt="Dunhuang umber and Yardang red illustration" class="w-full rounded-md" />
      </figure>
      <h4>Dunhuang Umber: The Undertone of Compassion and Grace</h4>
      <p>It is the quietude of cave murals after a millennium of oxidation, and the chromatic embodiment of "Grace" in BenZenith's DNA. This umber is not ostentatious; it holds a compassion that embraces all things. In our creations, this color is often presented through warm-textured wood, deep tea-colored rough stones, or metals treated with special oxidation. It symbolizes an "inward-seeking" power - as our brand philosophy states, "Grace is the origin of all things." Only with a heart as grounded in Grace as the earth itself can one maintain stability amidst the noise.</p>
      <h4>Yardang Red: Free Will Burning in the Vastness</h4>
      <p>When the setting sun hits the Yardang landforms of the Kumtag Desert, that red is an ochre carrying the scent of soil, an earthen red bursting with the tension of life. It is not delicate like a rose, but possesses a stubbornness that the wind cannot erode. This "Yardang Red" represents the "Free Will" of the BenZenith spirit. It is the freedom realized by our founder, Mr. Gao Lianchang, on the Gobi in 1940: Will is like fire; even in the most desolate circumstances, it can burn freely because of Grace. In selecting gemstones, we favor red minerals with natural geological features, preserving their imperfect textures, for those are the traces of free growth.</p>
      <h4>The Logic of Counter-Industrial Color: Letting Geology Speak</h4>
      <p>BenZenith's color philosophy is "counter-industrial." We revere earth tones because these colors contain the traces of minerals, metal oxides, and their game with time.</p>
      <ul>
        <li><strong>Rock Grey:</strong> It is the backbone of time, a cold sternness undefined by the outside world.</li>
        <li><strong>Shifting Sand Gold:</strong> It is the flowing will, a visual extension of the philosophy of "Listening to Water."</li>
      </ul>
      <h4>Where Will Becomes Fulfillment, Color Becomes the Heart</h4>
      <p>Follow the Grace within, like the wind of the West. In colors that belong to you, find your freedom. <strong>Hearken to Grace, Let Will Embrace.</strong></p>
    `.trim(),
  },
  {
    title:
      "Clad in the Silence of the Gobi: Constructing a Wearable \"Spiritual Sanctuary\" in a Noisy Era",
    contentHtml: `
      <p>Modern life is a ceaseless rush. Amidst the glittering skylines of the CBD and the endless stream of social signals, we seem to possess everything, yet we have lost the one thing that matters most: serenity. BenZenith believes that jewelry should not merely be a medal worn in the social arena. It should be a shield - an unshakeable "Spiritual Sanctuary."</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-4.png" alt="Clad in the silence of the Gobi illustration" class="w-full rounded-md" />
      </figure>
      <h4>Return to the Source: Beginning with the Great Silence of 1940</h4>
      <p>The inspiration for this "sanctuary" stems from the brand's origins in the West. On the vast expanse of the Gobi in Shanshan, Xinjiang, wind and silence are eternal themes. It was there, in 1940, amidst the extreme desolation, that our founder, Mr. Gao Lianchang, heard the true voice within. To wear BenZenith is to touch a steadfastness that spans over eighty years. We select Malachite, warm Chalcedony, and metals bearing geological textures. They possess a physical weight - a "grounding gravity" - that instantly pulls you from floating anxiety back to solid ground. It is the reassuring feeling of "Returning to the Source."</p>
      <h4>Hearken to Grace: Jewelry as the Anchor of the Soul</h4>
      <p>The visual theme for BenZenith 2025-2026 is "Hearken to Water." Water is soft yet yielding, rigid yet fluid; it always finds its path through the hardest rock. In our philosophy, this resilient power is Grace. When you find yourself in complex relationships or high-pressure environments, your fingertips might subconsciously caress the "Cloud Return" glazed stone at your neck, or trace the arc of the "Fan of Will." This is not a fidget; it is an intimate dialogue. In that moment, jewelry is no longer decoration. It is your totem, a silent reminder to <strong>Hearken to Grace, Let Will Embrace.</strong> External judgments may pass like fleeting clouds, but the Grace and freedom within you remain the only sanctuary that truly stands firm.</p>
    `.trim(),
  },
  {
    title:
      "The Choice of the Global Chinese Community: Why \"Eastern Philosophy\" Resonates in Singapore",
    contentHtml: `
      <p>Recently, <em>https://www.google.com/search?q=China.com</em> published a special feature titled <em>"The Singaporean Diaspora Votes: The Most Favorite Cultural Jewelry Brand."</em> As a homegrown brand deeply cultivated in Singapore, BenZenith is profoundly honored to receive this deep recognition from the Chinese community both at home and abroad. This is not merely an accolade for our design aesthetics; it is a shared resonance - a mutual journey between "Eastern Philosophy" and "The Aesthetics of Life."</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-5.png" alt="Source: China.com" class="w-full rounded-md" />
      </figure>
      <h4>Rooted in the Lion City: The Cultural Consciousness of a Singaporean Brand</h4>
      <p>Singapore is a unique highland where diverse cultures converge. We grew here, and we contemplate the world from here. The results of this vote make us deeply feel that our brand DNA rooted in the Lion City - an expression that is inclusive, modern, and brimming with Eastern wisdom - is echoing precisely with the hearts of the contemporary Chinese community.</p>
      <h4>Originating in 1940: Wearable Philosophy and the Legacy of Grace</h4>
      <p>The story of BenZenith begins in 1940. In Shanshan, Xinjiang, our artisan founder Gao Lianchang realized the truth that "Grace is the origin of all things." This wisdom has been passed down to this day, sedimenting into the BenZenith spirit: <strong>Hearken to Grace, Let Will Embrace.</strong> We have always believed that jewelry should not be cold decoration, but rather "Wearable Philosophy."</p>
      <ul>
        <li><strong>Highest Grace is Like Water, Strength Meets Gentleness:</strong> Our product design philosophy draws from traditional imagery. Through minimalist and powerful lines, we present the flexibility of water and the resilience to penetrate stone.</li>
        <li><strong>Where Will Becomes Fulfillment:</strong> Whether it is the "Fan of Will" collection symbolizing free-spirited elegance, or the "Blessed Light" collection embodying Zen wisdom, we hope every wearer can find the power to "Listen to the heart and move forward freely" within these vessels.</li>
      </ul>
      <h4>The Certainty of Slow Value: Sedimenting Aesthetics in a Restless Era</h4>
      <p>In an era where fast consumerism prevails, BenZenith chooses to be an "Anchor of Slow Value." We respect the spirit of craftsmanship, insisting on infusing Eastern Zen into every piece with masterpiece-level precision. This honor received in Singapore belongs not only to the brand but to all friends who believe in the logic of a life that is "Slow yet Valuable." Thank you to every kindred spirit who has encountered BenZenith in the Lion City. In the future, we will continue to take culture as our source and Grace as our foundation, using contemporary wisdom to write the next chapter of Eastern romance. May every bit of Grace find its true home in the luster of our jewelry.</p>
    `.trim(),
  },
  {
    title:
      "[Suchness of Self®] Mirroring the Heart's Intent through the Myriad Forms of Culture",
    contentHtml: `
      <p>In the philosophical universe of BenZenith, jewelry should not be mere shimmering ornamentation, but a mirror. With "Hearken to Water" as our visual theme for 2025-2026, we have unveiled our core collection - "Suchness of Self." Inspired by the "Myriad Forms of Culture," this collection employs a minimalist yet dynamic modern design language to transform intangible Eastern philosophy into tangible, wearable art.</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-6.png" alt="Suchness of Self collection illustration" class="w-full rounded-md" />
      </figure>
      <h4>This "Ease" Stems from Listening to the Heart</h4>
      <p>The collection's name is derived from the concept of "Suchness" (Tathata) in Buddhism and Eastern philosophy. It represents the authentic state of things - unadorned and unswayed by external circumstances. We observe the posture of flowing water, the undulation of clouds, and the cycles of growth and decay in nature, distilling these "myriad forms" into the silhouettes of our jewelry. When worn, these pieces are not merely art; they are extensions of your inner aspirations. The "form" you choose reflects the realm your heart desires to reach.</p>
      <h4>Masterpiece-Level Craftsmanship: The Steadfastness of Slow Value</h4>
      <p>Every piece in the "Suchness of Self" collection upholds the artisan spirit BenZenith has inherited since 1940. We insist on "Handmade Precision," pouring our understanding of Grace into every curve and every minute setting. We do not pursue industrial efficiency. Instead, through the warmth of this "Slow Value," we seek to provide a grounding force for the wearer in a restless era.</p>
      <h4>Epilogue: Amidst the Myriad Graces, Hear Your Own</h4>
      <p><strong>"Hearken to Grace, Let Will Embrace."</strong> The "Suchness of Self" collection is a tribute not only to culture but to every independent spirit. May you find your own steadfastness and ease within these jewels that carry the myriad forms of the world.</p>
    `.trim(),
  },
];

const jaArticles: NewsArticleTranslation[] = [
  {
    title: "西域手札：ゴビの静寂の中で、自由の形を聴く",
    contentHtml: `
      <p>もし音に形があるなら、都市では騒がしい波紋であり、西域のゴビでは、風が雅丹地貌を刻むときに残す荒々しい弧となる。BenZenith本鄯の物語は、華やかな名利の舞台ではなく、1940年の新疆・鄯善から始まった。そこはクムタグ砂漠の縁であり、風と岩のせめぎ合いの場だ。私たちの初代職人・高連昌は、この大いなる静寂の中で「善は万物の本源である」という真理に到達した。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-1.png" alt="西域手札のイメージ" class="w-full rounded-md" />
      </figure>
      <h4>鄯善から世界へ：「蒼茫の美学」の誕生</h4>
      <p>現代の工業がラインであらゆる角を削り取ろうとするとき、私たちは足元の粗くざらついた大地を見つめ直す。西域の美は「大きさ」にある。天は高く地は広く、極限の環境は余分な装飾を剥ぎ取り、最も強靭な核だけを残す。BenZenith本鄯のジュエリー美学は、この「西域の蒼茫感」に根ざしている。それは繊細で脆い装飾ではなく、歳月の風化が沈殿させた力だ。私たちが考える上質さとは、素材に残る一抹の「野性」の温もりである。和田玉が幾千万回の流水の磨きにも耐えて靭性を保つように、私たちは「剛と柔の均衡」を追求する。それは単なるデザイン言語ではなく、西域の大地が授けた生存の啓示である。</p>
      <h4>風を刃に、自由を刻む</h4>
      <p>西域では、風は水の別の姿だ。形のない風は万物を刻み、骨のない水は頑石を穿つ。この「流動と力」への理解は、「随心扇（Fan of Will）」シリーズに結晶化している。扇は風の器であり、心意の指揮棒だ。極簡で流れるようなラインは扇の洒脱さに由来しながら、ゴビに連なる砂丘の稜線――風が残した痕跡、自由の形――にも重なる。それを身にまとうことは装飾のためだけではない。鉄筋コンクリートの森に生きる現代の女性へのトーテムだ。<strong>心が自由なら、どこも広大な天地ではないか。</strong></p>
      <h4>精神の避難所：「本善」への回帰</h4>
      <p>速度を求めざるを得ない時代に、私たちは「生活の笃定者」でありたい。財道と乾坤を宿す「宝葫芦」や「聚宝盆」、雲のように淡い「云舟」――本鄯の作品は、いずれも西域から持ち帰ったひと掬いの「本善」である。私たちは古来の素材――温潤な玉髄、深い黒瑪瑙、流光の白蝶貝――を用い、時間と信仰の大きな物語を載せる。これらの素材は地質の記憶を宿し、滄海桑田を見届けてきたゆえに、情緒を地に戻す「手応え」を持つ。喧騒の中で首元のジュエリーに触れたとき、1940年のゴビの静寂を感じてほしい。</p>
    `.trim(),
  },
  {
    title: "三億年の邂逅：「善により自由となる」意志が受け継がれるとき",
    contentHtml: `
      <p>人の一生は百年ほど。しかし私たちの手にするジュエリーは、三億年の地質の旅を経ている。ラグジュアリーを語るとき、私たちは工芸やカラット、デザイン流派を語りがちだ。しかし本鄯（BenZenith）の哲学では「時間」を語る。物理的な時間だけでなく、意志と精神が時の長河で受け渡されることだ。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-2.png" alt="三億年の邂逅のイメージ" class="w-full rounded-md" />
      </figure>
      <h4>地質の皺は、時間のしるし</h4>
      <p>ファスト消費の時代に、すべては「新品」を追い求める。私たちは地質的な特徴を宿す素材――玉髄の温もり、瑪瑙の紋理、金石の重み――を選ぶ。これらは工業的な標準品ではなく、大地が億万年の造山運動、火山噴火、河床の浸食によって残した「舍利」だ。本鄯の物語は1940年の新疆・鄯善に始まる。蒼茫たる西域のゴビは、それ自体が露わな地質史の書だ。私たちがこれらの素材を選ぶとき、それは創作であると同時に、大地の手から重い「時間の信物」を受け取ることでもある。</p>
      <h4>意志の継承：善により、自由</h4>
      <p>ジュエリーは物質の継承だけでなく、精神の「ノアの方舟」でもある。1940年、職人・高連昌は鄯善で「善は万物本源」という真理に至った。それは弱い善ではなく、澄んだ心から生まれる無畏の力だ。今日まで受け継がれてきた「善により自由となる」精神は、本鄯の魂となっている。</p>
      <h4>時間の長期主義者になる</h4>
      <p>本鄯は「慢価値」を信じる。せっかちな世界の中で、私たちは「不器用な守望者」でありたい。「ゆっくり」をもって心を養い、文化への敬意で一つ一つの作品を磨き上げる。深い文化内涵と真摯な感情を宿すジュエリーだけが、時間との対話に参加できると私たちは知っている。あなたが時間に残すものは、「善意に耳を傾け、意のままに歩む」その美しい姿勢だ。</p>
    `.trim(),
  },
  {
    title:
      "敦煌褐から雅丹紅へ：天地のパレットから取った色、善により自由となる意志の表現",
    contentHtml: `
      <p>ジュエリーの世界では、色はしばしば序列を与えられる。ルビーの熱、サファイアの高貴。しかし本鄯（BenZenith）の視覚宇宙において、色はまず「大地の呼吸」であり、西域の風砂が千万年かけて鍛えた本真の色だ。私たちは工業的に合成された過度に飽和した刺激を拒み、魂を授けた土地――新疆・鄯善――へと回帰する。そこでの色は配合されたものではなく、育まれたものだ。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-3.png" alt="敦煌褐と雅丹紅のイメージ" class="w-full rounded-md" />
      </figure>
      <h4>敦煌褐：慈悲と善意の底色</h4>
      <p>それは石窟壁画が千年の酸化を経て得た静けさであり、BenZenith本鄯のブランド遺伝子に宿る「善」の色でもある。控えめな褐色だが、万物を包み込む慈悲を持つ。私たちの作品では、温润な木質、深い茶色の原石、あるいは特殊な酸化処理を施した金属でこの色を表現する。それは「内へ向かう」力を象徴する――ブランドの哲学が語るように、「善は万物本源」。心が大地のように厚い善意を持ってこそ、喧騒の中でも定力を保てる。</p>
      <h4>雅丹紅：蒼茫の中で燃える自由意志</h4>
      <p>クムタグ砂漠の雅丹地貌に斜陽が差すとき、その赤は土の香りを帯びた赭石の赤、生命の張力を宿す土紅だ。薔薇のような華やかさではないが、風でも侵食できない頑固さがある。この「雅丹紅」は本鄯精神の「自由意志」を象徴する。1940年のゴビで高連昌が悟った自在――意志は火のように、最も荒涼な境遇でも善により自由に燃える。宝石の選定では、自然の地質特征を持つ赤系の鉱石を好み、不完全な紋理を残す。それこそが自由に育った痕跡だからだ。</p>
      <h4>反工業的な色の論理：地質の声を聞く</h4>
      <p>本鄯の色彩哲学は「反工業化」である。私たちが大地色系を尊ぶのは、これらの色に鉱物質、金属酸化物、そして時間の駆け引きの痕跡が含まれているからだ。</p>
      <ul>
        <li><strong>岩石灰：</strong> 時間の背骨であり、外界に定義されない冷峻さ。</li>
        <li><strong>流沙金：</strong> 流動する意志であり、「聴水」哲学の視覚的延長。</li>
      </ul>
      <h4>意行成願、色彩は心願</h4>
      <p>内なる善意に従い、西域の風のように、自分の色の中で、善により自由となる。</p>
    `.trim(),
  },
  {
    title:
      "ゴビの静寂を纏う：喧騒の時代に、身にまとう「精神の避難所」を築く",
    contentHtml: `
      <p>現代生活は終わりのない奔走だ。きらびやかなCBD、尽きることのない社交の信号の中で、私たちはすべてを手にしたようでいて、ただ「安寧」だけを失っている。本鄯（BenZenith）は、ジュエリーは社交の勲章であるべきではなく、むしろ盾――揺るがない「精神の避難所」であるべきだと考える。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-4.png" alt="ゴビの静寂のイメージ" class="w-full rounded-md" />
      </figure>
      <h4>原点への回帰：1940年の大いなる静寂から</h4>
      <p>この「避難所」の着想は、ブランド遺伝子にある1940年の西域の記憶から生まれた。新疆・鄯善の広大なゴビでは、風砂と静寂が永遠のテーマだ。初代職人・高連昌は極限の荒涼の中で、内なる声を聴いた。本鄯のジュエリーを身につけることは、八十余年を超える定力に触れることでもある。私たちは孔雀石、温润な玉髄、地質の肌理を持つ金属を選ぶ。それらは物理的な「圧手感」を持ち、漂う不安を瞬時に地へ引き戻す。「原点への回帰」の確かさだ。</p>
      <h4>善意に耳を傾ける：ジュエリーは心の「定海神針」</h4>
      <p>本鄯2025-2026のビジュアルテーマは「聴水（Hearken to Water）」だ。水は至柔にして至剛、岩の間にも必ず道を見つける。私たちの哲学では、その力こそが「善意」。複雑な人間関係や高圧の環境に置かれたとき、指先が無意識に首元の「云帰」琉璃を撫でたり、「随心扇」の弧をなぞったりする。それは私的な対話だ。その瞬間、ジュエリーは装飾ではなく、あなたのトーテムになる。<strong>「善意に耳を傾け、意のままに歩む」</strong>　外界の評価は流雲のように過ぎ去り、内なる善と自由こそが揺るがぬ避難所となる。</p>
    `.trim(),
  },
  {
    title: "海外華人の選択：なぜ「東方の哲思」がシンガポールで響くのか？",
    contentHtml: `
      <p>近日、中华网は「新加坡海外华人票选『最喜爱的文化珠宝品牌』」の特集を掲載した。シンガポールに根ざす本土ブランドとして、本鄯（BenZenith）は海内外の華人コミュニティからの深い認知を得られたことを大変光栄に思う。これはデザイン美学への賛辞にとどまらず、「東方の哲思」と「生活美学」の双方向の共鳴でもある。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-5.png" alt="中华网掲載のイメージ" class="w-full rounded-md" />
      </figure>
      <h4>獅城に根ざす：シンガポール・ブランドとしての文化的自覚</h4>
      <p>シンガポールは多元文化が交差する独特の高地だ。私たちはここで成長し、ここで思考する。今回の票選結果は、獅城に根ざしたブランド遺伝子――包容的で現代的、そして東方の知恵に満ちた表現――が、当代華人の心に正確に響いていることを示している。</p>
      <h4>1940年に始まる：身にまとう哲学と「善」の継承</h4>
      <p>本鄯の物語は1940年に始まる。職人・高連昌は新疆・鄯善で「善は万物本源」という真理に到達し、その智慧は今日まで受け継がれ、「善意に耳を傾け、意のままに歩む」というブランド精神となった。私たちは、ジュエリーは冷たい装飾ではなく、「身にまとう哲学」であるべきだと信じている。</p>
      <ul>
        <li><strong>上善は水の如く、剛柔並済：</strong> 伝統的な意象から着想し、極簡で力強い流線によって、水の柔韧さと石を穿つ強さを表現する。</li>
        <li><strong>意行成願、願は心に従う：</strong> 洒脱な自由を象徴する「随心扇」シリーズも、禅意の智慧を宿す「福光」シリーズも、器物の中で「心に耳を傾け、自在に前進する」力を見出してほしい。</li>
      </ul>
      <h4>慢価値の確かさ：浮躁な時代に美学を沈殿させる</h4>
      <p>ファスト消費が蔓延する時代に、本鄯は「慢価値の生活笃定者」であり続ける。私たちは匠人精神を尊び、東方の禅意を一点物級の手工精度へと注ぎ込む。シンガポールで得た栄誉は、ブランドだけでなく、「遅くとも価値ある」生活論理を信じるすべての友に捧げられる。獅城で本鄯と出会ってくれた知音に感謝を。これからも文化を源に、善意を本として、当代の知恵で東方のロマンスを綴っていく。あらゆる善意が、ジュエリーの流光の中で自分の帰処を見つけられますように。</p>
    `.trim(),
  },
  {
    title: "【本自在 Suchness of Self】文化の万象で、心の向かう先を映す",
    contentHtml: `
      <p>BenZenith本鄯の哲学において、ジュエリーはただの装飾ではなく、鏡である。2025-2026年、私たちは「聴水 Hearken to Water」を年間ビジュアルテーマとし、コアシリーズ「本自在 Suchness of Self」を順次発表した。本シリーズは「文化万象」を着想源に、極簡で張力のある現代デザイン言語で、無形の東方哲思を可視の着用芸術へと変換する。</p>
      <figure class="my-8">
        <img src="/benzenith/assets/news/news-6.png" alt="本自在シリーズのイメージ" class="w-full rounded-md" />
      </figure>
      <h4>この「自在」は、本心への傾聴から生まれる</h4>
      <p>「本自在」という名は、仏学と東方哲学における「如是（Suchness）」に由来する。物事の本真の姿を意味し、飾らず、境に左右されない。私たちは水の流れ、雲のうねり、草木の盛衰を観察し、これら自然の「万象」をジュエリーの輪郭へと抽出する。身にまとうとき、それはアートであるだけでなく、内なる志趣の延長となる。あなたが選ぶ「象」こそ、心が向かう境地だ。</p>
      <h4>一点物級の工芸：慢価値の確かさ</h4>
      <p>「本自在」シリーズの一つ一つは、1940年以来受け継がれてきた匠心を体現している。私たちは「手工精度」にこだわり、あらゆる曲線と微細な留めに「善」の理解を注ぎ込む。工業的な効率は追わない。温度のある「慢価値」によって、浮躁な時代に着用者の心を安定させる力を届けたい。</p>
      <h4>結語：万千の善の中で、あなたの善意を聴く</h4>
      <p>「Hearken to Grace, Let Will Embrace.」本自在シリーズは文化への敬意であると同時に、すべての独立した着用者への敬意でもある。文化万象を宿すジュエリーの中で、あなた自身の確かさと自在を見つけられますように。</p>
    `.trim(),
  },
];

const requireTranslation = (
  translation: NewsArticleTranslation | undefined,
  locale: "en" | "ja",
  index: number
) => {
  if (!translation) {
    throw new Error(
      `News translation missing for ${locale} at index ${index}.`
    );
  }
  return translation;
};

const baseCount = zhCnArticles.length;
const localeCounts = { en: enArticles.length, ja: jaArticles.length };

Object.entries(localeCounts).forEach(([locale, count]) => {
  if (count !== baseCount) {
    throw new Error(
      `News translations out of sync: expected ${baseCount} ${locale} articles, got ${count}.`
    );
  }
});

export const newsArticles: NewsArticle[] = zhCnArticles.map((article, index) => {
  const enTranslation = requireTranslation(enArticles[index], "en", index);
  const jaTranslation = requireTranslation(jaArticles[index], "ja", index);

  return {
    id: index + 1,
    translations: {
      "zh-CN": article,
      "zh-TW": article,
      en: enTranslation,
      ja: jaTranslation,
    },
  };
});

const normalizeLocale = (lang: string): NewsLocale => {
  if (lang === "en" || lang === "ja" || lang === "zh-TW") {
    return lang;
  }
  return "zh-CN";
};

export const getNewsArticles = (lang: string): NewsArticleContent[] => {
  const locale = normalizeLocale(lang);
  return newsArticles.map((article) => {
    const translation = article.translations[locale];
    return {
      id: article.id,
      title: translation.title,
      contentHtml: translation.contentHtml,
    };
  });
};

export const getNewsArticleById = (id: string | number, lang: string) =>
  getNewsArticles(lang).find((article) => article.id === Number(id));

export const getNewsArticleIds = () =>
  newsArticles.map((article) => article.id);
