<template>
  <div class="icon-container">
    <Icon
      v-for="({icon, style, classes }, index) in icons"
      :key="index"
      :name="icon"
      :class="classes"
      :style="style"
    />
  </div>
</template>

<script>
export default {
  data() {
    let y = 5
    const step = 7

    function classes() {
      return Math.random() < 0.5 ? 'floating' : 'floating-inverse'
    }

    function randomPositionStyle() {
      const left = Math.random() < 0.5
      const x = Math.random() * 25
      y += step

      return {
        position: 'absolute',
        top: `${y}%`,
        left: `${left ? x + 5 : x + 70}%`
      }
    }

    return {
      icons: [
        { icon: 'i-simple-icons-mongodb', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-linux', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-postgresql', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-oracle', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-apachekafka', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-mysql', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-apachecassandra', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-sqlite', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-awslambda', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-swagger', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-jsonwebtokens', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-webauthn', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-aws', style: randomPositionStyle(), classes: classes() },
        { icon: 'i-simple-icons-mqtt', style: randomPositionStyle(), classes: classes() },
      ]
    }
  }
}
</script>

<style scoped>
.icon-container {
  width: 100vw;
  height: 100vh;
}

.floating, .floating-inverse {
  width: 50px;
  height: 50px;
  opacity: 0.09;
}

.floating {
  animation: fadeIn 1.5s ease-in-out, float 4s ease-in-out infinite;
}

.floating-inverse {
  animation: fadeIn 1.5s ease-in-out, floatinverse 4s ease-in-out infinite;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 0.09; }
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes floatinverse {
    0% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
}
</style>
