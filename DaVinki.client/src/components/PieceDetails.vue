<template>
  <div class="row">
    <div class="col-md-3">
      <div class="pt-5">
        <p>Artist Name</p>
        <p>Created Date</p>
      </div>
    </div>
    <div class="col-md-9 d-flex justify-content-center pt-3">
      <img
        class="rounded img-fluid details-img"
        src="//placehold.it/500x600"
        alt=""
      />
    </div>
    <!-- Artist piece picture will go here^ -->
  </div>
  <div class="row pt-5">
    <p class="">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
      perferendis tempora atque, debitis illum tenetur ea nobis omnis, sapiente
      vitae laboriosam sequi accusantium! Fugiat illo laudantium corporis omnis
      quos earum. Vitae expedita eaque, asperiores blanditiis a atque ex dolores
      voluptate quidem illo eveniet in molestias omnis rerum sit suscipit,
      accusantium officia? Culpa reprehenderit nam consequatur neque voluptas a
      iusto soluta.
    </p>
  </div>
</template>

<script>
export default {
  // Need to pass some props
}
</script>

<style>
.details-img {
  height: 600px;
  width: 500px;
}
</style>