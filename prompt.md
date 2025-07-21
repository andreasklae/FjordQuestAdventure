> Build a **luxury travel website** using **React** and **Tailwind CSS** for a Norwegian company called **Fjord Quest Adventure**, which specializes in high-end vacations in Norway for wealthy tourists.
> The website should feel **premium, sleek, and modern**, with a focus on **visual storytelling** and **simplicity**. It should be **accessible (WCAG compliant)**, **mobile- and desktop-friendly**, and visually robust regardless of image dimensions.
>
> ---
>
> ### 🧱 Tech + Design:
>
> * Framework: **React + Tailwind CSS**
> * Design system: Use a **dark luxury blue** color scheme (make it configurable). make the design language consistent throughout the website
> * Fonts: Clean, modern, and premium-looking. Avoid overly minimalist or playful fonts.
> * Use **fixed aspect ratio containers** for images to prevent layout shifts. Use high-quality photos from the `images/` folder (and subfolders), and fall back to placeholders if unavailable.
> * Use icons where appropriate, **no emojis**.
> * Include **language toggle** between **English** (default) and **Norwegian**.
> * Use the most elegant logo from `images/` as the main site logo and favicon.
>
> ---
>
> ### 🧭 Navigation:
>
> Top-level pages in the header nav:
>
> * Home
> * Daytrips
> * Activities
> * Car Rental
> * Accommodation
> * Aviation
> * Get in Touch
>
> **Transport** should not be its own page, but appear as a section on the homepage and possibly on the accommodation page.
>
> ---
>
> ### 📄 Page Structure:
>
> #### **Landing Page (Home):**
>
> * Full-screen hero section with background image, logo, short tagline, and a CTA button.
> * Intro section describing Fjord Quest Adventure and its premium services.
> * Featured service sections (with images and short descriptions), including:
>
>   * Daytrips
>   * Activities
>   * Accommodation
>   * Car Rental (link to dedicated page)
>   * Aviation
>   * Transport: brief section describing **Mercedes V-Class shuttle**, available for pickups/drop-offs from any arrival point to accommodations. Include a relevant image and mention flexibility.
> * Footer with quick links and contact info.
>
> ---
>
> #### **Daytrips Page:**
>
> * Dynamically generate daytrip cards based on the contents of `daytrips.json`.
> * Each card should include: title, description, image, and optionally a tag for recommended season or location.
> * When `daytrips.json` is updated, the content should reflect the changes automatically.
>
> ---
>
> #### **Activities Page:**
>
> * Similar to Daytrips.
> * Load and display content from `activities.json`.
> * Highlight unique or premium activities in Norway — image, description, tags (if any).
> * Keep layout consistent with the Daytrips page for design harmony.
>
> ---
>
> #### **Car Rental Page:**
>
> * Feature the **Porsche rental** offer.
> * Price: **6,500 NOK/day**.
> * Include an **image gallery** from the `images/porche/` folder.
> * Emphasize exclusivity, flexibility, and simplicity.
>
> ---
>
> #### **Accommodation Page:**
>
> * Parse and display content from `accommodations.md`.
> * Group accommodations by region:
>
>   * **Ålesund region**: Hotel Brosundet, Storfjord Hotel, Union Øye
>   * **Cabin**: Chalet Strandafjellet
>   * **Oslo**: The Thief
> * Add **Transport info** section at the top or bottom: highlight how customers are driven to these accommodations by private Mercedes V-Class.
> * Use images from relevant folders where available.
>
> ---
>
> #### **Aviation Page:**
>
> * Describe the **1-hour helicopter sightseeing tour** over:
>   Ålesund → Geiranger → Hellesylt → Hjørundfjorden.
> * Use immersive imagery and strong layout to evoke excitement and luxury.
>
> ---
>
> #### **Get in Touch Page:**
>
> * Elegant contact form with the following fields:
>
>   * Name
>   * Phone (with country code)
>   * Email
>   * Number of people
>   * Budget (currency selector: NOK, USD, GBP, EUR)
>   * Season (dropdown: Winter, Spring, Summer, Fall)
>   * Custom message
> * Add text stating: *"We’ll reach out to you personally to plan your trip — this is just the first step."*
> * Ensure this page is accessible from all other pages (e.g. via header and footer).
>
> ---
>
> ✅ Use semantic HTML and reusable components.
> ✅ Prioritize performance, accessibility, and elegance.
> ✅ Avoid bloat — every part should serve the goal of showcasing luxury and ease of travel.

