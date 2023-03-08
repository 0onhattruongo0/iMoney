<template>
  <!-- Start: Info -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000"
            class="w-full h-auto object-cover"
            alt="User's Profile Avatar"
            size="xs"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">
          {{ user.email }}
        </p>
      </div>
    </div>
  </div>
  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li
              v-for="(profileOption, index) in profileOptions"
              :key="{ index }"
              class="last:text-red"
            >
              <router-link
                :to="profileOption.route"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
            <!-- <li>
              <router-link
                :to="{ name: 'home', params: {} }"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                  <h5 class="font-semibold ml-3">My Wallet</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'home', params: {} }"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico t2ico-ticket-star text-2xl"></i>
                  <h5 class="font-semibold ml-3">Tools</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'home', params: {} }"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico t2ico-lock text-2xl"></i>
                  <h5 class="font-semibold ml-3">Privacy</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'home', params: {} }"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico t2ico-info-square text-2xl"></i>
                  <h5 class="font-semibold ml-3">About</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
            <li class="text-red">
              <router-link
                :to="{ name: 'logout', params: {} }"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico t2ico-logout text-2xl"></i>
                  <h5 class="font-semibold ml-3">Logout</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTION } from "@/constants/index";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTION);
    const { getUser } = useUser();
    const { user } = getUser();
    return { profileOptions, user };
  },
};
</script>
