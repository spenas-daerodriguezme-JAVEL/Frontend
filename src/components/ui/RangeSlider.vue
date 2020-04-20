<template>
  <div class="price-slider">
    <input
      ref="left"
      @input="setInput"
      v-model.number="inputMinValue"
      :max="MAX_VALUE"
      :step="STEP"
      min="0"
      type="range"
    />
    <input
      ref="right"
      @input="setInput"
      v-model.number="inputMaxValue"
      :max="MAX_VALUE"
      :step="STEP"
      min="0"
      type="range"
    />
    <div ref="sleft" class="slider-floating">{{ animatedMinValue | money }}</div>
    <div ref="sright" class="slider-floating">{{ animatedMaxValue | money }}</div>
  </div>
</template>

<script>
const MAX_VALUE = 300000;
import { TweenLite } from 'gsap/all';

export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      minValue: 0,
      maxValue: MAX_VALUE,
      inputMinValue: 0,
      inputMaxValue: MAX_VALUE,
      tweenMinValue: 0,
      tweenMaxValue: MAX_VALUE,
      sleft: null,
      sright: null,

      MAX_VALUE: MAX_VALUE,
      STEP: 1000
    };
  },
  computed: {
    animatedMinValue() {
      return this.tweenMinValue.toFixed(0);
    },
    animatedMaxValue() {
      return this.tweenMaxValue.toFixed(0);
    },
  },
  watch: {
    inputMinValue: {
      handler(value) {
        TweenLite.to(this.$data, 0.4, { tweenMinValue: value });
        this.setSlidersPositions();
        this.$emit('change', {
          minValue: this.inputMinValue,
          maxValue: this.inputMaxValue,
        });
      },
      inmediate: true,
    },
    inputMaxValue: {
      handler(value) {
        TweenLite.to(this.$data, 0.4, { tweenMaxValue: value });
        this.setSlidersPositions();
        this.$emit('change', {
          minValue: this.inputMinValue,
          maxValue: this.inputMaxValue,
        });
      },
      inmediate: true,
    },
  },
  mounted() {
    const left = this.$refs.left;
    const right = this.$refs.right;

    const { sleft, sright } = this.$refs;
    this.sleft = sleft;
    this.sright = sright;

    this.setSlidersPositions();
  },
  methods: {
    setSlidersPositions() {
      this.sleft.style.left = `${this.inputMinValue * 100 / MAX_VALUE}%`;
      this.sright.style.left = `${this.inputMaxValue * 100 / MAX_VALUE}%`;
    },
    setRange(value) {
      if (this.minValue > this.maxValue) {
        [this.minValue, this.maxValue] = [this.maxValue, this.minValue];
      }

      this.inputMinValue = this.minValue;
      this.inputMaxValue = this.maxValue;
    },
    setInput() {
      if (this.inputMinValue > this.inputMaxValue) {
        [this.inputMinValue, this.inputMaxValue] = [
          this.inputMaxValue,
          this.inputMinValue
        ];
      }

      this.minValue = this.inputMinValue;
      this.maxValue = this.inputMaxValue;
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  box-shadow: 0;
  outline: 0;
  position: relative;

  border: 1px solid rgba(black, .3);
}
.price-slider {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 70px;
}
.price-slider svg,
.price-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="number"] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1em;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 2px solid #e60023;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}

$slideColor: black;

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  background: transparent;
  cursor: pointer;
  border-radius: 1px;
  border-color: transparent;
  box-shadow: none;
  border: 0;
}

// * Thumb
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: -2px;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid $slideColor;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
  transition: .3s;
  background: white;

  &:hover {
    background: black;
  }
}

.range {
  display: flex;
  justify-content: space-around;

  input {
    font-size: 18px;

    &:first-child {
      margin-right: 10px;
    }
  }
}

.floating-price {
  position: absolute;
  font-weight: bolder;
}

.slider-floating {
  font-size: 15px;
  font-weight: bolder;
  position: absolute;
  left: 0;
  top: 20px;
  transform: translateX(-50%);

  &:first-of-type {
    top: calc(100% + 20px);
  }
}

</style>
