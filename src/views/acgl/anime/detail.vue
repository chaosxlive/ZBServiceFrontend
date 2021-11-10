<template>
  <ZBSLoading v-show="!anime" size="large"></ZBSLoading>
  <template v-if="anime">
    <div class="row d-flex justify-content-center">
      <div class="col-10 mt-3">
        <router-link class="text-decoration-none" :to="{ name: 'ACGLAnime' }">
          <i class="fas fa-angle-left"></i>&nbsp;回到列表
        </router-link>
      </div>
    </div>
    <div class="row d-flex justify-content-center pt-2 my-2">
      <div class="col-3">
        <div class="h-100 d-flex justify-content-end align-items center">
          <img
            :src="anime.cover"
            class="w-100"
            style="box-shadow: 1px 1px 3px #000"
          />
        </div>
      </div>
      <div
        class="
          col-1
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <ZBSDivider :dirX="false" :length="'85%'"></ZBSDivider>
      </div>
      <div class="col-6 my-4 h-auto fs-4 flex-column">
        <div
          id="anime-name"
          class="
            d-flex
            justify-content-center
            align-items-center
            p-2
            fs-2
            fw-bolder
          "
        >
          {{ anime.name }}
        </div>
        <div
          class="
            mb-3
            d-flex
            flex-wrap
            justify-content-center
            align-items-center
            p-2
            border-top border-bottom
          "
        >
          <!-- <a href="{% url 'acgl-anime-list' %}?year={{ anime.year }}&season={{ anime.season.abbr }}" id="anime-time">{{ anime.year }} {{ anime.season.text }}</a>&nbsp; -->
          <router-link to="" class="text-decoration-none"
            >{{ anime.airing_time }} {{ anime.season }}</router-link
          >
          <ZBSDivider
            :dirX="false"
            :length="'1.5rem'"
            :borderSize="'2px'"
            class="mx-2"
          ></ZBSDivider>
          <div>{{ anime.format_type }}</div>
          &nbsp;
          <div>{{ anime.episode }} 集</div>
          &nbsp;
          <div>{{ anime.status }}</div>
          <template v-if="anime && anime.studio && anime.studio.length">
            <ZBSDivider
              :dirX="false"
              :length="'1.5rem'"
              :borderSize="'2px'"
              class="mx-2"
            ></ZBSDivider>
            <div class="anime-studios">
              <router-link
                to=""
                class="text-decoration-none"
                v-for="studio in anime.studio"
                :key="studio.uuid"
              >
                {{ studio.name }}
              </router-link>
              <!-- {% for studio in anime.studios %}
            <a href="{% url 'acgl-anime-list' %}?studio={{ studio.uuid }}" class="anime-studio">{{ studio.name }}</a>&nbsp;
            {% endfor %} -->
            </div>
          </template>
        </div>
        <div class="row justify-content-center">
          <HistoryBlock></HistoryBlock>
          <div class="col-5">
            <table class="anime-stats">
              <tbody>
                <tr>
                  <td colspan="3" class="fs-5 fw-bold">統計資料</td>
                </tr>
                <!-- <tr
                  :class="'anime-stats-' + abbr"
                  v-for="[abbr, text, count] in progression.status"
                  :key="abbr"
                >
                  <td>
                    <div class="anime-stats-symbol"></div>
                  </td>
                  <td>
                    <div class="anime-stats-count">
                      {{ count }}
                    </div>
                  </td>
                  <td>
                    <div class="anime-stats-text">
                      {{ text }}
                    </div>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row d-flex justify-content-center pt-2 my-2"
      v-if="anime && anime.tag && anime.genre.length"
    >
      <div class="col-10 d-flex align-items-center">
        <div>分類：</div>
        <ACGLPill :items="anime.genre"></ACGLPill>
      </div>
    </div>
    <div
      class="row d-flex justify-content-center pt-2 my-2"
      v-if="anime && anime.tag && anime.tag.length"
    >
      <div class="col-10 d-flex align-items-center">
        <div>標籤：</div>
        <ACGLPill :items="anime.tag"></ACGLPill>
      </div>
    </div>
    <div class="row d-flex justify-content-center pt-2 my-2">
      <div class="col-10">
        <Tabs v-model:activeKey="tabController.animeDetail.key">
          <TabPane key="outline" tab="作品大綱"> </TabPane>
          <TabPane key="staff" tab="參與人員"> </TabPane>
          <TabPane key="related" tab="相關資料"> </TabPane>
          <TabPane key="stat" tab="統計數據"> </TabPane>
          <TabPane key="comment" tab="作品評論"> </TabPane>
        </Tabs>
      </div>
    </div>
  </template>
</template>

<script>
import { BACKEND_URL } from "@/zbs-config";
import ZBSDivider from "@/components/ZBSDivider.vue";
import ZBSLoading from "@/components/ZBSLoading.vue";
import ACGLPill from "@/components/ACGL/ACGLPill.vue";
import HistoryBlock from "./detail/history.vue";
import { Tabs, TabPane } from "ant-design-vue";

export default {
  name: "ACGL Anime Detail",
  components: {
    ZBSDivider,
    ZBSLoading,
    ACGLPill,
    HistoryBlock,
    Tabs,
    TabPane
  },
  data() {
    return {
      tabController: {
        animeDetail: {
          key: "outline"
        }
      },
      anime: null,
      progression: {
        status: []
      }
    };
  },
  beforeCreate() {
    this.$http
      .get(BACKEND_URL.APIS.ACGLS.ANIME + this.$route.params.uuid + '/')
      .then(response => {
        this.anime = response.data;
        // this.progression.status = response.data.progression_status;

        document.title = document.title.replace(
          "{NAMELOADING}",
          this.anime.name
        );
      });
  }
};
</script>

<style scoped>
.anime-stats {
  font-size: 1rem;
}

.anime-stats .anime-stats-count {
  margin: 0.2rem 0.5rem;
}

.anime-stats .anime-stats-symbol {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

.anime-stats .anime-stats-text {
  white-space: nowrap;
}

.anime-stats .anime-stats-D .anime-stats-symbol {
  background-color: #ff0000;
}

.anime-stats .anime-stats-C .anime-stats-symbol {
  background-color: #006be6;
}

.anime-stats .anime-stats-W .anime-stats-symbol {
  background-color: #00c500;
}

.anime-stats .anime-stats-P .anime-stats-symbol {
  background-color: #e6d600;
}

.anime-stats .anime-stats-S .anime-stats-symbol {
  background-color: #ef6aed;
}
</style>