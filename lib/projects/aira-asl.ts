import { CaseStudy } from '../types';

export const airaASL: CaseStudy = {
  // 基本信息
  slug: 'aira-asl',
  title: 'Designing an adaptive communication system for Deaf and hard of hearing',
  subtitle: '',
  description: 'How can communication adapt across real-life situations—without fragmenting the user experience?',
  coverImage: '/images/aira-asl/cover.png',
  category: 'Product Design',
  year: '2025',
  role: 'Product Designer',
  tags: ['Accessibility', 'Mobile App', 'Communication', 'UX Research'],
  featured: true,

  // 案例研究内容结构
  sections: [
    {
      type: 'hero',
      title: 'Designing an adaptive communication system',
      subtitle: 'for Deaf and Hard of Hearing users',
      image: '/images/aira-asl/hero.png',
    },
    {
      type: 'text',
      title: 'Context & Design Challenge',
      content: `Ordering a coffee. Answering a follow-up question. Joining a conversation at work.

For most people, these interactions are routine. For Deaf and Hard of Hearing (DHH) users, however, communication often changes as the situation unfolds.

A simple message may be enough at first. A brief exchange may require real-time back-and-forth. And when conversations become complex or unexpected, additional human support may be needed.`,
    },
    {
      type: 'text',
      title: 'Existing landscape',
      content: `Before proposing a system-level solution, it's important to acknowledge the current landscape of communication tools used by Deaf and Hard of Hearing users.

Many products serve specific communication needs:
- Large-text note apps support quick, visual expression in face-to-face situations
- Captioning apps focus on live transcription for conversations or group settings
- Caption-based calling tools help users handle phone calls through speech-to-text and text-to-speech
- Meeting transcription tools prioritize recording, summarizing, and reviewing spoken content

These tools are widely adopted and effective within their intended scopes. They also reflect a clear pattern: each product is designed for a single level of communication complexity.`,
    },
    {
      type: 'text',
      title: 'The challenge',
      content: `Most communication tools are designed as isolated solutions — text tools, captioning tools, or interpreter services.

But real-life conversations don't stay at one fixed level of complexity.

For DHH users, switching between tools mid-conversation adds cognitive burden and disrupts the flow of interaction.

The challenge is not a lack of tools, but a lack of continuity.`,
    },
    {
      type: 'text',
      title: 'Design goal',
      content: 'The goal is not to replace any single communication method, but to connect them into one coherent experience.',
    },
    {
      type: 'text',
      title: 'System Overview',
      subtitle: 'A full-spectrum communication system',
      content: `The system consists of three interconnected layers:

**NoteCards** - Lightweight, self-controlled communication for situations where users know what they want to say.

**Caption** - Real-time communication that supports listening, responding, and back-and-forth exchange.

**ASL Interpreter** - On-demand access to an ASL interpreter when conversations become complex or high-stakes.`,
    },
    {
      type: 'text',
      title: '01 NoteCards',
      subtitle: 'Prepared expression',
      content: `The lightest layer of the system is designed for prepared expression.

This state supports situations where users already know what they want to say, and need a simple, controlled way to express it without entering a live interaction.

For DHH users, writing is often the fastest and most reliable way to communicate a clear intent—especially in short, everyday interactions.`,
    },
    {
      type: 'text',
      title: '02 Caption-based Communication',
      subtitle: 'Live interaction',
      content: `Caption-based communication allows users to stay engaged in the moment by supporting both sides of the exchange:
- Understanding incoming speech through captions
- Responding through text-to-voice when needed

The focus is not on choosing a method, but on maintaining conversational flow.

With AI-powered speech recognition, Aira transcribes spoken language into live captions in real time with high accuracy.`,
    },
    {
      type: 'text',
      title: '03 Connecting with an ASL Interpreter',
      subtitle: 'Interpreter as an agent, not a mode',
      content: `For many DHH users, ASL interpreters are a familiar and trusted form of communication support.

In this system, the interpreter is treated not as a separate tool, but as a human agent that can be introduced into the same communication flow.

Once the interpreter's assistance is no longer needed, users can return to caption-based communication—without losing context or control.

This reinforces the system's core idea: support scales up and down, while the communication experience remains continuous.`,
    },
    {
      type: 'text',
      title: 'Making Communication Traceable',
      subtitle: 'Call History',
      content: `Every caption-based or interpreter-assisted conversation is automatically saved to Call History.

Users can revisit past conversations, quickly identify the communication mode used, review AI-generated summaries, access full transcripts, and provide feedback on the service.

This ensures that complex, high-stakes communication remains reviewable, verifiable, and emotionally safe—especially in situations where accuracy, accountability, and peace of mind matter.`,
    },
    {
      type: 'text',
      title: 'Reflection',
      content: `This project reflects how I approach product design—not as the accumulation of features, but as the cultivation of a system.

Rather than adding tools in a linear or mechanical way, each capability in this system evolves from real communication needs, integrating naturally with what already exists.

Like a living organism, the system adapts as complexity increases—scaling support when needed, receding when it doesn't—while preserving continuity and focus.

By designing relationships between features instead of isolated solutions, this work explores how accessibility-driven design can produce products that feel cohesive, resilient, and fundamentally human.`,
    },
  ],
};
