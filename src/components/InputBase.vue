<template>
    <div class="input-base"
        :class="{
            'input-base--error': hasError,
            'input-base--focus': hasFocus
        }">
        <input
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            :value="value"
            ref="refValue"
            @input="updateValue"
            :autocomplete="autocomplete ? 'on': 'false'"
            :type="type">

        <div class="label-base"
            :class="{'input-wcontent': hasContent}">{{ label }}</div>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      required: false,
    },
    numeric: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    autocomplete: {
      type: Boolean,
      default: true,
      required: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hasFocus: false,
      localValue: '',
      isFocused: false,
      hasContent: false,
    };
  },
  watch: {
    value(val) {
      this.hasContent = val.length > 0;
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.refValue.value);
    },
  },
  mounted() {
    if (this.value !== '') this.hasContent = true;
    else this.hasContent = false;
  },
};
</script>

<style lang="sass" scoped>
@import "../stylesheets/global.sass"

.input-base
    width: 100%
    height: 60px
    position: relative
    box-sizing: border-box
    border: 1px solid #D6DEEB

.input-base--focus
    border: 2px solid black

input
    border: 0
    +squared(100%)
    padding: 20px 30px 0
    box-sizing: border-box

    &:focus
        outline: 0

        + .label-base
            top: 7px

.label-base
    top: 20px
    left: 30px
    font-size: 15px
    font-weight: bold
    position: absolute
    transition: 0.1s

.input-wcontent
    top: 7px

</style>

<style lang="scss" scoped>

.input-base--error {
    border-color: $color-error;
}

</style>
