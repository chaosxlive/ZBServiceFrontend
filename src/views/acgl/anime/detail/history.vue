<template>
  <div
    class="col-6 d-flex flex-column justify-content-start align-items-center"
  >
    <div class="fs-5 fw-bold">我的紀錄</div>
    <div v-if="is_authenticated">
      <form id="form-user-history" @submit.prevent>
        <input type="hidden" name="csrf-token" :value="csrf_token" />
        <table style="border-collapse: separate; border-spacing: 0 0.3rem">
          <tbody>
            <tr>
              <td style="min-width: 75px">狀態:&nbsp;</td>
              <td>
                <select name="status" id="user-status" class="zb-input-dark">
                  <!-- {% for status_abbr, status_text in progression_status_options %} -->
                  <!-- <option value="{{ status_abbr }}">{{ status_text }}</option> -->
                  <!-- {% endfor %} -->
                </select>
              </td>
            </tr>
            <tr id="user-episode-container">
              <td>集數:&nbsp;</td>
              <td>
                <div id="user-episode-box">
                  <!-- <button id="user-episode-dec">-</button> -->
                  <InputNumber
                    class="d-flex align-item-center"
                    :min="0"
                  ></InputNumber>
                  <!-- <input
                    type="number"
                    name="episode"
                    id="user-episode"
                    min="1"
                    max="{{ anime.episode }}"
                    value="{{ progression.watched_episode }}"
                  /> -->
                  <!-- <button id="user-episode-inc">+</button> -->
                </div>
              </td>
            </tr>
            <tr id="user-times-container">
              <td>次數:&nbsp;</td>
              <td>
                <div id="user-times-box">
                  <button id="user-times-dec">-</button>
                  <!-- <input
                    type="number"
                    name="times"
                    id="user-times"
                    min="0"
                    value="{{ progression.watched_times }}"
                  /> -->
                  <button id="user-times-inc">+</button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <input type="submit" class="btn btn-success" value="更新" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <div v-else>
      <router-link to="" class="text-decoration-none">
        需要登入才能使用
      </router-link>
      <!-- <a
          href="{% url 'login' %}?next={{ request.path }}"
          class="text-decoration-none"
          >需要登入才能使用</a
        > -->
    </div>
  </div>
</template>

<script>
import { BACKEND_API_URL } from "@/zbs-config";
import { InputNumber } from "ant-design-vue";

export default {
  name: "ACGL Anime Detail History",
  components: {
    InputNumber
  },
  data() {
    return {
      csrf_token: "",
      is_authenticated: true
    };
  },
  beforeCreate() {
    this.$http.get(BACKEND_API_URL + "auth/csrf/get/").then(response => {
      this.csrf_token = response.data.csrf_token;
    });
  }
};
</script>