<template>
  <div>
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatHappen in whatsHappenningItems"
        :key="whatHappen"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-sm dark:text-white">
            {{ whatHappen.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatHappen.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="whoToFollow in whoToFollowItems"
        :key="whoToFollow"
      >
        <div class="flex flex-row items-center justify-between p-1">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 text-xs font-bold text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>
<script setup>
const whatsHappenningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#CodingIsFun",
    count: "17.8k Tweets",
  },
  {
    title: "ArtsForAll",
    count: "16.8k Tweets",
  },
]);
const whoToFollowItems = ref([
  {
    name: "Aung Aung",
    handle: "@aungaung",
    image:
      "https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
  },
  {
    name: "Kyaw Kyaw",
    handle: "@kyawkyaw",
    image:
      "https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
  },
  {
    name: "Tun Tun",
    handle: "@tuntun",
    image:
      "https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
  },
]);
</script>