// Menu, back-to-top, product carousel, enquiry list and the enquiry form.

const strings: Record<string, string> = JSON.parse(document.getElementById('i18n-strings')?.textContent || '{}');
const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

// ----- Header: slims down on scroll -----
const header = document.getElementById('header')!;
// The phone menu opens right below the bar, wherever the bar currently sits
const setHeaderH = () => document.documentElement.style.setProperty('--header-bottom', `${header.getBoundingClientRect().bottom}px`);
const onHeaderScroll = () => { header.classList.toggle('scrolled', scrollY > 40); setHeaderH(); };
addEventListener('scroll', onHeaderScroll, { passive: true });
addEventListener('resize', setHeaderH);
onHeaderScroll();

// ----- Collapse to the menu button when the links don't fit beside the centred logo -----
// (Thai and English labels need different widths, so measure rather than use a fixed breakpoint)
const nav = document.getElementById('mainNav')!;
const brand = header.querySelector('.brand')!;
function fitHeader() {
  header.classList.remove('compact');
  const tooNarrow = matchMedia('(max-width: 860px)').matches;
  const overflows = nav.scrollWidth > nav.clientWidth + 1 || nav.getBoundingClientRect().right > brand.getBoundingClientRect().left - 16;
  const compact = tooNarrow || overflows;
  header.classList.toggle('compact', compact);
  if (!compact) setMenu(false);
  setHeaderH();
}

// ----- Phone menu (full screen) -----
const menuBtn = document.getElementById('menuBtn')!;
const setMenu = (open: boolean) => {
  setHeaderH();
  header.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  document.documentElement.style.overflow = open ? 'hidden' : '';
  dispatchEvent(new CustomEvent('menu:toggle', { detail: open }));   // lets the smooth scroller pause
};
menuBtn.addEventListener('click', () => setMenu(!header.classList.contains('open')));
document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

fitHeader();
addEventListener('resize', fitHeader);
document.fonts?.ready.then(fitHeader);

// ----- Active section dot in the nav -----
const sectionLinks = [...document.querySelectorAll<HTMLAnchorElement>('#mainNav a[data-section]')];
const sectionObserver = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  sectionLinks.forEach(a => a.classList.toggle('active', a.hash === `#${e.target.id}`));
}), { rootMargin: '-45% 0px -50% 0px' });
sectionLinks.forEach(a => { const el = document.querySelector(a.hash); if (el) sectionObserver.observe(el); });

// ----- Back to top -----
const toTop = document.getElementById('toTop')!;
addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 700), { passive: true });
toTop.addEventListener('click', () => scrollTo({ top: 0 }));

// ----- Carousel -----
const track = document.getElementById('track')!;
const prev = document.querySelector<HTMLButtonElement>('.arrow.prev')!;
const next = document.querySelector<HTMLButtonElement>('.arrow.next')!;
const dotsEl = document.getElementById('dots')!;
const step = () => track.querySelector('.product')!.getBoundingClientRect().width + 24;
const pages = () => Math.round((track.scrollWidth - track.clientWidth) / step()) + 1;

function sync() {
  const max = track.scrollWidth - track.clientWidth;
  prev.disabled = track.scrollLeft <= 2;
  next.disabled = track.scrollLeft >= max - 2;
  const i = Math.round(track.scrollLeft / step());
  [...dotsEl.children].forEach((d, j) => d.classList.toggle('on', j === i));
}
function buildDots() {
  dotsEl.innerHTML = '';
  const n = pages();
  dotsEl.style.display = n > 1 ? '' : 'none';
  for (let i = 0; i < n; i++) {
    const b = document.createElement('button');
    b.setAttribute('aria-label', `${i + 1}`);
    b.addEventListener('click', () => track.scrollTo({ left: i * step() }));
    dotsEl.appendChild(b);
  }
  sync();
}
prev.addEventListener('click', () => track.scrollBy({ left: -step() }));
next.addEventListener('click', () => track.scrollBy({ left: step() }));
track.addEventListener('scroll', sync, { passive: true });
addEventListener('resize', buildDots);
buildDots();

// ----- Enquiry list: products added here show in the header count and prefill the form -----
const message = document.getElementById('message') as HTMLTextAreaElement;
const count = document.getElementById('count')!;
const list = new Set<string>();
const addButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-product]')];
const addLabel = addButtons[0]?.textContent ?? '';

addButtons.forEach(btn => btn.addEventListener('click', () => {
  const line = fill(strings.interested, { product: btn.dataset.product! });
  if (!list.has(line)) {
    list.add(line);
    message.value = (message.value ? message.value + '\n' : '') + line;
  }
  count.textContent = String(list.size);
  count.classList.add('show');
  btn.classList.add('added');
  btn.textContent = strings.added;
}));

// ----- Enquiry form (Formspree) -----
// Set PUBLIC_FORMSPREE_ID in .env (locally) and in the hosting dashboard (Vercel) to receive enquiries by email.
const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID as string | undefined;
const form = document.getElementById('enquiryForm') as HTMLFormElement;
const note = document.getElementById('formNote')!;
const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(form);
  const business = String(data.get('business') || '').trim();
  const contact = String(data.get('contact') || '').trim();
  if (!business || !contact) { note.textContent = strings.missing; return; }

  submit.disabled = true;
  submit.textContent = strings.sending;
  try {
    if (FORMSPREE_ID) {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
    } else {
      console.warn('PUBLIC_FORMSPREE_ID is not set, so this enquiry was not sent anywhere.');
    }
    note.textContent = fill(strings.thanks, { name: business });
    form.reset();
    list.clear();
    count.classList.remove('show');
    addButtons.forEach(b => { b.classList.remove('added'); b.textContent = addLabel; });
  } catch {
    note.textContent = strings.error;
  } finally {
    submit.disabled = false;
    submit.textContent = strings.send;
  }
});
