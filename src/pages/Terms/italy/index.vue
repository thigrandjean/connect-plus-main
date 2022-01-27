<template>
  <Layout>
    <div class="pages-txt" v-for="item in $page.txt.edges" :key="item.id">
      <div class="pages-banner">
        <h1>{{ item.node.title }}</h1>
      </div>

      <div class="content">
        <div
          class="page-content page-content-terms"
          v-html="item.node.content"
        ></div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query {
  txt: allTexts (filter: { country: {  eq: "italy" }, type: { eq: "terms" } } ){
    edges {
      node {
        title
        locale
        country
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.txt.edges[0].node.title,
      meta: [
        { name: 'description', content: this.$page.txt.edges[0].node.title },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.pages-banner {
  height: 10.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  background-image: url('../../../assets/images/patterns/bg-light-blue.jpg');
  h1 {
    color: white;
    margin: 0;
    text-align: center;
    font-weight: normal;
    z-index: 3;
    font-size: 1.714rem;
  }
  p {
    color: white;
    text-align: justify;
  }
}
.content {
  margin: 0 auto 0 auto;
  color: $main-grey;
  padding: 1rem 2rem 0 2rem;
  h2 {
    color: $headings;
    text-align: center;
  }
  h3 {
    font-weight: normal;
  }

  p {
    text-align: justify;
  }
}

@media (min-width: $bp-mobile) {
  .pages-banner {
    height: 16.785rem;
    h1 {
      font-size: 3.428rem;
    }
  }
  .pages-content-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: $max-w;
    margin: 6rem auto 6rem auto;
  }
  .content {
    max-width: $max-w;
    margin: 3rem auto;
    padding: 0 4rem;
    box-sizing: border-box;
    h2 {
      text-align: left;
      font-size: 2.571rem;
    }
    p {
      text-align: left;
      font-size: 1.5rem;
    }
  }
}
</style>