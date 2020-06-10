<template>
<body>
  <div class="projects-horizontal">
    <div class="container">
      <div class="intro"></div>
      <div class="row projects">
        <div class="col-sm-6 item">
          <div class="row">
            <div class="col-md-12 col-lg-5">
              <a href="#">
                <img class="img-fluid" src="../assets/ohmyzsh.png" />
              </a>
            </div>
            <div class="col">
              <h3 class="name">Oh My Zsh</h3>
              <p
                class="description"
              >I am the official software maintainer for Oh My Zsh, I am active in the community and codebase.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 item">
          <div class="row">
            <div class="col-md-12 col-lg-5">
              <a href="#">
                <img class="img-fluid" src="../assets/node_fetch.png" />
              </a>
            </div>
            <div class="col">
              <h3 class="name">Node Fetch</h3>
              <p
                class="description"
              >I am on the code review team for Node Fetch, in which I do a lot of GitHub issue responses and Pull Request Reviews.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 item">
          <div class="row">
            <div class="col-md-12 col-lg-5">
              <a href="#">
                <img class="img-fluid" src="../assets/ncmpcpp.png" />
              </a>
            </div>
            <div class="col">
              <h3 class="name">ncmpcpp</h3>
              <p
                class="description"
              >I'm the official maintainer of NCMPCPP, I do a lot of tech support and code review, while also implementing new features.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 item">
          <div class="row">
            <div class="col-md-12 col-lg-5">
              <a href="#">
                <img class="img-fluid" src="../assets/mlh.png" />
              </a>
            </div>
            <div class="col">
              <h3 class="name">MLH-FELLOWSHIP</h3>
              <p
                class="description"
              >I participated in this fellowship, I contributed to open source most of the time while also interacting with other fellows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<style>
*,
::after,
::before {
  box-sizing: border-box;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container{
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container{
    max-width: 1140px;
  }
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col,
.col-lg-5,
.col-sm-6,
.col-md-12 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
}
@media (min-width: 576px) {
  .col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media (min-width: 768px) {
  .col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .col-lg-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
}
.projects-horizontal .item {
  padding-top: 60px;
  min-height: 160px;
}
</style>