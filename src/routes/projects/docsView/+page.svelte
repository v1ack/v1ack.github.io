<script>
  import Carousel from "$lib/carousel/Carousel.svelte"
  import Accordion from "$lib/accordion/Accordion.svelte"
  import AccordionItem from "$lib/accordion/AccordionItem.svelte"
  import DownloadIcon from "$lib/icons/download.svg?raw"
  import GitHubIcon from "$lib/icons/github.svg?raw"
  import SiteIcon from "$lib/icons/site.svg?raw"

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

<h1 class="text-7xl leading-relaxed font-light">Docs View</h1>
<p class="text-2xl leading-loose">Open your docs (PDF, markdown and txt) on your watch</p>
<p class="leading-loose">
  Available for latest <b>Tizen</b> watch: Galaxy Watch3, Galaxy Active 2, Galaxy Active, Galaxy Watch
  and Gear S3
</p>

<div class="warning">
  <p>
    Due to <a
      class="underline"
      href="https://seller.samsungapps.com/notice/getNoticeDetail.as?csNoticeID=0000009034"
      >discontinuing Tizen Watch service on Galaxy Store</a
    >, full app is not available for download on Galaxy Store.
  </p>
  <p>
    You can download <a
      href="http://apps.samsung.com/appquery/appDetail.as?appId=pdfviewdem"
      class="underline">free app with 3 documents limit from Galaxy Store</a
    >
    until <b>May 31th, 2025</b>, or until <b>September 30th, 2025</b> if you downloaded it erlier.
  </p>
  <p>
    App is <a href="https://github.com/v1ack/PDFview" class="underline">open source</a> now, and can
    be downloaded in
    <a href="https://github.com/v1ack/PDFview/releases/tag/v1.1.3" class="underline"
      >releases page</a
    >
  </p>
</div>
<div>
  <h2 class="mb-3 text-3xl">Links</h2>
  <p class="mb-2">
    <a
      class="download"
      href="https://github.com/v1ack/PDFview/releases/download/v1.1.3/Docs.View.Sender.1.2.2.apk"
      >{@html DownloadIcon}
      Download apk</a
    > - Android app to send files from phone to watch
  </p>
  <p class="mb-2">
    <a
      class="download"
      href="https://github.com/v1ack/PDFview/releases/download/v1.1.3/Docs.View.1.1.3.wgt"
      >{@html DownloadIcon} Download wgt</a
    >
    - Tizen app to open files on watch.
    <a href="https://github.com/davesohen/galaxy_gear_s3" class="text-link">Installing option</a>
  </p>
  <p class="mb-2">
    <a class="download" href="http://apps.samsung.com/appquery/appDetail.as?appId=pdfviewdem"
      >{@html SiteIcon} Download demo</a
    >
    - Galaxy Store app with limit of 3 files. <b>You can reinstall app to reset limit</b>
  </p>
  <p class="mb-2">
    <a class="download" href="https://github.com/v1ack/PDFview/">{@html GitHubIcon} View source</a> -
    Source code of the app
  </p>
</div>

<h2 class="mt-5 mb-3 text-3xl">Screenshots</h2>
<div>
  <Carousel dots={false} loop={false} perPage={{ 1000: 4, 700: 3, 500: 2 }}>
    <span class="carousel-arrow" slot="left-control">&lt;</span>
    {#each images as image (image)}
      <div class="m-2 overflow-hidden rounded-3xl ring-4 ring-blue-300">
        <img src={image} alt="" class="" />
      </div>
    {/each}
    <span class="carousel-arrow" slot="right-control">&gt;</span>
  </Carousel>
</div>

<h2 class="mt-5 mb-3 text-3xl" id="faq">FAQ</h2>
<Accordion>
  <AccordionItem title="The file loads too slowly">
    <p>It's because of images in files. The best way to solve the problem is compressing PDF</p>
    <p>
      There are many tools online, I recommend <a
        class="text-link"
        href="https://www.ilovepdf.com/compress_pdf"
        target="_blank">iLovePDF</a
      > with "Recommend compression" setting
    </p>
  </AccordionItem>
  <AccordionItem title="How to open word DOC or powerpoint PPT files">
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
</Accordion>

<style lang="postcss">
  @reference "tailwindcss";
  .carousel-arrow {
    @apply block text-4xl text-white transition-colors hover:text-gray-200;
    transform: scaleY(2);
    line-height: 1;
  }

  a.download {
    @apply inline-block rounded-md bg-blue-600 px-6 py-2 text-blue-50 hover:bg-blue-500 hover:text-blue-100;

    :global(svg) {
      @apply inline-block;
      height: 1em;
      margin-right: 0.2em;
      vertical-align: text-bottom;
    }
  }

  div.warning {
    @apply mt-4 mb-4 rounded-md bg-orange-100 p-4 text-orange-800;

    p {
      @apply py-1;
    }
  }
</style>
