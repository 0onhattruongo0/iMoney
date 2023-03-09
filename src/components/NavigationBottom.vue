<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center" v-if="navItems">
        <li v-for="(navItem, index) in navItems" :key="{ index }">
          <router-link :to="{ name: navItem.name, params: {} }"
            ><i class="t2ico text-2xl" :class="navItem.icon"></i
          ></router-link>
        </li>
      </ul>
    </div>
    <div data-circle @click="goRoute">
      <div class="t2ico t2ico-plus"></div>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const navItems = reactive([
      {
        icon: "t2ico-category",
        text: "Home",
        name: "home",
      },
      {
        icon: "t2ico-chart",
        text: "Report",
        name: "report",
      },
      {
        icon: "t2ico-presentation",
        text: "Budget",
        name: "budget",
      },
      {
        icon: "t2ico-profile",
        text: "Profile",
        name: "profile",
      },
    ]);
    const router = useRouter();
    function goRoute() {
      return router.push({ name: "transaction", params: {} });
    }

    return { navItems, goRoute };
  },
};
</script>

<style scoped>
footer#footer > div[data-circle] {
  cursor: pointer;
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 251 / var(--tw-bg-opacity));
  position: absolute;
  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
footer#footer > div[data-circle] > div {
  --tw-bg-opacity: 1;
  background-color: rgb(0 18 255 / var(--tw-bg-opacity));
  position: absolute;
  font-family: "t2ico";
  font-size: 30px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
