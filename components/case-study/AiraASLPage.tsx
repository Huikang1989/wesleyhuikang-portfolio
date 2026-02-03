'use client';

import Image from 'next/image';

export default function AiraASLPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - height adapts to content */}
      <section className="relative bg-[#f3f4f0] overflow-hidden flex flex-col pb-0">
        {/* Aira Logo - 15% larger (39px) */}
        <div className="absolute top-20 left-6 md:left-8 lg:left-[12%] z-10">
          <Image
            src="/images/aira-asl/aira-logo.svg"
            alt="Aira"
            width={121}
            height={39}
            className="h-[39px] w-auto"
          />
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col items-center pt-6">
          {/* Character Video Container */}
          <div className="relative w-full max-w-[590px] flex flex-col items-center justify-center">
            {/* 3D Character Video - reduced another 8% */}
            <div className="relative w-[270px] md:w-[339px] lg:w-[381px]">
              <video
                src="/images/aira-asl/hero-character.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Divider Line - 6px height, reduced 15% */}
            <div className="w-[340px] md:w-[425px] lg:w-[501px] h-[6px] bg-black" />
          </div>

          {/* Title Container - 76% width at 1440px, responsive */}
          <div className="flex flex-col items-center gap-4 text-center pt-10 w-[90%] md:w-[85%] lg:w-[76%]">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-black leading-tight">
              Designing an adaptive communication system
            </h1>
            <p className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[40px] text-black font-normal leading-tight">
              for Deaf and Hard of Hearing users
            </p>
          </div>
        </div>

        {/* Phone Mockup with Hands - increased 10% (904px) */}
        <div className="w-full flex justify-center mt-8">
          <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[904px]">
            <Image
              src="/images/aira-asl/hero-hands.png"
              alt="App Preview"
              width={904}
              height={529}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="py-20 bg-white">
        <div className="max-w-[1116px] mx-auto px-6 flex flex-col gap-12">

          {/* Context & Design Challenge */}
          <section className="flex flex-col gap-12">
            <h2 className="text-[40px] font-bold text-black">
              Context & Design Challenge
            </h2>

            {/* Intro Text - 70% max width, 20px font, #0C0C0C color */}
            <div className="text-[20px] leading-relaxed text-[#0C0C0C] max-w-[70%]">
              <p className="mb-2">Ordering a coffee.</p>
              <p className="mb-2">Answering a follow-up question.</p>
              <p className="mb-6">Joining a conversation at work.</p>
            </div>

            {/* 3 Scenario Images - original aspect ratio 712x480 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/aira-asl/scenario-1.png"
                  alt="Ordering coffee scenario"
                  width={712}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/aira-asl/scenario-2.png"
                  alt="Follow-up question scenario"
                  width={712}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/aira-asl/scenario-3.png"
                  alt="Work conversation scenario"
                  width={712}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Body Text - 70% max width, 20px font, #0C0C0C color */}
            <div className="text-[20px] leading-relaxed space-y-4 text-[#0C0C0C] max-w-[70%]">
              <p>
                For most people, these interactions are routine.
                For Deaf and Hard of Hearing (DHH) users, however, communication often changes
                as the situation unfolds.
              </p>
              <p>
                A simple message may be enough at first.
                A brief exchange may require real-time back-and-forth.
                And when conversations become complex or unexpected, additional human support
                may be needed.
              </p>
            </div>

            {/* Existing Landscape - 70% max width for text */}
            <div className="flex flex-col gap-6 max-w-[70%]">
              <h3 className="text-[28px] font-bold text-black">
                Existing landscape
              </h3>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Before proposing a system-level solution, it's important to acknowledge the current
                landscape of communication tools used by Deaf and Hard of Hearing users.
              </p>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Many products serve specific communication needs:
              </p>
              <ul className="text-[20px] leading-relaxed space-y-2 list-disc list-inside text-[#0C0C0C]">
                <li><strong>Large-text note apps</strong> support quick, visual expression in face-to-face situations.</li>
                <li><strong>Captioning apps</strong> focus on live transcription for conversations or group settings.</li>
                <li><strong>Caption-based calling tools</strong> help users handle phone calls through speech-to-text and text-to-speech.</li>
                <li><strong>Meeting transcription tools</strong> prioritize recording, summarizing, and reviewing spoken content.</li>
              </ul>
            </div>

            {/* 2x2 App Grid - original aspect ratio 1092x500 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/aira-asl/app-grid-1.png"
                  alt="Large-text note apps"
                  width={1092}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/aira-asl/app-grid-2.png"
                  alt="Captioning app"
                  width={1092}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/aira-asl/app-grid-3.png"
                  alt="Caption-based calling tool"
                  width={1092}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/aira-asl/app-grid-4.png"
                  alt="Meeting transcription tool"
                  width={1092}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-[20px] leading-relaxed text-[#0C0C0C] max-w-[70%]">
              These tools are widely adopted and effective within their intended scopes.
              They also reflect a clear pattern: <strong>each product is designed for a single level of
              communication complexity.</strong>
            </p>

            {/* The Challenge - 70% max width */}
            <div className="flex flex-col gap-4 max-w-[70%]">
              <h3 className="text-[28px] font-bold text-black">
                The challenge
              </h3>
              <div className="text-[20px] leading-relaxed space-y-4 text-[#0C0C0C]">
                <p>
                  Most communication tools are designed as isolated solutions — text tools,
                  captioning tools, or interpreter services.
                </p>
                <p>
                  But real-life conversations don't stay at one fixed level of complexity.
                </p>
                <p>
                  For DHH users, switching between tools mid-conversation adds cognitive burden
                  and disrupts the flow of interaction.
                </p>
                <p>
                  The challenge is not a lack of tools, but a lack of continuity.
                </p>
              </div>
            </div>

            {/* Design Goal - 70% max width */}
            <div className="flex flex-col gap-4 max-w-[70%]">
              <h3 className="text-[28px] font-bold text-black">
                Design goal
              </h3>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                The goal is not to replace any single communication method,
                but to connect them into <strong>one coherent experience</strong>.
              </p>
            </div>
          </section>

          {/* System Overview */}
          <section className="flex flex-col gap-12 pt-12">
            <h2 className="text-[40px] font-bold text-black">
              System Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col gap-6 max-w-[90%]">
                <h3 className="text-[28px] font-bold text-black">
                  A full-spectrum communication system
                </h3>
                <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                  The system consists of three interconnected layers:
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-black">NoteCards</p>
                    <p className="text-[20px] text-[#0C0C0C]">
                      Lightweight, self-controlled communication for situations
                      where users know what they want to say.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Caption</p>
                    <p className="text-[20px] text-[#0C0C0C]">
                      Real-time communication that supports listening,
                      responding, and back-and-forth exchange.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-black">ASL Interpreter</p>
                    <p className="text-[20px] text-[#0C0C0C]">
                      On-demand access to an ASL interpreter when
                      conversations become complex or high-stakes.
                    </p>
                  </div>
                </div>
              </div>

              {/* System Diagram Video - with rounded corners */}
              <div className="relative rounded-xl overflow-hidden">
                <video
                  src="/images/aira-asl/system-diagram.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* System Screenshot - original aspect ratio 2560x1600 */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/aira-asl/system-overview.png"
                alt="System Overview Screenshots"
                width={2560}
                height={1600}
                className="w-full h-auto"
              />
            </div>
          </section>

        </div>
      </main>

      {/* Dark Background Sections */}
      <div className="bg-[#1A1A1A]">
        <div className="max-w-[1116px] mx-auto px-6 py-[120px] flex flex-col gap-24">

          {/* Section 01 - NoteCards */}
          <section className="flex flex-col gap-12">
            <h2 className="text-[40px] font-bold text-white">
              01 NoteCards
            </h2>

            <div className="flex flex-col gap-6 max-w-[70%]">
              <h3 className="text-[28px] font-bold text-white">
                Prepared expression
              </h3>
              <p className="text-[20px] leading-relaxed text-white">
                The lightest layer of the system is designed for prepared expression.
              </p>
              <p className="text-[20px] leading-relaxed text-white">
                This state supports situations where users already know what they want to say, and need a simple, controlled way to express it without entering a live interaction.
              </p>
            </div>

            {/* Top Row - 3 Phone Mockups (332x720px, border-radius: 40px) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4 items-center">
                <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/aira-asl/notecards-list.png"
                    alt="NoteCards list view"
                    width={332}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] leading-relaxed text-white/80">
                  For DHH users, writing is often the fastest and most reliable way to communicate a clear intent—especially in short, everyday interactions.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/aira-asl/notecards-edit.png"
                    alt="NoteCards edit view"
                    width={332}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] leading-relaxed text-white/80">
                  Lightweight and distraction-free. They focus on content first—writing and presenting a message clearly.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/aira-asl/notecards-message-2.png"
                    alt="NoteCards message with options"
                    width={332}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] leading-relaxed text-white/80">
                  When a prepared message is no longer sufficient, users can move naturally into live interaction or human-supported communication—without abandoning the context they have already established.
                </p>
              </div>
            </div>

            {/* Bottom Row - 1 Phone Mockup Centered (346x750px, border-radius: 40px) */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col gap-4 items-center">
                <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                  <video
                    src="/images/aira-asl/notecards-message-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] leading-relaxed text-white/80 max-w-[346px]">
                  Each card can also be spoken aloud, allowing users to express their message audibly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02 - Caption-based Communication */}
          <section className="flex flex-col gap-12">
            <h2 className="text-[40px] font-bold text-white">
              02 Caption-based Communication
            </h2>

            <div className="flex flex-col gap-6 max-w-[70%]">
              <h3 className="text-[28px] font-bold text-white">
                Live interaction
              </h3>
              <p className="text-[20px] leading-relaxed text-white">
                Caption-based communication allows users to stay engaged in the moment by supporting both sides of the exchange:
              </p>
              <ul className="text-[20px] leading-relaxed text-white list-disc list-inside space-y-2">
                <li>understanding incoming speech through captions</li>
                <li>responding through text-to-voice when needed</li>
              </ul>
              <p className="text-[20px] leading-relaxed text-white">
                The focus is not on choosing a method, but on maintaining conversational flow.
              </p>
            </div>

            {/* Top Row - 3 Phone Mockups (332x720px, border-radius: 40px) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/caption-live-1.png"
                  alt="Live caption - listening"
                  width={332}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/caption-live-2.png"
                  alt="Live caption - typing response"
                  width={332}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/caption-live-3.png"
                  alt="Live caption - conversation"
                  width={332}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle Row - 2 Phone Mockups (346x750px, border-radius: 40px, double gap) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[800px] mx-auto mt-8">
              <div className="flex flex-col gap-4 items-center">
                <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                  <video
                    src="/images/aira-asl/caption-ai-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] leading-relaxed text-white/80">
                  With AI-powered speech recognition, Aira transcribes spoken language into live captions in real time with high accuracy.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/aira-asl/caption-ai-2.png"
                    alt="Quick reply suggestions"
                    width={346}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] leading-relaxed text-white/80">
                  Quick Reply opens AI-generated responses based on the current conversational context.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/20" />

            {/* Transition Text */}
            <p className="text-[20px] leading-relaxed text-white max-w-[70%]">
              When conversations become more complex or sensitive, users can seamlessly bring in human support without leaving the interaction.
            </p>

            {/* Bottom Row - 1 Phone Mockup Centered (346x750px, border-radius: 40px) */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col gap-4 items-center">
                <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                  <video
                    src="/images/aira-asl/Introducing an interpreter.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] leading-relaxed text-white/80 max-w-[346px]">
                  With a single tap on ASL, users can instantly bring an ASL interpreter into the conversation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 03 - Connecting with an ASL Interpreter */}
          <section className="flex flex-col gap-12">
            <h2 className="text-[40px] font-bold text-white">
              03 Connecting with an ASL Interpreter
            </h2>

            <div className="flex flex-col gap-6 max-w-[70%]">
              <h3 className="text-[28px] font-bold text-white">
                Interpreter as an agent, not a mode
              </h3>
              <p className="text-[20px] leading-relaxed text-white">
                For many DHH users, ASL interpreters are a familiar and trusted form of communication support.
              </p>
              <p className="text-[20px] leading-relaxed text-white">
                In this system, the interpreter is treated not as a separate tool, but as <strong>a human agent that can be introduced into the same communication flow.</strong>
              </p>
            </div>

            {/* Top Row - 2 Phone Mockups (346x750px, border-radius: 40px, double gap) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[800px] mx-auto justify-items-center">
              <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/interpreter-intro-1.png"
                  alt="Interpreter video call"
                  width={346}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/interpreter-intro-2.png"
                  alt="Interpreter with captions"
                  width={346}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Transition Text */}
            <p className="text-[20px] leading-relaxed text-white max-w-[70%]">
              Once the interpreter's assistance is no longer needed, users can return to caption-based communication—without losing context or control.
            </p>

            {/* Bottom Row - 2 Phone Mockups (346x750px, border-radius: 40px, double gap) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[800px] mx-auto justify-items-center">
              <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/interpreter-exit-1.png"
                  alt="Continue with caption-only mode"
                  width={346}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[346px] h-[750px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/interpreter-exit-2.png"
                  alt="Conversation continues"
                  width={346}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Closing Text */}
            <p className="text-[20px] leading-relaxed text-white max-w-[70%]">
              This reinforces the system's core idea: support scales up and down, while the communication experience remains continuous.
            </p>
          </section>

        </div>
      </div>

      {/* Making Communication Traceable - White Background */}
      <div className="bg-white">
        <div className="max-w-[1116px] mx-auto px-6 pt-[120px] pb-[80px] flex flex-col gap-12">
          <section className="flex flex-col gap-12">
            <h2 className="text-[40px] font-bold text-black">
              Making Communication Traceable
            </h2>

            <div className="flex flex-col gap-6 max-w-[70%]">
              <h3 className="text-[28px] font-bold text-black">
                Call History
              </h3>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Every caption-based or interpreter-assisted conversation is automatically saved to Call History.
              </p>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Users can revisit past conversations, quickly identify the communication mode used, review AI-generated summaries, access full transcripts, and provide feedback on the service.
              </p>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                This ensures that complex, high-stakes communication remains reviewable, verifiable, and emotionally safe—especially in situations where accuracy, accountability, and peace of mind matter.
              </p>
            </div>

            {/* 3 Phone Mockups (332x720px, border-radius: 40px) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/history-list.png"
                  alt="Call History list"
                  width={332}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/history-summary.png"
                  alt="Call History summary"
                  width={332}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[332px] h-[720px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/aira-asl/history-transcript.png"
                  alt="Call History transcript"
                  width={332}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Footer Text */}
            <div className="flex flex-col gap-2 max-w-[70%]">
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Not every conversation needs to be revisited.
              </p>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Future iterations may allow users to choose what to keep.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Divider Line - 8% opacity black */}
      <div className="bg-white">
        <div className="max-w-[1116px] mx-auto px-6">
          <div className="w-full h-px bg-black/[0.08]" />
        </div>
      </div>

      {/* Reflection - White Background */}
      <div className="bg-white">
        <div className="max-w-[1116px] mx-auto px-6 pt-[80px] pb-[240px] flex flex-col gap-12">
          <section className="flex flex-col gap-8">
            <h2 className="text-[40px] font-bold text-black">
              Reflection
            </h2>

            <div className="flex flex-col gap-6 max-w-[90%]">
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                This project reflects how I approach product design—not as the accumulation of features, but as the cultivation of a system.
              </p>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Rather than adding tools in a linear or mechanical way, each capability in this system evolves from real communication needs, integrating naturally with what already exists.
              </p>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                Like a living organism, the system adapts as complexity increases—scaling support when needed, receding when it doesn't—while preserving continuity and focus.
              </p>
              <p className="text-[20px] leading-relaxed text-[#0C0C0C]">
                By designing relationships between features instead of isolated solutions, this work explores how accessibility-driven design can produce products that feel cohesive, resilient, and fundamentally human.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
