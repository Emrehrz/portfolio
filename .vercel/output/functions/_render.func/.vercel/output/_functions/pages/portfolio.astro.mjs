/* empty css                                 */
import { e as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderTransition } from '../chunks/astro/server_BnOYrasF.mjs';
import 'kleur/colors';
import { P as PROJECTS } from '../chunks/constants_JtV5PcjC.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dv9V3SBe.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../chunks/BottomLayout_CGKOjtqB.mjs';
import { C as Card } from '../chunks/card_NXr7EzRv.mjs';
import { ArrowUpRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://Emrehrz.github.io");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const isLink = Tag === "a" && Boolean(href);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "target": isLink ? "_blank" : void 0, "rel": isLink ? "noopener noreferrer" : void 0, "class": `group block ${className ?? ""}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ShadcnCard", Card, { "className": `flex h-full flex-col overflow-hidden border bg-card shadow-sm transition duration-200 ease-out sm:flex-row ${isLink ? "cursor-pointer hover:-translate-y-0.5 hover:border-primary hover:shadow-lg" : ""}` }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="relative aspect-[16/10] w-full overflow-hidden sm:aspect-auto sm:w-2/5 sm:min-h-[220px]"> <img${addAttribute(imagePath, "src")}${addAttribute(altText, "alt")} class="h-full w-full object-cover object-top transition duration-300 ease-out group-hover:scale-[1.03]" loading="lazy"> </div> <div class="flex flex-1 flex-col gap-y-3 p-5 sm:p-6"> <h3 class="text-xl font-semibold leading-tight tracking-tight">${heading}</h3> <p class="text-sm leading-relaxed text-muted-foreground">${subheading}</p> ${isLink && renderTemplate`<span class="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
Siteyi ziyaret et
${renderComponent($$result3, "ArrowUpRight", ArrowUpRight, { "className": "h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })} </span>`} </div> ${renderSlot($$result3, $$slots["default"])} ` })} ` })}`;
}, "C:/projects/Emrehrz.github.io/src/components/ProjectCard.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const staticProjects = [
    {
      id: "fitmeup",
      heading: "Fitmeup",
      subheading: "Fitmeup is a client management and coaching platform that brings every stage of the fitness coaching process into a single system. By digitizing nutrition plans, workout programs, check-ins, and progress tracking, it reduces administrative workload for coaches while improving the overall client experience.",
      href: "https://fitmeup.com.tr/",
      imagePath: "/fitmeup-landing.png",
      altText: "Fitmeup landing page screenshot"
    },
    {
      id: "halil-yildiz-baharat",
      heading: "Halil Yildiz Baharat",
      subheading: "A storefront showcase website built to reflect the brand\u2019s identity, presenting products and shop information through a clean, structured, and user-friendly experience.",
      href: "https://www.halilyildizbaharat.com/",
      imagePath: "/halil-yildiz.png",
      altText: "Halil Yildiz Baharat website screenshot"
    },
    {
      id: "royal-motors",
      heading: "Royal Motors",
      subheading: "A workshop website developed for Royal Motors, showcasing automotive repair, electrical, and air conditioning services through a modern interface and a professional customer-focused experience.",
      href: "https://www.royalmotorss.com/",
      imagePath: "/royalmotors.png",
      altText: "Royal Motors website screenshot"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": PROJECTS.TITLE, "description": PROJECTS.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-[80vh] flex-auto flex-col"${addAttribute(renderTransition($$result2, "v6yisl25", "slide"), "data-astro-transition-scope")}> ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-y-2 border-b pb-5"> <h1 class="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0 sm:text-4xl">Projects</h1> <p class="max-w-2xl text-muted-foreground">Projects I have worked on.</p> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="flex w-full flex-col gap-6"> ${staticProjects.map((project) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "key": project.id, "href": project.href, "heading": project.heading, "subheading": project.subheading, "imagePath": project.imagePath, "altText": project.altText })}`)} </div> ` })} </main> ` })}`;
}, "C:/projects/Emrehrz.github.io/src/pages/portfolio.astro", "self");

const $$file = "C:/projects/Emrehrz.github.io/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
