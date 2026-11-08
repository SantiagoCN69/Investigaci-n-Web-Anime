const assetPathPrefix = "./assets";
const imgVector = `${assetPathPrefix}/9da02.svg`;
const imgVector1 = `${assetPathPrefix}/88ea7.svg`;
const imgVector2 = `${assetPathPrefix}/65ffa.svg`;
const imgVector3 = `${assetPathPrefix}/158a1.svg`;
const imgVector4 = `${assetPathPrefix}/3444c.svg`;

export default function Frame() {
  return (
    <div className="bg-[#0d0a16] relative size-full" data-node-id="2:1319" data-name="Frame">
      <div
        className="[word-break:break-word] absolute content-stretch flex flex-col gap-[32px] items-start left-[96px] not-italic overflow-clip top-[80px] w-[1728px]"
        data-node-id="2:1320"
        data-name="Presentación"
      >
        <p
          className="font-['Inter:Semi_Bold'] font-semibold leading-[1.1] min-w-full relative shrink-0 text-[#fafcf3] text-[72px] w-[min-content]"
          data-node-id="2:1321"
        >
          Bases tecnológicas para el desarrollo
        </p>
        <p
          className="font-['Inter:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#c9c5d2] text-[30px] w-[1660px]"
          data-node-id="2:1322"
        >
          Áreas de estudio para el desarrollo de AniZen: lenguajes web, API, servidores, bases de
          datos y servicios en la nube.
        </p>
      </div>
      <p
        className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[1.2] left-[96px] not-italic text-[#fafcf3] text-[36px] top-[497px] w-[533.333px]"
        data-node-id="2:1323"
      >
        Lenguajes web
      </p>
      <p
        className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[1.2] left-[693px] not-italic text-[#fafcf3] text-[36px] top-[497px] w-[533.333px]"
        data-node-id="2:1324"
      >
        API: interfaz de programación de aplicaciones
      </p>
      <p
        className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[1.2] left-[1290px] not-italic text-[#fafcf3] text-[36px] top-[484px] w-[533.333px]"
        data-node-id="2:1325"
      >
        Funcionamiento de servidores
      </p>
      <p
        className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[1.2] left-[392px] not-italic text-[#fafcf3] text-[36px] top-[731px] w-[536px]"
        data-node-id="2:1326"
      >
        Base de datos
      </p>
      <p
        className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[1.2] left-[1024px] not-italic text-[#fafcf3] text-[36px] top-[731px] w-[536px]"
        data-node-id="2:1327"
      >
        Web en la nube
      </p>
      <div
        className="absolute content-stretch flex gap-[20px] items-start left-[96px] overflow-clip pt-[32px] top-[884px] w-[1728px]"
        data-node-id="2:1328"
        data-name="Fuentes de estudio"
      >
        <div
          className="bg-[#7b5ea7] relative rounded-[2px] self-stretch shrink-0 w-[4px]"
          data-node-id="2:1329"
          data-name="Rectangle"
        />
        <p
          className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative self-stretch text-[#c9c5d2] text-[28px]"
          data-node-id="2:1330"
        >
          <span className="leading-[1.5]">{`Fuentes de estudio para el desarrollo: recursos gratuitos, cursos y análisis de referentes como `}</span>
          <span className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] text-[#7b8ff5]">
            SoyDalton
          </span>
          <span className="leading-[1.5]">{` y `}</span>
          <span className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] text-[#e040a0]">
            Midudev
          </span>
          <span className="leading-[1.5]">{` para profundizar en estos conocimientos y aplicarlos a AniZen.`}</span>
        </p>
      </div>
      <div
        className="absolute h-[88.363px] left-[96px] top-[384px] w-[88.36px]"
        data-node-id="2:1331"
        data-name="Vector"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
      <div
        className="absolute h-[75.016px] left-[693px] top-[384px] w-[85.415px]"
        data-node-id="2:1332"
        data-name="Vector"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
      </div>
      <div
        className="absolute h-[86.887px] left-[1024px] top-[623px] w-[87.657px]"
        data-node-id="2:1333"
        data-name="Vector"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
      </div>
      <div
        className="absolute h-[87.469px] left-[1290px] top-[378px] w-[86.373px]"
        data-node-id="2:1334"
        data-name="Vector"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
      </div>
      <div
        className="absolute h-[100.141px] left-[392px] top-[610px] w-[97.084px]"
        data-node-id="2:1335"
        data-name="Vector"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
      </div>
    </div>
  );
}
