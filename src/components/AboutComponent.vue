<template>
  <div class="team-boxed">
    <div class="container">
      <div class="intro">
        <h2 class="text-center">Me!</h2>
        <p class="text-center">I'm from Arkansas, USA!</p>
      </div>
      <div class="row people">
        <div class="col-md-6 col-lg-4 item">
          <div class="box">
            <img class="rounded-circle" src="@/assets/me.png" />
            <h3 class="name">Larson Carter</h3>
            <p class="title">Software Developer</p>
            <p class="description">
              I have a passion for software development. I enjoy writing code and changing the world. I love writing Android apps in Kotlin and Java. I also enjoy writing iOS apps in Swift. Currently I am learning VueJS which is what this website
              is built on.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 item">
          <div class="box">
            <h3 class="name">Connect with me</h3>
            <p class="title">Social media</p>
            <p
              class="description"
            >I try to stay active on a variety of websites. However I do miss a bunch of stuff but I try my best!</p>
            <div>
              Click
              <a href="https://www.linkedin.com/in/larson-carter/">here</a> to go to my LinkedIn.
            </div>
            <div>
              Click
              <a href="https://twitter.com/larsonc_">here</a> to go to my Twitter.
            </div>
            <div>
              Click
              <a href="https://github.com/larson-carter">here</a> to go to my GitHub.
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 item">
          <div class="box">
            <h3 class="name">Hobbies</h3>
            <p class="title">about me</p>
            <p
              class="description"
            >Programming, fishing, hunting, chilling at the lake and hanging out with friens.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.team-boxed {
  color: #0080ff;
  background-color: #eef4f7;
}

.team-boxed p {
  color: #000000;
}

.team-boxed h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}

@media (max-width: 767px) {
  .team-boxed h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.team-boxed .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.team-boxed .intro p {
  margin-bottom: 0;
}

.team-boxed .people {
  padding: 50px 0;
}

.team-boxed .item {
  text-align: center;
}

.team-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: #7D99B3;
  margin-bottom: 30px;
}

.team-boxed .item .name {
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 8px;
  color: inherit;
}

.team-boxed .item .title {
  text-transform: uppercase;
  font-weight: bold;
  color: #000000;
  letter-spacing: 2px;
  font-size: 13px;
}

.team-boxed .item .description {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.team-boxed .item img {
  max-width: 160px;
}

.team-boxed .social {
  font-size: 18px;
  color: #000000;
}

.team-boxed .social a {
  color: inherit;
  margin: 0 10px;
  display: inline-block;
  opacity: 0.7;
}

.team-boxed .social a:hover {
  opacity: 1;
}

h2,
h3 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.h1,
h1 {
  font-size: 2.5rem;
}
.h2,
h2 {
  font-size: 2rem;
}
.h3,
h3 {
  font-size: 1.75rem;
}
.h4,
h4 {
  font-size: 1.5rem;
}
.h5,
h5 {
  font-size: 1.25rem;
}
.h6,
h6 {
  font-size: 1rem;
}
.col-lg-4,
.col-md-6 {
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
@media (min-width: 768px) {
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media (min-width: 992px) {
  .col-lg-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}
.text-center {
  text-align: center !important;
}
</style>