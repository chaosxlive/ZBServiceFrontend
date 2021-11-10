<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link :to="{ name: 'Home' }" class="navbar-brand">
          <img
            :src="`/img/icons/favicon-96x96.png`"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          ZBService
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link">
                主頁
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                ACGL
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{ name: 'ACGL' }" class="dropdown-item">
                    個人主頁
                  </router-link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <router-link
                    :to="{ name: 'ACGLAnime' }"
                    class="dropdown-item"
                  >
                    動漫列表
                  </router-link>
                </li>
                <div v-if="true">
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'ACGLAnime' }"
                      class="dropdown-item"
                    >
                      新增動漫
                    </router-link>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <div class="ms-auto d-flex gap-2" v-if="!this.$store.state.isAuth">
          <router-link :to="{ name: 'AuthLogin' }" class="btn btn-primary">
            登入
          </router-link>
          <router-link :to="{ name: 'AuthRegister' }" class="btn btn-primary">
            註冊
          </router-link>
        </div>
        <div class="ms-auto d-flex gap-2" v-else>
          <router-link :to="{ name: 'AuthLogout' }" class="btn btn-primary">
            登出
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "ZBSHeader"
};
</script>

<style scoped>
header {
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 0.1rem #888;
}
</style>
