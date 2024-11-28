// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clepnid',
  tagline: 'Share all',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://clepnid.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pavon00', // Usually your GitHub org/user name.
  projectName: 'clepnid', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      it: {
        label: 'Español',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Clepnid',
        logo: {
          alt: 'Clepnid Logo',
          src: 'img/logo.gif',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/clepnid',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // SEO config
      metaTags: [
        {
          name: 'description',
          content: 'Clepnid share all with all. Manage livestock, share files, and control systems with ease. Download torrents, videos from YouTube, and monitor CPU and RAM usage.',
        },
        {
          name: 'keywords',
          content: 'clepnid, propio, almacenamiento en la nube, sincronización de archivos, acceso remoto, compartir archivos, compartir en la nube, almacenamiento digital, gestión de documentos, gestión ganadera digital, trazabilidad de ganado, tecnología ganadera, control de ganado, innovación en ganadería, software para granjas, soluciones para ganaderos, gestión de producción ganadera, transferencia de archivos Android-PC, compartir archivos entre dispositivos, sincronizar Android con PC, transferir documentos Android a computadora, conectar Android a ordenador, compartir fotos Android PC, copiar y pegar en el portapapeles, editor HTML, trabajar con HTML en PC, portapapeles en ordenadores, gestionar texto en portapapeles, herramientas de desarrollo web, subir archivos al servidor, gestionar archivos en la nube, crear páginas web para archivos, compartir ficheros en línea, administración de archivos en la web, almacenamiento y compartir documentos, descarga de torrents, software para torrents, descargar archivos torrent, clientes de torrents, descargar contenido torrent, grabar videos de YouTube, herramienta de descarga YouTube, bajar videos de YouTube, descargar contenido de YouTube, administración de servidores, control remoto de servidores, monitoreo de servidor, gestión de infraestructura IT, administración de sistemas, panel de control de servidor, reproductor de video online, aplicaciones para reproducir música, reproducir contenido multimedia, música en streaming, escuchar música en PC, software reproductor de video, juegos en línea, videojuegos en PC, juegos para computadora, juegos multijugador en línea, jugar juegos de PC, monitoreo de CPU, uso de RAM en PC, ver el rendimiento del sistema, herramientas de monitoreo del sistema, verificar el uso de la CPU, control del rendimiento del ordenador',
        },
      ],
      // Open Graph tags
      opengraph: {
        title: 'Clepnid',
        description: 'Clepnid share all with all.',
        image: 'img/docusaurus-social-card.jpg', // Imagen de previsualización para redes sociales
        url: 'https://www.clepnid.github.io',
      },
      // Twitter tags
      twitter: {
        handle: '@clepnid',
        site: '@clepnid',
        cardType: 'summary_large_image',
      },
    }),
};

module.exports = config;
