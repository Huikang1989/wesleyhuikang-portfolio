'use client';

import Image from 'next/image';

export default function QQDesignSystemPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full">
        <Image
          src="/images/qq-design-system/hero-bg.png"
          alt="QQ Design System Hero"
          width={1440}
          height={900}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1116px] mx-auto px-6">
          {/* Section Title */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <h2 className="text-[40px] font-bold text-black">
              Introduction
            </h2>
            <div className="w-full h-[4px] bg-black" />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Background */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[28px] font-bold text-black leading-tight">
                Background of the<br />
                QQ Design Component Library
              </h3>

              <ul className="text-[16px] leading-relaxed text-[#0C0C0C] space-y-4">
                <li>
                  <strong>About QQ:</strong> 25-year-old social platform with over 500 million monthly active users.
                </li>
                <li>
                  <strong>Scope:</strong> Covers instant messaging, social interaction, news, short videos, music, games, and value-added services.
                </li>
                <li>
                  <strong>Platforms:</strong> Available on mobile (iOS, Android), tablet, and desktop.
                </li>
                <li>
                  <strong>Team Structure:</strong> Around 1,500 team members, with approximately 100 designers spread across business units.
                </li>
                <li>
                  <strong>Challenges:</strong> 1) Design inconsistencies across different business teams. 2) Redundant resources leading to bloated app size, affecting performance. 3) Inefficient cross-team collaboration.
                </li>
                <li>
                  <strong>Need for a Design System:</strong> Essential to unify the design language and improve efficiency across this complex, multi-faceted platform.
                </li>
              </ul>
            </div>

            {/* Right Column - About My Role & Project */}
            <div className="flex flex-col gap-10">
              {/* About My Role */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] font-bold text-black">
                  About My Role
                </h3>
                <p className="text-[16px] leading-relaxed text-[#0C0C0C]">
                  As a designer in the Core Experience Team, I initiated and led the rebuilding of the QQ Design Component Library and played a key role in facilitating the collaborative process for QQ component development.
                </p>
              </div>

              {/* About the Project */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] font-bold text-black">
                  About the Project
                </h3>
                <p className="text-[16px] leading-relaxed text-[#0C0C0C]">
                  This project presentation draws from my previous project situation and experience. The goal is to share insights on building a design component library, focusing on creating a system that is collaborative, open, and efficient to maintain.
                </p>
                <p className="text-[16px] leading-relaxed text-[#0C0C0C]">
                  The presentation covers four main areas:
                </p>
                <ol className="text-[16px] leading-relaxed text-[#0C0C0C] list-decimal list-inside space-y-1 font-bold">
                  <li>Core Structure of the Component Library</li>
                  <li>Based on Design Tokens</li>
                  <li>Expansion Capabilities</li>
                  <li>Collaborative Process for Maintaining the Library</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-white pt-[60px] pb-[100px]">
        <div className="max-w-[1334px] mx-auto px-6">
          {/* Section Title */}
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-[40px] font-bold text-black">
              Pain Points
            </h2>
          </div>

          {/* Outer Contour Wrapper - solid black border, fully rounded (pill shape) */}
          <div className="relative border-2 border-black rounded-full py-12 px-8 md:py-12 md:px-8">
            {/* Three Circles - responsive: vertical on mobile, horizontal on desktop */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Circle 1 - Lack of Consistency */}
              <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-black flex flex-col items-center justify-center text-center p-6 md:p-10 bg-white">
                <h4 className="text-[20px] md:text-[24px] font-bold text-black mb-4">
                  Lack of Consistency
                </h4>
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C] mb-2">
                  <strong>Issue:</strong> Inconsistent design across components
                </p>
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C]">
                  <strong>Impact:</strong> Increased learning curve for users and negative feedback
                </p>
              </div>

              {/* Circle 2 - Redundant Resources */}
              <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-black flex flex-col items-center justify-center text-center p-6 md:p-10 bg-white">
                <h4 className="text-[20px] md:text-[24px] font-bold text-black mb-4 leading-tight">
                  Redundant Resources,<br />
                  Low Reusability
                </h4>
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C] mb-2">
                  <strong>Issue:</strong> Duplication of design resources with low reuse rate
                </p>
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C]">
                  <strong>Impact:</strong> Impacts efficiency by consuming more resources
                </p>
              </div>

              {/* Circle 3 - Information Silos */}
              <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-black flex flex-col items-center justify-center text-center p-6 md:p-10 bg-white">
                <h4 className="text-[20px] md:text-[24px] font-bold text-black mb-4 leading-tight">
                  Information Silos,<br />
                  Lack of Collaboration
                </h4>
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C] mb-2">
                  <strong>Issue:</strong> Lack of open and collaborative mindset for co-creation
                </p>
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C]">
                  <strong>Impact:</strong> Creates isolated information with limited shared knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Goal Section */}
      <section className="bg-[#EAEAEA] py-[100px]">
        <div className="max-w-[1116px] mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-[40px] font-bold text-black text-center mb-16">
            Vision & Goal: Establish a unified,<br />
            collaborative workflow.
          </h2>
        </div>

        {/* Diagram Container - wider than content area */}
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative flex items-center justify-center">
            {/* Team Value - Left Side - left: calc(52% - 520px) */}
            <div className="hidden lg:flex absolute left-[calc(52%-520px)] top-1/2 -translate-y-1/2 flex-col items-center gap-2 bg-[#EAEAEA] px-0 py-9 z-10">
              <div className="px-4 py-2 border border-black rounded-full bg-white">
                <span className="text-[14px] font-medium text-black">Team Value</span>
              </div>
              <p className="text-[14px] text-[#0C0C0C] text-center">
                Lower costs and<br />improve efficiency
              </p>
            </div>

            {/* Main Circle Diagram */}
            <div className="relative w-[700px] h-[700px] md:w-[840px] md:h-[840px]">
              {/* Outer Circle - inset: -20px */}
              <div className="absolute inset-[-20px] rounded-full border-2 border-black/60" />

              {/* Inner Dashed Circle - inset: 110px */}
              <div className="absolute inset-[110px] rounded-full border-2 border-dashed border-black/40 bg-[#D9D9D9]" />

              {/* Center Circle - QQ Design Component Library - increased 8% (264→285, 216→233) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[233px] h-[233px] md:w-[285px] md:h-[285px] rounded-full border-2 border-black bg-white flex flex-col items-center justify-center text-center p-4 z-10">
                <p className="text-[24px] md:text-[28px] font-bold text-black text-center leading-tight">
                  QQ DESIGN<br />COMPONENT<br />LIBRARY
                </p>
              </div>

              {/* Designers - Top - moved up 30px (80→50) */}
              <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border-2 border-black bg-white flex flex-col items-center justify-center text-center p-4">
                <h4 className="text-[18px] md:text-[20px] font-bold text-black mb-2">Designers</h4>
                <div className="w-8 h-[2px] bg-black mb-2" />
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C] leading-tight">
                  Updating components simultaneously, reducing resource redundancy and review time.
                </p>
              </div>

              {/* Developers - Bottom Left - moved up 20px (130→150) */}
              <div className="absolute bottom-[150px] left-[80px] md:left-[100px] w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border-2 border-black bg-white flex flex-col items-center justify-center text-center p-4">
                <h4 className="text-[18px] md:text-[20px] font-bold text-black mb-2">Developers</h4>
                <div className="w-8 h-[2px] bg-black mb-2" />
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C] leading-tight">
                  Introducing tokens of color and icon for easier adaptation across multiple platforms, reducing development time and extension costs.
                </p>
              </div>

              {/* Product Managers - Bottom Right - moved up 20px (130→150) */}
              <div className="absolute bottom-[150px] right-[80px] md:right-[100px] w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border-2 border-black bg-white flex flex-col items-center justify-center text-center p-4">
                <h4 className="text-[18px] md:text-[20px] font-bold text-black mb-2">Product<br />Managers</h4>
                <div className="w-8 h-[2px] bg-black mb-2" />
                <p className="text-[12px] md:text-[14px] text-[#0C0C0C] leading-tight">
                  Understanding platform standards and ensuring consistency in component styles, enhancing product quality.
                </p>
              </div>

              {/* Efficient Development - left: 140px, top: 250px */}
              <div className="absolute top-[200px] left-[110px] md:top-[250px] md:left-[140px] w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full bg-black flex items-center justify-center text-center p-2">
                <p className="text-[12px] md:text-[16px] font-medium text-white leading-tight">
                  Efficient<br />Development
                </p>
              </div>

              {/* Open Collaboration - right: 140px, top: 250px, font: 16px */}
              <div className="absolute top-[200px] right-[110px] md:top-[250px] md:right-[140px] w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full bg-black flex items-center justify-center text-center p-2">
                <p className="text-[12px] md:text-[16px] font-medium text-white leading-tight">
                  Open<br />Collaboration
                </p>
              </div>

              {/* Unified Experience - 160px */}
              <div className="absolute top-[calc(50%+120px)] md:top-[calc(50%+140px)] left-1/2 -translate-x-1/2 w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full bg-black flex items-center justify-center text-center p-2">
                <p className="text-[12px] md:text-[14px] font-medium text-white leading-tight">
                  Unified<br />Experience
                </p>
              </div>
            </div>

            {/* Platform Value - Right Side - right: calc(53% - 560px) */}
            <div className="hidden lg:flex absolute right-[calc(53%-560px)] top-1/2 -translate-y-1/2 flex-col items-center gap-2 bg-[#EAEAEA] px-0 py-9 z-10">
              <div className="px-4 py-2 border border-black rounded-full bg-white">
                <span className="text-[14px] font-medium text-black">Platform Value</span>
              </div>
              <p className="text-[14px] text-[#0C0C0C] text-center">
                Increase quality and build<br />a cohesive brand.
              </p>
            </div>
          </div>

          {/* Mobile: Value Pills */}
          <div className="flex lg:hidden justify-center gap-8 mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-2 border border-black rounded-full bg-[#EAEAEA]">
                <span className="text-[14px] font-medium text-black">Team Value</span>
              </div>
              <p className="text-[12px] text-[#0C0C0C] text-center">
                Lower costs and<br />improve efficiency
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-2 border border-black rounded-full bg-[#EAEAEA]">
                <span className="text-[14px] font-medium text-black">Platform Value</span>
              </div>
              <p className="text-[12px] text-[#0C0C0C] text-center">
                Increase quality and build<br />a cohesive brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Structure of the QQ Design Component Library Section */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1116px] mx-auto px-6">
          {/* Header with Title */}
          <h2 className="text-[40px] font-bold text-black leading-tight mb-16">
            Core Structure of the<br />
            QQ Design Component Library
          </h2>

          {/* Three Part Cards */}
          <div className="grid grid-cols-3 gap-4 mb-20">
            {/* Part 1 */}
            <div className="bg-[#ECEDEF] rounded-[12px] p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <p className="text-[28px] font-bold text-black mb-1">Part 1</p>
                <p className="text-[28px] font-bold text-black">Guidelines</p>
              </div>
              <p className="text-[16px] text-black">
                Guidelines to help better maintain and utilize the component library.
              </p>
            </div>

            {/* Part 2 */}
            <div className="bg-[#ECEDEF] rounded-[12px] p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <p className="text-[28px] font-bold text-black mb-1">Part 2</p>
                <p className="text-[28px] font-bold text-black">Atomic Styles</p>
              </div>
              <p className="text-[16px] text-black">
                Definitions for foundational elements
              </p>
            </div>

            {/* Part 3 */}
            <div className="bg-[#ECEDEF] rounded-[12px] p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <p className="text-[28px] font-bold text-black mb-1">Part 3</p>
                <p className="text-[28px] font-bold text-black">Molecular Components</p>
              </div>
              <p className="text-[16px] text-black">
                UI patterns composed of multiple elements
              </p>
            </div>
          </div>

          {/* Part 1: Guidelines */}
          <div className="mb-20">
            <h3 className="text-[32px] font-bold text-black pb-10">Part 1_Guidelines</h3>
            <div className="w-full h-[1px] bg-black mb-10" />

            {/* 1_1 User Guides */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">1_1_User Guides</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                A detailed manual for the component library, including foundational usage instructions, comprehensive guidelines, and clear references for using the library efficiently.
              </p>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8">
                <Image
                  src="/images/qq-design-system/user-guides.png"
                  alt="User Guides"
                  width={1000}
                  height={1200}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>

            {/* 1_2 Update Logs */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">1_2_Update Logs</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10">
                Documents all changes made to the component library, from minor bug fixes to all contributors.
              </p>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8 h-[680px] scrollable-container">
                <Image
                  src="/images/qq-design-system/update-logs.png"
                  alt="Update Logs"
                  width={1000}
                  height={1200}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>

            {/* 1_3 Quick Access Menus */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">1_3_Quick Access Menus</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                A shortcut tool for common tasks within the library, including quick component ID identification, design, and more efficient access to component list for easy reference.
              </p>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8 h-[680px] scrollable-container">
                <Image
                  src="/images/qq-design-system/quick-access-menus.png"
                  alt="Quick Access Menus"
                  width={1000}
                  height={1200}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>
          </div>

          {/* Part 2: Atomic Styles */}
          <div className="mb-20">
            <h3 className="text-[28px] font-bold text-black mb-4">Part 2_Atomic Styles</h3>
            <p className="text-[16px] text-[#0C0C0C] mb-8 w-3/4">
              Atomic styles are the most basic visual design of the UI, encompassing elements such as color, fonts, icons, and layout components to ensure consistency.
            </p>

            {/* Atomic Styles Grid - Row 1 */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 pb-5 px-3 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/images/qq-design-system/atomic-icons.png"
                    alt="Icons"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-[8px]"
                  />
                </div>
                <span className="text-[18px] font-medium text-black">Icons</span>
              </div>
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 pb-5 px-3 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/images/qq-design-system/atomic-colors.png"
                    alt="Colors"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-[8px]"
                  />
                </div>
                <span className="text-[18px] font-medium text-black">Colors</span>
              </div>
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 pb-5 px-3 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/images/qq-design-system/atomic-typography.png"
                    alt="Font & Typography"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-[8px]"
                  />
                </div>
                <span className="text-[18px] font-medium text-black">Font & Typography</span>
              </div>
            </div>

            {/* Atomic Styles Grid - Row 2 */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 pb-5 px-3 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/images/qq-design-system/atomic-corner-radius.png"
                    alt="Corner Radius"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-[8px]"
                  />
                </div>
                <span className="text-[18px] font-medium text-black">Corner Radius</span>
              </div>
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 pb-5 px-3 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/images/qq-design-system/atomic-grid-system.png"
                    alt="Grid System"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-[8px]"
                  />
                </div>
                <span className="text-[18px] font-medium text-black">Grid System</span>
              </div>
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 pb-5 px-3 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/images/qq-design-system/atomic-qq-emoji.png"
                    alt="QQ Emoji"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-[8px]"
                  />
                </div>
                <span className="text-[18px] font-medium text-black">QQ Emoji</span>
              </div>
            </div>

            {/* Atomic Styles Grid - Row 3 */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 pb-5 px-3 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src="/images/qq-design-system/atomic-motion.png"
                    alt="Motion Principles"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-[8px]"
                  />
                </div>
                <span className="text-[18px] font-medium text-black">Motion Principles</span>
              </div>
            </div>
          </div>

          {/* Part 3: Molecular Components */}
          <div>
            <h3 className="text-[28px] font-bold text-black mb-4">Part 3_Molecular Components</h3>
            <p className="text-[16px] text-[#0C0C0C] mb-8 w-3/4">
              Molecular components are more complex UI components composed from atomic styles, such as buttons, input fields, cards, navigation bars, and lists, designed to cover most common use cases while maintaining flexibility and scalability.
            </p>

            {/* 3_1 Standard Primary Interfaces */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">3_1_Standard Primary Interfaces</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                Default templates for primary application screens, such as onboarding, settings, and other key interfaces, ensuring consistent user experiences across the platform.
              </p>
              <div className="bg-[#ECEDEF] rounded-[12px] overflow-hidden">
                <Image
                  src="/images/qq-design-system/primary-interfaces.png"
                  alt="Standard Primary Interfaces"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* 3_2 Navigation Components */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">3_2_Navigation Components</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10">
                Components for navigating the app, including navigation bars, tab bars, and tabs.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/navigation-bar.png"
                    alt="Navigation Bar"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Navigation Bar</span>
                </div>
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/tab-bar.png"
                    alt="Tab Bar"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Tab Bar</span>
                </div>
              </div>
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                <Image
                  src="/images/qq-design-system/tabs.png"
                  alt="Tabs"
                  width={1000}
                  height={400}
                  className="w-full h-auto mb-4 rounded-[8px]"
                />
                <span className="text-[18px] font-medium text-black">Tabs</span>
              </div>
            </div>

            {/* 3_3 Content Components */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">3_3_Content Components</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                Content components include list view, avatars, and markers, tags, chat bubbles, and other visual elements that make content structures are dynamic.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/list-view.png"
                    alt="List View"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">List View</span>
                </div>
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/user-avatar.png"
                    alt="User Avatar"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">User Avatar</span>
                </div>
              </div>
              <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                <Image
                  src="/images/qq-design-system/chat-bubbles.png"
                  alt="Chat Bubbles"
                  width={1000}
                  height={400}
                  className="w-full h-auto mb-4 rounded-[8px]"
                />
                <span className="text-[18px] font-medium text-black">Chat Bubbles</span>
              </div>
            </div>

            {/* 3_4 Action Components */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">3_4_Action Components</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                The part includes buttons, switches, checkboxes, pickers, slut, filters, steppers, action sheets, as well as toast notifications, and dialog actions.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/button.png"
                    alt="Button"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Button</span>
                </div>
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/picker.png"
                    alt="Picker"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Picker</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/share-sheet.png"
                    alt="Share Sheet"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Share Sheet</span>
                </div>
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/float-button.png"
                    alt="Float Button"
                    width={400}
                    height={300}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Float Button</span>
                </div>
              </div>
            </div>

            {/* 3_5 Feedback Components */}
            <div>
              <h4 className="text-[20px] font-bold text-black mb-4">3_5_Feedback Components</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10">
                Components for system states to User: Toast, Notification Bar, and Loading indicators.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/toast.png"
                    alt="Toast"
                    width={300}
                    height={200}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Toast</span>
                </div>
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/notification-bar.png"
                    alt="Notification Bar"
                    width={300}
                    height={200}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Notification Bar</span>
                </div>
                <div className="bg-[#ECEDEF] rounded-[12px] pt-3 px-3 pb-5 flex flex-col items-center">
                  <Image
                    src="/images/qq-design-system/loading.png"
                    alt="Loading"
                    width={300}
                    height={200}
                    className="w-full h-auto mb-4 rounded-[8px]"
                  />
                  <span className="text-[18px] font-medium text-black">Loading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Based on Design Token Section */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1116px] mx-auto px-6">
          {/* Header with Title */}
          <h2 className="text-[40px] font-bold text-black leading-tight mb-16">
            Based on Design Token
          </h2>

          {/* Three Part Cards */}
          <div className="grid grid-cols-3 gap-4 mb-20">
            {/* Part 1 */}
            <div className="bg-white rounded-[12px] p-6 flex flex-col justify-between min-h-[240px] border-[1.5px] border-black">
              <div>
                <p className="text-[28px] font-bold text-black mb-1">Part 1</p>
                <p className="text-[28px] font-bold text-black">Understanding Design Tokens</p>
              </div>
              <p className="text-[16px] text-black">
                Definition, Structure and Functionality of Design Token
              </p>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-[12px] p-6 flex flex-col justify-between min-h-[240px] border-[1.5px] border-black">
              <div>
                <p className="text-[28px] font-bold text-black mb-1">Part 2</p>
                <p className="text-[28px] font-bold text-black">Color Tokens</p>
              </div>
              <p className="text-[16px] text-black">
                The semantics and usage of color Token
              </p>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-[12px] p-6 flex flex-col justify-between min-h-[240px] border-[1.5px] border-black">
              <div>
                <p className="text-[28px] font-bold text-black mb-1">Part 3</p>
                <p className="text-[28px] font-bold text-black">Icon Tokens</p>
              </div>
              <p className="text-[16px] text-black">
                The semantics and usage of Icon Token
              </p>
            </div>
          </div>

          {/* Part 1: Understanding Design Tokens */}
          <div className="mb-20">
            <h3 className="text-[32px] font-bold text-black pb-10">Part 1_Understanding Design Tokens</h3>
            <div className="w-full h-[1px] bg-black mb-10" />

            {/* 1_1 Definition */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">1_1_Definition</h4>
              <p className="text-[16px] text-[#0C0C0C] w-3/4">
                A Design Token is a fundamental naming entity in the design system. It represents a set of atomic parameters for design attributes, such as RGB color values, spacing, sizes, etc., in a uniform language between design and development.
              </p>
            </div>

            {/* 1_2 Structure */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">1_2_Structure</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                A token is composed of two parts: a coding name representing its type and a defined value associated with it. Tokens encapsulate clear names in a Tree-structure to achieve a standardized effect.
              </p>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8">
                <Image
                  src="/images/qq-design-system/token-structure.png"
                  alt="Token Structure"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>

            {/* 1_3 Functionality */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">1_3_Functionality</h4>
              <ol className="text-[16px] text-[#0C0C0C] mb-10 w-3/4 list-decimal list-inside space-y-2">
                <li><strong>Maintain a single source of design parameters</strong> to achieve comprehensive control over design and front-end design and development.</li>
                <li><strong>Automate theme adaptation</strong> without the need for individual design adjusts.</li>
                <li><strong>Reduce redundant resource creation and uploads</strong> by minimizing the duplication of design assets, preventing excessive expansion of resources within the project.</li>
              </ol>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8">
                <Image
                  src="/images/qq-design-system/token-functionality.png"
                  alt="Token Functionality"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>
          </div>

          {/* Part 2: Color Tokens */}
          <div className="mb-20">
            <h3 className="text-[32px] font-bold text-black pb-10">Part 2_Color Tokens</h3>
            <div className="w-full h-[1px] bg-black mb-10" />

            {/* 2_1 Layer: Three Spaces × Three Types */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">2_1_Layer: Three Spaces × Three Types</h4>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8">
                <Image
                  src="/images/qq-design-system/color-tokens-layer.png"
                  alt="Color Tokens Layer"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>

            {/* 2_2 Classification */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">2_2_Classification</h4>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8">
                <Image
                  src="/images/qq-design-system/color-tokens-classification.png"
                  alt="Color Tokens Classification"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>

            {/* 2_3 Multiple Color Themes Adaptation */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">2_3_Multiple Color Themes Adaptation</h4>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                The color tokens in QQ are not single colors but represent a mapping of multiple color systems. The system includes Lite Mode themes: Day and Night/Dark, Light, and premium themes. When a color token is used, all themes are automatically applied.
              </p>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8 mb-6">
                <Image
                  src="/images/qq-design-system/color-tokens-themes.png"
                  alt="Color Tokens Themes"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
              <p className="text-[16px] text-[#0C0C0C] w-3/4">
                Both the optional and default Theme and design in Theme A is also state level data to ensure codes. They should be also clearly Token. This includes 6 Themes in Theme by the system for supporting designers, featuring consistent designs of the component library for different themes.
              </p>
            </div>

            {/* 2_4 Why can't we merge multiple Tokens into one color? */}
            <div className="mb-[60px]">
              <h4 className="text-[20px] font-bold text-black mb-4">2_4_Why can&apos;t we merge multiple Tokens into one color?</h4>
              <ol className="text-[16px] text-[#0C0C0C] mb-10 w-3/4 list-decimal list-inside space-y-4">
                <li><strong>Maintain the independence of elements.</strong> For example, although icons and text might share the same grey color, the Icon Token and Text Token should be kept separate for greater flexibility.</li>
                <li><strong>Enable compatibility across Diverse themes and scenarios.</strong> While multiple elements may share a color in one theme, in other themes, these elements might require different colors. Therefore, when using a color Token, it is essential to consider the semantic role to ensure adaptability, comprehensiveness, rather than focusing solely on the color itself.</li>
              </ol>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8">
                <Image
                  src="/images/qq-design-system/color-tokens-merge.png"
                  alt="Why can't merge multiple Tokens"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>
          </div>

          {/* Part 3: Icon Tokens */}
          <div>
            <h3 className="text-[32px] font-bold text-black pb-10">Part 3_Icon Tokens</h3>
            <div className="w-full h-[1px] bg-black mb-10" />

            <div>
              <p className="text-[16px] text-[#0C0C0C] mb-6 w-3/4">
                <strong>Overview:</strong> The icon library consists of a high-organized icon set, maintaining uniqueness.
              </p>
              <p className="text-[16px] text-[#0C0C0C] mb-6 w-3/4">
                <strong>Consistency and Optimization:</strong> To maintain visual consistency and reduce installation load on design materials. The system designs should center on 1024 sizes.
              </p>
              <p className="text-[16px] text-[#0C0C0C] mb-6 w-3/4">
                <strong>Token Structure:</strong> In actual design, each icon is composed of two associated Tokens to be: an Icon Name Token and an Icon Color Token.
              </p>
              <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
                <strong>Mobile Icon Size Specifications:</strong> The icon library provides size standard sets (48px), which will be added in Icon Name &quot;Mini&quot;, &quot;Small&quot;, and &quot;Mid&quot;.
              </p>
              <div className="bg-[#ECEDEF] rounded-[12px] p-8">
                <Image
                  src="/images/qq-design-system/icon-tokens.png"
                  alt="Icon Tokens"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Capabilities Section */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1116px] mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-[40px] font-bold text-black leading-tight mb-10">
            Expansion Capabilities
          </h2>
          <div className="w-full h-[1px] bg-black mb-16" />

          {/* Access Detailed Interaction Rules */}
          <div className="mb-[60px]">
            <h3 className="text-[28px] font-bold text-black mb-4">Access Detailed Interaction Rules</h3>
            <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
              Within the Figma component library, you can click the link to access the QQ Design System website for comprehensive interaction rules and usage guidelines. (Currently, the website is internal-only and not accessible externally.)
            </p>
            <div className="bg-[#ECEDEF] rounded-[12px] p-8 mb-6">
              <Image
                src="/images/qq-design-system/expansion-interaction-rules-1.png"
                alt="Button Component"
                width={1000}
                height={400}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
            <div className="bg-[#ECEDEF] rounded-[12px] p-8">
              <Image
                src="/images/qq-design-system/expansion-interaction-rules-2.png"
                alt="QQ Design System Website"
                width={1000}
                height={600}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </div>

          {/* Preview Component Development Effects */}
          <div className="mb-[60px]">
            <h3 className="text-[28px] font-bold text-black mb-4">Preview Component Development Effects</h3>
            <p className="text-[16px] text-[#0C0C0C] mb-4">
              The development status of each component is visible in the header.
            </p>
            <p className="text-[16px] text-[#0C0C0C] mb-10 w-3/4">
              In the internal branch version of the app, you can access the QQ Component Library in the &quot;Settings&quot; section to view components&apos; effects.
            </p>
            <div className="bg-[#ECEDEF] rounded-[12px] p-8 mb-6">
              <Image
                src="/images/qq-design-system/expansion-preview-1.png"
                alt="Button Component Developed"
                width={1000}
                height={400}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
            <div className="bg-[#ECEDEF] rounded-[12px] p-8">
              <Image
                src="/images/qq-design-system/expansion-preview-2.png"
                alt="Component Preview on Mobile"
                width={1000}
                height={600}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </div>

          {/* Access Development Code */}
          <div>
            <h3 className="text-[28px] font-bold text-black mb-4">Access Development Code</h3>
            <p className="text-[16px] text-[#0C0C0C] mb-10">
              You can click the link to navigate to the QQ Design System website for relevant code.
            </p>
            <div className="bg-[#ECEDEF] rounded-[12px] p-8 mb-6">
              <Image
                src="/images/qq-design-system/expansion-code-1.png"
                alt="Button Component Code Access"
                width={1000}
                height={400}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
            <div className="bg-[#ECEDEF] rounded-[12px] p-8">
              <Image
                src="/images/qq-design-system/expansion-code-2.png"
                alt="QQ Design System Code Website"
                width={1000}
                height={600}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Process for Maintaining the Library Section */}
      <section className="bg-white pt-[100px] pb-[240px]">
        <div className="max-w-[1116px] mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-[40px] font-bold text-black leading-tight mb-10">
            Collaborative Process<br />
            for Maintaining the Library
          </h2>
          <div className="w-full h-[1px] bg-black mb-16" />

          {/* Principles for Requesting New Component Styles */}
          <div>
            <h3 className="text-[28px] font-bold text-black leading-tight mb-6">
              Principles for Requesting<br />
              New Component Styles
            </h3>

            <div className="space-y-4 mb-10">
              <p className="text-[16px] text-[#0C0C0C]">
                <strong>Maintain Consistency:</strong> Wherever possible, use existing components to ensure consistency. Avoid adding new styles unless necessary.
              </p>
              <p className="text-[16px] text-[#0C0C0C]">
                <strong>Ownership of Proposals:</strong> Whoever proposes the addition of a new component style is responsible for delivering the design proposal and leading the evaluation and development process.
              </p>
              <p className="text-[16px] text-[#0C0C0C]">
                <strong>Process for New Component Requests:</strong> If a new component style is deemed essential, please follow the workflow illustrated below.
              </p>
            </div>

            <div className="bg-[#ECEDEF] rounded-[12px] p-8">
              <Image
                src="/images/qq-design-system/collaborative-workflow.png"
                alt="Collaborative Workflow"
                width={1000}
                height={1400}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
