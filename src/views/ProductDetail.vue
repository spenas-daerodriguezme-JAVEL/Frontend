<template>
  <div class="product_detail">
    <div class="product__main">
      <div class="image__container">
        <img src="../assets/productos/QUITAOXIDO.jpg" alt="" class="image__holder">

        <div class="btn-buy">
          <div class="btn-buy__item btn-buy--left">123</div>
          <div class="btn-buy__item btn-buy--right">Buy</div>
        </div>
      </div>

      <div class="text__container">
        <div class="product__title">Quita manchas</div>
        <div class="product__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum, corporis, a quod dolores architecto autem maiores ducimus fugiat nam in veritatis recusandae ut temporibus repudiandae suscipit aspernatur, cupiditate minima eum. Aspernatur, accusantium laborum. Accusamus, tempore perferendis minus recusandae sapiente ex optio beatae dolorem, dolor vel fugit omnis eligendi quibusdam.
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
  data() {
    return {
      product_id: null
    }
  },
  mounted() {
    
  },
  beforeMount() {
    this.product_id = this.$route.params.id;
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/_mixins.sass'

.product__title
  @extend %title
  font-size: 60px

.product__description
  margin: 30px 0
  margin-bottom: 60px
  max-width: 370px

.product__main
  display: flex
  flex-flow: row wrap

.image__container
  height: 90vh
  flex: 1 0 500px
  position: relative

.text__container
  +flex(1, 0)
  flex: 1 0 300px
  padding: 40px
  box-sizing: border-box
  flex-flow: column

img.image__holder
    @extend %image-cover

// Main button
.btn-buy
  display: flex
  width: 230px
  height: 60px
  position: absolute
  right: 0
  bottom: 20%
  transform: translateX(50%)
  cursor: pointer

  &:hover
    > .btn-buy--left
      color: white
      border-color: white
      
      &:after
        top: 0
        left: 0px

    > .btn-buy--right
      color: black
      border-color: black

      &:after
        top: 0
        right: 0

.btn-buy__item
  +flex(1, 1)
  flex: 1 0
  font-weight: bolder
  border: 1px solid transparent
  position: relative
  overflow: hidden

  &:before, &:after
    content: ''
    position: absolute
    +squared(calc(100%))
    z-index: -1
    transition: 0.25s ease-in

  &:before
    top: 1px
    left: 1px

.btn-buy--left
  color: black
  border-color: black
  border-right-width: 0 

  &:before
    background: white

  &:after
    left: 100%
    background: black

.btn-buy--right
  color: white
  border-color: white
  border-left-width: 0

  &:before 
    background: black
  
  &:after
    right: 100%
    background: white

@media (max-width: 816px)
  .btn-buy
    left: 50%
    bottom: -10px
    transform: translate(-50%, 100%)

  .product__title
    margin-top: 100px

</style>