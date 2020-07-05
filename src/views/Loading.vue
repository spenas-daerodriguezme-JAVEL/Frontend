<template>
  <transition name="trfade">
    <div class="loading">
      <div class="preloader">
        <div v-for="n in 10" :key="n"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  @extend %screenSize;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10999;
  background: rgba(black, 0.3);
}

$count: 10;
$time: 2; //in seconds
$size: 100;
$color: white;

.preloader {
  /* size */
  width: $size + px;
  height: $size + px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: rotatePreloader $time + s infinite ease-in;
}
@keyframes rotatePreloader {
  0% {
    transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotateZ(-360deg);
  }
}
.preloader div {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.preloader div:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0%;
  width: 10%;
  height: 10%;
  background-color: $color;
  transform: translateX(-50%);
  border-radius: 50%;
}

@for $i from 1 through $count {
  .preloader div:nth-child(#{$i}) {
    transform: rotateZ(((360 / $count) * ($i - 1)) + deg);
    animation: rotateCircle + $i $time + s infinite linear;
    z-index: $count - $i;
  }
  @keyframes rotateCircle#{$i} {
    #{percentage(((50 / $count) * ($i - 1)) / 100)} {
      opacity: 0;
    }
    #{percentage((((50 / $count) + 0.0001) * ($i - 1)) / 100)} {
      opacity: 1;
      transform: rotateZ((0 - ((360 / $count) * ($i - 2))) + deg);
    }
    #{percentage((((50 / $count) * ($i - 0)) + 2) / 100)} {
      transform: rotateZ((0 - ((360 / $count) * ($i - 1))) + deg);
    }
    #{percentage(((50 + ((50 / $count) * ($i - 0))) + 2) / 100)} {
      transform: rotateZ((0 - ((360 / $count) * ($i - 1))) + deg);
    }
    100% {
      transform: rotateZ((0 - ((360 / $count) * ($count - 1))) + deg);
      opacity: 1;
    }
  }
}
</style>
