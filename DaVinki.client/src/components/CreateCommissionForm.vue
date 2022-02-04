<template>
  <form class="row g-3">
    <div class="col-12">
      <label for="inputEventName" class="form-label">Event Name</label>
      <input
        type="text"
        class="form-control"
        id="inputEventName"
        required="true"
      />
    </div>
    <div class="col-12">
      <label for="inputEventDescription" class="form-label">Description</label>
      <textarea
        name="eventDescription"
        rows="5"
        type="text"
        class="form-control"
        id="inputEventDescription"
        required="true"
      ></textarea>
    </div>
    <div class="col-12">
      <label for="inputEventImage" class="form-label">Event Image</label>
      <input
        type="url"
        class="form-control"
        id="inputEventImage"
        placeholder="Image Url..."
        required="true"
      />
    </div>
    <div class="col-12">
      <label for="inputEventLocation" class="form-label">Event Location</label>
      <input
        type="text"
        class="form-control"
        id="inputEventLocation"
        placeholder="Location"
        required="true"
      />
    </div>
    <div class="col-md-6">
      <label for="inputEventDate" class="form-label">Start Date</label>
      <input
        type="date"
        class="form-control"
        id="inputEventDate"
        required="true"
      />
    </div>
    <div class="col-md-4">
      <label for="inputEventType" class="form-label">Event Type</label>
      <select id="inputEventType" class="form-select" required="true">
        <option selected>Type...</option>
        <option>Concert</option>
        <option>Sport</option>
        <option>Convention</option>
        <option>Digital</option>
        <option>Expos</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="inputEventCapacity" class="form-label">Capacity</label>
      <input
        type="number"
        class="form-control"
        id="inputEventCapacity"
        required="true"
      />
    </div>
    <div class="modal-footer">
      <button class="btn btn-dark" data-bs-dismiss="modal" aria-label="close">
        Close
      </button>
      <button type="submit" class="btn btn-dark" aria-label="save">Save</button>
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