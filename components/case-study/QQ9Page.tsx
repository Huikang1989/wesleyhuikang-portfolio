'use client';

import Image from 'next/image';

export default function QQ9Page() {
  return (
    <div className="bg-white">
      {/* Hero Section - 1440:810 aspect ratio, responsive, max-height: 90vh */}
      <section
        className="relative w-full aspect-[1440/810] max-h-[90vh] overflow-hidden"
        style={{
          background: `radial-gradient(363.51% 162.88% at -5.87% -7.04%, rgba(255, 255, 255, 0.60) 1.74%, rgba(255, 237, 233, 0.60) 8.27%, rgba(253, 235, 255, 0.60) 16.09%, rgba(229, 234, 255, 0.60) 38.95%, rgba(234, 241, 255, 0.60) 64.78%, rgba(244, 250, 255, 0.60) 88.09%, rgba(250, 255, 251, 0.60) 100%), #E0E9F7`
        }}
      >
        {/* Desktop Layout - absolute positioning based on 1440x810 design */}
        <div className="hidden md:block w-full h-full">
          {/* Logo + Carefree Limitless Group - max-width: 480px, gap: 20px */}
          <div
            className="absolute max-w-[480px]"
            style={{
              left: '9.86%',      /* 142/1440 */
              top: '30.6%',       /* 248/810 */
              width: '28.26%',    /* 407/1440 */
            }}
          >
            {/* Logo */}
            <Image
              src="/images/qq9/logo.png"
              alt="QQ9 Logo"
              width={407}
              height={164}
              className="w-full h-auto"
            />
            {/* Carefree Limitless - 20px gap from logo */}
            <div className="mt-[20px] ml-[3%] w-[97%]">
              <Image
                src="/images/qq9/carefree-limitless.png"
                alt="Carefree Limitless"
                width={395}
                height={83}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Hero Mockups - 815x1439px, shifted down 80px, max-width: 1080px */}
          <div
            className="absolute max-w-[1080px]"
            style={{
              left: '45.76%',     /* 659/1440 */
              top: '-25.6%',      /* (-287+80)/810 = -207/810 */
              width: '56.6%',     /* 815/1440 */
            }}
          >
            <Image
              src="/images/qq9/hero-mockups.png"
              alt="QQ9 App Mockups"
              width={815}
              height={1439}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center justify-center gap-6 w-full h-full px-6 py-8">
          {/* Logo */}
          <div className="w-[60%] max-w-[280px]">
            <Image
              src="/images/qq9/logo.png"
              alt="QQ9 Logo"
              width={280}
              height={113}
              className="w-full h-auto"
            />
          </div>

          {/* Carefree Limitless */}
          <div className="w-[55%] max-w-[260px]">
            <Image
              src="/images/qq9/carefree-limitless.png"
              alt="Carefree Limitless"
              width={260}
              height={55}
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Mockups */}
          <div className="flex-1 w-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/qq9/hero-mockups-mobile.png"
              alt="QQ9 App Mockups"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#D3DDED] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-[40px] font-bold text-black text-center mb-8">
            Introduction
          </h2>
          {/* Dividing line */}
          <div className="w-full h-[1px] bg-gray-300 mb-16" />

          {/* Three Column Layout - different widths: 45%, 33%, 22% */}
          <div className="flex gap-12 mb-16">
            {/* About QQ - widest column */}
            <div className="w-[45%]">
              <h3 className="text-[24px] font-bold text-black mb-4">About QQ</h3>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed">
                QQ is a popular social media platform in China, launched by Tencent in 1999. It started as an instant messaging service and evolved into a multi-functional platform. Today, QQ offers a variety of features, including messaging, video calls, social networking, games, music, and value-added services. With over 500 million monthly active users, QQ continues to be widely used, particularly among younger audiences, and remains one of Tencent&apos;s flagship products.
              </p>
              <h4 className="text-[24px] font-bold text-black mt-6 mb-3">Challenge</h4>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed">
                How to rejuvenate a 25-year-old product and make it appealing to the younger generation.
              </p>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed mt-3">
                In terms of design style, how to promote simplicity and efficiency while also incorporating a rich and youthful vitality.
              </p>
            </div>

            {/* QQ9 - medium column */}
            <div className="w-[33%]">
              <h3 className="text-[24px] font-bold text-black mb-4">QQ9</h3>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed">
                As a major upgrade, aims to bring more breakthroughs and innovations in user experience.
              </p>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed mt-3">
                <strong>Reshaping the QQ brand:</strong> Appealing to a wider range of ages while focusing on young users.
              </p>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed mt-3">
                <strong>Introducing virtual avatars:</strong> Providing users with a multi-dimensional interactive experience.
              </p>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed mt-3">
                <strong>Enhancing product fundamentals:</strong> Focusing on making QQ more user-friendly and efficient.
              </p>
            </div>

            {/* What We Did & My Role - narrowest column */}
            <div className="w-[22%]">
              <h3 className="text-[24px] font-bold text-black mb-4">What We Did</h3>
              <ul className="text-[20px] text-[#0C0C0C] leading-relaxed space-y-1">
                <li>New branding</li>
                <li>UI / UX</li>
                <li>Animation</li>
                <li>Website design</li>
              </ul>
              <h4 className="text-[24px] font-bold text-black mt-6 mb-3">My Role</h4>
              <ul className="text-[20px] text-[#0C0C0C] leading-relaxed space-y-1">
                <li>Lead Designer</li>
                <li>UI / UX</li>
                <li>Key Visual &</li>
                <li>Branding</li>
                <li>Animation maker</li>
              </ul>
            </div>
          </div>

          {/* Video Section - autoplay muted with controls */}
          <div className="w-full aspect-video rounded-[12px] overflow-hidden bg-[#ECEDEF]">
            <iframe
              src="https://player.vimeo.com/video/970098372?autoplay=1&muted=1&loop=1&autopause=0&byline=0&title=0&portrait=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-16">
            Design Philosophy
          </h2>

          <div className="grid grid-cols-2 gap-16">
            <div className="flex items-start gap-4">
              <Image
                src="/images/qq9/arrow-icon.png"
                alt="Arrow"
                width={32}
                height={32}
                className="flex-shrink-0 mt-1"
              />
              <p className="text-[24px] text-[#0C0C0C] leading-relaxed">
                As the platform to enhance consistency with a simple and lightweight design language.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src="/images/qq9/arrow-icon.png"
                alt="Arrow"
                width={32}
                height={32}
                className="flex-shrink-0 mt-1"
              />
              <p className="text-[24px] text-[#0C0C0C] leading-relaxed">
                Shaping a diversified social space with multi-dimensional interactions, allowing users to express themselves easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-6">
            Inspiration
          </h2>
          <h3 className="text-[32px] font-bold text-black text-center mb-6">
            Vast Snowy Plains, Radiant Light
          </h3>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[800px] mx-auto mb-12 leading-relaxed">
            The vast, boundless snowy plains at dawn, where the sky and land merge into one, pure and pristine. This is not the end but a new beginning. Feel the perfect blend of brilliance and exuberance, warmth, and care that &apos;light&apos; brings, all on a foundation of purity and simplicity.
          </p>

          {/* Inspiration Image */}
          <div className="w-full rounded-[12px] overflow-hidden mb-16">
            <Image
              src="/images/qq9/inspiration-snow.png"
              alt="Vast Snowy Plains"
              width={1200}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Clean & Minimalistic + Vibrant & Warm Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="text-center">
              <h4 className="text-[32px] font-bold text-black mb-2">Clean & Minimalistic</h4>
              <p className="text-[20px] text-[#0C0C0C]">Inclusive container</p>
            </div>
            <span className="text-[32px] font-light text-black">+</span>
            <div className="text-center">
              <h4 className="text-[32px] font-bold text-black mb-2">Vibrant & Warm</h4>
              <p className="text-[20px] text-[#0C0C0C]">Full of youthful vitality</p>
            </div>
          </div>

          {/* Three Images Side by Side: Play of light, White plains, Flowing radiance */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Play of light - Clean & Minimalistic */}
            <div>
              <Image
                src="/images/qq9/clean-minimalistic.png"
                alt="Play of light"
                width={400}
                height={450}
                className="w-full h-auto rounded-[12px]"
              />
            </div>
            {/* White plains */}
            <div>
              <Image
                src="/images/qq9/white-plains.png"
                alt="White plains"
                width={400}
                height={450}
                className="w-full h-auto rounded-[12px]"
              />
            </div>
            {/* Flowing radiance - Vibrant & Warm */}
            <div>
              <Image
                src="/images/qq9/vibrant-warm.png"
                alt="Flowing radiance"
                width={400}
                height={450}
                className="w-full h-auto rounded-[12px]"
              />
            </div>
          </div>

          {/* Labels */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            <p className="text-[20px] text-gray-600 text-center">Play of light</p>
            <p className="text-[20px] text-gray-600 text-center">White plains</p>
            <p className="text-[20px] text-gray-600 text-center">Flowing radiance</p>
          </div>
        </div>
      </section>

      {/* Concept / Meaning / Visual Image Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Grid Layout - consistent column widths */}
          <div
            className="grid gap-x-0 gap-y-1 mb-12"
            style={{
              gridTemplateColumns: '1fr 24px 1fr 24px 1.5fr',
            }}
          >
            {/* Header Row */}
            <h3 className="text-[32px] font-bold text-black text-center mb-[60px]">Concept</h3>
            <div /> {/* Arrow spacer */}
            <h3 className="text-[32px] font-bold text-black text-center mb-[60px]">Meaning</h3>
            <div /> {/* Arrow spacer */}
            <h3 className="text-[32px] font-bold text-black text-center mb-[60px]">Visual Image</h3>

            {/* Carefree Row */}
            {/* Concept Cell - Carefree */}
            <div className="h-[280px] bg-[#F3F8FF] rounded-[16px] flex flex-col items-center justify-center">
              <p className="text-[24px] font-light text-black">Carefree</p>
              <p className="text-[20px] text-[#323A4D] mt-2">自在随心</p>
            </div>

            {/* Arrow */}
            <div className="h-[280px] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Meaning Cell - Lively and Joyful */}
            <div className="h-[280px] bg-[#F3F8FF] rounded-[16px] flex flex-col items-center justify-center px-6">
              <p className="text-[24px] font-light text-black text-center">Lively and Joyful Experience</p>
              <p className="text-[20px] text-[#323A4D] mt-2">活泼愉悦</p>
            </div>

            {/* Arrow */}
            <div className="h-[280px] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Visual Image Cell - Light × Color */}
            <div className="h-[280px] rounded-[16px] overflow-hidden relative">
              {/* Video Background - scaled up to fill container completely */}
              <iframe
                src="https://player.vimeo.com/video/970180940?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                className="absolute border-0 pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '250%',
                  height: '250%',
                  transform: 'translate(-50%, -50%)',
                }}
                allow="autoplay; fullscreen; picture-in-picture"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="flex items-center gap-8 px-8 py-4">
                  <div className="text-center">
                    <p className="text-[24px] font-light text-black">Light</p>
                    <p className="text-[20px] text-[#323A4D]">光</p>
                  </div>
                  <span className="text-[24px] text-[#323A4D]">×</span>
                  <div className="text-center">
                    <p className="text-[24px] font-light text-black">Color</p>
                    <p className="text-[20px] text-[#323A4D]">色彩</p>
                  </div>
                </div>
                <p className="text-[20px] text-[#323A4D] mt-2">Flowing Radiance</p>
              </div>
            </div>

            {/* Limitless Row */}
            {/* Concept Cell - Limitless */}
            <div className="h-[280px] bg-[#F9FCFF] rounded-[16px] flex flex-col items-center justify-center">
              <p className="text-[24px] font-light text-black">Limitless</p>
              <p className="text-[20px] text-[#323A4D] mt-2">无远弗届</p>
            </div>

            {/* Arrow */}
            <div className="h-[280px] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Meaning Cell - Inclusion and Accommodation */}
            <div className="h-[280px] bg-[#F9FCFF] rounded-[16px] flex flex-col items-center justify-center px-6">
              <p className="text-[24px] font-light text-black text-center">Inclusion and Accommodation</p>
              <p className="text-[20px] text-[#323A4D] mt-2">包容容纳</p>
            </div>

            {/* Arrow */}
            <div className="h-[280px] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Visual Image Cell - Metaspace × Shape */}
            <div className="h-[280px] rounded-[16px] overflow-hidden relative">
              {/* Video Background - scaled up to fill container completely */}
              <iframe
                src="https://player.vimeo.com/video/970197945?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                className="absolute border-0 pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '150%',
                  height: '150%',
                  transform: 'translate(-50%, -50%)',
                }}
                allow="autoplay; fullscreen; picture-in-picture"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="flex items-center gap-8 px-8 py-4">
                  <div className="text-center">
                    <p className="text-[24px] font-light text-black">Metaspace</p>
                    <p className="text-[20px] text-[#323A4D]">元空间</p>
                  </div>
                  <span className="text-[24px] text-[#323A4D]">×</span>
                  <div className="text-center">
                    <p className="text-[24px] font-light text-black">Shape</p>
                    <p className="text-[20px] text-[#323A4D]">形</p>
                  </div>
                </div>
                <p className="text-[20px] text-[#323A4D] mt-2">Sleek and Pure BG Patterns</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[800px] mx-auto leading-relaxed">
            &apos;Carefree&apos; embodies a lively and joyful experience, visually represented through &apos;Flowing Radiance&apos;, a design element that suggests vivid and dynamic fluidity. &apos;Limitless&apos;, signifying inclusion and accommodation, is captured through Shape Patterns of snowy plains.
          </p>
        </div>
      </section>

      {/* User's Emotional State Section */}
      <section className="bg-[#D3DDED] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Top Description */}
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[800px] mx-auto mb-12 leading-relaxed">
            The brilliance of QQ9 lies in its simplicity and purity, where beneath the surface, it conceals a richness and vibrancy waiting to be explored and discovered by the user, rather than immediately capturing their attention with flashy colors and elements.
          </p>

          {/* Video Container */}
          <div className="relative rounded-[12px] overflow-hidden">
            {/* Video */}
            <iframe
              src="https://player.vimeo.com/video/970243209?autoplay=1&muted=1&loop=1&byline=0&title=0&portrait=0"
              className="w-full aspect-[16/9]"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />

            {/* Overlaid Text - User's Emotional State */}
            <div className="absolute top-[55%] left-0 right-0 text-center pointer-events-none">
              <h4 className="text-[20px] font-bold text-black mb-2">User&apos;s Emotional State</h4>
              <p className="text-[20px] text-[#6B7280]">
                Appearing at every user&apos;s emotional touchpoint,<br />
                serving as a prompt, guide, or expression of care.
              </p>
            </div>

            {/* Overlaid Text - Background Pattern */}
            <div className="absolute bottom-[8%] left-0 right-0 text-center pointer-events-none">
              <h4 className="text-[20px] font-bold text-black mb-2">Background Pattern</h4>
              <p className="text-[20px] text-[#6B7280]">
                The spatial texture( pattern) exists as a background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Background Section */}
      <section
        className="py-[100px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/qq9/pattern-background.png')`
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-16">
            Pattern Background
          </h2>

          {/* 5 Phone Mockups - Desktop: 5 in a row, Mobile: 2+2+1 grid */}
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center items-end gap-6">
            {/* Login */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/pattern-login.png"
                alt="Login Pattern"
                width={260}
                height={530}
                className="w-auto h-[530px] object-contain"
                style={{
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Login</p>
            </div>

            {/* Chats */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/pattern-chats.png"
                alt="Chats Pattern"
                width={260}
                height={530}
                className="w-auto h-[530px] object-contain"
                style={{
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">chats</p>
            </div>

            {/* Messaging Interface */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/pattern-messaging.png"
                alt="Messaging Interface Pattern"
                width={260}
                height={530}
                className="w-auto h-[530px] object-contain"
                style={{
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Messaging Interface</p>
            </div>

            {/* Friends Status */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/pattern-friends.png"
                alt="Friends Status Pattern"
                width={260}
                height={530}
                className="w-auto h-[530px] object-contain"
                style={{
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Friends Status</p>
            </div>

            {/* Mini Program */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/pattern-mini-program.png"
                alt="Mini Program Pattern"
                width={260}
                height={530}
                className="w-auto h-[530px] object-contain"
                style={{
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Mini Program</p>
            </div>
          </div>

          {/* Mobile Layout - 2+2+1 grid */}
          <div className="flex md:hidden flex-col items-center gap-8">
            {/* Row 1: Login + Chats */}
            <div className="flex justify-center gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/qq9/pattern-login.png"
                  alt="Login Pattern"
                  width={160}
                  height={326}
                  className="w-auto h-[280px] object-contain"
                  style={{
                    filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <p className="text-[12px] text-[#6B7280] mt-3">Login</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/qq9/pattern-chats.png"
                  alt="Chats Pattern"
                  width={160}
                  height={326}
                  className="w-auto h-[280px] object-contain"
                  style={{
                    filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <p className="text-[12px] text-[#6B7280] mt-3">chats</p>
              </div>
            </div>

            {/* Row 2: Messaging Interface + Friends Status */}
            <div className="flex justify-center gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/qq9/pattern-messaging.png"
                  alt="Messaging Interface Pattern"
                  width={160}
                  height={326}
                  className="w-auto h-[280px] object-contain"
                  style={{
                    filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <p className="text-[12px] text-[#6B7280] mt-3">Messaging Interface</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/qq9/pattern-friends.png"
                  alt="Friends Status Pattern"
                  width={160}
                  height={326}
                  className="w-auto h-[280px] object-contain"
                  style={{
                    filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <p className="text-[12px] text-[#6B7280] mt-3">Friends Status</p>
              </div>
            </div>

            {/* Row 3: Mini Program (centered) */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/qq9/pattern-mini-program.png"
                  alt="Mini Program Pattern"
                  width={160}
                  height={326}
                  className="w-auto h-[280px] object-contain"
                  style={{
                    filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <p className="text-[12px] text-[#6B7280] mt-3">Mini Program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radiance In UI Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-4">
            Radiance In UI
          </h2>
          <h3 className="text-[28px] font-bold text-black text-center mb-16">
            Splash Screen
          </h3>

          {/* Two Phone Mockups Side by Side */}
          <div className="flex justify-center gap-16">
            {/* Left - New Startup Page (Video) */}
            <div className="flex gap-8 items-end">
              {/* Text Description */}
              <div className="flex flex-col justify-end pb-4">
                <h4 className="text-[20px] font-bold text-black mb-4">New Startup Page</h4>
                <ul className="text-[20px] text-[#0C0C0C] space-y-2">
                  <li>• Clean background</li>
                  <li>• Flowing radiance</li>
                  <li>• QQ&apos;s logo</li>
                  <li>• New version NO.9</li>
                </ul>
              </div>

              {/* Phone Mockup with Video */}
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/970280459?background=1&autoplay=1&loop=1&muted=1&autopause=0"
                    className="absolute border-0 pointer-events-none"
                    style={{
                      top: '50%',
                      left: '50%',
                      width: '177.78%',
                      height: '100%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right - Default Splash Screen (Image) */}
            <div className="flex gap-8 items-end">
              {/* Phone Mockup with Image */}
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Image content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <Image
                    src="/images/qq9/default-launch-page.png"
                    alt="Default Splash Screen"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Description */}
              <div className="flex flex-col justify-end pb-4">
                <h4 className="text-[20px] font-bold text-black mb-4">Default Splash Screen</h4>
                <ul className="text-[20px] text-[#0C0C0C] space-y-2">
                  <li>• QQ&apos;s logo</li>
                  <li>• Clean background</li>
                  <li>• Vibrant & colorful</li>
                  <li>• Positive upward</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chats Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-6">
            Chats
          </h2>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[700px] mx-auto mb-16 leading-relaxed">
            We hope that the radiant beauty serves as a positive influence on users, guiding them in an uplifting manner.
          </p>

          {/* Two Phone Mockups with side labels */}
          <div className="relative flex justify-center items-end" style={{ gap: '72px' }}>
            {/* Refresh Label */}
            <p className="text-[20px] text-[#6B7280] pb-4">Refresh</p>

            {/* Refresh Mockup - cropped to top portion */}
            <div
              className="relative"
              style={{
                width: '450px',
                height: '600px',
              }}
            >
              {/* Inner container with padding for shadow, clipped */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: '-80px',
                  left: '-80px',
                  right: '-80px',
                  bottom: '0',
                  paddingTop: '80px',
                  paddingLeft: '80px',
                  paddingRight: '80px',
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: '450px',
                    aspectRatio: '0.463537'
                  }}
                >
                  {/* Video content - base layer */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      width: '94%',
                      height: '94%',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '54px',
                    }}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '26px' }}
                    >
                      <source src="/images/qq9/refresh.mp4" type="video/mp4" />
                    </video>
                  </div>
                  {/* Phone frame - overlay */}
                  <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                      width: '153%',
                      aspectRatio: '0.578646',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Image
                      src="/images/qq9/phone_mocks.png"
                      alt="Phone Frame"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Mockup - cropped to top portion */}
            <div
              className="relative"
              style={{
                width: '450px',
                height: '600px',
              }}
            >
              {/* Inner container with padding for shadow, clipped */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: '-80px',
                  left: '-80px',
                  right: '-80px',
                  bottom: '0',
                  paddingTop: '80px',
                  paddingLeft: '80px',
                  paddingRight: '80px',
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: '450px',
                    aspectRatio: '0.463537'
                  }}
                >
                  {/* Video content - base layer */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      width: '94%',
                      height: '94%',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '54px',
                    }}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '26px' }}
                    >
                      <source src="/images/qq9/search.mp4" type="video/mp4" />
                    </video>
                  </div>
                  {/* Phone frame - overlay */}
                  <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                      width: '153%',
                      aspectRatio: '0.578646',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Image
                      src="/images/qq9/phone_mocks.png"
                      alt="Phone Frame"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Label */}
            <p className="text-[20px] text-[#6B7280] pb-4">Search</p>

            {/* Dividing line at the bottom - full width, overlaying mockups */}
            <div
              className="absolute z-30 left-1/2"
              style={{
                bottom: '0',
                transform: 'translateX(-50%)',
                width: '1600px',
              }}
            >
              <Image
                src="/images/qq9/divided-line.png"
                alt="Dividing Line"
                width={1600}
                height={20}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-6">
            Messaging
          </h2>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[800px] mx-auto mb-16 leading-relaxed">
            To mitigate user anxiety during this time, we integrate flowing radiance into the loading component, enhancing the user experience even under the weak network conditions.
          </p>

          {/* Three Phone Mockups */}
          <div className="flex justify-center gap-12">
            {/* Image loading */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{
                  width: '336px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '19px' }}
                  >
                    <source src="/images/qq9/image-loading.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] text-[#6B7280] mt-4">Image loading</p>
            </div>

            {/* Group chat engagement */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{
                  width: '336px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '19px' }}
                  >
                    <source src="/images/qq9/group-chat-engagement.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] text-[#6B7280] mt-4">Group chat engagement</p>
            </div>

            {/* Message loading */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{
                  width: '336px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '19px' }}
                  >
                    <source src="/images/qq9/message-loading.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] text-[#6B7280] mt-4">Message loading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="bg-[#D3DDED] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-6">
            Quick Actions
          </h2>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[700px] mx-auto mb-16 leading-relaxed">
            By introducing shortcut methods, we aim to enhance users&apos; efficiency in viewing and sending messages.
          </p>

          {/* Two Phone Mockups */}
          <div className="flex justify-center gap-24">
            {/* Organizing message list */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '20px' }}
                  >
                    <source src="/images/qq9/organizing-message.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] text-[#6B7280] mt-4">Organizing message list</p>
            </div>

            {/* Sending messages */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '20px' }}
                  >
                    <source src="/images/qq9/sending-message.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] text-[#6B7280] mt-4">Sending messages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avatar Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-4">
            Avatar
          </h2>
          <h3 className="text-[24px] font-bold text-black text-center mb-6">
            AIO Interaction (Conceptual Proposal)
          </h3>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[800px] mx-auto mb-16 leading-relaxed">
            It showcases the explorations in the use of avatars within the messaging context. We aim to foster more engaging and enjoyable interactions among users.
          </p>

          {/* Two Phone Mockups */}
          <div className="flex justify-center gap-24">
            {/* Virtual interaction */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '20px' }}
                  >
                    <source src="/images/qq9/virtual-interaction.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] text-[#6B7280] mt-4">Virtual interaction</p>
            </div>

            {/* Switching virtual space */}
            <div className="flex flex-col items-center">
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '20px' }}
                  >
                    <source src="/images/qq9/switching-virtual-space.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] text-[#6B7280] mt-4">Switching virtual space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-16">
            Structure
          </h2>

          {/* Video */}
          <div className="w-full aspect-video rounded-[12px] overflow-hidden bg-[#ECEDEF]">
            <iframe
              src="https://player.vimeo.com/video/970311263?background=1&autoplay=1&muted=1&loop=1&autopause=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* User Profile Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Layout: Text on left, Two mockups on right */}
          <div className="flex justify-center items-center gap-16">
            {/* Text Description */}
            <div className="flex flex-col justify-center max-w-[280px]">
              <h2 className="text-[32px] font-bold text-black mb-6">User Profile</h2>
              <ul className="text-[20px] text-[#0C0C0C] space-y-2">
                <li>• Vivid & dynamic avatar profile</li>
                <li>• Simulating weather conditions</li>
                <li>• Outfit recommendation</li>
                <li>• Taking photo with friends</li>
              </ul>
            </div>

            {/* Two Phone Mockups */}
            <div className="flex gap-8">
              {/* First mockup */}
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '20px' }}
                  >
                    <source src="/images/qq9/user_profile_01.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Second mockup */}
              <div
                className="relative"
                style={{
                  width: '340px',
                  aspectRatio: '0.463537'
                }}
              >
                {/* Video content - base layer */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    width: '94%',
                    height: '94%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '41px',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '20px' }}
                  >
                    <source src="/images/qq9/user_profile_02.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Phone frame - overlay */}
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: '153%',
                    aspectRatio: '0.578646',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src="/images/qq9/phone_mocks.png"
                    alt="Phone Frame"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Platform Section */}
      <section className="bg-[#D3DDED] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-bold text-black text-center mb-2">
            Desktop Platform
          </h2>
          <h3 className="text-[24px] font-bold text-black text-center mb-6">
            (Conceptual Proposal)
          </h3>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[600px] mx-auto mb-16 leading-relaxed">
            As users scroll through the list, their friends&apos; avatars are displayed within the desktop window.
          </p>

          {/* First Video */}
          <div className="w-full aspect-video rounded-[12px] overflow-hidden bg-[#ECEDEF] mb-8">
            <iframe
              src="https://player.vimeo.com/video/970692962?background=1&autoplay=1&muted=1&loop=1&autopause=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Second Video */}
          <div className="w-full aspect-video rounded-[12px] overflow-hidden bg-[#ECEDEF]">
            <iframe
              src="https://player.vimeo.com/video/970887382?background=1&autoplay=1&muted=1&loop=1&autopause=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-6">
            Contacts
          </h2>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[700px] mx-auto mb-16 leading-relaxed">
            Consolidate less frequently used entries into More, focusing on the most critical contact actions. In the Friend Status section, users can share their moods and interact more with others.
          </p>

          {/* Four Images */}
          <div className="flex justify-center" style={{ gap: '0px' }}>
            {/* Simplify info structure */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/simplify_info_structure.png"
                alt="Simplify info structure"
                width={345}
                height={700}
                className="object-contain"
                style={{
                  width: '345px',
                  height: 'auto',
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Simplify info structure</p>
            </div>

            {/* Add friends status */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/add_friends_status.png"
                alt="Add friends status"
                width={345}
                height={700}
                className="object-contain"
                style={{
                  width: '345px',
                  height: 'auto',
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Add friends status</p>
            </div>

            {/* Allow users to customize */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/allow_users_to_customize.png"
                alt="Allow users to customize"
                width={345}
                height={700}
                className="object-contain"
                style={{
                  width: '345px',
                  height: 'auto',
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Allow users to customize</p>
            </div>

            {/* Old version */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/qq9/old_version.png"
                alt="Old version"
                width={345}
                height={700}
                className="object-contain"
                style={{
                  width: '345px',
                  height: 'auto',
                  filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.2))'
                }}
              />
              <p className="text-[20px] text-[#6B7280] mt-4">Old version</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Easter Egg Section */}
      <section className="bg-[#D3DDED] overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '0px' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Layout: Text on left, Video mockup on right */}
          <div className="flex justify-center items-start gap-16">
            {/* Text Description */}
            <div className="flex flex-col max-w-[480px]" style={{ paddingTop: '60px' }}>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-[32px] font-bold text-black">About</h2>
                <span className="text-[24px] text-gray-400">|</span>
                <span className="text-[24px] text-black">Easter Egg</span>
              </div>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed mb-4">
                Users can view a hidden easter egg page by interacting with the 3D QQ logo. On this page, we offer the wallpapers about QQ9, delivering unexpected surprises to users and adding to the product&apos;s marketing efforts.
              </p>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed">
                When users discover this feature, they tend to share it on social media. It&apos;s organic promotion and generating buzz around the product.
              </p>
            </div>

            {/* Video Mockup - show more content, bottom aligned with section */}
            <div
              className="relative"
              style={{
                width: '450px',
                height: '750px',
              }}
            >
              {/* Inner container with padding for shadow, clipped */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: '-80px',
                  left: '-80px',
                  right: '-80px',
                  bottom: '0',
                  paddingTop: '80px',
                  paddingLeft: '80px',
                  paddingRight: '80px',
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: '450px',
                    aspectRatio: '0.463537'
                  }}
                >
                  {/* Video content - base layer */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      width: '94%',
                      height: '94%',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '54px',
                    }}
                  >
                    <iframe
                      src="https://player.vimeo.com/video/991870562?background=1&autoplay=1&muted=1&loop=1&autopause=0"
                      className="absolute border-0 pointer-events-none"
                      style={{
                        top: '50%',
                        left: '50%',
                        width: '177.78%',
                        height: '100%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      allow="autoplay; fullscreen; picture-in-picture"
                    />
                  </div>
                  {/* Phone frame - overlay */}
                  <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                      width: '153%',
                      aspectRatio: '0.578646',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Image
                      src="/images/qq9/phone_mocks.png"
                      alt="Phone Frame"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Dividing line at the bottom */}
              <div
                className="absolute z-30 left-1/2"
                style={{
                  bottom: '0',
                  transform: 'translateX(-50%)',
                  width: '1600px',
                }}
              >
                <Image
                  src="/images/qq9/divided-line.png"
                  alt="Dividing Line"
                  width={1600}
                  height={20}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallpapers Section */}
      <section className="bg-[#E0E9F7] pb-[100px]" style={{ paddingTop: '160px' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-16">
            Wallpapers
          </h2>

          {/* 5 Wallpaper Images - equal width, preserve original aspect ratio */}
          <div className="flex justify-center items-end gap-4">
            <Image
              src="/images/qq9/wallpaper_01.png"
              alt="Wallpaper 1"
              width={260}
              height={520}
              className="w-[19%] h-auto object-contain rounded-[16px]"
              style={{
                filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.15))'
              }}
            />
            <Image
              src="/images/qq9/wallpaper_02.png"
              alt="Wallpaper 2"
              width={260}
              height={520}
              className="w-[19%] h-auto object-contain rounded-[16px]"
              style={{
                filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.15))'
              }}
            />
            <Image
              src="/images/qq9/wallpaper_03.png"
              alt="Wallpaper 3"
              width={260}
              height={520}
              className="w-[19%] h-auto object-contain rounded-[16px]"
              style={{
                filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.15))'
              }}
            />
            <Image
              src="/images/qq9/wallpaper_04.png"
              alt="Wallpaper 4"
              width={260}
              height={520}
              className="w-[19%] h-auto object-contain rounded-[16px]"
              style={{
                filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.15))'
              }}
            />
            <Image
              src="/images/qq9/wallpaper_05.png"
              alt="Wallpaper 5"
              width={260}
              height={520}
              className="w-[19%] h-auto object-contain rounded-[16px]"
              style={{
                filter: 'drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.15))'
              }}
            />
          </div>
        </div>
      </section>

      {/* QQ Chasers of Light Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-6">
            QQ Chasers of Light
          </h2>
          <p className="text-[20px] text-[#0C0C0C] text-center max-w-[800px] mx-auto mb-16 leading-relaxed">
            We introduced a feature called &apos;QQ Chasers of Light&apos; where users can submit their feedback. Their nickname will be displayed on the Nickname Wall, and they will receive a special badge as a token of QQ&apos;s gratitude for their sincere support and contributions.
          </p>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/qq9/chasers_of_light.png"
              alt="QQ Chasers of Light"
              width={1000}
              height={600}
              className="w-full h-auto rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* QQ9 Website Section */}
      <section
        className="flex flex-col items-center w-full relative overflow-visible"
        style={{
          backgroundColor: '#ebf0fa',
          padding: '128px 0 0',
        }}
      >
        <h2 className="text-[40px] font-bold text-black text-center mb-16">
          QQ9 Website
        </h2>

        {/* Desktop Mockup Container - uses percentage positioning for responsive scaling */}
        <div
          className="relative"
          style={{
            width: '1268px',
            maxWidth: '90%',
          }}
        >
          {/* Desktop Mockup Image */}
          <Image
            src="/images/qq9/desktop_mockup.png"
            alt="Desktop Mockup"
            width={1268}
            height={932}
            className="w-full h-auto"
            style={{
              borderRadius: '18px',
            }}
          />

          {/* Video inside mockup - positioned relative to mockup */}
          <div
            className="absolute z-10"
            style={{
              width: '98%',
              aspectRatio: '1.7741',
              top: 'calc(5.5% - 24px)',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '-13px',
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ borderRadius: '8px' }}
            >
              <source src="/images/qq9/qq_website.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[40px] font-bold text-black text-center mb-16">
            Promotional Video For QQ9 Launch
          </h2>

          {/* Three Column Text - 24%, 24%, 41% */}
          <div className="flex gap-8 mb-16" style={{ paddingRight: '11%' }}>
            {/* Column 1 - 24% */}
            <div style={{ width: '24%' }}>
              <h3 className="text-[20px] font-bold text-black mb-4">Global Collaboration</h3>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed">
                Collaborated with a Seoul-based team, working across different time zones.
              </p>
            </div>

            {/* Column 2 - 24% */}
            <div style={{ width: '24%' }}>
              <h3 className="text-[20px] font-bold text-black mb-4">A team of 5 people</h3>
              <p className="text-[20px] text-[#0C0C0C] leading-relaxed">
                2 from China and 3 from South Korea.
              </p>
            </div>

            {/* Column 3 - 41% */}
            <div style={{ width: '41%' }}>
              <h3 className="text-[20px] font-bold text-black mb-4">My responsibilities</h3>
              <ul className="text-[20px] text-[#0C0C0C] leading-relaxed space-y-1">
                <li>• Providing necessary design resources</li>
                <li>• Overseeing the design style and ensuring consistency</li>
                <li>• Communicating with the South Korean team</li>
              </ul>
            </div>
          </div>

          {/* Video */}
          <div className="w-full aspect-video rounded-[12px] overflow-hidden bg-[#ECEDEF]">
            <iframe
              src="https://player.vimeo.com/video/984620570?autoplay=1&muted=1&loop=1&autopause=0&byline=0&title=0&portrait=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Hand-drawn Storyboard Section */}
      <section className="bg-[#E0E9F7] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-bold text-black text-center mb-16">
            Hand-drawn storyboard for key video shots
          </h2>

          {/* Grid of storyboard images/videos */}
          <div className="grid grid-cols-4 gap-4">
            <Image
              src="/images/qq9/hand-drawn_storyboard_1.png"
              alt="Storyboard 1"
              width={280}
              height={200}
              className="w-full h-auto rounded-[8px]"
            />
            <Image
              src="/images/qq9/hand-drawn_storyboard_2.png"
              alt="Storyboard 2"
              width={280}
              height={200}
              className="w-full h-auto rounded-[8px]"
            />
            <Image
              src="/images/qq9/hand-drawn_storyboard_3.png"
              alt="Storyboard 3"
              width={280}
              height={200}
              className="w-full h-auto rounded-[8px]"
            />
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-[8px]"
            >
              <source src="/images/qq9/hand-drawn_storyboard_4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Ending Section - Full Width Video */}
      <section className="relative w-full aspect-video">
        <iframe
          src="https://player.vimeo.com/video/970945340?background=1&autoplay=1&muted=1&loop=1&autopause=0"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </section>
    </div>
  );
}
