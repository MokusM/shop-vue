<template>
  <div id="app">
    <header class="title">
      <router-link to="/">Logo Magazine</router-link>
      <router-link to="/checkout">Cart ({{ $store.state.cartCount }})</router-link>
	</header>
	<main class="content">
		<router-view></router-view>
	</main>
    
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      inCart() {
        return this.$store.getters.inCart;
      },
    }
  }

</script>

<style>
  .title {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 25px;
    position: relative;
    z-index: 20;
    background-color: #fff;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2)
  }
  .content{
	  padding: 0 40px;
	  background: #F7F8FB;
  }

  body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    line-height: 1;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  /*MAIN*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main {
    display: block;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-width: 0px;
    padding: 0px;
    margin: 0px;
  }

  html {
    height: 100%;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }

  input,
  textarea {
    color: #333;
    outline: none;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    -webkit-appearance: none;
  }

  input[type="button"],
  input[type="submit"],
  button {
    cursor: pointer
  }

  td {
    margin: 0px;
    padding: 0px;
  }

  form {
    padding: 0px;
    margin: 0px;
  }

  a {

    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    /*&:hover{
        color: #2b70b5;
    }
    &:active{
        color: #005bb5;
    }*/
  }

  @media screen and (min-width: 1025px) {
    a:hover {
      color: #2b70b5;
    }

    a:active {
      color: #005bb5;
    }
  }

  a,
  span,
  div,
  button {
    outline: none !important
  }

  input[type=submit],
  input[type=button],
  button {
    -webkit-appearance: none;
    outline: none;

  }

  button {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    background: none;
    border: none;
    vertical-align: top;
    display: block;
  }


  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .clearfix:after,
  .wrapper:after,
  .row:after,
  .head-news:after,
  .box-inf:after,
  .subnav-head:after,
  .same-list__inf-cont:after,
  .holiday-present-list__bottom-inf:after,
  .card-buttons:after,
  .name-male:after,
  .info-news:after,
  .box-after-years__cont:after,
  .box-inf-list:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

</style>
