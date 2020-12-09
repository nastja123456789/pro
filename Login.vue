<template>

  <div class="container ">
    <h2 class="login-heading " >Login</h2>
    <form action="#" >
      <div class="form-group row">
        <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
        <div class="col-sm-8">
          <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="e-mail">
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Password</label>
        <div class="col-sm-8">
          <input type="email" class="form-control form-control-lg" id="colFormLabel" placeholder="password">
        </div>
      </div>


        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    dataSuccessMessage: {
      type: String,
    }
  },
  data() {
    return {
      username: '',
      password: '',
      serverError: '',
      successMessage: this.dataSuccessMessage,
      loading: false,
    }
  },
  methods: {

  }
}
</script>


<style>
.login-heading {
  text-align: center;
  padding: 50px;
}
 .form-control {
   text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
   margin-bottom: 14px;
 }

.btn-primary{

  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}.col-sm-4 col-form-label{
   font-size:1px;
 }

</style>