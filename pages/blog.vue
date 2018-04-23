<template>
  <v-container>
    <coming-soon></coming-soon>
    <v-layout row justify-center>
      <v-flex column xs12 sm12 md9 lg9>
        <v-flex xs12 md12 lg12 class="content-card" v-for="(article, index) in 4" :key="index">
          <h1>Simple user login in vuejs</h1>
          <div class="content-meta">
            <ul>
              <li>
                <v-icon>date_range</v-icon>
                April 16, 2018
              </li>
              <li>
                <v-icon>account_box</v-icon>
                Brian Koech
              </li>
            </ul>
            <div class="content-intro">
              <p v-for="p in 2">
              Sometimes the best examples towards learning a new framework is through a simple user login sample. Login involves many concepts, including forms, data binding, routing, and potentially HTTP to a remote service, all of which are core concepts in any web application.
              </p>
            </div>
            <a href="#" class="read-more">Read More</a>
          </div>
        </v-flex>
      </v-flex>
      <v-flex column sm0 md3 lg3>
        <div column class="widget">
          <h3>Search</h3>
          <div class="widget-content">
            <input type="text">
            <v-icon>search</v-icon>
          </div>
        </div>
        <div column class="widget">
          <h3>Follow Me</h3>
          <social-media></social-media>
        </div>

        <div column class="widget">
          <h3>Recent posts</h3>
          <div class="widget-content">
            <ul>
              <li v-for="post in 5">
                <a href="#">Access And Change Parent Variables From A Child Component With Vue.js</a>
              </li>
            </ul>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.content-card {
  h1 {
    margin-bottom: 20px;
    font-weight: 700;
  }

  .content-meta {
    ul {
      margin-bottom: 20px;

      li {
        display: inline-block;
        list-style-type: none;
        padding-right: 15px;
        font-size: 1em;
      }
    }
  }

  .content-intro {
    p {
      font-size: 1.21em;
      line-height: 1.6em;
    }
  }

  .read-more {
    color: #ffffff;
    background-color: #cc4444;
    border: 1px solid #B90B00;
    text-decoration: none;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
  }
}

.widget {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #E8E8E8;

  h3 {
    text-transform: uppercase;
  }

  .widget-content {
    display: flex;
    flex-direction: row;

    input {
      border: 1px solid grey;
      height: 34px;
      background-color: #fff;
    }

    i {
      border: 1px solid;
      color: #fff;
      background: #337ab7;
      border-color: #2e6da4;
      width: 34px;
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        border-bottom: 1px solid #CCCCCC;
        padding-bottom: 10px;
        list-style-type: none;
        font-size: 1.1em;

        &:not(:first-child) {
          padding-top: 10px;
        }

        a {
          color: #3A3A3A;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

<script>
import SocialMedia from '@/components/SocialMedia'
import ComingSoon from '@/components/ComingSoon'

export default {
  name: 'blog',
  components: {
    SocialMedia,
    ComingSoon
  }
}
</script>
