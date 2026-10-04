// Menu, back-to-top, product carousel, enquiry list and the enquiry form.

const strings: Record<string, string> = JSON.parse(document.getElementById('i18n-strings')?.textContent || '{}');
const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

// ----- Mobile menu -----
const header = document.getElementById('header')!;
const menuBtn = document.getElementById('menuBtn')!;
menuBtn.addEventListener('click', () => menuBtn.setAttribute('aria-expanded', String(header.classList.toggle('open'))));
document.querySelectorAll('#catNav a').forEach(a => a.addEventListener('click', () => header.classList.remove('open')));

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
