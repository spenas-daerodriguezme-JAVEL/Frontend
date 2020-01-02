<template>
  <div class="price-slider">
    <span>
      from
      <input
        @input="setRange"
        v-model.number="minValue"
        type="number"
        min="0"
        :max="MAX_VALUE"
      />
      to
      <input
        @input="setRange"
        v-model.number="maxValue"
        type="number"
        min="0"
        :max="MAX_VALUE"
      />
    </span>
    <input
      @input="setInput"
      v-model.number="inputMinValue"
      :max="MAX_VALUE"
      :step="STEP"
      min="0"
      type="range"
    />
    <input
      @input="setInput"
      v-model.number="inputMaxValue"
      :max="MAX_VALUE"
      :step="STEP"
      min="0"
      type="range"
    />
  </div>
</template>

<script>
const MAX_VALUE = 300000;

export default {
  data() {
    return {
      minValue: 0,
      maxValue: MAX_VALUE,
      inputMinValue: 0,
      inputMaxValue: MAX_VALUE,

      MAX_VALUE: MAX_VALUE,
      STEP: 1000
    };
  },
  mounted() {},
  methods: {
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
}
.price-slider {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 6em;
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
  font-size: 1.6em;
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
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #1da1f2;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #1da1f2;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #1da1f2;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: #1da1f2;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1da1f2;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
</style>
