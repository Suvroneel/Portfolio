import svgPaths from "./svg-r8ulop7n2e";
import imgPexelsArtemBeliaikin1832323RemovebgPreview1 from "figma:asset/cbc2713b6fd033f480a575f0a0f175bd3257c3c2.png";
import imgPexelsEllyFairytale38232071 from "figma:asset/43aed2cd6d1eda697ebdd81b9493257f358f1f41.png";
import imgRectangle7 from "figma:asset/2707c65ec2fc535bf240996f3128eccd66cb11c7.png";
import imgRectangle8 from "figma:asset/f898a47e5254b4952e607d1855c993d0faa54f1d.png";
import { imgPexelsArtemBeliaikin1832323RemovebgPreview } from "./svg-3w064";

function Image1() {
  return (
    <div className="absolute bottom-0 contents right-[-56.62px]" data-name="image">
      <div className="absolute bottom-0 h-[624.817px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-246.351px] mask-size-[771.833px_871.168px] right-0 w-[715.212px]" data-name="pexels-artem-beliaikin-1832323-removebg-preview" style={{ maskImage: `url('${imgPexelsArtemBeliaikin1832323RemovebgPreview}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.87%] left-[10.97%] max-w-none top-[-27.03%] w-[91.94%]" src={imgPexelsArtemBeliaikin1832323RemovebgPreview1} />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[624.817px] overflow-clip right-[-0.42px] top-0 w-[715.212px]" data-name="image">
      <div className="absolute bottom-0 h-[871.168px] right-[-56.62px] w-[771.833px]" data-name="yellow-bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 771.833 871.168">
          <path clipRule="evenodd" d={svgPaths.pf79d2f0} fill="var(--fill-0, #FDC435)" fillRule="evenodd" id="yellow-bg" />
        </svg>
      </div>
      <Image1 />
    </div>
  );
}

function TabDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tab / default">
      <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[27.814px] relative shrink-0 text-[#25282b] text-[17.88px]">About</p>
    </div>
  );
}

function TabDefault1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tab / default">
      <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[27.814px] relative shrink-0 text-[#25282b] text-[17.88px]">Projects</p>
    </div>
  );
}

function TabDefault2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tab / default">
      <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[27.814px] relative shrink-0 text-[#25282b] text-[17.88px]">Contacts</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex gap-[47.681px] items-start right-[119.63px] top-[13.91px]" data-name="nav">
      <TabDefault />
      <TabDefault1 />
      <TabDefault2 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[55.628px] left-0 right-[-0.42px] top-0" data-name="header">
      <p className="absolute font-['Comfortaa:Bold',sans-serif] font-bold leading-[1.8] left-[119.2px] text-[#25282b] text-[17.88px] top-[11.92px]">Madelyn Torff</p>
      <Nav />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[3.973px] items-center justify-center relative shrink-0" data-name="section-title">
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[71.521px] relative shrink-0 text-[#25282b] text-[47.681px] text-center">Projects</p>
      <div className="bg-[#fdc435] h-[3.973px] rounded-[1.987px] shrink-0 w-[99.335px]" />
    </div>
  );
}

function BotaoSecudario() {
  return (
    <div className="content-stretch flex items-start px-[23.84px] py-[7.947px] relative rounded-[23.84px] shrink-0" data-name="botão / secudário">
      <div aria-hidden="true" className="absolute border-[#25282b] border-[0.993px] border-solid inset-0 pointer-events-none rounded-[23.84px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#25282b] text-[17.88px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        View Project
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.84px] inset-[27.85%_7.84%_27.66%_10.17%] items-start">
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#25282b] text-[39.734px] w-[min-content] whitespace-pre-wrap">Project Name</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#828282] text-[17.88px] w-[min-content] whitespace-pre-wrap">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
      <BotaoSecudario />
    </div>
  );
}

function ProjectNfo() {
  return (
    <div className="bg-white h-[520.515px] relative shrink-0 w-[492.701px]" data-name="project-nfo">
      <Frame />
    </div>
  );
}

function Project() {
  return (
    <div className="content-stretch flex h-[520.515px] items-start overflow-clip relative rounded-[23.84px] shadow-[0px_5.96px_63.574px_0px_rgba(112,144,176,0.1)] shrink-0 w-[985.403px]" data-name="project1">
      <ProjectNfo />
      <div className="h-[522.502px] relative shrink-0 w-[492.701px]" data-name="pexels-elly-fairytale-3823207 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[187.86%] left-[-32.83%] max-w-none top-[-58.96%] w-[132.83%]" src={imgPexelsEllyFairytale38232071} />
        </div>
      </div>
    </div>
  );
}

function BotaoSecudario1() {
  return (
    <div className="content-stretch flex items-start px-[23.84px] py-[7.947px] relative rounded-[23.84px] shrink-0" data-name="botão / secudário">
      <div aria-hidden="true" className="absolute border-[#25282b] border-[0.993px] border-solid inset-0 pointer-events-none rounded-[23.84px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#25282b] text-[17.88px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        View Project
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.84px] inset-[30.44%_7.84%_30.25%_10.17%] items-start">
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#25282b] text-[39.734px] w-[min-content] whitespace-pre-wrap">Project Name</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#828282] text-[17.88px] w-[min-content] whitespace-pre-wrap">What was your role, your deliverables, if the project was personal, freelancing.</p>
      <BotaoSecudario1 />
    </div>
  );
}

function ProjectNfo1() {
  return (
    <div className="bg-white h-[520.515px] relative shrink-0 w-[492.701px]" data-name="project-nfo">
      <Frame1 />
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex h-[520.515px] items-start overflow-clip relative rounded-[23.84px] shadow-[0px_5.96px_63.574px_0px_rgba(112,144,176,0.1)] shrink-0" data-name="project2">
      <div className="h-[520.515px] relative shrink-0 w-[492.701px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle7} />
      </div>
      <ProjectNfo1 />
    </div>
  );
}

function BotaoSecudario2() {
  return (
    <div className="content-stretch flex items-start px-[23.84px] py-[7.947px] relative rounded-[23.84px] shrink-0" data-name="botão / secudário">
      <div aria-hidden="true" className="absolute border-[#25282b] border-[0.993px] border-solid inset-0 pointer-events-none rounded-[23.84px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#25282b] text-[17.88px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        View Project
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.84px] inset-[30.44%_7.84%_30.25%_10.17%] items-start">
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#25282b] text-[39.734px] w-[min-content] whitespace-pre-wrap">Project Name</p>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#828282] text-[17.88px] w-[min-content] whitespace-pre-wrap">You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
      <BotaoSecudario2 />
    </div>
  );
}

function ProjectNfo2() {
  return (
    <div className="bg-white h-[520.515px] relative shrink-0 w-[492.701px]" data-name="project-nfo">
      <Frame2 />
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex h-[520.515px] items-start overflow-clip relative rounded-[23.84px] shadow-[0px_5.96px_63.574px_0px_rgba(112,144,176,0.1)] shrink-0" data-name="project3">
      <ProjectNfo2 />
      <div className="h-[520.515px] relative shrink-0 w-[492.701px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle8} />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[79.468px] items-center justify-center left-[calc(50%-1.77px)] top-[767.86px]" data-name="projects">
      <SectionTitle />
      <Project />
      <Project1 />
      <Project2 />
    </div>
  );
}

function Subheadline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="subheadline">
      <p className="font-['Nunito:Regular',sans-serif] font-normal h-[107.282px] leading-[35.761px] relative shrink-0 text-[#828282] text-[23.84px] w-[482.768px] whitespace-pre-wrap">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#fdc435] content-stretch flex items-start px-[23.84px] py-[7.947px] relative rounded-[7.947px] shrink-0" data-name="button / primary">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#25282b] text-[17.88px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Projects
      </p>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="content-stretch flex items-start px-[23.84px] py-[7.947px] relative rounded-[7.947px] shrink-0" data-name="button / secondary">
      <div aria-hidden="true" className="absolute border-[#25282b] border-[1.987px] border-solid inset-0 pointer-events-none rounded-[7.947px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#25282b] text-[17.88px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        LinkedIn
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[11.92px] items-start relative shrink-0" data-name="buttons">
      <ButtonPrimary />
      <ButtonSecondary />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[31.787px] items-start relative shrink-0" data-name="content">
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold h-[152.976px] leading-[1.2] relative shrink-0 text-[#333] text-[63.574px] w-[482.768px] whitespace-pre-wrap">{`Hello,  my name is Madelyn Torff`}</p>
      <Subheadline />
      <Buttons />
    </div>
  );
}

function Intro() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.92px] items-start left-[119.2px] overflow-clip top-[110.26px] w-[482.768px]" data-name="intro">
      <p className="font-['Nunito:Bold',sans-serif] font-bold h-[26.82px] leading-[normal] relative shrink-0 text-[#fdc435] text-[19.867px] uppercase w-full whitespace-pre-wrap">UI/UX Designer</p>
      <Content />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21.854px] relative shrink-0 w-[43.707px]" data-name="label">
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold inset-[0_1.62%_-0.67%_0] leading-[normal] text-[#25282b] text-[15.894px]">Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[39.734px] relative rounded-[7.947px] shrink-0 w-[397.34px]" data-name="input">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-[#e8ecf4] border-[0.993px] border-solid inset-0 pointer-events-none rounded-[7.947px]" />
    </div>
  );
}

function FormGroupInput() {
  return (
    <div className="content-stretch flex flex-col gap-[7.947px] items-start relative shrink-0" data-name="form-group / input">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[21.854px] relative shrink-0 w-[43.707px]" data-name="label">
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold inset-[0_8.48%_-0.67%_0] leading-[normal] text-[#25282b] text-[15.894px]">Email</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[39.734px] relative rounded-[7.947px] shrink-0 w-[397.34px]" data-name="input">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-[#e8ecf4] border-[0.993px] border-solid inset-0 pointer-events-none rounded-[7.947px]" />
    </div>
  );
}

function FormGroupInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.947px] items-start relative shrink-0" data-name="form-group / input">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[21.854px] relative shrink-0 w-[43.707px]" data-name="label">
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold inset-[0_-46.43%_-0.67%_0] leading-[normal] text-[#25282b] text-[15.894px]">Message</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[158.936px] relative rounded-[7.947px] shrink-0 w-[397.34px]" data-name="textarea">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-[#e8ecf4] border-[0.993px] border-solid inset-0 pointer-events-none rounded-[7.947px]" />
    </div>
  );
}

function FormGroupTextarea() {
  return (
    <div className="content-stretch flex flex-col gap-[7.947px] items-start relative shrink-0" data-name="form-group / textarea">
      <Label2 />
      <Textarea />
    </div>
  );
}

function ButtonPrimary1() {
  return (
    <div className="bg-[#fdc435] content-stretch flex items-start px-[23.84px] py-[7.947px] relative rounded-[7.947px] shrink-0" data-name="button / primary">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#25282b] text-[17.88px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Send
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[23.84px] items-end justify-center relative shrink-0" data-name="form">
      <FormGroupInput />
      <FormGroupInput1 />
      <FormGroupTextarea />
      <ButtonPrimary1 />
    </div>
  );
}

function PhInstagramLogoFill() {
  return (
    <div className="relative shrink-0 size-[47.681px]" data-name="ph:instagram-logo-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.6808 47.6808">
        <g id="ph:instagram-logo-fill">
          <path d={svgPaths.p92b5a00} fill="var(--fill-0, #25282B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10.42%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.7473 37.7473">
        <g id="Group">
          <path d={svgPaths.p1f6b9200} fill="var(--fill-0, #25282B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BiLinkedin() {
  return (
    <div className="overflow-clip relative shrink-0 size-[47.681px]" data-name="bi:linkedin">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[16.67%_6.25%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7207 31.7872">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p16d5d80} fill="var(--fill-0, #25282B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BiEnvelopeFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[47.681px]" data-name="bi:envelope-fill">
      <Group1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[23.84px] items-start relative shrink-0" data-name="icons">
      <PhInstagramLogoFill />
      <BiLinkedin />
      <BiEnvelopeFill />
    </div>
  );
}

function FooterIcons() {
  return (
    <div className="content-stretch flex flex-col gap-[31.787px] items-center justify-center relative shrink-0" data-name="footer / icons">
      <Icons />
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#828282] text-[15.894px]">{`Madelyn Torff 2021 `}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[55.628px] items-center justify-center left-[516.54px] top-[159.43px]">
      <Form />
      <FooterIcons />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.973px] items-center justify-center left-[613.89px] top-0" data-name="section-title">
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[71.521px] relative shrink-0 text-[#25282b] text-[47.681px] text-center">Projects</p>
      <div className="bg-[#fdc435] h-[3.973px] rounded-[1.987px] shrink-0 w-[99.335px]" />
    </div>
  );
}

function FooterForm() {
  return (
    <div className="absolute h-[997.323px] left-0 top-[2790.32px] w-[1430.424px]" data-name="footer / form">
      <div className="absolute inset-[65.74%_0_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1430.42 341.712">
          <path clipRule="evenodd" d={svgPaths.p3abdf900} fill="var(--fill-0, #FDC435)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame3 />
      <SectionTitle1 />
    </div>
  );
}

function PortfolioFooterWithForm() {
  return (
    <div className="absolute bg-[#f9faff] h-[734px] left-[245px] overflow-clip rounded-[19.867px] shadow-[0px_11.92px_63.574px_11.92px_rgba(146,98,6,0.25)] top-[113px] w-[1430px]" data-name="Portfolio - Footer with form">
      <Image />
      <Header />
      <Projects />
      <Intro />
      <FooterForm />
    </div>
  );
}

export default function Thumbnail() {
  return (
    <div className="bg-[#fdb935] relative size-full" data-name="thumbnail">
      <PortfolioFooterWithForm />
    </div>
  );
}