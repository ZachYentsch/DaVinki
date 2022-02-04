<template>
  <form class="row g-3">
    <div class="col-12">
      <label for="inputProjectName" class="form-label">Project Name:</label>
      <input
        required
        type="text"
        class="form-control"
        id="inputProjectName"
        placeholder="Project Name..."
      />
    </div>
    <div class="col-md-8">
      <label for="inputImgSrc" class="form-label">Image Source:</label>
      <input required type="text" class="form-control" id="inputImgSrc" />
    </div>
    <div class="col-md-4">
      <label for="inputDate" class="form-label">Date of Creation</label>
      <input required type="date" class="form-control" id="inputDate" />
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label"
        >Project Description</label
      >
      <input
        required
        type="text"
        class="form-control"
        id="inputDescription"
        placeholder="Description..."
      />
    </div>
    <div class="col-12 mt-5 d-flex justify-content-between">
      <button type="submit" class="btn btn-success">Submit</button>
      <button type="button" class="btn btn-outline-danger">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  }
}
</script>

<style>
</style>