<script>
  import StudentIcon from "$lib/icons/student.svg"
  import TelegramIcon from "$lib/icons/telegram.svg"
  import GithubIcon from "$lib/icons/github.svg"
  import MailIcon from "$lib/icons/mail.svg"
  import SiteIcon from "$lib/icons/site.svg"
</script>

<svelte:head>
  <title>vlack - about me</title>
</svelte:head>

<h1 class="text-4xl font-semibold">
  Vladimir Kirilkin <span class="my-0.5" style="vertical-align: super;">
    <!--    <span class="header-badge">👀 job</span>-->
  </span>
</h1>
<h2 class="text-xl">Backend, frontend developer</h2>

<div class="gap-4 md:grid md:grid-cols-3">
  <section class="col-span-1">
    <div>
      <h4>About me</h4>
      <div>
        25 y.o. <span class="skill-bubble python">Python</span> and
        <span class="skill-bubble js">JS</span> developer
      </div>
      <div>Code is just a way to make my ideas real</div>
    </div>
    <div>
      <h4>Skills</h4>
      <div class="flex-auto">
        <span class="skill-bubble python">
          Python
          <span>aiohttp</span>
          <span>FastAPI</span>
          <span>django</span>
        </span>
        <span class="skill-bubble js">
          JS
          <span>TypeScript</span>
          <span>Svelte</span>
          <span>Vue</span>
        </span>
        <span class="skill-bubble bg-blue-800 text-white">PostgreSQL</span>
        <span class="skill-bubble bg-blue-800 text-white">Kubernetes</span>
        <span class="skill-bubble bg-red-400 text-white">Websocket</span>
        <span class="skill-bubble bg-gray-700 text-white">Figma</span>
        <span class="skill-bubble bg-green-500 text-white">Golang</span>
        <span class="skill-bubble bg-red-500 text-white">redis</span>
        <span class="skill-bubble bg-green-300">Tailwind CSS</span>
      </div>
    </div>
    <div>
      <h4>Education</h4>
      <p>Financial University under the Government of the Russian Federation</p>
      <p>Applied Information Systems in Economics and Finance</p>
    </div>
    <div>
      <h4>Contact</h4>
      <ul class="contacts-list">
        <li>
          <a href="https://v1ack.github.io"><img src={SiteIcon} alt="website" />v1ack.github.io</a>
        </li>
        <li><a href="https://github.com/v1ack"><img src={GithubIcon} alt="github" />@v1ack</a></li>
        <li><a href="https://t.me/vlack"><img src={TelegramIcon} alt="telegram" />@vlack</a></li>
        <li>
          <a href="mailto:kirilkin12@gmail.com"
            ><img src={MailIcon} alt="email" />kirilkin12@gmail.com</a
          >
        </li>
      </ul>
    </div>
  </section>
  <section class="col-span-2">
    <h4>My work experience</h4>
    <div class="timeline">
      <div class="section">
        <div class="item">
          <div>
            <img class="icon" src={StudentIcon} /> Graduation from Financial University
          </div>
        </div>

        <div class="item">
          <h5>SIBUR Digital</h5>
          <div>
            <div>
              <a
                href="https://sibur.digital/projects/computervision"
                class="text-blue-700 hover:text-blue-500"
              >
                Project on sibur.digital
              </a>
            </div>
            Fullstack developer in Video Analytics project of Industry 4.0.
            <ul class="mt-2 ml-4 list-disc">
              <li>Integrations with third-party services</li>
              <li>Web editor for configs, built from json schemas from pydantic</li>
            </ul>
          </div>
          <div>
            <span class="skill-bubble python">
              Python
              <span>asyncio</span>
              <span>aiohttp</span>
              <span>FastAPI</span>
              <span>pydantic</span>
            </span>
            <span class="skill-bubble js">
              JS
              <span>React</span>
              <span>rjsf</span>
            </span>
            <span class="skill-bubble bg-red-400 text-white">WebSocket</span>
            <span class="skill-bubble bg-blue-800 text-white">Docker</span>
            <span class="skill-bubble bg-orange-600 text-white">GitLab CI</span>
          </div>
        </div>
        <span class="year">2022</span>
      </div>

      <div class="section">
        <div class="item">
          <h5>Transfer app</h5>
          <div>
            Web application for booking transfer and excursions. With personal accounts and cms.
            Frontend build on Svelte kit, backend build on Strapi. Mobile app build with CapacitorJS
          </div>
          <div>
            <span class="skill-bubble js">
              JS
              <span>TypeScript</span>
              <span>Svelte kit</span>
              <span>Strapi</span>
            </span>
            <span class="skill-bubble bg-indigo-700 text-white">SSR</span>
            <span class="skill-bubble bg-green-600 text-white">Mobile</span>
            <span class="skill-bubble bg-gray-700 text-white">Figma</span>
          </div>
        </div>
        <div class="item">
          <h5>Messenger</h5>
          <div>
            Personal startup project. Implementation of full-working microservice-based messenger on
            websocket
          </div>
          <div>
            <span class="skill-bubble js">
              JS
              <span>TypeScript</span>
              <span>Svelte</span>
              <span>Routify</span>
            </span>
            <span class="skill-bubble bg-red-400 text-white">WebSocket</span>
            <span class="skill-bubble bg-blue-400 text-white">Kubernetes</span>
            <span class="skill-bubble bg-gray-700 text-white">Figma</span>
          </div>
        </div>

        <span class="year">2021</span>
      </div>

      <div class="section">
        <div class="item">
          <h5>Docs View</h5>
          <div>
            Tizen web app for wearable devices Samsung Galaxy Watch for reading PDF right on your
            wrist
          </div>
          <span class="stat-colored">35k+ downloads</span>
          <div>
            <span class="skill-bubble js">
              JS
              <span>Svelte</span>
            </span>
            <span class="skill-bubble bg-blue-400 text-white">Tizen</span>
          </div>
        </div>

        <div class="item">
          <h5>Yandex.Education</h5>
          <div>Backend developer in Yandex.Lyceum</div>
          <div>
            <span class="skill-bubble python">
              Python
              <span>Django</span>
              <span>DRF</span>
            </span>
          </div>
        </div>

        <span class="year">2020</span>
      </div>

      <div class="section">
        <div class="item">
          <div>
            <img class="icon" src={StudentIcon} /> Yandex school of backend development
          </div>
        </div>

        <div class="item">
          <h5>iCal service for University schedule</h5>
          <div>Web service with updatable schedule for Financial Univercity</div>
          <span class="stat-colored">10k+ MAU</span>
          <div>
            <span class="skill-bubble python">
              Python
              <span>aiohttp</span>
            </span>
            <span class="skill-bubble bg-red-500 text-white">redis</span>
          </div>
        </div>

        <div class="item">
          <h5>VK bot with University schedule</h5>
          <div>VK bot for viewing and subscribing to schedule for Financial Univercity</div>
          <span class="stat-colored">15k+ MAU</span>
          <div>
            <span class="skill-bubble python">
              Python
              <span>asyncio</span>
              <span>aiovk</span>
            </span>
            <span class="skill-bubble bg-blue-800 text-white">PostgreSQL</span>
          </div>
        </div>

        <span class="year">2019</span>
      </div>

      <div class="section">
        <div class="item">
          <div>
            <img class="icon" src={StudentIcon} /> Applying to Financial Univercity
          </div>
        </div>

        <div class="item">
          <h5>WhatchfaceEditor</h5>
          <div>Web app for editing watchfaces for smart bands</div>
          <span class="stat-colored">20k+ top MAU</span>
          <div>
            <span class="skill-bubble js">
              JS
              <span>React</span>
            </span>
          </div>
        </div>

        <span class="year">2018</span>
      </div>
    </div>
  </section>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  .skill-bubble {
    @apply my-0.5 inline-block rounded-full px-3 py-1 text-sm font-semibold;

    &.python {
      @apply bg-blue-700 text-white;
    }

    &.js {
      @apply bg-yellow-400;
    }

    span {
      @apply inline rounded-full bg-white/50 px-1.5 py-0.5 text-xs;
    }
  }

  h4 {
    @apply mt-8 mb-2 text-xl font-bold;
  }

  .timeline {
    @apply rounded-2xl border-4 border-indigo-300 p-4;
    //padding-left: 2.5rem;

    .section {
      @apply mb-1 rounded-2xl transition duration-300 ease-in-out hover:bg-blue-50;
    }

    .year {
      //margin-left: -1.5rem;
      @apply inline-block rounded-full bg-gray-600 px-2 text-white;
    }

    .item {
      @apply py-4;
      margin-left: 1.5rem;

      .icon {
        @apply inline-block;
        width: 24px;
      }

      h5 {
        @apply text-xl font-semibold;
      }
    }
  }

  .contacts-list {
    a {
      @apply hover:text-blue-700;
    }

    li {
      @apply my-1;
    }

    img {
      height: 20px;
      margin-right: 8px;
      @apply inline-block;
    }
  }

  .header-badge {
    @apply inline-block rounded-full bg-gradient-to-r from-red-300 to-indigo-400 px-2 py-0.5 text-sm font-semibold text-white;
  }

  .stat-colored {
    @apply bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text font-bold text-transparent;
  }
</style>
