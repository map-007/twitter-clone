<template>
  <div>
    <MainSection title="Home" :loading="false">
      {{ user }}
    </MainSection>
  </div>
</template>
<script setup>

const { useAuthUser } = useAuth()
const user = useAuthUser()
</script>