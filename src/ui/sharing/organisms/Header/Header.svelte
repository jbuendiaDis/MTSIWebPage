<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import { page } from "$app/stores";
  import { i18n } from "@stores";
  import config from "@config";

  import * as styles from "./Header.styles";
  import { modalStore } from "@tuentyfaiv/svelte-modal";

  import Logo from "@icons/logo.svg";
  import LogoMobile from "@icons/Frame.svg";

  import { Lang } from "@sharing/atoms";


  const contextMenu = modalStore({
    query: "(max-width: 768px)",
    element: "body",
  });
  
  let hero:string | null = "noHero"

  const { open, device, toggleModal } = $contextMenu;

  $: links = [
    {
      name: $i18n.t("header:menu.home"),
      url: "/",
    },
    {
      name: $i18n.t("header:menu.about"),
      url: "/about",
    },
    {
      name: $i18n.t("header:menu.services"),
      url: "/OferServices",
    },
    {
      name: $i18n.t("header:menu.clients"),
      url: "/clients",
    },
    {
      name: $i18n.t("Cotizador"),
      url: "/login",
    },
    {
      name: $i18n.t("header:menu.contact"),
      url: "/contact",
    }
  ];

  $: linksCotizador = [
    {
      name: $i18n.t("header:menu.home"),
      url: "/",
    },
    {
      name: $i18n.t("Cotizador"),
      url: "/cotizador",
    },
    {
      name: $i18n.t("Historial"),
      url: "/historial",
    }
  ];

let currentPath = '';

onMount(() => {
  hero = "noHero";
  currentPath = location.pathname;
});

afterUpdate(() => {
    if ($page.route.id == "/contact") {
      hero = "hero";
    } else {
      hero = "noHero";
    }
});

</script>

<header class={styles.header(hero)} >
  <div class={styles.container}>
    <a href="/" class={styles.logo_link}>
      <picture class={styles.logo_wrapper}>
        <source
          media="(max-width: 768px)"
          srcset={Logo}
          class={styles.logo_wrapper}
        />
        <img class={styles.logo} src={Logo} alt={config.brand} />
      </picture>
    </a>
    <nav class={styles.nav}>
      <ul
        class={$device ? styles.menu : styles.list}
        data-open={$open}
        on:click={$device ? toggleModal : undefined}
        on:keypress={() => {}}
      >
      {#if currentPath !== '/cotizador' && currentPath !== '/historial'}
      {#each links as link}
          <li class={styles.item}>
            <a
              class={styles.link}
              class:active={$page.url.pathname === link.url}
              href={link.url}
            >
              {link.name}
            </a>
          </li>
        {/each}
        {:else}
        {#each linksCotizador as link}
        <li class={styles.item}>
          <a
            class={styles.link}
            class:active={$page.url.pathname === link.url}
            href={link.url}
          >
            {link.name}
          </a>
        </li>
      {/each}
      {/if}
    </ul>
      {#if $device}
      <button
      class={styles.burguer}
      type="button"
      on:click={toggleModal}
      data-active={$open}
      >
      <span />
      <span />
      <span />
    </button>
    {/if}
    <Lang />
  </nav>
  </div>
</header>
