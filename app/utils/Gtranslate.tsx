'use client';

import Script from 'next/script';

// GTranslate Script
{/* <div class="gtranslate_wrapper"></div>
<script>window.gtranslateSettings = {"default_language":"en","languages":["en","fr","it","es"],"wrapper_selector":".gtranslate_wrapper"}</script>
<script src="https://cdn.gtranslate.net/widgets/latest/dropdown.js" defer></script> */}

const GTranslate = () => {
  return (
<>
      <div className="gtranslate_wrapper" />

      <Script id="gtranslate-dropdown-settings" strategy="beforeInteractive">
        {`
          window.gtranslateSettings = {
            default_language: "en",
            languages: ["en", "fr", "it", "es"],
            wrapper_selector: ".gtranslate_wrapper"
          };
        `}
      </Script>

      <Script
        src="https://cdn.gtranslate.net/widgets/latest/dropdown.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GTranslate;
