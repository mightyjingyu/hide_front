
# HIDE Frontend Product Specification

## 1. Product Overview

**HIDE** is a dating-style social discovery web app where users can meet people **without revealing their real faces**.  
Instead, users interact through **avatars**, **face-preference matching**, and **shared interests**.

It's a korean webapp, so you have to make everything in korean except the company name "HIDE"

The UX goal is:

- Hide real faces initially
- Let users discover their **face preferences**
- Build **trust via verification**
- Enable **matching, chatting, and community interaction**

Design philosophy:

- Minimalistic
- Clean white background
- Black layout elements
- Neutral and modern (avoid typical “dating app” visual tone)

Reference UX patterns:

- Tinder
- WIPPY

---

# 2. UI Design System

## 2.1 Visual Style

Background

white (#FFFFFF)

Primary UI color

black (#111111)

Accent color

subtle gray (#F5F5F5)

Typography

- Simple sans-serif
- Medium weight for titles
- Regular weight for body

Design characteristics

- Clean layout
- Card-based UI
- Large avatar visuals
- Soft shadows
- Rounded corners

---

# 3. App Navigation Structure

Main navigation uses **bottom tab navigation**.

Tabs:

1. Home (Matching)
2. Discover
3. Messages
4. Community
5. Profile

---

# 4. User Flow Overview

Full UX flow:

App launch
→ Onboarding
→ Face preference test
→ Identity verification (hand verification)
→ Avatar creation
→ Profile setup
→ Interest input
→ Matching
→ Chat
→ Community participation

---

# 5. Onboarding

Purpose:

Explain the concept of HIDE.

Screen content:

Title:

"A new way to meet people with avatars"

Subtitle:

"Hide your face, find your type"

CTA button:

Start

Secondary:

Already have an account? Login

---

# 6. Authentication

## 6.1 Sign Up

User authentication methods:

- Phone number
- Email
- OAuth (optional)

Steps:

1. Enter phone/email
2. Verification code
3. Create account

User agreements:

- Terms of service
- Privacy policy
- Location consent

---

# 7. Face Preference Test

Purpose:

- Collect face preference data
- Provide fun onboarding
- Improve matching algorithm

Interaction style:

Face A vs Face B selection.

Example:

Which face style do you prefer?

Test length:

10–15 selections.

Preference data collected:

- Eye shape
- Face shape
- Skin tone
- Hair style
- Bangs
- Nose shape

After completion:

Display summary:

"Your face preference profile"

CTA:

Continue

---

# 8. Hand Verification

Purpose:

Prevent fake users.

Process:

User uploads a **hand photo**.

Optionally require gesture.

Example gesture:

Peace sign

Verification message:

"For a safer community, we require simple hand verification."

---

# 9. Avatar Creation

Purpose:

Maintain anonymity.

Process:

1. User uploads a face photo
2. AI generates avatar options

Results:

3–5 avatars generated.

User selects preferred avatar.

Avatar becomes profile image.

---

# 10. Profile Setup

Basic information:

- Nickname
- Age
- Region
- Short introduction

Example intro:

"I enjoy exploring cafes and watching movies."

---

# 11. Interests

Users select interests using tags.

Examples:

- Music
- Travel
- Movies
- Cafe hopping
- Sports
- Tennis

Optional attributes:

- MBTI
- Job
- Lifestyle
- Religion

---

# 12. Discovery Preferences

Users set matching filters.

Filters:

Distance preference

min ~ max

Preferred age range

Matching priority

Users with similar interests appear first.

---

# 13. Matching (Home Screen)

Card-based matching system similar to Tinder.

Displayed information:

- Avatar
- Nickname
- Age
- Distance
- Interests
- Compatibility score

Actions:

Like

Pass

Super Like

Direct message (limited)

---

# 14. Profile View

When opening a profile:

Show:

Avatar
Nickname
Age
Distance
Interests
Compatibility score

Users can view multiple avatar images.

Each image may include short captions.

---

# 15. Likes System

Two lists:

1. People you liked
2. People who liked you

Displayed in separate tabs.

---

# 16. Chat System

Chat activates after a match.

Chat features:

- Text messages
- Image messages
- Video messages

Chat UI similar to common messenger apps.

Conversation suggestions:

Example starter prompts:

"What hobbies do you enjoy lately?"

---

# 17. Community

Community section includes:

Discussion board.

Users can:

- Post text
- Comment
- Like posts

Purpose:

Encourage engagement beyond matching.

---

# 18. Profile / My Page

Users can edit profile information.

Sections:

Edit profile

Avatar update

Interest update

Verification status

---

# 19. Tier System

Users have a connection score tier.

Range:

min ~ max

Higher tiers may get:

- More exposure
- More matches

---

# 20. Missions & Mini Games

Purpose:

Increase community engagement.

Examples:

- KakaoTalk style mini-games
- Simple social tasks

Completing missions may increase tier score.

---

# 21. Customer Support

Users can access:

Help center

Report user

Submit inquiry

---

# 22. Frontend Implementation Rules

This phase requires **frontend only**.

No backend integration required yet.

Use:

Mock data

Focus on:

- UI
- Navigation
- Screen flow
- Interactions

---

# 23. Key UX Principles

1. Reduce friction before signup
2. Provide fun first experience
3. Maintain anonymity
4. Encourage interaction
5. Build trust

Core experience statement:

"Discover your type, meet through avatars, connect through conversation."
