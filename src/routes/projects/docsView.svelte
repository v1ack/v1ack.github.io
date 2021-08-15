<script context="module" lang="ts">
  export const prerender = true
</script>

<script>
  import Carousel from "$lib/carousel/Carousel.svelte"
  import Accordion from "$lib/accordion/Accordion.svelte"
  import AccordionItem from "$lib/accordion/AccordionItem.svelte"

  const images = [
    "/docsView/promo_open_pdf@2x.jpg",
    "/docsView/promo_different_formats@2x.jpg",
    "/docsView/promo_md_third@2x.jpg",
    "/docsView/promo_send@2x.jpg",
    "/docsView/promo_demo@2x.jpg",
  ]
</script>

<svelte:head>
  <title>Docs View</title>
</svelte:head>

<h1 class="text-7xl font-light leading-relaxed">Docs View</h1>
<p class="text-2xl leading-loose">Open your docs (PDF, markdown and txt) on your watch</p>
<p class="leading-loose">
  Available for latest Tizen watch: Galaxy Watch3, Galaxy Active 2, Galaxy Active, Galaxy Watch and
  Gear S3
</p>
<p>
  Companion app to send files from phone to watch: <a
    class="rounded-md bg-blue-600 text-blue-50 py-2 px-6 inline-block hover:bg-blue-500 hover:text-blue-100"
    href="https://github.com/v1ack/v1ack.github.io/releases">Download apk</a
  >
</p>
<div class="bg-blue-100 p-4 text-blue-800 rounded-md mt-4 mb-4">
  <p>
    Docs View is a newer version of PDFview. You can find more info <a class="underline" href="#faq"
      >in FAQ</a
    >
  </p>
</div>
<div class="flex">
  <div>
    <p>Docs View</p>
    <a href="https://galaxy.store/docview"
      ><img
        alt="Available on Samsung Galaxy Store"
        class=""
        src="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"
        style="width: 180px;"
      /></a
    >
  </div>
  <div class="ml-2">
    <p>Docs View demo</p>
    <a href="https://galaxy.store/docviewd"
      ><img
        alt="Available on Samsung Galaxy Store"
        src="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"
        style="width: 180px;"
      /></a
    >
  </div>
</div>

<h2 class="text-3xl mt-5 mb-3">Screenshots</h2>
<div>
  <Carousel dots={false} loop={false} perPage={{ 1000: 4, 700: 3, 500: 2 }}>
    <span class="carousel-arrow" slot="left-control">&lt;</span>
    {#each images as image}
      <div class="m-2 ring-4 ring-blue-300 rounded-3xl overflow-hidden">
        <img src={image} alt="" class="" />
      </div>
    {/each}
    <span class="carousel-arrow" slot="right-control">&gt;</span>
  </Carousel>
</div>

<h2 class="text-3xl mt-5 mb-3" id="faq">FAQ</h2>
<Accordion>
  <AccordionItem title={"The file loads too slowly"}>
    <p>It's because of images in files. The best way to solve the problem is compressing PDF</p>
    <p>
      There are many tools online, I recommend <a
        class="text-link"
        href="https://www.ilovepdf.com/compress_pdf"
        target="_blank">iLovePDF</a
      > with "Recommend compression" setting
    </p>
  </AccordionItem>
  <AccordionItem title={"How to open word DOC or powerpoint PPT files"}>
    <p>This app opens only PDF, but you are able to convert other formats to PDF</p>
    <p>
      There are many tools online, I recommend <a
        class="text-link"
        href="https://www.ilovepdf.com/word_to_pdf"
        target="_blank">iLovePDF word to pdf</a
      >
      and
      <a class="text-link" href="https://www.ilovepdf.com/powerpoint_to_pdf" target="_blank"
        >iLovePDF powerpoint to pdf</a
      >
    </p>
  </AccordionItem>
  <AccordionItem title="Difference between Docs View and PDFview">
    <p>Docs View is a newer version of PDFview</p>
    <p>
      PDFview have problems on latest Tizen version with sending files, in some cases phone can't
      connect to watch
    </p>
    <p>Docs View supports not only PDF, but also markdown and txt files (in UTF-8 encoding)</p>
    <p>You can try both demos apps and decide what is better for you</p>
  </AccordionItem>
  <AccordionItem title="Why Docs View is another app">
    <p>
      I'm not able to update the app in Galaxy Store because of changes for latest Tizen version
    </p>
  </AccordionItem>
  <AccordionItem title="I'm already bought PDFview. What can i do?">
    <p>If you don't have problems with sending files - use PDFview</p>
    <p>
      In other cases you can install Docs View demo for sending files and open them from old paid
      app
    </p>
  </AccordionItem>
  <AccordionItem title="What is demo">
    <p>It's an app with limited use</p>
    <p>
      You can open only 3 different files. It's very cool to try app before paying and to find out
      how it works
    </p>
  </AccordionItem>
  <AccordionItem title="Links to PDFview">
    <div class="flex">
      <div>
        <p>PDFview</p>
        <a href="https://galaxy.store/pdfview"
          ><img
            alt="Available on Samsung Galaxy Store"
            src="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"
            style="width: 180px;"
          /></a
        >
      </div>
      <div class="ml-2">
        <p>PDFview demo</p>
        <a href="https://galaxy.store/pdfviewd"
          ><img
            alt="Available on Samsung Galaxy Store"
            src="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"
            style="width: 180px;"
          /></a
        >
      </div>
    </div>
  </AccordionItem>
</Accordion>

<style lang="scss">
  .carousel-arrow {
    @apply text-white text-4xl block hover:text-gray-200 transition-colors;
    transform: scaleY(2);
    line-height: 1;
  }
</style>
