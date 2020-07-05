<template>
        <div id="app">
                <router-view/>
                <ChatBubble/>
        </div>
</template>

<script>
import ChatBubble from './components/shared/ChatBubble.vue';

export default {
    name: 'App',
    components: {
        ChatBubble,
    },
};
</script>

<style lang="sass">
@import './stylesheets/global.sass'

@font-face
        font-family: 'Avenir'
        font-weight: normal
        src: url("./assets/fonts/avenir-lt-std-cufonfonts/AvenirLTStd-Medium.otf") format("opentype")

@font-face
        font-family: 'Avenir'
        font-weight: light
        src: url("./assets/fonts/avenir-lt-std-cufonfonts/AvenirLTStd-Light.otf") format("opentype")

@font-face
        font-family: 'Avenir'
        font-weight: bold
        src: url("./assets/fonts/avenir-lt-std-cufonfonts/AvenirLTStd-Heavy.otf") format("opentype")

@font-face
        font-family: 'DIN'
        src: url("./assets/fonts/d-din/D-DIN-Bold.otf") format("opentype")

html, body
        margin: 0
        padding: 0
        font-family: $body-font
        overflow-x: hidden

.hlp__image-cover
        img
                width: 100%
                height: 100%
                object-fit: cover

.title--center
        font-family: $title-font
        text-align: center
        white-space: pre-line
        font-size: 60px
        font-weight: bold
        margin: 20px 10px

.title--third
        max-width: 700px
        margin: 0 auto

</style>
