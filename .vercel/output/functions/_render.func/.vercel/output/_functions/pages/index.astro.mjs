/* empty css                                 */
import { e as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, f as renderSlot, F as Fragment, b as addAttribute } from '../chunks/astro/server_BnOYrasF.mjs';
import 'kleur/colors';
import { C as Card } from '../chunks/card_NXr7EzRv.mjs';
import { SquareArrowOutUpRight, File, Github, Linkedin, Mail } from 'lucide-react';
import { L as LINKS, S as STUDIES } from '../chunks/constants_JtV5PcjC.mjs';
import { B as Button, c as cn, $ as $$BaseLayout } from '../chunks/BaseLayout_Dv9V3SBe.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import moment from 'moment-timezone';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://Emrehrz.github.io");
const $$ContentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentCard;
  const { title, body } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2 class="z-20 m-0 text-xl font-bold">${title}</h2>`}${body && renderTemplate`<p class="m-0 text-base font-light">${body}</p>`}${renderSlot($$result2, $$slots["default"])}` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/ContentCard.astro", void 0);

const $$Astro = createAstro("https://Emrehrz.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, body, colSpan, rowSpan, href, colorText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ShadcnCard", Card, { "className": `card-animate transfor-y-[-40%] align-start perspective-1200 group group relative col-span-1 h-auto w-full flex-none transform justify-start overflow-hidden p-6 shadow-lg transition duration-75 ease-in-out ${colSpan || "md:col-span-2"} ${rowSpan || ""} ${href ? "cursor-pointer hover:border-primary" : ""}` }, { "default": ($$result2) => renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`block h-full w-full ${colorText || " "}`, "class")}> ${renderComponent($$result2, "SquareArrowOutUpRight", SquareArrowOutUpRight, { "className": "group-hover:text-primary position absolute right-6 ", "size": 20 })} ${renderComponent($$result2, "ContentCard", $$ContentCard, { "title": title, "body": body }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} </a>` : renderTemplate`${renderComponent($$result2, "ContentCard", $$ContentCard, { "title": title, "body": body }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })}`}` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/Card.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-4", "rowSpan": "md:row-span-5 lg:row-span-5 lg:row-start-1", "title": "About me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-2"> <p class="text-sm font-light">
A product-led generalist based in Turkiye. My journey runs from frontend into backend engineering and, lately, into applied AI, so I care as much about
      product and users as I do about clean, scalable architecture.
<br> <br>
My primary tools of choice include:
</p><ul class="list-inside list-disc"> <li>TypeScript & JavaScript</li> <li>Python</li> <li>C#</li> <li>Vue 3 & Vite</li> <li>Node.js</li> <li>Supabase & PostgreSQL</li> <li>LLM & RAG pipelines</li> <li>AWS</li> <li>Docker</li> </ul>  <p class="text-sm font-light">
Outside of code, I play electric guitar, lift weights, get lost in video games, and unwind with movies, series, and a good book.
</p> </div> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/AboutMe.astro", void 0);

const $$ContactsCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-4", "rowSpan": "md:row-span-4 lg:row-span-5 lg:row-start-6" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-full"> <header class="flex items-center"> <h1 class="text-xl font-bold text-foreground">Let's start working together!</h1> </header> <address class="mt-4 flex flex-col"> <h2 class="text-gray-500">Contact Details</h2> <p>horuzemre3@gmail.com</p> <p>İzmir, Turkiye</p> </address> <div class="mt-4 flex w-fit flex-col"> <h2 class="text-gray-500">Socials</h2> <ul> <li> <a${addAttribute(LINKS.linkedin, "href")} target="_blank">Linkedin</a> </li> <li> <a${addAttribute(LINKS.github, "href")} target="_blank">Github</a> </li> <li> <a${addAttribute(LINKS.instagram, "href")} target="_blank">Instagram</a> </li> </ul> </div> </div> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/ContactsCard.astro", void 0);

const $$CVCard = createComponent(($$result, $$props, $$slots) => {
  const PDF = "/cv.pdf";
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-1", "rowSpan": "md:row-span-4 lg:row-span-5 lg:row-start-4", "title": "CV" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-4 flex w-full justify-center"> <div class="flex w-full max-w-md flex-col gap-2 transition-all"> <object${addAttribute(`${PDF}#toolbar=0&navpanes=0&view=FitH`, "data")} type="application/pdf" class="h-72 w-full rounded-md border"> <embed${addAttribute(`${PDF}#toolbar=0&navpanes=0&view=FitH`, "src")} type="application/pdf" class="h-72 w-full rounded-md border"> <p class="p-4 text-sm text-muted-foreground">
Your browser can't display the PDF preview. Use the button below to open my resume.
</p> </object> <div class="mt-4 flex flex-col gap-2"> <p class="text-sm text-muted-foreground">Preview my resume above, or open the full PDF below.</p> <div class="mt-2 flex w-full items-center justify-center"> <a target="_blank"${addAttribute(PDF, "href")}> ${renderComponent($$result2, "Button", Button, {}, { "default": ($$result3) => renderTemplate`
Download resume
${renderComponent($$result3, "File", File, {})} ` })} </a> </div> </div> </div> </div> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/CVCard.astro", void 0);

const $$HobbyCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-2", "rowSpan": "md:row-span-2 lg:row-span-3 lg:row-start-[8]", "title": "Youtube", "href": LINKS.youtube }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full w-full flex-col"> <div> <img width="50" height="50" src="/me_tattoo.png" class="pointer-events-none absolute bottom-[-80px] right-[-110px] z-[-1] max-h-[300px] w-auto select-none opacity-50 md:relative md:bottom-auto md:right-auto md:z-auto md:opacity-100" alt="memoji of andres with a tattoo on his arm"> </div> <div> <p class="mt-2 text-sm text-muted-foreground">If you want to see my contents, you can follow me on Youtube.</p> </div> </div> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/HobbyCard.astro", void 0);

const $$IntroCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-3 lg:col-start-1 lg:col-span-3", "rowSpan": "md:row-span-4 lg:row-span-3 lg:row-start-1" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full w-full"> <div class="flex flex-col justify-start gap-6"> <div class="flex flex-col"> <h6 class="m-0 text-sm font-light text-gray-500">welcome</h6> <p class="m-0 text-xl font-light">
Hi, I'm <b class="font-bold">Emre HORUZ</b>, a backend-focused full-stack engineer building applied AI systems for real-world products. I love
          shipping fast and turning ideas into scalable products. <br>I'm also deeply into the startup ecosystem and follow its events closely. I joined the
          AI-supported entrepreneurship bootcamps, completed BTM commercialization mentorship cycles, and took part in BAMBU Step Up business-model workshops.
</p> </div> <div class="flex gap-4"> <a${addAttribute(LINKS.github, "href")} aria-label="github profile" target="_blank"> ${renderComponent($$result2, "Button", Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Github", Github, {})} <span class="sr-only">GitHub Profile</span> ` })} </a> <a${addAttribute(LINKS.linkedin, "href")} aria-label="linkeding profile" target="_blank"> ${renderComponent($$result2, "Button", Button, { "aria-label": "linkedin profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Linkedin", Linkedin, {})} <span class="sr-only">Linkedin Profile</span> ` })} </a> <a${addAttribute(LINKS.mail, "href")} aria-label="mail profile" target="_blank"> ${renderComponent($$result2, "Button", Button, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Mail", Mail, {})} <span class="sr-only">Email contact</span> ` })} </a> </div> </div> <img width="300" height="300" src="/me.png" class="pointer-events-none absolute bottom-[-20px] right-[-105px] z-[-1] max-h-[300px] w-auto select-none opacity-50 md:relative md:bottom-auto md:right-auto md:z-auto md:opacity-100" alt="memoji of andres plaza"> </div> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/IntroCard.astro", void 0);

const $$Pulse = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="relative flex h-3 w-3"> <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span> </span>`;
}, "C:/projects/Emrehrz.github.io/src/components/Pulse.astro", void 0);

const $$Now = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-2", "rowSpan": "md:row-span-2 lg:row-span-2 lg:row-start-6" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-2 flex w-full items-start justify-between"> <div class="flex flex-col"> <h2>Now</h2> <a href="https://sive.rs/nowff" target="_blank"> <span class="cursor-pointer text-xs text-gray-500">what's that ?</span> </a> </div> ${renderComponent($$result2, "Pulse", $$Pulse, {})} </div> <p class="text-xs">Co-Founder & Full-Stack Engineer at fitmeup, building applied AI systems.</p> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/Now.astro", void 0);

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

const $$StudyCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-3", "rowSpan": "md:row-span-1 lg:row-span-3 lg:row-start-[8]", "title": "Study" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-2 flex w-full flex-wrap items-center justify-center gap-2"> ${STUDIES.map((study) => renderTemplate`<a${addAttribute(study.link, "href")} target="__blank"> ${renderComponent($$result2, "Badge", Badge, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`${study.institution}` })} </a>`)} </div> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/StudyCard.astro", void 0);

const Timezone = ({ timezone }) => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone);
      setDateTime(now.format("dddd, DD MMMM YYYY [a] h:mm:ss A"));
    }, 1e3);
    return () => clearInterval(interval);
  }, [timezone]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: dateTime }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: "İzmir Turkiye tr" })
  ] });
};

const $$TimeZoneCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-2 lg:col-span-2 lg:col-start-2", "rowSpan": "md:row-span-2 lg:row-span-2 lg:row-start-4", "title": "Time zone" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TimeZoneV2", Timezone, { "timezone": "Turkey/\u0130zmir", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/projects/Emrehrz.github.io/src/components/sections/TimeZoneCardV2", "client:component-export": "default" })} ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/sections/TimeZoneCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Emre HORUZ - Full Stack Developer", "description": "Emre HORUZ - Full Stack Developer - Portfolio, Projects, CV, About Me, Contact, Timezone, Now, Experience, Study" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:grid-cols-4 lg:grid-rows-[repeat(10,minmax(0,1fr))] lg:gap-4"> ${renderComponent($$result2, "IntroCard", $$IntroCard, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "CVCard", $$CVCard, {})} ${renderComponent($$result2, "Now", $$Now, {})} ${renderComponent($$result2, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-3", "rowSpan": "md:row-span-2 lg:row-span-2 lg:row-start-6", "title": "Portfolio & Projects", "href": "/portfolio" })} ${renderComponent($$result2, "TimeZoneCard", $$TimeZoneCard, {})} ${renderComponent($$result2, "ContactsCard", $$ContactsCard, {})} <!-- <ExperienceCard /> --> ${renderComponent($$result2, "Card", $$Card, { "colSpan": "md:col-span-1 lg:col-start-1", "rowSpan": "md:row-span-1 lg:row-span-2 lg:row-start-[9]" }, { "default": ($$result3) => renderTemplate` <div class="flex h-full flex-col justify-between"> <blockquote class="mt-6 border-l-2 pl-6 italic">“Anything one man can imagine, other men can make real.”</blockquote> <p class="mt-2 text-xs">- Jules Verne</p> </div> ` })} ${renderComponent($$result2, "HobbyCard", $$HobbyCard, {})} ${renderComponent($$result2, "StudyCard", $$StudyCard, {})} </main> `, "loader": ($$result2) => renderTemplate`<div class="loader bg-darkslate-700 fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center text-3xl font-black uppercase text-neutral-50"></div>` })}`;
}, "C:/projects/Emrehrz.github.io/src/pages/index.astro", void 0);

const $$file = "C:/projects/Emrehrz.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
