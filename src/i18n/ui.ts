// All interface text, in English and Thai. Product names and descriptions live in src/content/products.
export const languages = { en: 'EN', th: 'TH' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Paul & Kate — Happy no guilty',
    'meta.description': 'Paul & Kate makes considered bakes for cafés, hotels, restaurants and gifting, including meringues, cookies, brownie crisps and Almond Mosaic.',
    'nav.story': 'Our Story',
    'nav.wholesale': 'Wholesale',
    'nav.contact': 'Contact',
    'nav.all': 'All Creations',
    'nav.meringues': 'Meringues',
    'nav.cookies': 'Cookies',
    'nav.brownie': 'Brownie Crisps',
    'nav.almond': 'Almond Mosaic',
    'nav.gifting': 'Wholesale & Gifting',
    'nav.menu': 'Menu',
    'nav.enquiryList': 'Enquiry list',
    'nav.enquire': 'Enquire',
    'bar.announce': 'Wholesale & gifting orders now open for cafés, hotels and companies.',
    'bar.cta': 'Request the menu',

    'hero.title': 'A little bit<br />cheat day',
    'hero.tagline': 'ขนมอบที่อร่อยอย่างมีความสุข ไม่รู้สึกผิด',
    'hero.copy': 'Meringues, cookies, brownie crisps and Almond Mosaic. Baked, not fried.',
    'cta.discover': 'Discover',

    'world.title': 'Discover the world of Paul & Kate',
    'tile.meringues': 'Meringues',
    'tile.bakedNotFried': 'Baked, not fried',
    'tile.signature': 'Signature',
    'tile.noSugar': 'No sugar',
    'tile.forCafes': 'For cafés & hotels',

    'creations.eyebrow': 'Our creations',
    'creations.title': 'Indulgent, never guilty',
    'product.add': 'Add to enquiry',
    'product.added': 'Added',
    'carousel.prev': 'Previous',
    'carousel.next': 'Next',

    'banner.title': 'The story of Almond Mosaic',

    'story.eyebrow': 'Origin & story',
    'story.title': 'A tile from the French countryside',
    'story.p1': 'Almond Mosaic is inspired by <span class="word">tuiles aux amandes</span>, the almond tile cookies of traditional French bakeries.',
    'story.h2': 'Why “tuile”',
    'story.p2': 'Tuile means tile. The cookies were named after the curved terracotta roof tiles of country homes, because they were bent over curved rolling pins while still warm from the oven.',
    'story.h3': 'Why “mosaic”',
    'story.p3': 'Paper-thin almond slices are scattered by hand across a light, golden wafer. Once baked, the pattern looks like fine mosaic work, and it breaks with an ultra-crisp, feather-light snap.',

    'ing.eyebrow': 'Key ingredients',
    'ing.title': 'Six things, nothing more',
    'ing.1.t': 'Sliced almonds', 'ing.1.d': 'High-grade, finely sliced, for aroma and a delicate crunch.',
    'ing.2.t': 'Pure egg whites', 'ing.2.d': 'The base of a true tuile: crisp, airy, never greasy.',
    'ing.3.t': 'Pure butter', 'ing.3.d': 'Churned butter for a rich, golden aroma.',
    'ing.4.t': 'Cane sugar', 'ing.4.d': 'Unrefined sweetness that never overpowers.',
    'ing.5.t': 'Light wheat flour', 'ing.5.d': 'Only enough to bind, so it stays crisp.',
    'ing.6.t': 'Vanilla & sea salt', 'ing.6.d': 'To lift the butter and deepen the roast.',

    'how.eyebrow': 'Wholesale & gifting',
    'how.title': 'For cafés, hotels and gift boxes',
    'how.lede': 'Dessert is what your guests remember last. We bake it to be worth remembering.',
    'how.1.t': 'Introduce your business', 'how.1.d': 'Send a short enquiry with your business type and the volume you expect.',
    'how.2.t': 'Taste before you commit', 'how.2.d': '[SAMPLE POLICY, e.g. sample jar details and lead time]',
    'how.3.t': 'Order on your rhythm', 'how.3.d': '[DELIVERY TERMS, e.g. areas covered, order cut-off, frequency]',
    'how.4.t': 'Gift with your name', 'how.4.d': '[GIFTING OPTIONS, e.g. custom labels, ribbons, minimums]',

    'enq.title': 'Put a little cheat day on your menu',
    'enq.perk1': '<b>Request</b> our wholesale menu and pricing',
    'enq.perk2': '<b>Taste</b> our creations before you commit',
    'enq.perk3': '<b>Be first</b> to hear about new creations',
    'enq.business': 'Business name (required)',
    'enq.type': 'Type of business',
    'enq.contact': 'Email or LINE ID (required)',
    'enq.message': 'Products, quantities, timing…',
    'enq.types': ['Café or coffee shop', 'Hotel or restaurant', 'Corporate gifting', 'Retail or convenience', 'Personal order', 'Other'],
    'enq.send': 'Send enquiry',
    'enq.sending': 'Sending…',
    'enq.missing': 'Please add your business name and a way to reach you.',
    'enq.thanks': 'Thank you, {name}. We’ll be in touch shortly.',
    'enq.error': 'Something went wrong. Please try again, or message us on LINE.',
    'enq.interested': 'Interested in {product}.',

    'assure.label': 'Our promise',
    'assure.1.t': 'Homemade recipes', 'assure.1.d': 'Baked in small batches',
    'assure.2.t': 'Baked, not fried', 'assure.2.d': 'Light, crisp and never greasy',
    'assure.3.t': 'Wholesale & gifting', 'assure.3.d': 'Cafés, hotels, corporate',
    'assure.4.t': 'Delivery', 'assure.4.d': '[DELIVERY AREAS]',

    'foot.know': 'Know more', 'foot.story': 'Our story', 'foot.ingredients': 'Ingredients', 'foot.how': 'How we work',
    'foot.creations': 'Creations',
    'foot.services': 'Our services', 'foot.wholesale': 'Wholesale', 'foot.gifting': 'Corporate gifting', 'foot.contactUs': 'Contact us',
    'foot.contact': 'Contact', 'foot.follow': 'Follow us',
    'foot.toTop': 'Back to top',
  },
  th: {
    'meta.title': 'Paul & Kate — Happy no guilty',
    'meta.description': 'Paul & Kate ขนมอบสำหรับคาเฟ่ โรงแรม ร้านอาหาร และของขวัญ ทั้งเมอแรงค์ คุกกี้ บราวนี่กรอบ และอัลมอนด์โมเสก',
    'nav.story': 'เรื่องราวของเรา',
    'nav.wholesale': 'ขายส่ง',
    'nav.contact': 'ติดต่อ',
    'nav.all': 'ขนมทั้งหมด',
    'nav.meringues': 'เมอแรงค์',
    'nav.cookies': 'คุกกี้',
    'nav.brownie': 'บราวนี่กรอบ',
    'nav.almond': 'อัลมอนด์โมเสก',
    'nav.gifting': 'ขายส่งและของขวัญ',
    'nav.menu': 'เมนู',
    'nav.enquiryList': 'รายการสอบถาม',
    'nav.enquire': 'สอบถาม',
    'bar.announce': 'เปิดรับออร์เดอร์ขายส่งและของขวัญสำหรับคาเฟ่ โรงแรม และองค์กรแล้ว',
    'bar.cta': 'ขอเมนู',

    'hero.title': 'A little bit<br />cheat day',
    'hero.tagline': 'ขนมอบที่อร่อยอย่างมีความสุข ไม่รู้สึกผิด',
    'hero.copy': 'เมอแรงค์ คุกกี้ บราวนี่กรอบ และอัลมอนด์โมเสก อบ ไม่ทอด',
    'cta.discover': 'ดูเพิ่มเติม',

    'world.title': 'ค้นพบโลกของ Paul & Kate',
    'tile.meringues': 'เมอแรงค์',
    'tile.bakedNotFried': 'อบ ไม่ทอด',
    'tile.signature': 'ซิกเนเจอร์',
    'tile.noSugar': 'ไม่มีน้ำตาล',
    'tile.forCafes': 'สำหรับคาเฟ่และโรงแรม',

    'creations.eyebrow': 'ขนมของเรา',
    'creations.title': 'อร่อยได้ ไม่รู้สึกผิด',
    'product.add': 'เพิ่มในรายการสอบถาม',
    'product.added': 'เพิ่มแล้ว',
    'carousel.prev': 'ก่อนหน้า',
    'carousel.next': 'ถัดไป',

    'banner.title': 'เรื่องราวของอัลมอนด์โมเสก',

    'story.eyebrow': 'ที่มาและเรื่องราว',
    'story.title': 'กระเบื้องจากชนบทฝรั่งเศส',
    'story.p1': 'อัลมอนด์โมเสกได้แรงบันดาลใจจาก <span class="word">tuiles aux amandes</span> คุกกี้อัลมอนด์รูปกระเบื้องของร้านเบเกอรี่ดั้งเดิมในฝรั่งเศส',
    'story.h2': 'ทำไมถึงชื่อ “ตุยล์”',
    'story.p2': 'คำว่า tuile แปลว่ากระเบื้อง ตั้งชื่อตามกระเบื้องดินเผาโค้งบนหลังคาบ้านในชนบทฝรั่งเศส เพราะคุกกี้จะถูกวางบนไม้คลึงแป้งทรงโค้งขณะยังอุ่นจากเตา',
    'story.h3': 'ทำไมถึงชื่อ “โมเสก”',
    'story.p3': 'อัลมอนด์สไลซ์บางเฉียบถูกโรยด้วยมือบนแผ่นแป้งบางสีทอง เมื่ออบเสร็จลวดลายจะดูเหมือนงานโมเสกอันประณีต และให้ความกรอบเบาทุกคำ',

    'ing.eyebrow': 'วัตถุดิบหลัก',
    'ing.title': 'เพียงหกอย่าง ไม่มีอะไรเกินจำเป็น',
    'ing.1.t': 'อัลมอนด์สไลซ์', 'ing.1.d': 'อัลมอนด์คุณภาพสูงสไลซ์บาง หอมและกรอบละมุน',
    'ing.2.t': 'ไข่ขาวแท้', 'ing.2.d': 'หัวใจของตุยล์แท้ กรอบ โปร่ง ไม่อมน้ำมัน',
    'ing.3.t': 'เนยแท้', 'ing.3.d': 'เนยคุณภาพดี ให้กลิ่นหอมสีทอง',
    'ing.4.t': 'น้ำตาลอ้อย', 'ing.4.d': 'ความหวานธรรมชาติที่ไม่กลบรสชาติ',
    'ing.5.t': 'แป้งสาลีเล็กน้อย', 'ing.5.d': 'ใช้เพียงเพื่อยึดเกาะ จึงยังคงความกรอบ',
    'ing.6.t': 'วานิลลาและเกลือทะเล', 'ing.6.d': 'ช่วยชูกลิ่นเนยและรสอัลมอนด์คั่ว',

    'how.eyebrow': 'ขายส่งและของขวัญ',
    'how.title': 'สำหรับคาเฟ่ โรงแรม และกล่องของขวัญ',
    'how.lede': 'ของหวานคือสิ่งสุดท้ายที่แขกจะจดจำ เราจึงอบให้คุ้มค่าแก่การจดจำ',
    'how.1.t': 'แนะนำธุรกิจของคุณ', 'how.1.d': 'ส่งข้อความสั้น ๆ บอกประเภทธุรกิจและปริมาณที่ต้องการ',
    'how.2.t': 'ชิมก่อนตัดสินใจ', 'how.2.d': '[นโยบายตัวอย่างสินค้า เช่น รายละเอียดกระปุกตัวอย่างและระยะเวลา]',
    'how.3.t': 'สั่งตามจังหวะของคุณ', 'how.3.d': '[เงื่อนไขการจัดส่ง เช่น พื้นที่ เวลาปิดรับออร์เดอร์ ความถี่]',
    'how.4.t': 'ของขวัญในชื่อของคุณ', 'how.4.d': '[ตัวเลือกของขวัญ เช่น ฉลากพิเศษ ริบบิ้น จำนวนขั้นต่ำ]',

    'enq.title': 'เติม cheat day เล็ก ๆ ลงในเมนูของคุณ',
    'enq.perk1': '<b>ขอ</b>เมนูและราคาขายส่ง',
    'enq.perk2': '<b>ชิม</b>ขนมของเราก่อนตัดสินใจ',
    'enq.perk3': '<b>รู้ก่อนใคร</b>เมื่อมีขนมใหม่',
    'enq.business': 'ชื่อธุรกิจ (จำเป็น)',
    'enq.type': 'ประเภทธุรกิจ',
    'enq.contact': 'อีเมลหรือ LINE ID (จำเป็น)',
    'enq.message': 'สินค้า จำนวน และช่วงเวลาที่ต้องการ…',
    'enq.types': ['คาเฟ่หรือร้านกาแฟ', 'โรงแรมหรือร้านอาหาร', 'ของขวัญองค์กร', 'ร้านค้าปลีก', 'สั่งส่วนตัว', 'อื่น ๆ'],
    'enq.send': 'ส่งข้อความ',
    'enq.sending': 'กำลังส่ง…',
    'enq.missing': 'กรุณากรอกชื่อธุรกิจและช่องทางติดต่อ',
    'enq.thanks': 'ขอบคุณ {name} เราจะติดต่อกลับโดยเร็ว',
    'enq.error': 'เกิดข้อผิดพลาด กรุณาลองใหม่ หรือติดต่อเราทาง LINE',
    'enq.interested': 'สนใจ {product}',

    'assure.label': 'คำมั่นของเรา',
    'assure.1.t': 'สูตรโฮมเมด', 'assure.1.d': 'อบทีละน้อย',
    'assure.2.t': 'อบ ไม่ทอด', 'assure.2.d': 'เบา กรอบ ไม่อมน้ำมัน',
    'assure.3.t': 'ขายส่งและของขวัญ', 'assure.3.d': 'คาเฟ่ โรงแรม องค์กร',
    'assure.4.t': 'จัดส่ง', 'assure.4.d': '[พื้นที่จัดส่ง]',

    'foot.know': 'รู้จักเรา', 'foot.story': 'เรื่องราวของเรา', 'foot.ingredients': 'วัตถุดิบ', 'foot.how': 'วิธีการทำงาน',
    'foot.creations': 'ขนมของเรา',
    'foot.services': 'บริการ', 'foot.wholesale': 'ขายส่ง', 'foot.gifting': 'ของขวัญองค์กร', 'foot.contactUs': 'ติดต่อเรา',
    'foot.contact': 'ติดต่อ', 'foot.follow': 'ติดตามเรา',
    'foot.toTop': 'กลับขึ้นด้านบน',
  },
} as const;

type Key = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return function t<K extends Key>(key: K): (typeof ui)['en'][K] {
    return (ui[lang][key] ?? ui[defaultLang][key]) as (typeof ui)['en'][K];
  };
}

/** Pick the right language from a { en, th } content field */
export const pick = (field: { en: string; th: string }, lang: Lang) => field[lang] ?? field.en;
