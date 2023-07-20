<template>
  <div>
    <MainSection title="Home" :loading="false">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>
    </MainSection>
  </div>
</template>
<script setup>
const { useAuthUser } = useAuth();
const { twitterBorderColor } = useTailwindConfig();
const user = useAuthUser();
</script>