import svgPaths from "./svg-dl98xh23d2";
import { motion } from "motion/react";
type SidebarIconsProps = {
  className?: string;
  icon?: "Encoder" | "Settings" | "monitor" | "network";
};

function SidebarIcons({ className, icon = "Encoder" }: SidebarIconsProps) {
  const isMonitor = icon === "monitor";
  const isNetwork = icon === "network";
  const isSettings = icon === "Settings";
  return (
    <div className={className || `relative ${isNetwork ? "" : "overflow-clip size-[32px]"}`}>
      {icon === "Encoder" && (
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <path d="M0 0H32V32H0V0Z" fill="white" fillOpacity="0.01" id="Vector" />
        </svg>
      )}
      {["Encoder", "Settings"].includes(icon) && (
        <div className={`absolute ${isSettings ? "inset-[6.36%_6.15%_6.14%_6.31%]" : "inset-[7.14%_2.74%_1.22%_14.29%]"}`} data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height={isSettings ? "28" : "29.3254"} preserveAspectRatio="none" viewBox={isSettings ? "0 0 28.0123 28" : "0 0 26.5516 29.3254"} width={isSettings ? "28.0123" : "26.5516"}>
            <path d={isSettings ? svgPaths.p156b8d80 : svgPaths.p19ae3100} fill="white" id="Vector" />
          </svg>
        </div>
      )}
      {isMonitor && <div className="absolute border-2 border-solid border-white h-[21px] left-[3px] rounded-[3px] top-[3px] w-[26px]" data-name="Bottom Rectangle" />}
      {["monitor", "network"].includes(icon) && (
        <div className={isNetwork ? "flex flex-row items-center size-full" : "-translate-x-1/2 absolute h-0 left-1/2 top-[28px] w-[22px]"}>
          <div className={isNetwork ? "content-stretch flex items-center relative size-full" : "absolute inset-[-1px_-4.55%]"}>
            {isMonitor && (
              <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 24 2" width="24">
                <path d="M1 1H23" id="Vector 15" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            )}
            {isNetwork && (
              <div className="relative shrink-0 size-[32px]" data-name="Sidebar Icon Container">
                <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                  <g id="Sidebar Icon Container">
                    <path d={svgPaths.p74e3400} fill="white" id="Vector" />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
      )}
      {isMonitor && (
        <>
          <div className="absolute bg-white h-[6px] left-[7px] top-[7px] w-[18px]" data-name="Middle Rectangle" />
          <div className="absolute bg-white h-[6px] left-[7px] top-[14px] w-[18px]" data-name="Top Rectangle" />
        </>
      )}
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[33.54px] relative shrink-0 w-[89.024px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.5402" preserveAspectRatio="none" viewBox="0 0 89.0243 33.5402" width="89.0243">
        <g clipPath="url(#clip0_0_662)" id="logo">
          <path d={svgPaths.p12b02a70} fill="white" id="Subtract" />
          <path d={svgPaths.p1a83b0c0} fill="white" id="Vector" />
          <path d={svgPaths.pc379e00} fill="white" id="Vector_2" />
          <path d={svgPaths.p1140ff00} fill="white" id="Vector_3" />
          <path d={svgPaths.p1061f000} fill="white" id="Subtract_2" />
          <path d={svgPaths.p3832c600} fill="white" id="Vector_4" />
          <path d={svgPaths.pd5a3f80} fill="white" id="Vector_5" />
          <path d={svgPaths.p31aa3fb0} fill="white" id="Vector_6" />
          <path d={svgPaths.p2ff7b180} fill="white" id="Vector_7" />
          <path d={svgPaths.p1d1bc500} fill="white" id="Vector_8" />
          <path d={svgPaths.p3a534680} fill="white" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_0_662">
            <rect fill="white" height="33.5402" width="89.0243" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Earth() {
  return (
    <div className="relative shrink-0 size-[23.291px]" data-name="Earth (地球仪)">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.2915" preserveAspectRatio="none" viewBox="0 0 23.2915 23.2915" width="23.2915">
        <g id="Earth (å°çä»ª)">
          <path clipRule="evenodd" d={svgPaths.p8c93800} fillRule="evenodd" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94095" />
          <path d="M1.9409 11.6457H21.3504" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94095" />
          <path clipRule="evenodd" d={svgPaths.p86cdb70} fillRule="evenodd" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94095" />
          <path d={svgPaths.pf9fb900} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94095" />
          <path d={svgPaths.p6188b40} id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94095" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[7.764px] items-center relative shrink-0">
      <Earth />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[17.469px] relative shrink-0 text-[12.616px] text-white whitespace-nowrap">English</p>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[23.291px]" data-name="我的">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.2915" preserveAspectRatio="none" viewBox="0 0 23.2915 23.2915" width="23.2915">
        <g id="æç">
          <mask height="24" id="mask0_0_604" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="0" y="0">
            <path clipRule="evenodd" d="M0 0H23.2915V23.2915H0V0Z" fill="white" fillRule="evenodd" id="è·¯å¾" />
          </mask>
          <g mask="url(#mask0_0_604)">
            <path clipRule="evenodd" d={svgPaths.p44b1200} fillRule="evenodd" id="è·¯å¾_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94095" />
            <path clipRule="evenodd" d={svgPaths.p3d360400} fillRule="evenodd" id="è·¯å¾_3" stroke="white" strokeLinejoin="round" strokeWidth="1.94095" />
            <path d={svgPaths.p271bb100} id="è·¯å¾_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94095" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex gap-[8.734px] h-[23.291px] items-center relative shrink-0 w-[74.727px]" data-name="画板 13">
      <Component />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[18.439px] relative shrink-0 text-[13.587px] text-white whitespace-nowrap">Admin</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[29.114px] items-center relative shrink-0">
      <Frame33 />
      <Component13 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
      <Logo />
      <Frame34 />
    </div>
  );
}

function Component15() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#282828] content-stretch flex h-[60px] items-center justify-center left-1/2 px-[60px] py-[10px] top-0 w-[1920px]" data-name="画板 15">
      <div aria-hidden className="absolute border-[#575757] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame41 />
    </div>
  );
}

function InternetButton() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Internet Button">
      <SidebarIcons className="relative shrink-0" icon="network" />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[23px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Internet</p>
    </div>
  );
}

function Right() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="-scale-y-100 flex-none rotate-90">
        <div className="relative size-[24px]" data-name="Right (右)">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <g id="Right (å³)">
              <path d="M9.5 6L15.5 12L9.5 18" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabToggle() {
  return (
    <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="tab--toggle">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] relative size-full">
          <InternetButton />
          <Right />
        </div>
      </div>
    </div>
  );
}

function InternetContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Internet Container">
      <TabToggle />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Sidebar">
      <div className="bg-[rgba(255,255,255,0.2)] h-[48px] relative rounded-[8px] shrink-0 w-[216px]" data-name="tab--toggle">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[20px] items-center px-[10px] relative size-full">
            <SidebarIcons className="overflow-clip relative shrink-0 size-[32px]" />
            <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[23px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Encoder</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] h-[48px] relative rounded-[8px] shrink-0 w-[216px]" data-name="tab--toggle">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[20px] items-center px-[10px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Sidebar--icons">
              <div className="absolute border-2 border-solid border-white h-[21px] left-[3px] rounded-[3px] top-[3px] w-[26px]" data-name="Bottom Rectangle" />
              <div className="-translate-x-1/2 absolute h-0 left-1/2 top-[28px] w-[22px]">
                <div className="absolute inset-[-1px_-4.55%]">
                  <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 24 2" width="24">
                    <path d="M1 1H23" id="Vector 15" stroke="white" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bg-white h-[6px] left-[7px] top-[7px] w-[18px]" data-name="Middle Rectangle" />
              <div className="absolute bg-white h-[6px] left-[7px] top-[14px] w-[18px]" data-name="Top Rectangle" />
            </div>
            <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[23px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Monitor</p>
          </div>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 216 1" width="216">
            <line id="Line 2" stroke="white" strokeOpacity="0.3" x2="216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <InternetContainer />
    </div>
  );
}

function SettingsButton() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Settings Button">
      <SidebarIcons className="overflow-clip relative shrink-0 size-[32px]" icon="Settings" />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[23px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Settings</p>
    </div>
  );
}

function Right1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[24px]" data-name="Right (右)">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <g id="Right (å³)">
              <path d="M9.5 6L15.5 12L9.5 18" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabToggle1() {
  return (
    <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="tab--toggle">
      <div className="content-stretch flex items-center justify-between px-[10px] relative size-full">
        <SettingsButton />
        <Right1 />
      </div>
    </div>
  );
}

function Slot() {
  return <div className="h-[349px] relative shrink-0 w-[216px]" data-name="Slot" />;
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full">
      <TabToggle1 />
      <Slot />
    </div>
  );
}

function EncodingTab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-name="Encoding Tab">
      <Sidebar />
      <Frame52 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p2ae79a80} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="画板 1">
      <Frame />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[12px] text-white whitespace-nowrap">{`CPU `}</p>
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[15px] text-white whitespace-nowrap">10%</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p3edc0ec0} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="画板 2">
      <Frame1 />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[12px] text-white whitespace-nowrap">RAM</p>
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[15px] text-white whitespace-nowrap">10%</p>
    </div>
  );
}

function ResourceItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Resource Item">
      <Component1 />
      <Component2 />
    </div>
  );
}

function StatusContainer() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-[208px]" data-name="Status Container">
      <ResourceItem />
    </div>
  );
}

function Component4() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="[word-break:break-word] content-stretch flex flex-col h-full items-start justify-between leading-[12px] overflow-clip relative shrink-0 text-[11px] text-white whitespace-nowrap" data-name="画板 4">
        <p className="font-['Quicksand:Bold',sans-serif] font-bold relative shrink-0">LAN1</p>
        <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0">127.0.0.1</p>
      </div>
    </div>
  );
}

function UploadSpeed() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-px items-center leading-[10.5px] relative shrink-0 whitespace-nowrap" data-name="Upload Speed">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold relative shrink-0 text-[10px] text-right text-white">15</p>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0 text-[#999] text-[10.5px]">KB/s</p>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Arrow-up (箭头上)">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Arrow-up (ç®­å¤´ä¸)">
          <path d="M6 1.5V10.5" id="Vector" stroke="#11B2FF" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 4.5L6 1.5L9 4.5" id="Vector_2" stroke="#11B2FF" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function UploadSpeedContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Upload Speed Container">
      <UploadSpeed />
      <ArrowUp />
    </div>
  );
}

function DownloadSpeed() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-px items-center leading-[10.5px] relative shrink-0 whitespace-nowrap" data-name="Download Speed">
      <p className="font-['Quicksand:Bold',sans-serif] font-bold relative shrink-0 text-[10px] text-right text-white">2955</p>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal relative shrink-0 text-[#999] text-[10.5px]">KB/s</p>
    </div>
  );
}

function ArrowUp1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[12px]" data-name="Arrow-up (箭头上)">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <g id="Arrow-up (ç®­å¤´ä¸)">
              <path d="M6 1.5V10.5" id="Vector" stroke="#00BE63" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 4.5L6 1.5L9 4.5" id="Vector_2" stroke="#00BE63" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function DownloadSpeedContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Download Speed Container">
      <DownloadSpeed />
      <ArrowUp1 />
    </div>
  );
}

function NetworkStatus() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0" data-name="Network Status">
      <UploadSpeedContainer />
      <DownloadSpeedContainer />
    </div>
  );
}

function NetworkStatusToggle() {
  return (
    <div className="bg-[#4b4b4b] relative rounded-[4px] shrink-0 w-full" data-name="Network Status Toggle">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[6px] relative size-full">
          <Component4 />
          <NetworkStatus />
        </div>
      </div>
    </div>
  );
}

function NetworkStatusContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Network Status Container">
      <NetworkStatusToggle />
    </div>
  );
}

function NetworkStatusContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[208px]" data-name="Network Status Container">
      <NetworkStatusContainer1 />
    </div>
  );
}

function Withicon() {
  return (
    <div className="bg-[#3f3f3f] content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative rounded-[12px] shrink-0" data-name="最终&withicon">
      <StatusContainer />
      <NetworkStatusContainer />
    </div>
  );
}

function Network1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-name="network">
      <Withicon />
      <p className="[word-break:break-word] font-['Alibaba_PuHuiTi_3.0:55_Regular_L3',sans-serif] leading-[14px] not-italic opacity-40 relative shrink-0 text-[14px] text-white whitespace-pre">{`    V1.01.0023`}</p>
    </div>
  );
}

function Network() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="network">
      <Network1 />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[190px]" data-name="画板 2">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[15px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">Encode 1</p>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-full relative shrink-0 w-[191px]" data-name="画板 4">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[48px] py-[15px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Encode 2</p>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="h-full relative shrink-0 w-[191px]" data-name="画板 5">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[48px] py-[15px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Mix</p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative" data-name="画板 3">
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-[#3f3f3f] h-[40px] relative shrink-0" data-name="画板 27">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Component3 />
      </div>
      <div aria-hidden className="absolute border-[#282828] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[20.688px]" data-name="视频">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.6875" preserveAspectRatio="none" viewBox="0 0 20.6875 20.6875" width="20.6875">
        <g id="è§é¢">
          <path clipRule="evenodd" d={svgPaths.p1bf55f80} fillRule="evenodd" id="è·¯å¾" stroke="white" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M14.8904 3.33184V16.1268" id="è·¯å¾_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M4.93753 3.33184V16.1268" id="è·¯å¾_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M15.7202 7.47645H18.2083" id="è·¯å¾_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M15.7202 12.4543H18.2083" id="è·¯å¾_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M1.62025 7.47645H4.1084" id="è·¯å¾_6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M1.62025 6.64966V8.24903" id="è·¯å¾_7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M3.69355 3.33194H6.18169" id="è·¯å¾_8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M3.69355 16.6013H6.18169" id="è·¯å¾_9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M13.6464 3.33194H16.1345" id="è·¯å¾_10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M13.6464 16.6013H16.1345" id="è·¯å¾_11" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M1.62025 12.4543H4.1084" id="è·¯å¾_12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M1.62025 11.6245V13.2239" id="è·¯å¾_13" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M18.2086 11.6245V13.2239" id="è·¯å¾_14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path d="M18.2086 6.64966V8.24903" id="è·¯å¾_15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path clipRule="evenodd" d={svgPaths.p26e764d0} fillRule="evenodd" id="è·¯å¾_16" stroke="white" strokeLinejoin="round" strokeWidth="1.65883" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#575757] content-stretch flex h-full items-center justify-center px-[14.481px] relative shrink-0 w-[63.097px]">
      <Component9 />
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[20.688px]" data-name="照片">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.6875" preserveAspectRatio="none" viewBox="0 0 20.6875 20.6875" width="20.6875">
        <g id="ç§ç">
          <path clipRule="evenodd" d={svgPaths.p31c5fc00} fillRule="evenodd" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path clipRule="evenodd" d={svgPaths.pdcb800} fillRule="evenodd" id="è·¯å¾_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65883" />
          <path clipRule="evenodd" d={svgPaths.p4e82300} fillRule="evenodd" id="è·¯å¾_3" stroke="white" strokeLinejoin="round" strokeWidth="1.65883" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[14.481px] relative rounded-[4px] shrink-0 w-[63.097px]">
      <Component10 />
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#282828] content-stretch flex h-[36px] items-center overflow-clip px-[6.206px] py-[12.413px] relative shrink-0 w-[640px]" data-name="原始信息">
      <div className="bg-[#3f3f3f] h-[24.825px] relative shrink-0" data-name="胶囊按钮">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[2.069px] items-center p-[2.069px] relative size-full">
            <Frame5 />
            <Frame6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Ndi() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="NDI">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="NDI">
          <g id="Subtract">
            <path d={svgPaths.p11a6200} fill="white" />
            <path d="M19 10H18V6H6V10H5V5H19V10Z" fill="white" />
          </g>
          <path d={svgPaths.p1a873800} fill="white" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Ndi />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">NDI</p>
    </div>
  );
}

function CheckOne() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check-one (校验)">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Check-one (æ ¡éª)">
          <path d={svgPaths.p2580b840} id="Vector" stroke="white" strokeLinejoin="round" />
          <path d="M8 12L11 15L17 9" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Hdmi() {
  return (
    <div className="col-2 content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[60px] row-2 self-start shrink-0 w-[180px]" data-name="HDMI">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Frame29 />
      <CheckOne />
    </div>
  );
}

function Typec() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="typec">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="typec">
          <path d={svgPaths.p39956600} fill="#D9D9D9" id="Rectangle 65 (Stroke)" />
          <path d="M19.5 11.5V12.5H5V11.5H19.5Z" fill="white" id="Vector 32 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Typec />
      <p className="[word-break:break-word] font-['Quicksand:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">TypeCAltDP</p>
    </div>
  );
}

function CheckOne1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check-one (校验)">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Check-one (æ ¡éª)">
          <path d={svgPaths.p2580b840} fill="white" id="Vector" />
          <path d="M8 12L11 15L17 9" id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Hdmi1() {
  return (
    <div className="col-1 content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[60px] row-1 self-start shrink-0 w-[180px]" data-name="HDMI">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Frame31 />
      <CheckOne1 />
    </div>
  );
}

function Dp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DP">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="DP">
          <path d={svgPaths.p66c3180} fill="white" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Dp />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">DP</p>
    </div>
  );
}

function CheckOne2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check-one (校验)">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Check-one (æ ¡éª)">
          <path d={svgPaths.p2580b840} id="Vector" stroke="white" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Sdi() {
  return (
    <div className="col-2 content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[60px] row-1 self-start shrink-0 w-[180px]" data-name="SDI">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Frame36 />
      <CheckOne2 />
    </div>
  );
}

function Sdi2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SDI">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="SDI">
          <path d={svgPaths.p15ce5400} fill="white" id="Union" />
          <path d={svgPaths.p1bf4e80} fill="white" id="Ellipse 12 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Sdi2 />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">SDI</p>
    </div>
  );
}

function CheckOne3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check-one (校验)">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Check-one (æ ¡éª)">
          <path d={svgPaths.p2580b840} id="Vector" stroke="white" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Sdi1() {
  return (
    <div className="col-3 content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[60px] row-1 self-start shrink-0 w-[180px]" data-name="SDI">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Frame37 />
      <CheckOne3 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute flex inset-[44.14%_15.86%_43.2%_71.12%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-29.8529cqw,37.5698cqh)] rotate-[40.88deg] skew-x-[1.63deg] w-[hypot(70.1471cqw,62.4302cqh)]">
        <div className="relative size-full" data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.47393" preserveAspectRatio="none" viewBox="0 0 2.89792 1.47393" width="2.89792">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p3141fe00} fill="white" fillRule="evenodd" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute flex inset-[48.47%_19.07%_27.52%_57.79%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-47.7082cqw,56.3166cqh)] rotate-[40.92deg] skew-x-[1.68deg] w-[hypot(52.2918cqw,43.6834cqh)]">
        <div className="relative size-full" data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.189" preserveAspectRatio="none" viewBox="0 0 3.84257 4.189" width="3.84257">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p3e151c00} fill="white" fillRule="evenodd" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute flex inset-[57.32%_34.07%_20.4%_45.19%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[hypot(-57.7412cqw,65.8841cqh)] rotate-[40.93deg] skew-x-[1.71deg] w-[hypot(42.2588cqw,34.1159cqh)]">
        <div className="relative size-full" data-name="Group">
          <div className="absolute inset-[-10.99%_-17.96%_-11%_-17.96%]">
            <svg className="block size-full" fill="none" height="5.54734" preserveAspectRatio="none" viewBox="0 0 3.78481 5.54734" width="3.78481">
              <g id="Group">
                <path d={svgPaths.p37570600} fill="white" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[40.53%_14.43%_15.25%_45.18%]" style={{ containerType: "size" }} data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[16.67%_35.48%_24.94%_16.67%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.0149" preserveAspectRatio="none" viewBox="0 0 11.484 14.0149" width="11.484">
        <g id="Group">
          <path d={svgPaths.p17229e00} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[36.74%_51.43%_46.84%_32.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.94164" preserveAspectRatio="none" viewBox="0 0 3.82792 3.94164" width="3.82792">
        <g id="Group">
          <path d={svgPaths.p9c5c280} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[16.67%_14.43%_15.25%_16.67%]" data-name="Group">
      <Group2 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[16.67%_14.43%_15.25%_16.67%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame2 />
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">USB Camera</p>
    </div>
  );
}

function CheckOne4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check-one (校验)">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Check-one (æ ¡éª)">
          <path d={svgPaths.p2580b840} id="Vector" stroke="white" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Sdi3() {
  return (
    <div className="col-1 content-stretch flex items-center justify-between px-[8px] py-[6px] relative rounded-[60px] row-2 self-start shrink-0 w-[180px]" data-name="SDI">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
      <Frame38 />
      <CheckOne4 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[82px] left-0 top-0 w-[560px]">
      <Hdmi />
      <Hdmi1 />
      <Sdi />
      <Sdi1 />
      <Sdi3 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[82px] relative shrink-0 w-[560px]">
      <Frame30 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="top">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Please select the source</p>
      <Frame35 />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[180px]" data-name="btn">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Apply</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[30px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Top />
      <Btn />
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="video--container">
      <div className="h-[360px] relative shrink-0 w-[640px]" data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 640 360" width="640">
          <path clipRule="evenodd" d="M0 0H640V360H0V0Z" fill="black" fillRule="evenodd" id="è·¯å¾" />
        </svg>
      </div>
      <Frame32 />
    </div>
  );
}

function VideoSection() {
  return (
    <div className="col-[1/span_3] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-[1/span_2] self-stretch shrink-0" data-name="video section">
      <Component8 />
      <VideoContainer />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="画板 4">
      <div className="relative shrink-0 size-[16px]" data-name="HDMI&SDI">
        <div className="absolute inset-[29.17%_8.33%]" data-name="路径">
          <div className="absolute inset-[-10%_-5%]">
            <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 14.6667 8" width="14.6667">
              <path clipRule="evenodd" d={svgPaths.p2b47ec00} fillRule="evenodd" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_29.17%_35.42%_29.17%]" data-name="路径">
          <div className="absolute inset-[-66.67%_-10%_33.33%_-10%]">
            <svg className="block size-full" fill="none" height="1.33333" preserveAspectRatio="none" viewBox="0 0 8 1.33333" width="8">
              <path d="M0.666667 0.666667H7.33333" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.08%_64.58%_41.67%_29.17%]" data-name="路径">
          <div className="absolute inset-[-66.67%_33.33%_-66.67%_-66.67%]">
            <svg className="block size-full" fill="none" height="2.33333" preserveAspectRatio="none" viewBox="0 0 1.33333 2.33333" width="1.33333">
              <path d="M0.666667 1.66667V0.666667" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[43.75%] right-1/2 top-[52.08%]" data-name="路径">
          <div className="absolute inset-[-66.67%_33.33%_-66.67%_-66.67%]">
            <svg className="block size-full" fill="none" height="2.33333" preserveAspectRatio="none" viewBox="0 0 1.33333 2.33333" width="1.33333">
              <path d="M0.666667 1.66667V0.666667" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.08%_37.5%_41.67%_56.25%]" data-name="路径">
          <div className="absolute inset-[-66.67%_33.33%_-66.67%_-66.67%]">
            <svg className="block size-full" fill="none" height="2.33333" preserveAspectRatio="none" viewBox="0 0 1.33333 2.33333" width="1.33333">
              <path d="M0.666667 1.66667V0.666667" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.08%_22.92%_41.67%_70.83%]" data-name="路径">
          <div className="absolute inset-[-66.67%_33.33%_-66.67%_-66.67%]">
            <svg className="block size-full" fill="none" height="2.33333" preserveAspectRatio="none" viewBox="0 0 1.33333 2.33333" width="1.33333">
              <path d="M0.666667 1.66667V0.666667" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_72.92%_52.08%_22.92%]" data-name="路径">
          <div className="absolute inset-[-66.67%_-100%_33.33%_-100%]">
            <svg className="block size-full" fill="none" height="1.33333" preserveAspectRatio="none" viewBox="0 0 2 1.33333" width="2">
              <path d="M0.666667 0.666667H1.33333" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_56.25%_52.08%_39.58%]" data-name="路径">
          <div className="absolute inset-[-66.67%_-100%_33.33%_-100%]">
            <svg className="block size-full" fill="none" height="1.33333" preserveAspectRatio="none" viewBox="0 0 2 1.33333" width="2">
              <path d="M0.666667 0.666667H1.33333" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_39.58%_52.08%_56.25%]" data-name="路径">
          <div className="absolute inset-[-66.67%_-100%_33.33%_-100%]">
            <svg className="block size-full" fill="none" height="1.33333" preserveAspectRatio="none" viewBox="0 0 2 1.33333" width="2">
              <path d="M0.666667 0.666667H1.33333" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_22.92%_52.08%_72.92%]" data-name="路径">
          <div className="absolute inset-[-66.67%_-100%_33.33%_-100%]">
            <svg className="block size-full" fill="none" height="1.33333" preserveAspectRatio="none" viewBox="0 0 2 1.33333" width="2">
              <path d="M0.666667 0.666667H1.33333" id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-white whitespace-nowrap">HDMI</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="relative shrink-0" data-name="icon+text">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Component11 />
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="h-[21.999px] relative shrink-0 w-[23.1px]" data-name="显示器">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.999" preserveAspectRatio="none" viewBox="0 0 23.0996 21.999" width="23.0996">
        <g id="æ¾ç¤ºå¨">
          <g id="å¹¶é">
            <path d={svgPaths.p233aa180} fill="white" />
            <path d={svgPaths.p233aa180} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[33.6px] items-end justify-center overflow-clip relative shrink-0 w-[80px]" data-name="画板 16">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#8e8e91] text-[12px] whitespace-nowrap">Resolution</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="画板 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="ç»æ¿ 1">
          <path d={svgPaths.pa9b3d00} fill="white" id="è·¯å¾ 1" />
        </g>
      </svg>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[33.6px] items-end justify-center overflow-clip relative shrink-0 w-[80px]" data-name="画板 16">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#8e8e91] text-[12px] whitespace-nowrap">Frame Rate</p>
    </div>
  );
}

function Component18() {
  return (
    <div className="relative shrink-0 size-[26.4px]" data-name="右音波">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.4" preserveAspectRatio="none" viewBox="0 0 26.4 26.4" width="26.4">
        <g id="å³é³æ³¢">
          <mask height="27" id="mask0_0_515" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="27" x="0" y="0">
            <path clipRule="evenodd" d="M0 0H26.4V26.4H0V0Z" fill="white" fillRule="evenodd" id="è·¯å¾" />
          </mask>
          <g mask="url(#mask0_0_515)">
            <g id="å¹¶é">
              <path d={svgPaths.p50e8000} fill="white" />
              <path d={svgPaths.p50e8000} fill="white" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[33.6px] items-end justify-center overflow-clip relative shrink-0 w-[80px]" data-name="画板 16">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#8e8e91] text-[12px] whitespace-nowrap">Sampling Rate</p>
    </div>
  );
}

function GridItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="grid-item">
      <div className="min-w-[100px] relative shrink-0 w-full" data-name="icon">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between min-w-[inherit] relative size-full">
            <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-resolution">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[7px] py-[6px] relative size-full">
                  <Component12 />
                </div>
              </div>
            </div>
            <Component16 />
          </div>
        </div>
      </div>
      <div className="min-w-[100px] relative shrink-0 w-full" data-name="icon">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between min-w-[inherit] relative size-full">
            <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-resolution">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[7px] py-[6px] relative size-full">
                  <Component14 />
                </div>
              </div>
            </div>
            <Component17 />
          </div>
        </div>
      </div>
      <div className="min-w-[100px] relative shrink-0 w-full" data-name="icon">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between min-w-[inherit] relative size-full">
            <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="icon-resolution">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[7px] py-[6px] relative size-full">
                  <Component18 />
                </div>
              </div>
            </div>
            <Component19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[6px]">
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
      <div className="bg-[rgba(255,255,255,0.05)] h-[6px] relative shrink-0 w-full" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-w-px relative">
      <Frame50 />
      <Frame49 />
      <Frame51 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#282828] col-1 justify-self-stretch relative row-2 self-stretch shrink-0">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-center p-[10px] relative size-full">
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="col-4 gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] justify-self-stretch relative row-[1/span_2] self-stretch shrink-0">
      <div className="bg-[#282828] col-1 relative row-1 self-stretch shrink-0 w-[197.33px]" data-name="hdmi--card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
            <Frame19 />
            <GridItem />
          </div>
        </div>
      </div>
      <Frame42 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="relative shrink-0" data-name="Model-title">
        <div aria-hidden className="absolute border-l-2 border-solid border-white inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pl-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Advanced</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 36 36" width="36">
        <g id="Frame">
          <path d={svgPaths.p2cc88280} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.75 10.5H15.75M14.25 9V12" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 12.75H25.5M23.25 10.5V15" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc947780} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-1 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none" />
      <Frame3 />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[12px] text-white whitespace-nowrap">OSD Overlay</p>
    </div>
  );
}

function FlipHorizontally() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Flip-horizontally (水平翻转)">
      <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 36 36" width="36">
        <g id="Flip-horizontally (æ°´å¹³ç¿»è½¬)">
          <path d="M18 4.5V31.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 25.5L12 9V25.5H3Z" id="Vector_2" stroke="white" strokeLinejoin="round" strokeWidth="2" />
          <path d="M33 25.5H24V9L33 25.5Z" id="Vector_3" stroke="white" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden className="absolute border border-[#575757] border-solid inset-0 pointer-events-none" />
      <FlipHorizontally />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Flip</p>
    </div>
  );
}

function TailoringTwo() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Tailoring-two (裁剪放大)">
      <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 36 36" width="36">
        <g id="Tailoring-two (è£åªæ¾å¤§)">
          <path d={svgPaths.p7b6b600} fill="white" id="Vector" />
          <path d={svgPaths.p2198f880} fill="white" id="Vector_2" />
          <path d={svgPaths.pf990780} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.75 9.75H26.25V20.25" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.5 9.75H4.5" id="Vector_5" stroke="white" strokeLinecap="round" strokeWidth="2" />
          <path d="M27 31.5V25.5" id="Vector_6" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden className="absolute border border-[#575757] border-solid inset-0 pointer-events-none" />
      <TailoringTwo />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Cropping</p>
    </div>
  );
}

function BackgroundColor() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Background-color (背景颜色)">
      <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 36 36" width="36">
        <g id="Background-color (èæ¯é¢è²)">
          <path clipRule="evenodd" d={svgPaths.p17693700} fill="white" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1fca0220} id="Vector_2" stroke="white" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p16026880} id="Vector_3" stroke="white" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 15.0549L21.7208 19.2372" id="Vector_4" stroke="white" strokeLinecap="round" strokeWidth="2" />
          <path d="M3 32.25H33" id="Vector_5" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden className="absolute border border-[#575757] border-solid inset-0 pointer-events-none" />
      <BackgroundColor />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Background</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[320px] left-[-0.33px] top-0 w-[381.333px]">
      <Frame24 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="container">
      <Frame25 />
    </div>
  );
}

function X1PopEncoding() {
  return (
    <div className="bg-[#282828] col-[5/span_2] justify-self-stretch relative row-1 self-stretch shrink-0" data-name="X1  pop/ Encoding">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Frame7 />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="col-1 h-[2.618px] ml-0 mt-0 relative row-1 w-[8.827px]" data-name="分组 3">
      <div className="absolute inset-[-13.81%_-8.2%_-13.81%_0]">
        <svg className="block size-full" fill="none" height="3.34153" preserveAspectRatio="none" viewBox="0 0 9.55163 3.34153" width="9.55163">
          <g id="åç» 3">
            <path d={svgPaths.p27604500} id="è·¯å¾" stroke="white" />
            <path d="M0 1.67076H8.82745" id="è·¯å¾_2" stroke="white" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[2.33px] place-items-start relative row-1" data-name="分组 2">
      <Component22 />
    </div>
  );
}

function Component24() {
  return (
    <div className="col-1 h-[2.618px] ml-0 mt-0 relative row-1 w-[8.827px]" data-name="分组 5">
      <div className="absolute inset-[-13.81%_-8.2%_-13.81%_0]">
        <svg className="block size-full" fill="none" height="3.34153" preserveAspectRatio="none" viewBox="0 0 9.55163 3.34153" width="9.55163">
          <g id="åç» 5">
            <path d={svgPaths.p27604500} id="è·¯å¾" stroke="white" />
            <path d="M0 1.67076H8.82745" id="è·¯å¾_2" stroke="white" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[11.05px] place-items-start relative row-1" data-name="分组 4">
      <Component24 />
    </div>
  );
}

function Component26() {
  return (
    <div className="col-1 h-[4.364px] ml-0 mt-0 relative row-1 w-[13.399px]" data-name="分组 7">
      <div className="absolute inset-[-16.58%_-10.81%_-16.58%_0]">
        <svg className="block size-full" fill="none" height="5.81035" preserveAspectRatio="none" viewBox="0 0 14.8473 5.81035" width="14.8473">
          <g id="åç» 7">
            <path d={svgPaths.p29877e0} id="è·¯å¾" stroke="white" strokeWidth="2" />
            <path d="M0 2.90516H13.3989" id="è·¯å¾_2" stroke="white" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[5.82px] place-items-start relative row-1" data-name="分组 6">
      <Component26 />
    </div>
  );
}

function Component28() {
  return (
    <div className="col-1 h-[16px] ml-[6.86px] mt-0 relative row-1 w-[9.143px]" data-name="分组 8">
      <div className="absolute inset-[-5.47%_-9.57%_-5.47%_0]">
        <svg className="block size-full" fill="none" height="17.75" preserveAspectRatio="none" viewBox="0 0 10.0179 17.75" width="10.0179">
          <g id="åç» 8">
            <path d={svgPaths.p1e9c0e20} id="è·¯å¾" stroke="white" strokeLinejoin="round" strokeWidth="1.75" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="分组 1">
      <Component21 />
      <Component23 />
      <Component25 />
      <Component28 />
    </div>
  );
}

function ModelTitle() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[10px] relative shrink-0" data-name="Model-title">
      <div aria-hidden className="absolute border-l-2 border-solid border-white inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Streaming</p>
      <Component20 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="title">
      <ModelTitle />
    </div>
  );
}

function Btn1() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[32px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0" data-name="btn">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Plus (加)">
        <div className="absolute inset-[20.83%_49.87%_20.83%_50.05%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-8196.69%_-10.71%_-8196.7%]">
            <svg className="block size-full" fill="none" height="11.3333" preserveAspectRatio="none" viewBox="0 0 2.0122 11.3333" width="2.0122">
              <path d="M1.0122 1L1 10.3333" id="Vector" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.84%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-1px_-10.71%]">
            <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 11.3333 2" width="11.3333">
              <path d="M1 1H10.3333" id="Vector" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Add Stream</p>
    </div>
  );
}

function Component38() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="画板 38">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 6 10" width="6">
        <g id="ç»æ¿ 38">
          <g id="è·¯å¾" />
          <path clipRule="evenodd" d={svgPaths.p1cfa9230} fill="#8E8E91" fillRule="evenodd" id="è·¯å¾_2" />
          <path clipRule="evenodd" d={svgPaths.p115c1900} fill="#D9D9D9" fillRule="evenodd" id="è·¯å¾_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[13px] relative shrink-0 text-[13px] text-right text-white whitespace-nowrap">Type</p>
      <Component38 />
    </div>
  );
}

function Component39() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="画板 38">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 6 10" width="6">
        <g id="ç»æ¿ 38">
          <g id="è·¯å¾" />
          <path clipRule="evenodd" d={svgPaths.p1cfa9230} fill="#8E8E91" fillRule="evenodd" id="è·¯å¾_2" />
          <path clipRule="evenodd" d={svgPaths.p115c1900} fill="#D9D9D9" fillRule="evenodd" id="è·¯å¾_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[13px] relative shrink-0 text-[13px] text-right text-white whitespace-nowrap">Name</p>
      <Component39 />
    </div>
  );
}

function Component40() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="画板 39">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 6 10" width="6">
        <g id="ç»æ¿ 38">
          <g id="è·¯å¾" />
          <path clipRule="evenodd" d={svgPaths.p1cfa9230} fill="#8E8E91" fillRule="evenodd" id="è·¯å¾_2" />
          <path clipRule="evenodd" d={svgPaths.p115c1900} fill="#D9D9D9" fillRule="evenodd" id="è·¯å¾_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[13px] relative shrink-0 text-[13px] text-right text-white whitespace-nowrap">Address</p>
      <Component40 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[400px]">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[13px] relative shrink-0 text-[13px] text-right text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame13 />
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#282828] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#3f3f3f] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Frame14 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[105.339px] relative shrink-0 w-[72px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="105.339" preserveAspectRatio="none" viewBox="0 0 72 105.339" width="72">
        <g id="Group 10">
          <path d={svgPaths.p413d880} fill="#686767" id="Vector" />
          <path d={svgPaths.p3b32c180} fill="#131313" id="Vector_2" />
          <path d={svgPaths.p2dd4400} fill="#686767" id="Vector_3" />
          <path d={svgPaths.p3484a800} fill="#131313" id="Vector_4" />
          <path d={svgPaths.p3483c480} fill="#FBFAFB" id="Vector_5" />
          <path d={svgPaths.p3f0a4700} fill="#FBFAFB" id="Vector_6" />
          <path d={svgPaths.p23289540} fill="#FBFAFB" id="Vector_7" />
          <path d={svgPaths.p3e4bda00} fill="#131313" id="Vector_8" />
          <path d={svgPaths.p296e2c00} fill="#131313" id="Vector_9" />
          <path d={svgPaths.p19515ff0} fill="#131313" id="Vector_10" />
          <path d={svgPaths.p31618900} fill="#131313" id="Vector_11" />
          <path d={svgPaths.p39223880} fill="#131313" id="Vector_12" />
          <path d={svgPaths.p1bd3c400} fill="#686767" id="Vector_13" />
          <path d={svgPaths.p359a7e80} fill="#131313" id="Vector_14" />
          <path d={svgPaths.p3e63180} fill="#131313" id="Vector_15" />
          <path d={svgPaths.paaa6880} fill="#373636" id="Vector_16" />
          <path d={svgPaths.p10f0c5f2} fill="#131313" id="Vector_17" />
          <path d={svgPaths.p52453e0} fill="#373636" id="Vector_18" />
          <path d={svgPaths.p3c4aec40} fill="#373636" id="Vector_19" />
          <path d={svgPaths.p32934e80} fill="#131313" id="Vector_20" />
          <path d={svgPaths.p2e289400} fill="#616060" id="Vector_21" />
          <path d={svgPaths.p3edfd180} fill="#131313" id="Vector_22" />
          <path d={svgPaths.p1f376f80} fill="#616060" id="Vector_23" />
          <path d={svgPaths.p875d1f0} fill="#0C0C0B" id="Vector_24" />
          <path d={svgPaths.p300eb640} fill="#131313" id="Vector_25" />
          <path d={svgPaths.p367d1d00} fill="#131313" id="Vector_26" />
          <path d={svgPaths.p29a74f80} fill="#131313" id="Vector_27" />
          <path d={svgPaths.p1b4e74f0} fill="#616060" id="Vector_28" />
          <path d={svgPaths.pf076e00} fill="#373636" id="Vector_29" />
          <path d={svgPaths.p2fa31400} fill="#616060" id="Vector_30" />
          <path d={svgPaths.p22a1b680} fill="#FBFAFB" id="Vector_31" />
          <path d={svgPaths.pa8cf100} fill="#E23952" id="Vector_32" />
          <path d={svgPaths.p33a5ac00} fill="#FBFAFB" id="Vector_33" />
          <path d={svgPaths.p27b2c680} fill="#E23952" id="Vector_34" />
          <path d={svgPaths.p2a394f80} fill="#131313" id="Vector_35" />
          <path d={svgPaths.p31de3700} fill="#FBFAFB" id="Vector_36" />
          <path d={svgPaths.p22756c00} fill="#FBFAFB" id="Vector_37" />
          <path d={svgPaths.p37944b80} fill="#FBFAFB" id="Vector_38" />
          <path d={svgPaths.pf140a00} fill="#131313" id="Vector_39" />
          <path d={svgPaths.p2a9ea880} fill="#FBFAFB" id="Vector_40" />
          <path d={svgPaths.p3132c240} fill="#0C0C0B" id="Vector_41" />
          <path d={svgPaths.p3db2c200} fill="#FBFAFB" id="Vector_42" />
          <path d={svgPaths.p2dad8100} fill="#131313" id="Vector_43" />
          <path d={svgPaths.p6d15b00} fill="#FBFAFB" id="Vector_44" />
          <path d={svgPaths.p21c1a580} fill="#FBFAFB" id="Vector_45" />
          <path d={svgPaths.p252c2d70} fill="#FBFAFB" id="Vector_46" />
          <path d={svgPaths.p38717cf0} fill="#E23952" id="Vector_47" />
          <path d={svgPaths.p2f3b0d80} fill="#E23952" id="Vector_48" />
          <path d={svgPaths.p2a8e1c00} fill="#131313" id="Vector_49" />
          <path d={svgPaths.p1a6a700} fill="#686767" id="Vector_50" />
          <path d={svgPaths.pc753200} fill="#616060" id="Vector_51" />
          <path d={svgPaths.p68bd700} fill="#131313" id="Vector_52" />
          <path d={svgPaths.p1f4e8b00} fill="#686767" id="Vector_53" />
          <path d={svgPaths.p9906480} fill="#686767" id="Vector_54" />
          <path d={svgPaths.p10106400} fill="#616060" id="Vector_55" />
          <path d={svgPaths.p1f303900} fill="#686767" id="Vector_56" />
          <path d={svgPaths.p2dc077b0} fill="#616060" id="Vector_57" />
          <path d={svgPaths.p20af0300} fill="#131313" id="Vector_58" />
          <path d={svgPaths.p370295f0} fill="#686767" id="Vector_59" />
          <path d={svgPaths.p572c3b0} fill="#E23952" id="Vector_60" />
          <path d={svgPaths.p333f9680} fill="#E23952" id="Vector_61" />
          <path d={svgPaths.pf67740} fill="#E23952" id="Vector_62" />
          <path d={svgPaths.p2db76580} fill="#E23952" id="Vector_63" />
          <path d={svgPaths.p2c9e2200} fill="#686767" id="Vector_64" />
          <path d={svgPaths.p253f080} fill="#686767" id="Vector_65" />
          <path d={svgPaths.p20f33100} fill="#686767" id="Vector_66" />
          <path d={svgPaths.p1f36cd00} fill="#E23952" id="Vector_67" />
          <path d={svgPaths.p14e05c00} fill="#616060" id="Vector_68" />
          <path d={svgPaths.p31b3fd60} fill="#E23952" id="Vector_69" />
          <path d={svgPaths.pbdeb800} fill="#E23952" id="Vector_70" />
          <path d={svgPaths.p11a0f800} fill="#E23952" id="Vector_71" />
          <path d={svgPaths.p68224c0} fill="#686767" id="Vector_72" />
          <path d={svgPaths.p8cb1680} fill="#E23952" id="Vector_73" />
          <path d={svgPaths.p2ece5d00} fill="#686767" id="Vector_74" />
          <path d={svgPaths.p16604b00} fill="#686767" id="Vector_75" />
          <path d={svgPaths.p2e844a00} fill="#E23952" id="Vector_76" />
          <path d={svgPaths.p1969dd80} fill="#E23952" id="Vector_77" />
          <path d={svgPaths.p30a4990} fill="#616060" id="Vector_78" />
          <path d={svgPaths.p57a0800} fill="#686767" id="Vector_79" />
          <path d={svgPaths.p1740b280} fill="#E23952" id="Vector_80" />
          <path d={svgPaths.p3db71a00} fill="#686767" id="Vector_81" />
          <path d={svgPaths.p25dc700} fill="#E23952" id="Vector_82" />
          <path d={svgPaths.p596c400} fill="#E23952" id="Vector_83" />
          <path d={svgPaths.p1a6e94f0} fill="#FBFAFB" id="Vector_84" />
          <path d={svgPaths.p2d97a280} fill="#FBFAFB" id="Vector_85" />
          <path d={svgPaths.p25d67b00} fill="#E23952" id="Vector_86" />
          <path d={svgPaths.p266a7700} fill="#686767" id="Vector_87" />
          <path d={svgPaths.p243fcc80} fill="#616060" id="Vector_88" />
          <path d={svgPaths.p21c91a00} fill="#686767" id="Vector_89" />
          <path d={svgPaths.p36a3cc00} fill="#686767" id="Vector_90" />
          <path d={svgPaths.pea54680} fill="#686767" id="Vector_91" />
          <path d={svgPaths.p2d345600} fill="#616060" id="Vector_92" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex h-[288px] items-center justify-center relative shrink-0 w-full">
      <Group8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <Btn1 />
      <Frame17 />
      <Frame40 />
    </div>
  );
}

function X1PopEncoding1() {
  return (
    <div className="bg-[#282828] col-[1/span_4] h-[436px] justify-self-stretch relative row-3 self-start shrink-0" data-name="X1  pop/ Encoding">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
          <Title />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div aria-hidden className="absolute border-b-2 border-solid border-white inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Video</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center py-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#8b8b8b] text-[14px] whitespace-nowrap">Audio</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="tab">
      <div aria-hidden className="absolute border-[#8e8e91] border-b border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-[#3f3f3f] flex-[1_0_0] min-w-px relative" data-name="画板 4">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[14px] text-white whitespace-nowrap">H.264</p>
          <div className="relative shrink-0 size-[16px]" data-name="剪头⬇️">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]" data-name="路径">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p333111c0} id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="item 01">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#8e8e91] text-[14px] text-right w-[120px]">Codec</p>
      <Component29 />
    </div>
  );
}

function Component30() {
  return (
    <div className="bg-[#3f3f3f] flex-[1_0_0] min-w-px relative" data-name="画板 4">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[14px] text-white whitespace-nowrap">High</p>
          <div className="relative shrink-0 size-[16px]" data-name="剪头⬇️">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]" data-name="路径">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p333111c0} id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="item 02">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#8e8e91] text-[14px] text-right w-[120px]">Profile</p>
      <Component30 />
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-[#3f3f3f] flex-[1_0_0] min-w-px relative" data-name="画板 4">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[14px] text-white whitespace-nowrap">{`Same as the Source `}</p>
          <div className="relative shrink-0 size-[16px]" data-name="剪头⬇️">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]" data-name="路径">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p333111c0} id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="item 03">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#8e8e91] text-[14px] text-right w-[120px]">Resolution</p>
      <Component31 />
    </div>
  );
}

function Component32() {
  return (
    <div className="bg-[#3f3f3f] flex-[1_0_0] min-w-px relative" data-name="画板 4">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[14px] text-white whitespace-nowrap">CBR</p>
          <div className="relative shrink-0 size-[16px]" data-name="剪头⬇️">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]" data-name="路径">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p333111c0} id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="item 05">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#8e8e91] text-[14px] text-right w-[120px]">Rate Control</p>
      <Component32 />
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-[#3f3f3f] flex-[1_0_0] min-w-px relative" data-name="画板 4">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[14px] text-white whitespace-nowrap">4 Mbps</p>
          <div className="relative shrink-0 size-[16px]" data-name="剪头⬇️">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]" data-name="路径">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p333111c0} id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="item 06">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#8e8e91] text-[14px] text-right w-[120px]">Bitrate</p>
      <Component33 />
    </div>
  );
}

function Component34() {
  return (
    <div className="bg-[#3f3f3f] flex-[1_0_0] min-w-px relative" data-name="画板 4">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[14px] text-white whitespace-nowrap">60</p>
          <div className="relative shrink-0 size-[16px]" data-name="剪头⬇️">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]" data-name="路径">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p333111c0} id="è·¯å¾" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="item 07">
      <p className="[word-break:break-word] font-['Quicksand:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#8e8e91] text-[14px] text-right w-[120px]">GOP</p>
      <Component34 />
    </div>
  );
}

function CardBody() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="card-body">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="card">
      <CardBody />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="card-001">
      <Card />
    </div>
  );
}

function X1PopEncoding2() {
  return (
    <div className="bg-[#282828] col-[5/span_2] h-[436px] justify-self-stretch relative row-3 self-start shrink-0" data-name="X1  pop/ Encoding">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end p-[16px] relative size-full">
          <Tab />
          <Card1 />
          <div className="bg-white relative rounded-[4px] shrink-0 w-[80px]" data-name="btn">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Apply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="设置">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="è®¾ç½®">
          <mask height="16" id="mask0_0_374" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <path clipRule="evenodd" d="M0 0H16V16H0V0Z" fill="white" fillRule="evenodd" id="è·¯å¾" />
          </mask>
          <g mask="url(#mask0_0_374)">
            <path clipRule="evenodd" d={svgPaths.p3204800} fillRule="evenodd" id="è·¯å¾_2" stroke="white" strokeLinejoin="round" strokeWidth="1.33333" />
            <path clipRule="evenodd" d={svgPaths.p196c06c0} fillRule="evenodd" id="è·¯å¾_3" stroke="white" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component35() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[359.66px] overflow-clip p-[6px] rounded-[12px] size-[36px] top-[145px]" data-name="画板 9">
      <Component36 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center px-[7.5px] relative size-full text-center">
          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#8b8b8b] text-[16px] w-full">RECORDING</p>
          <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[24px] text-white w-full">00:00:00</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[167px]">
      <Frame22 />
    </div>
  );
}

function Component37() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="分组 2">
      <svg className="absolute block inset-0 size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 64 64" width="64">
        <g filter="url(#filter0_i_0_373)" id="è·¯å¾">
          <path clipRule="evenodd" d={svgPaths.p382e9800} fill="#AC121F" fillRule="evenodd" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="filter0_i_0_373" width="64" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-6.54545" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.350962 0 0 0 0 0.0818348 0 0 0 0 0.0818348 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_0_373" />
          </filter>
        </defs>
      </svg>
      <p className="[word-break:break-word] absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[14px] left-[17.45px] text-[14px] text-white top-[21.09px] whitespace-nowrap">REC</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#282828] col-[5/span_2] content-stretch flex flex-col gap-[26px] items-center justify-center justify-self-stretch overflow-clip relative row-2 self-stretch shrink-0" data-name="Frame">
      <Component35 />
      <Frame23 />
      <Component37 />
    </div>
  );
}

function Frame20() {
  return (
    <motion.div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[______202.67px_202.67px_202.67px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[___190px_190px_436px] h-[1450px] relative shrink-0 w-[1280px]">
      <VideoSection />
      <Frame21 />
      <X1PopEncoding />
      <X1PopEncoding1 />
      <X1PopEncoding2 />
      <Frame4 />
    </motion.div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start p-[16px] relative shrink-0" data-name="main">
      <Component27 />
      <Frame20 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex items-start left-[177px] top-[60px]">
      <div className="bg-[#282828] h-[931px] relative shrink-0 w-[264px]" data-name="Sidebar">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center pb-[20px] pt-[40px] px-[24px] relative size-full">
            <EncodingTab />
            <Network />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#575757] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
      </div>
      <Main />
    </div>
  );
}

export default function Encoder() {
  return (
    <div className="bg-[#121212] relative size-full" data-name="Encoder--首页">
      <Component15 />
      <Frame39 />
    </div>
  );
}